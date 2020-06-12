/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: TOKEN, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TOKEN\":\"NzE5Nzk3MzUyMTE3OTYwNzM0.Xt9Ifg.R10gPwV7nG1noorYx_XLIDR3SqY\"}");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(__webpack_require__(/*! discord.js */ "discord.js"));
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var commander_1 = __webpack_require__(/*! commander */ "commander");
var stock_1 = __importDefault(__webpack_require__(/*! ./stock */ "./src/ts/stock.ts"));
var types_1 = __webpack_require__(/*! ./types */ "./src/ts/types.ts");
var config_json_1 = __importDefault(__webpack_require__(/*! ../config.json */ "./src/config.json"));
var CWD = process.env['INIT_CWD'] ? process.env['INIT_CWD'] : path_1.default.dirname(process.argv[0]);
var GUILD_INFO_PATH = CWD + '\\data\\info.json';
var StockBot = /** @class */ (function () {
    function StockBot() {
        this.prepared = false;
        this.client = new discord_js_1.default.Client();
        this.client.on('ready', this.onReady.bind(this));
        this.client.on('message', this.onMessage.bind(this));
        this.stock = new stock_1.default();
        this.guildInfoList = new Array();
    }
    StockBot.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.login(config_json_1.default.TOKEN)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.onReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var guildList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.user.setActivity('preparing...', {
                            type: 'CUSTOM_STATUS'
                        })];
                    case 1:
                        _a.sent();
                        this.loadGuildInfoList();
                        guildList = this.client.guilds.cache.array();
                        guildList.forEach(function (guild) {
                            var guildInfo = _this.getGuildInfo(guild.id);
                            if (guildInfo) {
                                var memberList = guild.members.cache.array();
                                memberList.forEach(function (member) {
                                    if (!guildInfo.getMemberInfo(member.id)) {
                                        guildInfo.memberInfoList.push(new types_1.MemberInfo(member.id));
                                    }
                                });
                            }
                            else {
                                var guildInfo_1 = new types_1.GuildInfo(guild.id);
                                var memberList = guild.members.cache.array();
                                memberList.forEach(function (member) {
                                    guildInfo_1.memberInfoList.push(new types_1.MemberInfo(member.id));
                                });
                                _this.guildInfoList.push(guildInfo_1);
                            }
                        });
                        return [4 /*yield*/, this.client.user.setActivity('for help \'/stock -h\'', {
                                type: 'CUSTOM_STATUS'
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.onMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var argv, program, command_1, options, count, count, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (message.author.bot) {
                            return [2 /*return*/];
                        }
                        if (!message.content.startsWith('/stock')) return [3 /*break*/, 13];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        argv = [''].concat(message.content.split(' '));
                        program = new commander_1.Command();
                        program.option('-h', '')
                            .option('--search <query>', '')
                            .option('-b, --buy <count>', '')
                            .option('-s, --sell <count>', '')
                            .option('-c, --code <code>', '')
                            .option('--show', '');
                        program.exitOverride();
                        command_1 = program.parse(argv);
                        options = command_1.opts();
                        console.log(options);
                        if (!options.H) return [3 /*break*/, 2];
                        message.channel.send('검색 ``/stock --search ``__``query``__\n' +
                            '> 해당 query 검색, 검색 결과의 code 및 가격을 알려줌\n' +
                            '\n' +
                            '매수 ``/stock -b ``__``count``__`` -c ``__``code``__\n' +
                            '> 해당 code 에 해당하는 회사의 주식을 count만큼 구매\n' +
                            '\n' +
                            '매도 ``/stock -s ``__``count``__`` -c ``__``code``__\n' +
                            '> 해당 code 에 해당하는 회사의 주식을 count만큼 판매\n' +
                            '\n' +
                            '내 로그 보기 ``/stock --show\n' +
                            '> 내 정보를 보여줌\n' +
                            '\n' +
                            '왼쪽의 옵션을 오른쪽 구분으로 대체 가능\n' +
                            '``-b`` ``--buy``\n' +
                            '``-s`` ``--sell``\n' +
                            '``-c`` ``--code``\n' +
                            'ex)\n' +
                            '매수 ``/stock --buy ``__``count``__`` --code ``__``code``__\n');
                        return [3 /*break*/, 11];
                    case 2:
                        if (!options.search) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.search(message, options.search)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!(options.buy || options.sell)) return [3 /*break*/, 9];
                        if (!options.code) {
                            throw new Error('The code is missing.');
                        }
                        if (!/^\d{6}$/.test(options.code)) {
                            throw new Error('The code is not valid.');
                        }
                        if (!options.buy) return [3 /*break*/, 6];
                        count = Number(options.buy);
                        if (isNaN(count)) {
                            throw new Error("'" + options.buy + "' is not a number.");
                        }
                        return [4 /*yield*/, this.buy(message, options.code, count)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!options.sell) return [3 /*break*/, 8];
                        count = Number(options.sell);
                        if (isNaN(count)) {
                            throw new Error("'" + options.sell + "' is not a number.");
                        }
                        return [4 /*yield*/, this.sell(message, options.code, count)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        this.saveGuildInfoList();
                        _a.label = 9;
                    case 9:
                        if (!options.show) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.show(message)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_1 = _a.sent();
                        if (e_1 instanceof commander_1.CommanderError) {
                            message.channel.send("``" + e_1.message + "``");
                        }
                        else {
                            message.channel.send("``" + e_1.message + "``");
                        }
                        console.error(e_1);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.search = function (message, query) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, itemInfoList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, message.channel.send('검색중...')];
                    case 1:
                        msg = _a.sent();
                        return [4 /*yield*/, this.stock.search(query)];
                    case 2:
                        itemInfoList = _a.sent();
                        if (itemInfoList) {
                            msg.edit(itemInfoList.map(function (info) {
                                return "``" + info.name + "`` code: ``" + info.code + "`` \uD604\uC7AC\uAC00: ``" + info.currentPrice + "`` \uB4F1\uB77D\uC728: ``" + info.adr + "``";
                            }).join('\n'));
                        }
                        else {
                            msg.edit("``" + query + "`` \uAC80\uC0C9\uACB0\uACFC \uC5C6\uC74C.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.buy = function (message, code, count) {
        return __awaiter(this, void 0, void 0, function () {
            var itemInfo, memebrInfo, dealInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stock.getItemInfo(code)];
                    case 1:
                        itemInfo = _a.sent();
                        if (itemInfo === null) {
                            message.channel.send("``" + code + "``\uC5D0 \uD574\uB2F9\uD558\uB294 \uD68C\uC0AC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
                            return [2 /*return*/];
                        }
                        memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
                        dealInfo = {
                            date: new Date().toLocaleString(),
                            type: types_1.DealType.Buy,
                            count: count,
                            itemInfo: itemInfo
                        };
                        memebrInfo.dealInfoList.push(dealInfo);
                        message.channel.send("``" + message.member.nickname + "`` \uB2D8\uC774 ``" + itemInfo.name + "``\uC758 \uC8FC\uC2DD ``" + count + "``\uAC1C, \uCD1D ``" + count * itemInfo.currentPrice + "``\uC6D0 \uAD6C\uB9E4\uD588\uC2B5\uB2C8\uB2E4.");
                        return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.sell = function (message, code, count) {
        return __awaiter(this, void 0, void 0, function () {
            var itemInfo, memebrInfo, posessionCount, dealInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stock.getItemInfo(code)];
                    case 1:
                        itemInfo = _a.sent();
                        if (itemInfo === null) {
                            message.channel.send("``" + code + "``\uC5D0 \uD574\uB2F9\uD558\uB294 \uD68C\uC0AC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
                            return [2 /*return*/];
                        }
                        memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
                        posessionCount = 0;
                        memebrInfo.dealInfoList.forEach(function (dealInfo) {
                            if (dealInfo.itemInfo.code == code) {
                                if (dealInfo.type === types_1.DealType.Buy) {
                                    posessionCount += dealInfo.count;
                                }
                                else if (dealInfo.type === types_1.DealType.Sell) {
                                    posessionCount -= dealInfo.count;
                                }
                            }
                        });
                        if (count > posessionCount) {
                            message.channel.send("``" + message.member.nickname + "``\uB2D8\uC774 \uAC00\uC9C0\uACE0 \uC788\uB294 ``" + itemInfo.name + "``\uC8FC\uC2DD \uAC2F\uC218\uB294 ``" + posessionCount + "``\uAC1C\uC778\uB370 ``" + count + "``\uAC1C\uB97C \uD314\uB824\uACE0 \uC2DC\uB3C4\uD588\uC2B5\uB2C8\uB2E4.");
                            return [2 /*return*/];
                        }
                        dealInfo = {
                            date: new Date().toLocaleString(),
                            type: types_1.DealType.Sell,
                            count: count,
                            itemInfo: itemInfo
                        };
                        memebrInfo.dealInfoList.push(dealInfo);
                        message.channel.send("``" + message.member.nickname + "`` \uB2D8\uC774 ``" + itemInfo.name + "``\uC758 \uC8FC\uC2DD ``" + count + "``\uAC1C, \uCD1D ``" + count * itemInfo.currentPrice + "``\uC6D0 \uD314\uC558\uC2B5\uB2C8\uB2E4.");
                        return [2 /*return*/];
                }
            });
        });
    };
    StockBot.prototype.show = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var memebrInfo, table, maxLossMoney, maxProfitMoney, currentMoney;
            return __generator(this, function (_a) {
                memebrInfo = this.getGuildInfo(message.guild.id).getMemberInfo(message.author.id);
                table = [
                    "``" + (message.member.nickname ? message.member.nickname : message.author.username) + "``\uB2D8\uC758 \uAC70\uB798 \uC815\uBCF4",
                    '```',
                    ['date'.padStart(20), 'type'.padStart(10), 'count'.padStart(11), 'price'.padStart(11), 'name'.padStart(10)].join(''),
                    '─'.repeat(62)
                ];
                maxLossMoney = 0;
                maxProfitMoney = 0;
                currentMoney = 0;
                memebrInfo.dealInfoList.forEach(function (dealInfo) {
                    currentMoney += (dealInfo.type == types_1.DealType.Buy ? -1 : 1) * dealInfo.itemInfo.currentPrice * dealInfo.count;
                    if (currentMoney < maxLossMoney) {
                        maxLossMoney = currentMoney;
                    }
                    if (currentMoney > maxProfitMoney) {
                        maxProfitMoney = currentMoney;
                    }
                    var row = [
                        dealInfo.date.padStart(20),
                        (dealInfo.type == types_1.DealType.Buy ? 'buy' : 'sell').toString().padStart(10),
                        dealInfo.count.toString().padStart(11),
                        dealInfo.itemInfo.currentPrice.toString().padStart(11),
                        dealInfo.itemInfo.name.toString().padStart(10),
                    ].join('');
                    table.push(row);
                });
                table.push('```');
                table.push("\uCD5C\uB300 \uC190\uC2E4: ``" + maxLossMoney + "``");
                table.push("\uCD5C\uB300 \uC774\uC775: ``" + maxProfitMoney + "``");
                table.push("\uD604\uC7AC \uB3C8: ``" + currentMoney + "``");
                message.channel.send(table.join('\n'));
                return [2 /*return*/];
            });
        });
    };
    StockBot.prototype.getGuildInfo = function (guildId) {
        for (var i = 0; i < this.guildInfoList.length; i++) {
            if (this.guildInfoList[i].guildId === guildId) {
                return this.guildInfoList[i];
            }
        }
        return null;
    };
    StockBot.prototype.saveGuildInfoList = function () {
        fs_1.default.writeFileSync(GUILD_INFO_PATH, JSON.stringify(this.guildInfoList, null, 4));
    };
    StockBot.prototype.loadGuildInfoList = function () {
        var _this = this;
        if (!fs_1.default.existsSync(GUILD_INFO_PATH)) {
            this.guildInfoList = new Array();
            return;
        }
        var infoJSON = JSON.parse(fs_1.default.readFileSync(GUILD_INFO_PATH).toString());
        infoJSON.forEach(function (guildJSON) {
            var guildInfo = new types_1.GuildInfo(guildJSON._guildId);
            guildJSON.memberInfoList.forEach(function (memberInfoJSON) {
                var memberInfo = new types_1.MemberInfo(memberInfoJSON._memberId);
                memberInfoJSON.dealInfoList.forEach(function (dealInfoJSON) {
                    var itemInfo = {
                        name: dealInfoJSON.itemInfo.name,
                        code: dealInfoJSON.itemInfo.code,
                        currentPrice: dealInfoJSON.itemInfo.currentPrice,
                        deltaPrice: dealInfoJSON.itemInfo.deltaPrice,
                        adr: dealInfoJSON.itemInfo.adr,
                    };
                    var dealInfo = {
                        date: dealInfoJSON.date,
                        type: dealInfoJSON.type,
                        count: dealInfoJSON.count,
                        itemInfo: itemInfo,
                    };
                    memberInfo.dealInfoList.push(dealInfo);
                });
                guildInfo.memberInfoList.push(memberInfo);
            });
            _this.guildInfoList.push(guildInfo);
        });
    };
    return StockBot;
}());
var bot = new StockBot();
bot.login();


