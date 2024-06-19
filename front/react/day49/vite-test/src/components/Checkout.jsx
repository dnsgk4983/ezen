import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import Input from "./UI/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
// 파일전송 방식과 설정 정보가 담긴 배열 데이터를 선언합니다
const requestConfig = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

export default function Checkout() {
  // UserProgressContext 에서 만들어 둔 함수들을
  // useContext에 있는 context api로 호출해 사용.
  // (데이터와 함수를 각각 호출)
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  // 주문 메뉴 별 수량과 금액으로 총 합을 구한다
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // 창 닫기
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  // 주문 완료 시 카트 비우기
  function handleFinish() {
    // 주문이 끝나면 카트비우고, 주문데이터 초기화, 주문창도닫음
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  // 제출하기
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        }
      })
    )
  }

let actions = (
  <>
  <Button type="button" textOnly onClick={handleClose}>
    닫기
  </Button>
  <Button>주문 제출</Button>
  </>
)

if (isSending) {
  actions = <span>주문 정보를 보내는 중입니다...</span>
}
// 정상적으로 주문정보가 전송될 수 있는경우
// 주문정보 확인에 대한 모달창입니다
if (data && !error) {
  return (
    <Modal 
    open={userProgressCtx.progress === 'checkout'}
    onClose={handleFinish} >
      <h2> 성공입니다</h2>
      <p> 주문접수가 완료되었습니다</p>
      <p className="modal-actions">
        <Button onClick={handleFinish}>오케이</Button>
      </p>
    </Modal>
  )
}

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"} //자동완성 주의
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h2>체크아웃</h2>
        <p>총 금액: {currencyFormatter.format(cartTotal)}</p>
        <p>배달정보 입력하기</p>
        <Input label="이름" type="text" id="name" />
        <Input label="이메일" type="email" id="email" />
        <Input label="주소" type="text" id="street" />
        <div className="control-row">
          <Input label="우편번호" type="text" id="postal-code" />
          <Input label="도시" type="text" id="city" />
        </div>

        {error && <Error 
        title="주문접수에 실패하였습니다" 
        message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}