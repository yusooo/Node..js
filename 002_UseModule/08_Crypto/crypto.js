const crypto = require("crypto");
crypto.createHash("sha512").update("pw1234").digest("base64"); //9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
crypto.createHash("sha512").update("pw1234").digest("hex"); // f6249e39dd6fbf6aa29d1d943390288392e6a819dc17fa057934ec3d48eac06a06de51b6df6dbcd0ba8049c13b151ec71dee0ad20c9e74237b8990d997e35968

// createHash() : 파라미터로 암호화에 사용할 알고리즘 전달
// update() : 파라미터로 암호화할 문자열 전달
// digest() : 파라미터로 어떤 인코딩 방식으로 암호화된 문자열을 표시할지 전달

// createHash('알고리즘').update('암호화할 말').digest('암호화방식');
// 단점 : 암호화 알고리즘에 해당하는 결과를 알고 있다면 비밀번호를 알기도 쉬움
// 실제로 해커는 레인보우 테이블(다양한 암호화 결과값 & 암호화 전 원본값의 테이블화)을 가지고 해킹하기도 함
// salting으로 해결
