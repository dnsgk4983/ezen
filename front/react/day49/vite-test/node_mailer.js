import nodemailer from 'nodemailer';

// nodemailer 셋업과정입니다.
// node.js 라이브러리로 데이터를
// 이메일로 전송하는 패키지
const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secures: true,
    auth: {
        user: 'pok_express',
        pass: "dnsgk4983@gmail"
    }
})

// 이메일 전송 예시
const mailOptions = {
    from: 'dnsgk4983@gmail.com',
    to: 'dnsgk4983@gmail.com',
    subject: '테스트 이메일',
    text: '테스트 이메일입니다.'
}

// 이메일 전송 명령
// tranporter에 담은 메일서버 접속정보와 mailOptions에 담은
// 이메일 메세지를 호출하여 실제로 이메일을 보냅니다.
// 에러처리 구문이 중요한데 그 이유는 메일서버 보안설정 때문인지
// 코드 에러인지 확인해야하기 때문입니다.
transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.error("이메일 전송 에러", error);
    } else {
        console.log("이메일 전송 완료", info.response);
    }
});