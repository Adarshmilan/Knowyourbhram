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


// for creating cards

function createcard(question, answer) {
  console.log("i am being called");
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



// cards[0].addEventListener("click", rotate);

// for creating a new card for the selected topic
function creatnewcardfortopic(array){
  const main = document.getElementsByClassName("mainbody");
  main[0].innerHTML = "";
  let k = 0;
  array.forEach(([u, v]) => {
      if(k >= 15){
          return;
      }
      console.log(u+" " + v);
      main[0].appendChild(createcard(u, v));
     
      k++;
  });
  const cards = main[0].getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", rotate);
  }
}

// for PHYSICS 
const physicsQA = [
  // Format: [Question, Answer]
  ["Why is the sky blue?", "Sunlight scatters off air molecules (Rayleigh scattering), favoring blue light."],
  ["How do airplanes stay in the air?", "Wings create lift via pressure difference (Bernoulli’s principle)."],
  ["Why does time slow near a black hole?", "Extreme gravity warps spacetime (General Relativity)."],
  ["Can you create energy from nothing?", "No (Energy Conservation), but quantum fluctuations allow temporary particles."],
  ["Why do mirrors flip left-right but not up-down?", "Mirrors reverse front-to-back; your brain interprets it as left-right."],
  ["How does GPS account for relativity?", "Adjusts for time dilation (speed) and gravitational time warping."],
  ["Why do bubbles pop?", "Soap film evaporates or stretches, breaking surface tension."],
  ["What happens if you fall into a black hole?", "Spaghettification (tidal forces stretch you into noodles)."],
  ["Why is light both a particle and a wave?", "Quantum physics: behaves as waves or particles based on observation."],
  ["Why does ice float?", "Water expands when freezing, making ice less dense."],
  ["How do magnets work?", "Moving electrons create fields; aligned spins produce net magnetism."],
  ["Why can’t we see air?", "Molecules are too small/spaced to scatter visible light."],
  ["What is the speed of darkness?", "Darkness is light’s absence—it has no speed."],
  ["Why do stars twinkle?", "Atmospheric turbulence bends starlight randomly."],
  ["Can you break the speed of light?", "No—massive objects need infinite energy to reach it."]
];

const phy = document.getElementById("phy");
phy.addEventListener("click", function() {
  creatnewcardfortopic(physicsQA);
  setActiveButton("phy");
});



// for BiOLOGY
const biologyQA = [
  ["Why do we yawn?", "Possibly to cool the brain or signal tiredness (exact reason still debated)."],
  ["How do chameleons change color?", "Special cells (chromatophores) expand/contract to reflect different light wavelengths."],
  ["Why do leaves change color in fall?", "Chlorophyll breaks down, revealing hidden pigments like carotenoids (yellow/orange)."],
  ["Can plants hear?", "No, but they sense vibrations (e.g., caterpillars chewing) and respond chemically."],
  ["Why do we have fingerprints?", "Improve grip and enhance touch sensitivity (theories suggest evolutionary advantage)."],
  ["How do vaccines work?", "Train immune system with harmless pathogen parts to fight real infections faster."],
  ["Why do cats purr?", "Communication, self-healing (vibrations may promote bone/muscle repair), or comfort."],
  ["What’s the smallest bone in the body?", "Stapes (in your ear), sized like a grain of rice."],
  ["Why do we blink?", "To clean/moisten eyes and protect from debris (involuntary reflex)."],
  ["How do bees make honey?", "Regurgitate nectar, evaporate water, and store in honeycombs."],
  ["Why do onions make you cry?", "Sulfuric compounds react with tears, forming mild sulfuric acid."],
  ["Can animals laugh?", "Yes! Rats, dolphins, and primates vocalize during play (similar to laughter)."],
  ["Why do we get goosebumps?", "Evolutionary leftover: fluffs fur for warmth (or shows fear in animals)."],
  ["How do trees communicate?", "Through fungal networks (mycorrhizae) that transfer nutrients/warnings."],
  ["Why do we dream?", "Theories: memory consolidation, problem-solving, or random brain activity (REM sleep)."]
];

