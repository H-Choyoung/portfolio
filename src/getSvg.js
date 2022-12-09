"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//readFileSync 정리용 함수
function readFileFucn(path) {
    return fs_1.default.readFileSync(path, "utf8");
}
const cophin = {
    black_open: readFileFucn("./public/img/cophin_black_on.svg"),
    black_close: readFileFucn("./public/img/cophin_black_off.svg"),
    // white_open: readFileFucn(""),
    // white_close: readFileFucn(""),
};
const skulls = {
    // normal: readFileFucn(""),
    // normal_hi: readFileFucn(""),
    // normal_pharaoh: readFileFucn(""),
    special: readFileFucn("./public/img/skull_special.svg"),
};
// const tresure = {
//   gold: readFileFucn(""),
//   silver: readFileFucn(""),
// }
// console.log(cophin.black_open);
// console.log(cophin.black_close);
module.exports = { cophin, skulls };
