let mode = "sequential";
let queue = [];
let current = null;
let currentIndex = -1;

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQueue(selectedMode) {
  if (selectedMode === "random") {
    return shuffle(data);
  }
  return [...data];
}

function showScreen(screenId) {
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("practiceScreen").classList.add("hidden");
  document.getElementById("finishScreen").classList.add("hidden");
  document.getElementById(screenId).classList.remove("hidden");
}

function startPractice() {
  const checked = document.querySelector('input[name="mode"]:checked');
  mode = checked ? checked.value : "sequential";
  queue = buildQueue(mode);
  currentIndex = 0;

  if (queue.length === 0) {
    showScreen("finishScreen");
    return;
  }

  showScreen("practiceScreen");
  renderCurrent();
}

function renderCurrent() {
  current = queue[currentIndex];
  document.getElementById("img").src = "img/" + current.img;
  document.getElementById("img").alt = current.en;
  document.getElementById("jp").textContent = current.jp;
  document.getElementById("hint").textContent = "";
  document.getElementById("status").textContent = `${currentIndex + 1} / ${queue.length}`;
}

function showHint() {
  if (!current) return;
  const words = current.en.split(" ");
  const hint = words.map((w, i) => (i % 2 === 0 ? "____" : w)).join(" ");
  document.getElementById("hint").textContent = hint;
}

function showAnswer() {
  if (!current) return;
  document.getElementById("hint").textContent = current.en;
}

function nextItem() {
  if (!current) return;
  currentIndex += 1;
  if (currentIndex >= queue.length) {
    current = null;
    showScreen("finishScreen");
    return;
  }
  renderCurrent();
}

function returnToMenu() {
  current = null;
  queue = [];
  currentIndex = -1;
  document.getElementById("hint").textContent = "";
  document.getElementById("status").textContent = "";
  showScreen("menuScreen");
}

showScreen("menuScreen");
