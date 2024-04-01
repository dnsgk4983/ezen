(function () {
  const spanEl = document.querySelector("main h2 span");

  // 화면에 표시할 문장 데이터 셋업
  const txtArr = [
    "web publisher",
    "front-end developer",
    "ux designer",
    "back-end developer",
  ];

  // 배열의 인덱스 초기값
  let index = 0;
  // 화면에 표시할 문장 배열에서 데이터 가져와서 배열로 만들기
  let currentTxt = txtArr[index].split("");

  // 테스트 목적의 출력 확인 - 배열로 분리된 텍스트가 잘 들어오는지 확인용
  // console.log(currentTxt);

  // 텍스트 효과의 핵심은 currentTxt 변수에 담긴 글자 배열 요소를
  // 하나씩 화면에 출력하는 것입니다.
  // 그러면 텍스트가 마치 하나씩 작성되는 것처럼 보이게 합니다.
  // 이를 위한 writeTxt() 함수를 하나씩 만들어 출력 시킵니다.

  function writeTxt() {
    // 배열의 요소를 한개씩 출력합니다.
    // 이 때 쓰이는 shift() 메서드는 배열에서 맨 앞의 글자를 추출하고
    // 추출된 글자를 원본에서 버립니다.
    // 예를들어, web publisher 단어가 있다면 w를 보여주고 지우고, e를 보여주고 지우고를 반복합니다.

    // "main h2 span" 여기에다가 currentTxt에 저장된 글자를 하나씩 꺼내서 보여주고 지웁니다.
    spanEl.textContent += currentTxt.shift();

    // 아직 보여줘야 할 글자가 남아 있다면
    if (currentTxt.length !== 0) {
      // 남아 있는 글자 데이터 셋에 남은 글자를 반복해서 하나씩 계속 보여줍니다.
      // 단, 글자를 보여줄 때 글자를 보여주는 속도를 글자마다 랜덤하게 바꿉니다.
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }
    // 표시할 글자가 더이상 없다면 텍스트를 지워야 합니다.
    // 텍스트를 지우기 위해 화면에 표시된 문장을 데이터에 넣고
    // deleteTxt 함수를 통해 화면의 글자를 지웁니다.
    else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 500);
    }
  }

  // 텍스트 삭제 효과 구현하기
  function deleteTxt() {
    // 가져온 텍스트 데이터를 끝에서부터 하나씩 삭제합니다.
    currentTxt.pop();
    // 글자 삭제 후 한 글자씩 짤려있는 문자열을 원상태로 되돌립니다.
    //   'w' 'e' 'b' '' 'p' 'u' 'b' 'l' 'i' 's' 'h' 'e' 'r' 하나씩 짤린 상태를 원복합니다.
    spanEl.textContent = currentTxt.join("");

    // 글자 하나 자르고 나서 아직 글자가 남아 있다면 모든 글자가 사라질 때까지 함수를 실행합니다.
    // 특이점은 아래 함수는 자기 자신을 되돌라는 뜻이 되었습니다.
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }
    // 글자를 다 자르고 나면, 인덱스 숫자를 하나 늘려서 다음 문장을 새로 받아옵니다.
    // 다음 문장을 새로 받아 온 후 writeTxt 함수를 실행 시켜서 화면에 한 글자씩 다시 표시합니다.
    // 이런식으로 데이터와 화면에 글자데이터를 주고 받으며 반복합니다.
    else {
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }

  writeTxt();
});
 