import fs from 'fs'


function readFileFucn(path:string){
  return fs.readFileSync(path, "utf8");
}

const cophin = {
  black_open: readFileFucn("./public/img/cophin_black_on.svg"),
  black_close: readFileFucn("./public/img/cophin_black_off.svg")
  // black_open: fs.readFileSync("./public/img/cophin_black_on.svg", "utf8"),
  // black_close: fs.readFileSync("./public/img/cophin_black_off.svg", "utf8"),
  // white_open: fs.readFileSync(""),
  // white_close: fs.readFileSync(""),
}

// const skulls = {
//   normal: fs.readFileSync(""),
//   normal_hi: fs.readFileSync(""),
//   normal_pharaoh: fs.readFileSync(""),
//   special: fs.readFileSync("./public/img/skull_special.svg", "utf8"),
// }

// const tresure = {
//   gold: fs.readFileSync(""),
//   silver: fs.readFileSync(""),
// }

// console.log(cophin.black_open);
console.log(cophin.black_close);

// console.log(fs.readFileSync("./public/img/cophin_black_on.svg"));
// console.log(fs.readFileSync("./src/test.txt"));
// console.log(process.cwd());


// class Svgs {
//   static cophinB_open = get_cophinB_open;
//   static cophinB_close = get_cophinB_close;

//   // 타입선언
//   gold: any;
//   silver: any;
//   skulls: object;
//   boom: object;

//   constructor(gold:any, silver:any, skulls:object, boom:object){
//     this.gold = gold;
//     this.silver = silver;
//     this.skulls = skulls;
//     this.skulls = {
//       normal1: normal1,
//       normal2: normal2,
//       normal3: normal3,
//       special: special 
//     }
//     this.boom = boom;
//   }
// }