/***/ }),

/***/ "./src/ts/stock.ts":
/*!*************************!*\
  !*** ./src/ts/stock.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var iconv_lite_1 = __importDefault(__webpack_require__(/*! iconv-lite */ "iconv-lite"));
var urlencode_1 = __importDefault(__webpack_require__(/*! urlencode */ "urlencode"));
var node_html_parser_1 = __webpack_require__(/*! node-html-parser */ "node-html-parser");
var Stock = /** @class */ (function () {
    function Stock() {
    }
    Stock.prototype.search = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var searchUrl, buffer, content, document, section, itemInfoList, list, i, item, tdList, name_1, href, code, currentPrice, deltaPrice, adr, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchUrl = Stock.DEFAULT_URL + '/search/searchList.nhn?query=' + urlencode_1.default(query, 'euc-kr');
                        return [4 /*yield*/, axios_1.default.request({
                                url: searchUrl,
                                method: 'GET',
                                responseType: 'arraybuffer'
                            })];
                    case 1:
                        buffer = _a.sent();
                        content = iconv_lite_1.default.decode(buffer.data, 'euc-kr').toString();
                        document = node_html_parser_1.parse(content);
                        section = document.querySelector('.section_search');
                        if (section) {
                            itemInfoList = new Array();
                            list = section.querySelectorAll('tbody tr');
                            for (i = 0; i < list.length; i++) {
                                item = list[i];
                                tdList = item.querySelectorAll('td');
                                name_1 = tdList[0].querySelector('a').text.trim();
                                href = tdList[0].querySelector('a').getAttribute('href');
                                code = href.substring(href.lastIndexOf('=') + 1, href.length);
                                currentPrice = parseInt(tdList[1].text.trim().replace(/,/g, ''));
                                deltaPrice = parseInt(tdList[2].text.trim().replace(/,/g, ''));
                                if (tdList[2].classNames.indexOf('down')) {
                                    deltaPrice *= -1;
                                }
                                adr = tdList[3].text.trim();
                                info = {
                                    name: name_1,
                                    code: code,
                                    currentPrice: currentPrice,
                                    deltaPrice: deltaPrice,
                                    adr: adr
                                };
                                itemInfoList.push(info);
                            }
                            return [2 /*return*/, itemInfoList];
                        }
                        else {
                            console.log('Cannot found items.');
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 호출 전 code가 6자리 숫자여부 판별 필요.
     * @param code
     */
    Stock.prototype.getItemInfo = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var url, buffer, content, document, tmp, name_2, currentPrice, deltaPrice, adr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = Stock.DEFAULT_URL + '/item/main.nhn?code=' + code;
                        return [4 /*yield*/, axios_1.default.request({
                                url: url,
                                method: 'GET',
                                responseType: 'arraybuffer'
                            })];
                    case 1:
                        buffer = _a.sent();
                        content = iconv_lite_1.default.decode(buffer.data, 'euc-kr').toString();
                        document = node_html_parser_1.parse(content);
                        if (document.querySelector('.error_content')) {
                            return [2 /*return*/, null];
                        }
                        else {
                            tmp = document.querySelectorAll('.no_exday em');
                            name_2 = document.querySelector('.wrap_company ').text.trim();
                            currentPrice = parseInt(document.querySelector('.no_today .blind').text.trim().replace(/,/g, ''));
                            deltaPrice = parseInt(tmp[0].querySelector('.blind').text.trim().replace(/,/g, ''));
                            if (tmp[0].querySelector('.down')) {
                                deltaPrice *= -1;
                            }
                            adr = tmp[1].querySelector('.blind').text.trim();
                            if (tmp[1].querySelector('.minus')) {
                                adr = '-' + adr;
                            }
                            return [2 /*return*/, {
                                    name: name_2,
                                    code: code,
                                    currentPrice: currentPrice,
                                    deltaPrice: deltaPrice,
                                    adr: adr
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Stock.DEFAULT_URL = 'https://finance.naver.com';
    return Stock;
}());
exports.default = Stock;


/***/ }),

/***/ "./src/ts/types.ts":
/*!*************************!*\
  !*** ./src/ts/types.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DealType = exports.GuildInfo = exports.MemberInfo = void 0;
var MemberInfo = /** @class */ (function () {
    function MemberInfo(memberId) {
        this._memberId = memberId;
        this.dealInfoList = new Array();
    }
    Object.defineProperty(MemberInfo.prototype, "memberId", {
        get: function () {
            return this._memberId;
        },
        enumerable: false,
        configurable: true
    });
    return MemberInfo;
}());
exports.MemberInfo = MemberInfo;
var GuildInfo = /** @class */ (function () {
    function GuildInfo(guildId) {
        this._guildId = guildId;
        this.memberInfoList = new Array();
    }
    Object.defineProperty(GuildInfo.prototype, "guildId", {
        get: function () {
            return this._guildId;
        },
        enumerable: false,
        configurable: true
    });
    GuildInfo.prototype.getMemberInfo = function (memberId) {
        for (var i = 0; i < this.memberInfoList.length; i++) {
            if (this.memberInfoList[i].memberId === memberId) {
                return this.memberInfoList[i];
            }
        }
        return null;
    };
    return GuildInfo;
}());
exports.GuildInfo = GuildInfo;
var DealType;
(function (DealType) {
    DealType[DealType["Buy"] = 0] = "Buy";
    DealType[DealType["Sell"] = 1] = "Sell";
})(DealType = exports.DealType || (exports.DealType = {}));


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/ts/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/ts/index.ts */"./src/ts/index.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),

/***/ "discord.js":
/*!*****************************!*\
  !*** external "discord.js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("discord.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "iconv-lite":
/*!*****************************!*\
  !*** external "iconv-lite" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),

/***/ "node-html-parser":
/*!***********************************!*\
  !*** external "node-html-parser" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-html-parser");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "urlencode":
/*!****************************!*\
  !*** external "urlencode" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urlencode");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zdG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21tYW5kZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkaXNjb3JkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1odG1sLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxlbmNvZGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1REFBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDeEQsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNjb3JkX2pzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRpc2NvcmQuanNcIikpO1xyXG52YXIgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcclxudmFyIGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcclxudmFyIGNvbW1hbmRlcl8xID0gcmVxdWlyZShcImNvbW1hbmRlclwiKTtcclxudmFyIHN0b2NrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3RvY2tcIikpO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgY29uZmlnX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLmpzb25cIikpO1xyXG52YXIgQ1dEID0gcHJvY2Vzcy5lbnZbJ0lOSVRfQ1dEJ10gPyBwcm9jZXNzLmVudlsnSU5JVF9DV0QnXSA6IHBhdGhfMS5kZWZhdWx0LmRpcm5hbWUocHJvY2Vzcy5hcmd2WzBdKTtcclxudmFyIEdVSUxEX0lORk9fUEFUSCA9IENXRCArICdcXFxcZGF0YVxcXFxpbmZvLmpzb24nO1xyXG52YXIgU3RvY2tCb3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9ja0JvdCgpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgZGlzY29yZF9qc18xLmRlZmF1bHQuQ2xpZW50KCk7XHJcbiAgICAgICAgdGhpcy5jbGllbnQub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zdG9jayA9IG5ldyBzdG9ja18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmd1aWxkSW5mb0xpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIFN0b2NrQm90LnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2xpZW50LmxvZ2luKGNvbmZpZ19qc29uXzEuZGVmYXVsdC5UT0tFTildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFN0b2NrQm90LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGd1aWxkTGlzdDtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jbGllbnQudXNlci5zZXRBY3Rpdml0eSgncHJlcGFyaW5nLi4uJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NVU1RPTV9TVEFUVVMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkR3VpbGRJbmZvTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWlsZExpc3QgPSB0aGlzLmNsaWVudC5ndWlsZHMuY2FjaGUuYXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpbGRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGd1aWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3VpbGRJbmZvID0gX3RoaXMuZ2V0R3VpbGRJbmZvKGd1aWxkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWlsZEluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVtYmVyTGlzdCA9IGd1aWxkLm1lbWJlcnMuY2FjaGUuYXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWd1aWxkSW5mby5nZXRNZW1iZXJJbmZvKG1lbWJlci5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWxkSW5mby5tZW1iZXJJbmZvTGlzdC5wdXNoKG5ldyB0eXBlc18xLk1lbWJlckluZm8obWVtYmVyLmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBndWlsZEluZm9fMSA9IG5ldyB0eXBlc18xLkd1aWxkSW5mbyhndWlsZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lbWJlckxpc3QgPSBndWlsZC5tZW1iZXJzLmNhY2hlLmFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpbGRJbmZvXzEubWVtYmVySW5mb0xpc3QucHVzaChuZXcgdHlwZXNfMS5NZW1iZXJJbmZvKG1lbWJlci5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmd1aWxkSW5mb0xpc3QucHVzaChndWlsZEluZm9fMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNsaWVudC51c2VyLnNldEFjdGl2aXR5KCdmb3IgaGVscCBcXCcvc3RvY2sgLWhcXCcnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NVU1RPTV9TVEFUVVMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU3RvY2tCb3QucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJndiwgcHJvZ3JhbSwgY29tbWFuZF8xLCBvcHRpb25zLCBjb3VudCwgY291bnQsIGVfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYXV0aG9yLmJvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZS5jb250ZW50LnN0YXJ0c1dpdGgoJy9zdG9jaycpKSByZXR1cm4gWzMgLypicmVhayovLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMTIsICwgMTNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndiA9IFsnJ10uY29uY2F0KG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbSA9IG5ldyBjb21tYW5kZXJfMS5Db21tYW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0ub3B0aW9uKCctaCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignLS1zZWFyY2ggPHF1ZXJ5PicsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignLWIsIC0tYnV5IDxjb3VudD4nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJy1zLCAtLXNlbGwgPGNvdW50PicsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignLWMsIC0tY29kZSA8Y29kZT4nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJy0tc2hvdycsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5leGl0T3ZlcnJpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZF8xID0gcHJvZ3JhbS5wYXJzZShhcmd2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvbW1hbmRfMS5vcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuSCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKCfqsoDsg4kgYGAvc3RvY2sgLS1zZWFyY2ggYGBfX2BgcXVlcnlgYF9fXFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPiDtlbTri7kgcXVlcnkg6rKA7IOJLCDqsoDsg4kg6rKw6rO87J2YIGNvZGUg67CPIOqwgOqyqeydhCDslYzroKTspIxcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICfrp6TsiJggYGAvc3RvY2sgLWIgYGBfX2BgY291bnRgYF9fYGAgLWMgYGBfX2BgY29kZWBgX19cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc+IO2VtOuLuSBjb2RlIOyXkCDtlbTri7ntlZjripQg7ZqM7IKs7J2YIOyjvOyLneydhCBjb3VudOunjO2BvCDqtazrp6RcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICfrp6Trj4QgYGAvc3RvY2sgLXMgYGBfX2BgY291bnRgYF9fYGAgLWMgYGBfX2BgY29kZWBgX19cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc+IO2VtOuLuSBjb2RlIOyXkCDtlbTri7ntlZjripQg7ZqM7IKs7J2YIOyjvOyLneydhCBjb3VudOunjO2BvCDtjJDrp6RcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICfrgrQg66Gc6re4IOuztOq4sCBgYC9zdG9jayAtLXNob3dcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc+IOuCtCDsoJXrs7Trpbwg67O07Jes7KSMXFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAn7Jm87Kq97J2YIOyYteyFmOydhCDsmKTrpbjsqr0g6rWs67aE7Jy866GcIOuMgOyytCDqsIDriqVcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdgYC1iYGAgYGAtLWJ1eWBgXFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYGAtc2BgIGBgLS1zZWxsYGBcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdgYC1jYGAgYGAtLWNvZGVgYFxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4KVxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+unpOyImCBgYC9zdG9jayAtLWJ1eSBgYF9fYGBjb3VudGBgX19gYCAtLWNvZGUgYGBfX2BgY29kZWBgX19cXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLnNlYXJjaCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VhcmNoKG1lc3NhZ2UsIG9wdGlvbnMuc2VhcmNoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMuYnV5IHx8IG9wdGlvbnMuc2VsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29kZSBpcyBtaXNzaW5nLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghL15cXGR7Nn0kLy50ZXN0KG9wdGlvbnMuY29kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvZGUgaXMgbm90IHZhbGlkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5idXkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IE51bWJlcihvcHRpb25zLmJ1eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidcIiArIG9wdGlvbnMuYnV5ICsgXCInIGlzIG5vdCBhIG51bWJlci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5idXkobWVzc2FnZSwgb3B0aW9ucy5jb2RlLCBjb3VudCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuc2VsbCkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gTnVtYmVyKG9wdGlvbnMuc2VsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidcIiArIG9wdGlvbnMuc2VsbCArIFwiJyBpcyBub3QgYSBudW1iZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VsbChtZXNzYWdlLCBvcHRpb25zLmNvZGUsIGNvdW50KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gODtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUd1aWxkSW5mb0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLnNob3cpIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zaG93KG1lc3NhZ2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMSBpbnN0YW5jZW9mIGNvbW1hbmRlcl8xLkNvbW1hbmRlckVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgXCIgKyBlXzEubWVzc2FnZSArIFwiYGBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgXCIgKyBlXzEubWVzc2FnZSArIFwiYGBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdG9ja0JvdC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHF1ZXJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbXNnLCBpdGVtSW5mb0xpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKCfqsoDsg4nspJEuLi4nKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvY2suc2VhcmNoKHF1ZXJ5KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5mb0xpc3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtSW5mb0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5lZGl0KGl0ZW1JbmZvTGlzdC5tYXAoZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJgYFwiICsgaW5mby5uYW1lICsgXCJgYCBjb2RlOiBgYFwiICsgaW5mby5jb2RlICsgXCJgYCBcXHVENjA0XFx1QzdBQ1xcdUFDMDA6IGBgXCIgKyBpbmZvLmN1cnJlbnRQcmljZSArIFwiYGAgXFx1QjRGMVxcdUI3N0RcXHVDNzI4OiBgYFwiICsgaW5mby5hZHIgKyBcImBgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cuZWRpdChcImBgXCIgKyBxdWVyeSArIFwiYGAgXFx1QUM4MFxcdUMwQzlcXHVBQ0IwXFx1QUNGQyBcXHVDNUM2XFx1Qzc0Qy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdG9ja0JvdC5wcm90b3R5cGUuYnV5ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGNvZGUsIGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbUluZm8sIG1lbWVickluZm8sIGRlYWxJbmZvO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0b2NrLmdldEl0ZW1JbmZvKGNvZGUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmZvID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUluZm8gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiYGBcIiArIGNvZGUgKyBcImBgXFx1QzVEMCBcXHVENTc0XFx1QjJGOVxcdUQ1NThcXHVCMjk0IFxcdUQ2OENcXHVDMEFDXFx1Qjk3QyBcXHVDQzNFXFx1Qzc0NCBcXHVDMjE4IFxcdUM1QzZcXHVDMkI1XFx1QjJDOFxcdUIyRTQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWVickluZm8gPSB0aGlzLmdldEd1aWxkSW5mbyhtZXNzYWdlLmd1aWxkLmlkKS5nZXRNZW1iZXJJbmZvKG1lc3NhZ2UuYXV0aG9yLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhbEluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlc18xLkRlYWxUeXBlLkJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmZvOiBpdGVtSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1lYnJJbmZvLmRlYWxJbmZvTGlzdC5wdXNoKGRlYWxJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYFwiICsgbWVzc2FnZS5tZW1iZXIubmlja25hbWUgKyBcImBgIFxcdUIyRDhcXHVDNzc0IGBgXCIgKyBpdGVtSW5mby5uYW1lICsgXCJgYFxcdUM3NTggXFx1QzhGQ1xcdUMyREQgYGBcIiArIGNvdW50ICsgXCJgYFxcdUFDMUMsIFxcdUNEMUQgYGBcIiArIGNvdW50ICogaXRlbUluZm8uY3VycmVudFByaWNlICsgXCJgYFxcdUM2RDAgXFx1QUQ2Q1xcdUI5RTRcXHVENTg4XFx1QzJCNVxcdUIyQzhcXHVCMkU0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdG9ja0JvdC5wcm90b3R5cGUuc2VsbCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBjb2RlLCBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1JbmZvLCBtZW1lYnJJbmZvLCBwb3Nlc3Npb25Db3VudCwgZGVhbEluZm87XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvY2suZ2V0SXRlbUluZm8oY29kZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUluZm8gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtSW5mbyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYFwiICsgY29kZSArIFwiYGBcXHVDNUQwIFxcdUQ1NzRcXHVCMkY5XFx1RDU1OFxcdUIyOTQgXFx1RDY4Q1xcdUMwQUNcXHVCOTdDIFxcdUNDM0VcXHVDNzQ0IFxcdUMyMTggXFx1QzVDNlxcdUMyQjVcXHVCMkM4XFx1QjJFNC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtZWJySW5mbyA9IHRoaXMuZ2V0R3VpbGRJbmZvKG1lc3NhZ2UuZ3VpbGQuaWQpLmdldE1lbWJlckluZm8obWVzc2FnZS5hdXRob3IuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Nlc3Npb25Db3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWVickluZm8uZGVhbEluZm9MaXN0LmZvckVhY2goZnVuY3Rpb24gKGRlYWxJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVhbEluZm8uaXRlbUluZm8uY29kZSA9PSBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYWxJbmZvLnR5cGUgPT09IHR5cGVzXzEuRGVhbFR5cGUuQnV5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2Vzc2lvbkNvdW50ICs9IGRlYWxJbmZvLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWFsSW5mby50eXBlID09PSB0eXBlc18xLkRlYWxUeXBlLlNlbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zZXNzaW9uQ291bnQgLT0gZGVhbEluZm8uY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gcG9zZXNzaW9uQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiYGBcIiArIG1lc3NhZ2UubWVtYmVyLm5pY2tuYW1lICsgXCJgYFxcdUIyRDhcXHVDNzc0IFxcdUFDMDBcXHVDOUMwXFx1QUNFMCBcXHVDNzg4XFx1QjI5NCBgYFwiICsgaXRlbUluZm8ubmFtZSArIFwiYGBcXHVDOEZDXFx1QzJERCBcXHVBQzJGXFx1QzIxOFxcdUIyOTQgYGBcIiArIHBvc2Vzc2lvbkNvdW50ICsgXCJgYFxcdUFDMUNcXHVDNzc4XFx1QjM3MCBgYFwiICsgY291bnQgKyBcImBgXFx1QUMxQ1xcdUI5N0MgXFx1RDMxNFxcdUI4MjRcXHVBQ0UwIFxcdUMyRENcXHVCM0M0XFx1RDU4OFxcdUMyQjVcXHVCMkM4XFx1QjJFNC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhbEluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlc18xLkRlYWxUeXBlLlNlbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5mbzogaXRlbUluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtZWJySW5mby5kZWFsSW5mb0xpc3QucHVzaChkZWFsSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiYGBcIiArIG1lc3NhZ2UubWVtYmVyLm5pY2tuYW1lICsgXCJgYCBcXHVCMkQ4XFx1Qzc3NCBgYFwiICsgaXRlbUluZm8ubmFtZSArIFwiYGBcXHVDNzU4IFxcdUM4RkNcXHVDMkREIGBgXCIgKyBjb3VudCArIFwiYGBcXHVBQzFDLCBcXHVDRDFEIGBgXCIgKyBjb3VudCAqIGl0ZW1JbmZvLmN1cnJlbnRQcmljZSArIFwiYGBcXHVDNkQwIFxcdUQzMTRcXHVDNTU4XFx1QzJCNVxcdUIyQzhcXHVCMkU0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdG9ja0JvdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWVtZWJySW5mbywgdGFibGUsIG1heExvc3NNb25leSwgbWF4UHJvZml0TW9uZXksIGN1cnJlbnRNb25leTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgbWVtZWJySW5mbyA9IHRoaXMuZ2V0R3VpbGRJbmZvKG1lc3NhZ2UuZ3VpbGQuaWQpLmdldE1lbWJlckluZm8obWVzc2FnZS5hdXRob3IuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGFibGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJgYFwiICsgKG1lc3NhZ2UubWVtYmVyLm5pY2tuYW1lID8gbWVzc2FnZS5tZW1iZXIubmlja25hbWUgOiBtZXNzYWdlLmF1dGhvci51c2VybmFtZSkgKyBcImBgXFx1QjJEOFxcdUM3NTggXFx1QUM3MFxcdUI3OTggXFx1QzgxNVxcdUJDRjRcIixcclxuICAgICAgICAgICAgICAgICAgICAnYGBgJyxcclxuICAgICAgICAgICAgICAgICAgICBbJ2RhdGUnLnBhZFN0YXJ0KDIwKSwgJ3R5cGUnLnBhZFN0YXJ0KDEwKSwgJ2NvdW50Jy5wYWRTdGFydCgxMSksICdwcmljZScucGFkU3RhcnQoMTEpLCAnbmFtZScucGFkU3RhcnQoMTApXS5qb2luKCcnKSxcclxuICAgICAgICAgICAgICAgICAgICAn4pSAJy5yZXBlYXQoNjIpXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbWF4TG9zc01vbmV5ID0gMDtcclxuICAgICAgICAgICAgICAgIG1heFByb2ZpdE1vbmV5ID0gMDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb25leSA9IDA7XHJcbiAgICAgICAgICAgICAgICBtZW1lYnJJbmZvLmRlYWxJbmZvTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChkZWFsSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb25leSArPSAoZGVhbEluZm8udHlwZSA9PSB0eXBlc18xLkRlYWxUeXBlLkJ1eSA/IC0xIDogMSkgKiBkZWFsSW5mby5pdGVtSW5mby5jdXJyZW50UHJpY2UgKiBkZWFsSW5mby5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE1vbmV5IDwgbWF4TG9zc01vbmV5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExvc3NNb25leSA9IGN1cnJlbnRNb25leTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb25leSA+IG1heFByb2ZpdE1vbmV5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFByb2ZpdE1vbmV5ID0gY3VycmVudE1vbmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFsSW5mby5kYXRlLnBhZFN0YXJ0KDIwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRlYWxJbmZvLnR5cGUgPT0gdHlwZXNfMS5EZWFsVHlwZS5CdXkgPyAnYnV5JyA6ICdzZWxsJykudG9TdHJpbmcoKS5wYWRTdGFydCgxMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxJbmZvLmNvdW50LnRvU3RyaW5nKCkucGFkU3RhcnQoMTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFsSW5mby5pdGVtSW5mby5jdXJyZW50UHJpY2UudG9TdHJpbmcoKS5wYWRTdGFydCgxMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxJbmZvLml0ZW1JbmZvLm5hbWUudG9TdHJpbmcoKS5wYWRTdGFydCgxMCksXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnB1c2goJ2BgYCcpO1xyXG4gICAgICAgICAgICAgICAgdGFibGUucHVzaChcIlxcdUNENUNcXHVCMzAwIFxcdUMxOTBcXHVDMkU0OiBgYFwiICsgbWF4TG9zc01vbmV5ICsgXCJgYFwiKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnB1c2goXCJcXHVDRDVDXFx1QjMwMCBcXHVDNzc0XFx1Qzc3NTogYGBcIiArIG1heFByb2ZpdE1vbmV5ICsgXCJgYFwiKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnB1c2goXCJcXHVENjA0XFx1QzdBQyBcXHVCM0M4OiBgYFwiICsgY3VycmVudE1vbmV5ICsgXCJgYFwiKTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHRhYmxlLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU3RvY2tCb3QucHJvdG90eXBlLmdldEd1aWxkSW5mbyA9IGZ1bmN0aW9uIChndWlsZElkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmd1aWxkSW5mb0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3VpbGRJbmZvTGlzdFtpXS5ndWlsZElkID09PSBndWlsZElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndWlsZEluZm9MaXN0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFN0b2NrQm90LnByb3RvdHlwZS5zYXZlR3VpbGRJbmZvTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmc18xLmRlZmF1bHQud3JpdGVGaWxlU3luYyhHVUlMRF9JTkZPX1BBVEgsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ3VpbGRJbmZvTGlzdCwgbnVsbCwgNCkpO1xyXG4gICAgfTtcclxuICAgIFN0b2NrQm90LnByb3RvdHlwZS5sb2FkR3VpbGRJbmZvTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghZnNfMS5kZWZhdWx0LmV4aXN0c1N5bmMoR1VJTERfSU5GT19QQVRIKSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkSW5mb0xpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5mb0pTT04gPSBKU09OLnBhcnNlKGZzXzEuZGVmYXVsdC5yZWFkRmlsZVN5bmMoR1VJTERfSU5GT19QQVRIKS50b1N0cmluZygpKTtcclxuICAgICAgICBpbmZvSlNPTi5mb3JFYWNoKGZ1bmN0aW9uIChndWlsZEpTT04pIHtcclxuICAgICAgICAgICAgdmFyIGd1aWxkSW5mbyA9IG5ldyB0eXBlc18xLkd1aWxkSW5mbyhndWlsZEpTT04uX2d1aWxkSWQpO1xyXG4gICAgICAgICAgICBndWlsZEpTT04ubWVtYmVySW5mb0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVySW5mb0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXJJbmZvID0gbmV3IHR5cGVzXzEuTWVtYmVySW5mbyhtZW1iZXJJbmZvSlNPTi5fbWVtYmVySWQpO1xyXG4gICAgICAgICAgICAgICAgbWVtYmVySW5mb0pTT04uZGVhbEluZm9MaXN0LmZvckVhY2goZnVuY3Rpb24gKGRlYWxJbmZvSlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGVhbEluZm9KU09OLml0ZW1JbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGRlYWxJbmZvSlNPTi5pdGVtSW5mby5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2U6IGRlYWxJbmZvSlNPTi5pdGVtSW5mby5jdXJyZW50UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhUHJpY2U6IGRlYWxJbmZvSlNPTi5pdGVtSW5mby5kZWx0YVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHI6IGRlYWxJbmZvSlNPTi5pdGVtSW5mby5hZHIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVhbEluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRlYWxJbmZvSlNPTi5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBkZWFsSW5mb0pTT04udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGRlYWxJbmZvSlNPTi5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUluZm86IGl0ZW1JbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVySW5mby5kZWFsSW5mb0xpc3QucHVzaChkZWFsSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGd1aWxkSW5mby5tZW1iZXJJbmZvTGlzdC5wdXNoKG1lbWJlckluZm8pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuZ3VpbGRJbmZvTGlzdC5wdXNoKGd1aWxkSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0b2NrQm90O1xyXG59KCkpO1xyXG52YXIgYm90ID0gbmV3IFN0b2NrQm90KCk7XHJcbmJvdC5sb2dpbigpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcclxudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7XHJcbnZhciB1cmxlbmNvZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidXJsZW5jb2RlXCIpKTtcclxudmFyIG5vZGVfaHRtbF9wYXJzZXJfMSA9IHJlcXVpcmUoXCJub2RlLWh0bWwtcGFyc2VyXCIpO1xyXG52YXIgU3RvY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9jaygpIHtcclxuICAgIH1cclxuICAgIFN0b2NrLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hVcmwsIGJ1ZmZlciwgY29udGVudCwgZG9jdW1lbnQsIHNlY3Rpb24sIGl0ZW1JbmZvTGlzdCwgbGlzdCwgaSwgaXRlbSwgdGRMaXN0LCBuYW1lXzEsIGhyZWYsIGNvZGUsIGN1cnJlbnRQcmljZSwgZGVsdGFQcmljZSwgYWRyLCBpbmZvO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hVcmwgPSBTdG9jay5ERUZBVUxUX1VSTCArICcvc2VhcmNoL3NlYXJjaExpc3QubmhuP3F1ZXJ5PScgKyB1cmxlbmNvZGVfMS5kZWZhdWx0KHF1ZXJ5LCAnZXVjLWtyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKGJ1ZmZlci5kYXRhLCAnZXVjLWtyJykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQgPSBub2RlX2h0bWxfcGFyc2VyXzEucGFyc2UoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9zZWFyY2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmZvTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRMaXN0ID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVfMSA9IHRkTGlzdFswXS5xdWVyeVNlbGVjdG9yKCdhJykudGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiA9IHRkTGlzdFswXS5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA9IGhyZWYuc3Vic3RyaW5nKGhyZWYubGFzdEluZGV4T2YoJz0nKSArIDEsIGhyZWYubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2UgPSBwYXJzZUludCh0ZExpc3RbMV0udGV4dC50cmltKCkucmVwbGFjZSgvLC9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhUHJpY2UgPSBwYXJzZUludCh0ZExpc3RbMl0udGV4dC50cmltKCkucmVwbGFjZSgvLC9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZExpc3RbMl0uY2xhc3NOYW1lcy5pbmRleE9mKCdkb3duJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFQcmljZSAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRyID0gdGRMaXN0WzNdLnRleHQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlOiBjdXJyZW50UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhUHJpY2U6IGRlbHRhUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkcjogYWRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5mb0xpc3QucHVzaChpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpdGVtSW5mb0xpc3RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nhbm5vdCBmb3VuZCBpdGVtcy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog7Zi47LacIOyghCBjb2Rl6rCAIDbsnpDrpqwg7Iir7J6Q7Jes67aAIO2MkOuzhCDtlYTsmpQuXHJcbiAgICAgKiBAcGFyYW0gY29kZVxyXG4gICAgICovXHJcbiAgICBTdG9jay5wcm90b3R5cGUuZ2V0SXRlbUluZm8gPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHVybCwgYnVmZmVyLCBjb250ZW50LCBkb2N1bWVudCwgdG1wLCBuYW1lXzIsIGN1cnJlbnRQcmljZSwgZGVsdGFQcmljZSwgYWRyO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBTdG9jay5ERUZBVUxUX1VSTCArICcvaXRlbS9tYWluLm5obj9jb2RlPScgKyBjb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShidWZmZXIuZGF0YSwgJ2V1Yy1rcicpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50ID0gbm9kZV9odG1sX3BhcnNlcl8xLnBhcnNlKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yX2NvbnRlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vX2V4ZGF5IGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcF9jb21wYW55ICcpLnRleHQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vX3RvZGF5IC5ibGluZCcpLnRleHQudHJpbSgpLnJlcGxhY2UoLywvZywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhUHJpY2UgPSBwYXJzZUludCh0bXBbMF0ucXVlcnlTZWxlY3RvcignLmJsaW5kJykudGV4dC50cmltKCkucmVwbGFjZSgvLC9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRtcFswXS5xdWVyeVNlbGVjdG9yKCcuZG93bicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFQcmljZSAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkciA9IHRtcFsxXS5xdWVyeVNlbGVjdG9yKCcuYmxpbmQnKS50ZXh0LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bXBbMV0ucXVlcnlTZWxlY3RvcignLm1pbnVzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHIgPSAnLScgKyBhZHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZTogY3VycmVudFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVByaWNlOiBkZWx0YVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHI6IGFkclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU3RvY2suREVGQVVMVF9VUkwgPSAnaHR0cHM6Ly9maW5hbmNlLm5hdmVyLmNvbSc7XHJcbiAgICByZXR1cm4gU3RvY2s7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN0b2NrO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRlYWxUeXBlID0gZXhwb3J0cy5HdWlsZEluZm8gPSBleHBvcnRzLk1lbWJlckluZm8gPSB2b2lkIDA7XHJcbnZhciBNZW1iZXJJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVtYmVySW5mbyhtZW1iZXJJZCkge1xyXG4gICAgICAgIHRoaXMuX21lbWJlcklkID0gbWVtYmVySWQ7XHJcbiAgICAgICAgdGhpcy5kZWFsSW5mb0xpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZW1iZXJJbmZvLnByb3RvdHlwZSwgXCJtZW1iZXJJZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZW1iZXJJZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTWVtYmVySW5mbztcclxufSgpKTtcclxuZXhwb3J0cy5NZW1iZXJJbmZvID0gTWVtYmVySW5mbztcclxudmFyIEd1aWxkSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEd1aWxkSW5mbyhndWlsZElkKSB7XHJcbiAgICAgICAgdGhpcy5fZ3VpbGRJZCA9IGd1aWxkSWQ7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJJbmZvTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEd1aWxkSW5mby5wcm90b3R5cGUsIFwiZ3VpbGRJZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ndWlsZElkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEd1aWxkSW5mby5wcm90b3R5cGUuZ2V0TWVtYmVySW5mbyA9IGZ1bmN0aW9uIChtZW1iZXJJZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZW1iZXJJbmZvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZW1iZXJJbmZvTGlzdFtpXS5tZW1iZXJJZCA9PT0gbWVtYmVySWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbWJlckluZm9MaXN0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHdWlsZEluZm87XHJcbn0oKSk7XHJcbmV4cG9ydHMuR3VpbGRJbmZvID0gR3VpbGRJbmZvO1xyXG52YXIgRGVhbFR5cGU7XHJcbihmdW5jdGlvbiAoRGVhbFR5cGUpIHtcclxuICAgIERlYWxUeXBlW0RlYWxUeXBlW1wiQnV5XCJdID0gMF0gPSBcIkJ1eVwiO1xyXG4gICAgRGVhbFR5cGVbRGVhbFR5cGVbXCJTZWxsXCJdID0gMV0gPSBcIlNlbGxcIjtcclxufSkoRGVhbFR5cGUgPSBleHBvcnRzLkRlYWxUeXBlIHx8IChleHBvcnRzLkRlYWxUeXBlID0ge30pKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tbWFuZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRpc2NvcmQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsZW5jb2RlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=