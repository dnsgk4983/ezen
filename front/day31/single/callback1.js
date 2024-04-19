// 회원가입 서비스를 가정합니다.
// 회원가입 데이터를 고객이 입력하면
// 1. 데이터를 서버 DB에 저장하고
// 2. 이메일을 보내고
// 3. 성공메세지를 보내는 작업을 순차적으로 하려고 합니다.
// 순차적인 작업이 되도록 조치해야 합니다.

const DB = [];

// register 라는 함수 안에 3가지 작업을 수행합니다.
function register(user) {
    return saveDB(user, function(user) {
        return sendEmail(user, function(user) {
            return getResult(user);
        });
    });
}

// 이 함수(saveDB)는 push 명령어로 입력받은 데이터를 DB변수에 집어넣고 입력되었다고 메세지를 출력합니다.
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

//  이 함수(sendEmail)는 이메일로 보내졌다고 메세지를 출력해 줍니다.
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

// 이 함수는 마지막에 배치되었습니다. callback 구문이 없습니다.
// 이 함수의 결과를 참조할 다음 함수가 없습니다.
function getResult(user) {
    return `succees register ${user.name}`;
}

const result = register({email: `dnsgk4983@gmail.com`, password: `1234`, name: `dnsgk4983`});
console.log(result);