const bio = document.getElementById("bio");
bio.addEventListener("click", function() {
  creatnewcardfortopic(biologyQA);
  setActiveButton("bio");
});

// for EARTH SCIENCE

const earthQA = [
  ["Why is the Earth round?", "Gravity pulls matter equally toward the center, forming a sphere (mostly)."],
  ["What causes the Northern Lights?", "Solar particles collide with atmospheric gases, creating colorful light (auroras)."],
  ["Why do volcanoes erupt?", "Magma rises when pressure exceeds the crust’s strength, releasing gas/lava."],
  ["How old is the Earth?", "~4.54 billion years (measured via radiometric dating of meteorites)."],
  ["Why is the ocean salty?", "Rivers carry dissolved minerals to oceans; water evaporates, leaving salts behind."],
  ["What’s inside Earth’s core?", "Solid iron-nickel inner core, molten outer core (generates magnetic field)."],
  ["Why do earthquakes happen?", "Tectonic plates shift suddenly, releasing stored energy as seismic waves."],
  ["How do clouds float?", "Tiny water droplets are light enough for air currents to keep them aloft."],
  ["Why is the Sahara so dry?", "Subtropical high-pressure zones prevent rain clouds from forming."],
  ["What causes tides?", "Moon’s gravity pulls water toward it (sun’s gravity has a smaller effect)."],
  ["Why is the sky red at sunset?", "Light scatters more at low angles, leaving red/orange wavelengths visible."],
  ["How do diamonds form?", "Carbon atoms crystallize under extreme heat/pressure deep underground."],
  ["Why does wind exist?", "Air moves from high-pressure to low-pressure areas (temperature differences drive this)."],
  ["What’s the hardest natural material?", "Diamond (scratches all other minerals)."],
  ["Why is the Moon moving away?", "Tidal forces transfer Earth’s rotational energy to the Moon’s orbit (~3.8 cm/year)."]
];

const eath = document.getElementById("earth");
eath.addEventListener("click", function() {
  creatnewcardfortopic(earthQA);
  setActiveButton("earth");
});


// for neuroSCIENCE

const neuroQA = [
  ["Why do we forget dreams?", "Most dreams occur in REM sleep; memories fade without consolidation."],
  ["How do memories form?", "Neurons strengthen connections (synapses) via repeated activation (LTP)."],
  ["Why does the brain feel no pain?", "No pain receptors—only surrounding tissues (e.g., meninges) sense pain."],
  ["Can the brain multitask?", "No—it switches tasks rapidly, reducing efficiency by ~40%."],
  ["Why do we laugh?", "Social bonding, stress relief, or incongruity detection (multiple theories)."],
  ["How does caffeine wake you up?", "Blocks adenosine receptors, preventing drowsiness signals."],
  ["Why do optical illusions fool us?", "Brain makes shortcuts (heuristics) that sometimes misinterpret visual data."],
  ["What’s the brain’s energy source?", "Glucose (uses ~20% of the body’s energy despite being 2% of weight)."],
  ["Why do we hiccup?", "Spasms in the diaphragm (possibly evolutionary leftover from gill-breathing ancestors)."],
  ["How does meditation change the brain?", "Increases gray matter in areas linked to focus/emotional control."],
  ["Why do smells trigger memories?", "Olfactory signals bypass thalamus, directly linking to emotion/memory centers."],
  ["Can brain cells regenerate?", "Yes (neurogenesis), but mostly in the hippocampus (memory region)."],
  ["Why do we feel déjà vu?", "Temporal lobe glitch: familiarity circuits fire without context."],
  ["How does stress affect the brain?", "Chronic stress shrinks the hippocampus and impairs memory."],
  ["Why do teenagers take risks?", "Prefrontal cortex (decision-making) matures slower than reward-seeking regions."]
];

const neru = document.getElementById("nurs");
neru.addEventListener("click", function() {
  creatnewcardfortopic(neuroQA);
  setActiveButton("nurs");
});

// for active card
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



// for flipping cards
const cards = document.getElementsByClassName("card");
// Adding event listeners to all cards
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", rotate);
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


