// 회원가입 절차를 담을 프로그램입니다.
// 회원가입 api를 호출하면 1. db에 저장하고 2. 이메일을 보내고 3. 성공 메세지를 보여줍니다.

const DB = [];

// 회원가입 함수
// saveDB, sendEmail, getReturn 함수를 차례로 호출하여 프로그램을 실행합니다.
// 이전 함수의 결과가 완전히 나와야 그 결과가 다음 함수의 입력밧이 되므로
// 이전 함수의 결과가 나오지 않으면 다음 작업은 되지 않습니다.
function register(user) {
    return saveDB(user, (user) => {
        return sendEmail(user, (user) => {
            return getReturn(user);
        });
    });
}

function saveDB(user, callback) {
    // 코드 실행 시 입력받은 유저데이터를 push 명령어로 DB 리스트 자료구조에 저장합니다.
    DB.push(user);
    // 자료구조에 입력받은 데이터 저장 후 save name to DB 라는 메세지를 출력합니다.
    console.log(`save ${user.name} to DB`);
    // 자료구조 저장 후 결과값 반환하여 다음 함수 입력값으로 쓸 수 있도록 합니다.
    return callback(user);
}
// 데이터안의 이메일 주소를 출력해주고 나서 다음 함수에게 결과값을 전달합니다.
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}
// 최종적으로 모든게 잘 마무리 되면 success register 메세지 반환
function getReturn(user) {
    return `success register ${user.name}`;
}

// register라는 이름으로 콜백함수를 잘 정의하였으니 데이터를 넣고 써봅시다
const result = register({email: `dnsgk4983@gmail.com`, password: `1234`, name: `dnsgk4983`});
console.log(result);

// register 콜백함수는 데이터를 받아서 DB변수에 저장한 뒤에
// email 주소를 출력하고 사람 이름을 출력하는 일련의 과정을 순차적으로
// 콜백 기능을 적극 활용하여 특정 과정이 먼저 진행되지 않도록 조치하였다.
// 원리를 설명한대로, 함수안의 함수안의 함수이므로 실수하기 좋은 구조이다.

// 실제 콜백은 에러나면 문제가 커진다.
// 7단계 콜백함수에서 각 함수의 코드가 수백줄이라 가정한다면
// 몇번째 콜백함수안의 몇번째줄 코드가 문제가 생긴지 어떻게 파악하는가?

// callback 함수는 debug에 취약합니다. 그래서 나온 해결책이
// promise입니다. promise란 promise라는 객체를 만들어서 이전 함수의 실행 결과를 이행, 대기 거절
// 3가지 상태로 구분하여 각 상태에 맞는 조건을 설정 할 수 있습니다.