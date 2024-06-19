import nodemailer from 'nodemailer';

// nodemailer 셋업과정입니다.
// node.js 라이브러리로 데이터를
// 이메일로 전송하는 패키지
const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 465,
    secure: true,
    auth: {
        user: `pok_express`,
        pass: `dnsgk4983@gmail`,
    }
})

// 이메일 전송 예시
const mailOptions = {
    from: 'pok_express@naver.com',
    to: 'pok_express@naver.com',
    subject: '테스트 이메일',
    text: '테스트 이메일입니다.'
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.error("이메일 전송 에러", error);
    } else {
        console.log("이메일 전송 완료", info.response);
    }
});