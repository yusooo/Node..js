const path = require("path");

// path.basename(path[,ext])
//  경로의 마지막 부분 반환
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.basename(__filename)); // 경로의 가장 마지막 부분
console.log(path.basename(__filename, ".js")); // 경로의 가장 마지막 부분에서 확장자 제거한 이름

// path.delimiter
//  운영체제 별로 환경 변수 구분자 (윈도우 ; / POSIX{ex. MAC, Linux} : )
console.log(path.delimiter); // 환경 변수 구분자 - 윈도우는 세미콜론(;), POSIX 계열은 콜론(:)
//      윈도우
console.log(process.env.PATH); // c:\Users\DSM2022\Desktop\study\school\club\Node..js\002_UseModule\06_Path\01_PathFunction.js
process.env.PATH.split(path.delimiter); //
//      POSIX
console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);

// path.dirname(path)
//  파일이 위치한 폴더 경로 반환
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.dirname(__filename)); // 파일 위치한 디렉터리(폴더) 경로

// path.extname(path)
//  파일 확장자 반환
console.log(path.extname("index.html")); // 파일의 확장자, 출력 결과 - .html

// path.format(pathObject)
//  프로퍼티 : dir, root, base, name, ext -> 주어진 프로퍼티 사용해 경로 문자열 반환
//      dir값의 제시 -> root 값 제시해도 무시
//      base값의 제시 -> ext, name값 제시해도 무시
path.format({
  root: "/ignored", // dir 값이 있으므로 root는 무시
  dir: "/home/user/dir",
  base: "file.txt",
});
// 'home/user/dir/file.txt'

path.format({
  root: "/",
  base: "file.txt",
  ext: "ignored", // base값의 존재 -> ext 무시
});
// '/file.txt'

path.format({
  root: "/",
  naem: "file",
  ext: ".txt",
});
// '/file.txt'

// path.isAbsolute(path)
//  주어진 파일의 경로 : 절대 => true, 상대 => false

// path.join([...paths])
//  문자열로 주어진 경로를 합쳐 하나의 경로로 반환
path.join("/foo", "bar", "baz/asdf"); // '/foo/bar/baz/asdf'

// path.parse(path)
//  path.format() 함수와 반대, 문자열로 된 경로를 pathObject로 반환
path.parse("/home/user/dir/file.txt");
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// path.sep
//  경로 구분자의 반환 : Window -> \, POSIX -> /
console.log(path.sep); // 경로 구분자 - 윈도우는 역슬래시(\), POSIX 계열은 슬래시(/)
"foo\\bar\\baz".split(path.sep); // ['foo', 'bar', 'baz']
