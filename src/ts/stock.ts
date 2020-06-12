import https from 'https';
import axios from 'axios';
import iconv from 'iconv-lite';
import urlencode from 'urlencode';
import { parse } from 'node-html-parser';
import { ItemInfo } from './types';

export default class Stock {
    private static readonly DEFAULT_URL = 'https://finance.naver.com';

    public constructor() {

    }

    public async search(query: string): Promise<Array<ItemInfo>> {
        let searchUrl = Stock.DEFAULT_URL + '/search/searchList.nhn?query=' + urlencode(query, 'euc-kr');
        
        let buffer = await axios.request({
            url: searchUrl,
            method: 'GET',
            responseType: 'arraybuffer'
        });
        let content = iconv.decode(buffer.data, 'euc-kr').toString();
        
        let document = parse(content);

        let section = document.querySelector('.section_search');

        if (section) {
            let itemInfoList = new Array<ItemInfo>();

            let list = section.querySelectorAll('tbody tr');

            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                let tdList = item.querySelectorAll('td');
                
                let name = tdList[0].querySelector('a').text.trim();
                let href = tdList[0].querySelector('a').getAttribute('href');
                let code = href.substring(href.lastIndexOf('=') + 1, href.length);
                let currentPrice = parseInt(tdList[1].text.trim().replace(/,/g, ''));
                let deltaPrice = parseInt(tdList[2].text.trim().replace(/,/g, ''));
                if (tdList[2].classNames.indexOf('down')) {
                    deltaPrice *= -1;
                }
                let adr = tdList[3].text.trim();

                let info: ItemInfo = {
                    name: name,
                    code: code,
                    currentPrice: currentPrice,
                    deltaPrice: deltaPrice,
                    adr: adr
                };
                itemInfoList.push(info);
            }

            return itemInfoList;
        } else {
            console.log('Cannot found items.');
            return null;
        }
    }

    /**
     * 호출 전 code가 6자리 숫자여부 판별 필요.
     * @param code 
     */
    public async getItemInfo(code: string): Promise<ItemInfo> {
        let url = Stock.DEFAULT_URL + '/item/main.nhn?code=' + code;
        
        let buffer = await axios.request({
            url: url,
            method: 'GET',
            responseType: 'arraybuffer'
        });
        let content = iconv.decode(buffer.data, 'euc-kr').toString();
        
        let document = parse(content);

        if (document.querySelector('.error_content')) {
            return null;
        } else {
            let tmp = document.querySelectorAll('.no_exday em');

            let name = document.querySelector('.wrap_company ').text.trim();
            let currentPrice = parseInt(document.querySelector('.no_today .blind').text.trim().replace(/,/g, ''));
            let deltaPrice = parseInt(tmp[0].querySelector('.blind').text.trim().replace(/,/g, ''));
            if (tmp[0].querySelector('.down')) {
                deltaPrice *= -1;
            }

            let adr = tmp[1].querySelector('.blind').text.trim();
            if (tmp[1].querySelector('.minus')) {
                adr = '-' + adr;
            }

            return {
                name: name,
                code: code,
                currentPrice: currentPrice,
                deltaPrice: deltaPrice,
                adr: adr
            }
        }
    }
}