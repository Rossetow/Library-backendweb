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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var Classes_1 = require("./Classes");
var leitor = require("readline-sync");
main();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var biblioteca, opcao, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!true) return [3 /*break*/, 18];
                    biblioteca = new Classes_1.SistemaBiblioteca();
                    console.log('SEJA BEM VIND@ AO SISTEMA DE BIBLIOTECA :>');
                    console.log('1 - CADASTRAR LIVRO');
                    console.log('2 - CADASTRAR USUÁRIO');
                    console.log('3 - EMPRESTAR LIVRO');
                    console.log('4 - DEVOLVER LIVRO');
                    console.log('5 - LIVROS DISPONIVEIS');
                    console.log('6 - DELETAR USUARIO');
                    console.log('7 - DELETAR LIVRO');
                    console.log('0 - SAIR');
                    opcao = leitor.question("Informe a opcao desejada");
                    _a = opcao;
                    switch (_a) {
                        case 1: return [3 /*break*/, 1];
                        case 2: return [3 /*break*/, 3];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 7];
                        case 5: return [3 /*break*/, 9];
                        case 6: return [3 /*break*/, 11];
                        case 7: return [3 /*break*/, 13];
                        case 0: return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 16];
                case 1: return [4 /*yield*/, biblioteca.cadastrarLivros];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 3: return [4 /*yield*/, biblioteca.cadastrarUsuarios];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 5: return [4 /*yield*/, biblioteca.emprestarLivros];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 7: return [4 /*yield*/, biblioteca.devolverLivro];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 9: return [4 /*yield*/, biblioteca.livrosBanco];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 11: return [4 /*yield*/, biblioteca.deletarUsuario];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 13: return [4 /*yield*/, biblioteca.deletarLivro];
                case 14:
                    _b.sent();
                    return [3 /*break*/, 17];
                case 15:
                    console.log("SAINDO...");
                    process.exit(0);
                    _b.label = 16;
                case 16:
                    console.log("Opçao invalida");
                    return [3 /*break*/, 17];
                case 17: return [3 /*break*/, 0];
                case 18: return [2 /*return*/];
            }
        });
    });
}
