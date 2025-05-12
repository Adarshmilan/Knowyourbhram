const questionAnswerMap = new Map();

questionAnswerMap.set("Why does stuff fall down and not up? (Gravity is cool!)", "Gravity pulls everything towards the Earth.");
questionAnswerMap.set("How did the very first tiny speck of life get started all by itself? (Like magic, but real!)", "Life started from simple things combining over a very long time.");
questionAnswerMap.set("What happens to the stars when they disappear during the day? (Do they go to sleep?)", "The Sun's light is too bright, but stars are still in the sky.");
questionAnswerMap.set("How does our brain make us feel happy or sad or even think about ice cream? (It's like a secret code!)", "Our brain uses chemicals and signals to create feelings and thoughts.");
questionAnswerMap.set("Why are some things see-through and other things solid like a rock? (What's the difference inside?)", "See-through things let light pass through; solid things block it.");
questionAnswerMap.set("Are there other planets out there with little green people (or maybe blue or purple!) living on them? (Are we the only ones?)", "Scientists are looking, but we don't know if other life exists yet.");
questionAnswerMap.set("What are the tiniest bits of stuff that everything is made of, even me and my toys? (Smaller than anything you can see!)", "Everything is made of tiny particles called atoms.");
questionAnswerMap.set("How does a tiny seed turn into a giant tree? (It's like a superpower!)", "Seeds have food and instructions to grow, using sunlight and water.");
questionAnswerMap.set("Why do we look like our parents but not exactly the same? (It's like a mix-and-match game!)", "We get traits from both parents, which mix in different ways.");
questionAnswerMap.set("How does our body know when we are sick and how to fight the germs? (We have tiny superheroes inside us!)", "Our body has a system that fights germs and heals us.");
questionAnswerMap.set("Why does the weather change all the time? (Is the sky playing tricks on us?)", "The weather changes because of the Sun, air, water, and Earth's spin.");
questionAnswerMap.set("How can a tiny little ant lift something way bigger than itself? (They're super strong for their size!)", "Ants have special muscles and can work together to lift heavy things.");
questionAnswerMap.set("Why do we remember some things that happened a long time ago but forget what we ate yesterday? (Our brain is a funny keeper of memories!)", "Our brain stores important memories and sometimes forgets less important ones.");
questionAnswerMap.set("How did people first learn to talk and understand each other? (What were the very first words?)", "People started with simple sounds and gestures, developing into languages over time.");
questionAnswerMap.set("Can we build robots that are as smart as us and can even learn new things? (Will they be our friends?)", "Scientists are working on smart robots, but it's still a big challenge.");
questionAnswerMap.set("Why does the Earth spin around and around? (Does it ever get dizzy?)", "The Earth spins because of how it formed a long, long time ago.");
questionAnswerMap.set("How did the mountains and oceans get here? (Did someone build them?)", "Mountains and oceans formed through Earth's movements over millions of years.");
questionAnswerMap.set("Why do some animals look like they can disappear into their surroundings? (They're masters of hide-and-seek!)", "Some animals have colors and patterns that help them blend in to stay safe.");
questionAnswerMap.set("How does a tiny little bee know how to make honey? (It's like they have a secret recipe!)", "Bees are born knowing how to collect nectar and turn it into honey.");
questionAnswerMap.set("What was the world like before there were any people? (What did the animals and plants do all day?)", "Before people, dinosaurs and other animals lived, and plants grew wild.");




function createcard(question, answer) {
  const newcard = document.createElement("div");
  newcard.className = "card-container";
  newcard.innerHTML = `
    <div class="card">  
        <div class="card-inner">
            <div class="card-front">
              <p> ${question}</p>
            </div>
            <div class="card-back">
              <p>
                ${answer}
              </p>
            </div>
        </div>
    </div>`
    return newcard;
}

const main = document.getElementsByClassName("mainbody");
let k = 0;
questionAnswerMap.forEach((u, v) => {
    if(k >= 14){
        return;
    }
    main[0].appendChild(createcard(v, u));
   
    k++;
});


const cards = document.getElementsByClassName("card");

function rotate() {
  const card = this.querySelector(".card-inner");
  const state = card.style.transform;
  if (state === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}

// cards[0].addEventListener("click", rotate);



for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", rotate);
}