fetchAndShowFromFile("question/allques.json");

function createcard(question, answer) {
  const newcard = document.createElement("div");
  newcard.className = "card-container";
  newcard.innerHTML = `
    <div class="card">  
        <div class="card-inner">
            <div class="card-front">
              <p>${question}</p>
            </div>
            <div class="card-back">
              <p>
                ${answer}
              </p>
            </div>
        </div>
    </div>`;
  return newcard;
}

function setActiveButton(selectedId) {
  const buttons = document.getElementsByClassName("buto");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id === selectedId) {
      buttons[i].classList.add("active");
    } else {
      buttons[i].classList.remove("active");
    }
  }
}

function rotate() {
  const card = this.querySelector(".card-inner");
  const state = card.style.transform;
  if (state === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}

function fetchAndShowFromFile(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const main = document.getElementsByClassName("mainbody")[0];
      main.innerHTML = "";
        // If data is an object, convert to array; if already array, use as is
        let qaArray = Array.isArray(data) ? data : Object.entries(data);
        // Shuffle the array
        qaArray = shuffleArray(qaArray);
        let k = 0;
        for (const [question, answer] of qaArray) {
          if (k >= 15) break;
          main.appendChild(createcard(question, answer));
          k++;
        }
      // Add flip event listeners to new cards
      const cards = main.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", rotate);
      }
    })
    .catch(error => console.error('Error loading JSON:', error));
}

  // Fisher-Yates shuffle function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
// Button event listeners
document.getElementById("phy").addEventListener("click", function() {
  fetchAndShowFromFile("question/physics.json");
  setActiveButton("phy");
});
document.getElementById("nurs").addEventListener("click", function() {
  fetchAndShowFromFile("question/neuro.json");
  setActiveButton("nurs");
});
document.getElementById("bio").addEventListener("click", function() {
  fetchAndShowFromFile("question/biology.json");
  setActiveButton("bio");
});
document.getElementById("earth").addEventListener("click", function() {
  fetchAndShowFromFile("question/earth.json");
  setActiveButton("earth");
});
document.getElementById("gen").addEventListener("click", function() {
  fetchAndShowFromFile("question/allques.json");
  console.log("General button clicked");
  setActiveButton("gen");
});