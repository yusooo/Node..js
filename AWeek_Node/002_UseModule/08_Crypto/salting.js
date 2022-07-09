// Salting 암호화 : 소금(salt)을 뿌려 알아보기 어렵게 만든다

const { resolve } = require("path");

// salt 생성 예제코드 : randomBytes() 함수 사용 -> 64Bytes 길이의 salt 생성
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

// salt 이용 비밀번호 암호화 함수
// pbkdf2() 함수 사용, 파라미터 : 암호화할 문자열(비밀번호), salt, 반복 횟수, 출력될 바이트수, 해시 알고리즘
// pbkdf2() 함수 반환 : 암호화된 값 & salt 값
const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
// 생성된 암호화된 비밀번호 & salt 값 -> 함께 데이터베이스에 저장
// 사용자의 로그인 시도 시 입력된 비밀번호와 데이터베이스에 저장된 salt 값 사용 -> 암호화된 값을 가져와 데이터베이스에 저장된 암호화된 비밀번호값과 일치하는지 비교 -> 로그인 처리

// 사용자로부터 입력받은 비밀번호와 데이터베이스에 저장된 salt 값을 파라미터로 전달 -> 암호화된 비밀번호 값을 가져오는 함수
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
