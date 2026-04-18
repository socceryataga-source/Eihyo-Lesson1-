let current;

function nextItem(){
  current = data[Math.floor(Math.random()*data.length)];
  document.getElementById("img").src = "img/" + current.img;
  document.getElementById("jp").textContent = current.jp;
  document.getElementById("hint").textContent = "";
}

function showHint(){
  let words = current.en.split(" ");
  let hint = words.map((w,i)=> i%2===0 ? "____" : w).join(" ");
  document.getElementById("hint").textContent = hint;
}

function showAnswer(){
  document.getElementById("hint").textContent = current.en;
}

nextItem();