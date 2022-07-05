// multer : multi-part / form-data 데이터를 처리하기 위한 미들웨어
// = 클라이언트에서 전송한 파일을 쉽게 업로드할 수 있게 하는 미들웨어
// 설치 명령어 : npm install multer

// multer 모듈을 사용해 클라이언트로부터 전송된 파일의 업로드 처리
// <= 디스크 저장장소에 대한 객체 생성의 우선

// multer의 diskStorage() 함수를 통해 파일의 저장 위치와 파일명에 대한 정의
const Storage = multer.diskStorage({
  // 디스크 저장소 정의
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백 함수를 통해 전송된 파일 저장 디렉터리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일 이름 설정
  },
});

const upload = multer({ storage: storage }); // multer 객체 생성

// 클라이언트로부터 전송된 파일 : 익스프레스 라우트에서 multer 모듈 사용해 파일 업로드 처리
app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log(req.file); // avatar 이름의 싱글 파일
  console.log(req.body); // 일반적 폼 데이터
});

// 파일 여럿 업로드하기
app.post(
  "/photos/upload",
  upload.array("photos", 12),
  function (req, res, next) {
    console.log(req.files); // photos 이름의 멀티 파일
  }
);
