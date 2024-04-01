let SCISSORS = `가위`;
let ROCK = `바위`;
let PAPER = `보`;

function onScissorsClick() {
  let comInput;
  let rnd = Math.random();

  if (rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
    alert(`비겼어요`);
  } else if (comInput === ROCK) {
    alert(`졌어요`);
  } else {
    alert(`이겼어요`);
  }
}
function onRockClick() {
  let comInput;
  let rnd = Math.random();

  if (rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
    alert(`이겼어요`);
  } else if (comInput === ROCK) {
    alert(`비겼어요`);
  } else {
    alert(`졌어요`);
  }
}
function onPaperClick() {
  let comInput;
  let rnd = Math.random();

  if (rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
    alert(`졌어요`);
  } else if (comInput === ROCK) {
    alert(`이겼어요`);
  } else {
    alert(`비겼어요`);
  }
}
