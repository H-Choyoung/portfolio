const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const query = require("querystring");
/* 작성 모듈 import */

const server = http.createServer((req:any, res:any) => {
  let getMethod = req.method;
  const getPathname = url.parse(req.url).pathname;
  // const getQuery = url.parse(req.url).query;
  // console.log(getPathname);

  switch (getMethod) {
    case 'GET':
      try {
        if (getPathname == '/') {
          const test = fs.readFileSync("./public/index.html");
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' });
          res.write(test);
          res.end();
        }
        else if(getPathname == '/cophin') {
          const svg = fs.readFileSync("./public/img/cophin_black_on.svg");
          // console.log(svg);
          res.writeHead(200, {'Content-Type':'text/html; charset=utf-8;'});
          res.write(svg);
          res.end();
        }
      }
      catch (err) {
        console.log(err);
      }
      break;
    default:
      res.writeHead(405, { 'Content-Type': 'text/html' });
      res.write('Not found');
      res.end();
      break;
  };
});
const message:string = "server is running...";
server.listen(5580, console.log(message), (err:Error) => { if (err) throw err });