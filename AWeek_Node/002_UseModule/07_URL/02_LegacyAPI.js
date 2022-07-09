const url = require("url");
console.log(
  url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash")
);
/* Url{
    protocol: 'https:',
    slashes: true,
    auth: 'user:pass',
    host: 'sub.example.com:8080',
    port: '8080',
    hostname: 'sub.example.com',
    hash: '#hash',
    search: '?query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
    href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
}
*/

/// WHATWG와 Node.js legacy 방식은 반환되는 Object의 구조가 상이
