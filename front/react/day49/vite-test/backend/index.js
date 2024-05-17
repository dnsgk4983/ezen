import fs from "node:fs/promises";
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

// express 패키지를 실행합니다
const app = express();

// json 데이터를 읽어야 합니다
app.use(bodyParser.json()); // JSON 형식의 요청 본문 파싱
// public 폴더의 파일 읽기
app.use(express.static('public'))

// cors 패키지를 실행합니다 (미들웨어 등록)
app.use(cors());

// meals 경로 url 들어가서  (리액트에서 필요한 메뉴사진과 메뉴 정보는 여기 블럭으로 끝납니다)
app.get('/meals', async(req, res) => {
    // 메뉴 데이터를 읽어와 주세요
    const meals = await fs.readFile('./data/available-meals.json', 'utf-8')
    // 응답으로 읽을 데이터를 해석합니다
    res.json(JSON.parse(meals))
})

// 주문을 받아서 주문 목록을 저장하고 파일에 씀
// 데이터 추가
// 주문이 잘 되었으면 주문이 되었다고 클라이언트(리액트)에 응답
// 그런데 아래 오류 유형에 대한 오류처리 코드가 필요하다
// 1. 주문데이터가 유효하지 않을 때 
// (주문데이터가 안들어오거나 주문데이터 내 특정 메뉴가 안되는 등)
// 2. 주문자 정보가 유효하지 않을 때
// 이메일, 이름, 주소 등의 데이터가 없을때

app.post('/orders', async(req, res) => {
// 클라이언트 요청본문에서 주문 데이터 추출
const orderData =  req.body.order

// 주문 데이터가 유효하지 않는 경우
// orderData가 null값이거나 orderData내 items 이 null값이거나
// orderData내 items내 데이터 길이가 0이면
if (orderData === null || orderData.items === null || orderData.items.length === 0) {
    return res.status(400).json({message: "데이터가 없어요"})
}

// 주문자 정보가 유효하지 않은 경우
// orderData.customer 내부의 고객 주문 데이터가 비어있는 경우 오류를 표시합니다
if (orderData.customer.email === null ||
!orderData.customer.email.includes('@') ||
orderData.customer.name === null ||
orderData.customer.name.trim() === '' ||
orderData.customer.street === null ||
orderData.customer.postal-code === null ||
orderData.customer.city === null
) {
    return res.status(400).json({ 
        message: "주문자 정보가 없군요. 이메일이나 이름, 주소 중 없는 데이터가 있습니다" })
}

// 새 주문 생성  (뭐하는 코드인지 설명해 주세요)
// 주문자 데이터에 id 값 랜덤으로 만들어서 추가함
const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString()
}

// 주문자 정보가 잘 들어왔을 때 어떻게 내용을 추가할 수 있을지 
// 어떤 코드요소가 필요할지 고민해 보세요 (기존 주문 목록에 새 주문을 추가해야 한다)
// 무엇인가를 추가하는군요~
const orders = await fs.readFile('./data/orders.json', 'utf-8')
const allOrders = JSON.parse(orders)
allOrders.push(newOrder)

// 주문목록이 담긴 파일에 새 주문이 추가된 데이터를 추가 후 json으로 다시 변환
await fs.writeFile('./data/orders.json', JSON.stringify(allOrders))

// 성공적으로 주문이 되었음을 클라이언트(리액트) 측에 알림
res.status(201).json({message: "주문이 생성되었습니다"})

})

// 사용자가 엄한 경로로 갔을 때 + 중간에 시스템이 잘 되고 있는지 확인
app.use( (req, res) => {

    if (req.method === "OPTIONS") {
        return res.sendStatus(200)
    }
    //페이지가 존재하지 않을 때
    res.status(404).json({message: '페이지가 없어요'})
})

// 포트번호 부여
app.listen(3000, () => console.log("3000번 포트입니다"))
