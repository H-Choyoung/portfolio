const http = require("http");
const fs = require("fs");
const url = require("url");
// import http from "http";
// import fs from "fs";
// import url from "url";

/* 작성 모듈 import */
const server = http.createServer((req, res) => {
    let getMethod = req.method;
    const getPathname = url.parse(req.url).pathname;
    // const getQuery = url.parse(req.url).query;
    function readFileFucn(path) {
        return fs.readFileSync(path, "utf8");
    }
    console.log(getPathname);
    switch (getMethod) {
        case 'GET':
            const main = fs.readFileSync("../public/main.js", "utf-8");
            const index = fs.readFileSync("../public/index.html");
            const cophin = {
                black_open: readFileFucn("../public/img/cophin_black_on.svg"),
                black_close: readFileFucn("../public/img/cophin_black_off.svg"),
                // white_open: readFileFucn(""),
                // white_close: readFileFucn(""),
            };
            try {
                if (getPathname == '/') {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' });
                    res.write(index);
                    res.end();
                }
                else if (getPathname == '/main.js') {
                    res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8;' });
                    res.write(main);
                    res.end();
                }
                else if (getPathname == '/cophin') {
                    res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8;' });
                    res.write(cophin.black_close);
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
    }
    ;
});
const message = "server is running...";
server.listen(5580, console.log(message), (err) => { if (err)
    throw err; });
