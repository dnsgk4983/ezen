const DB = [];

function register_promise(user) {
    const result1 = saveDB(user).then(sendEmail).then(getResult);
    return result1
}

// 콜백처럼 후속함수를 시작으로 안받으니까 callback 인자가 빠진다.
function saveDB(user) {
    // 새로운 데이터를 받기 전 현재까지의 데이터 크기를 oldDBSize에 저장한다.
    const oldDBSize = DB.length;
    // 입력받는 데이터를 push 명령어로 DB에 저장한다.
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    // (resolve, reject) 즉 성공과 실패를 시작으로 하는 함수를 만들어서
    // new Promise라는 새로운 객체 안에 둔다. (함수의 이행과 실패처리)
    return new Promise((resolve, reject) => {
        if(DB.length > oldDBSize) {
            resolve(user);

        }
        else {
            reject(new Error(`DB error`));
        }
    });

    // 데이터가 못들어와서 if조건 만족 못시키면
    // 실패조건으로 두고 메세지 출력 (에러객체 생성)

}

function sendEmail(user) {
    console.log(`email tot ${user.email}`);
    // 굳이 실패조건을 따로 만들진 않습니다.
    // 데이터를 받지 못하면 자동으로 멈춥니다.
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    });
}

const myUser = {email: `dnsgk4983@gmail.com`, password: `1234`, name: `dnsgk4983`}

const result = register = register_promise(myUser);
result.then(console.log);