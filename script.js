let current;
let remaining = [];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetQueue() {
  remaining = shuffle(data);
}

function nextItem() {
  if (remaining.length === 0) {
    resetQueue();
  }

  current = remaining.pop();
  document.getElementById("img").src = "img/" + current.img;
  document.getElementById("img").alt = current.en;
  document.getElementById("jp").textContent = current.jp;
  document.getElementById("hint").textContent = "";
}

function showHint() {
  const words = current.en.split(" ");
  const hint = words.map((w, i) => (i % 2 === 0 ? "____" : w)).join(" ");
  document.getElementById("hint").textContent = hint;
}

function showAnswer() {
  document.getElementById("hint").textContent = current.en;
}

resetQueue();
nextItem();
