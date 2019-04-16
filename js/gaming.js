//<editor-fold desc="Classes">
class Question {
    constructor(question, correct_answer, option1, option2, option3) {
        this.question = question;
        this.correct_answer = correct_answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
}
class Round{
    constructor(number, time, tree){
        this.number = number;
        this.tree = tree;
        this.time = time;
    }
}
//</editor-fold>

//<editor-fold desc="Questions_List">
function load_questions() {
    questions.push(new Question(
        "The planet where there exists a situation like pressure cooker:",
        "Venus",
        "Jupiter",
        "Mars",
        "Mercury"));
    questions.push(new Question(
        "If the radius of the earth is reduced by half, then the day-night on the earth would be of: ",
        "6 hrs",
        "12 hrs",
        "18 hrs",
        "36 hrs"));
    questions.push(new Question(
        "Which of the following planet is the nearest to the earth?",
        "Venus",
        "Mercury",
        "Mars",
        "Jupiter"));
    questions.push(new Question(
        "The earth has the size among all the planets:",
        "Fifth",
        "Third",
        "Fourth",
        "Seventh"));
    questions.push(new Question(
        "The largest satellite of the planet Jupiter is:",
        "Gantmede",
        "Uropa",
        "Calisto",
        "None of these"));
    questions.push(new Question(
        "The biggest country in the wolrd:",
        "Russia",
        "Canada",
        "Chima",
        "Japan"));
    questions.push(new Question(
        "The capital city of canada:",
        "otwa",
        "tortonto",
        "venquever",
        "None of these"));
    questions.push(new Question(
        "who is the current president of the usa:",
        "Donald trump",
        "Obama",
        "putin",
        "None of these"));
    questions.push(new Question(
        "The largest satellite of the planet Saturn is:",
        "Titan",
        "Atlas",
        "Tethis",
        "None of these"));
    questions.push(new Question(
        "Who had invented the planet Uranus?",
        "William Herschel",
        "William John",
        "Max Dewar",
        "None of these"));
    questions.push(new Question(
        " The planet whose relevance as a planet has been ended at Prague Summit of IAU is:",
        "Pluto",
        "Uranus",
        "Mars",
        "Ceres"));
    questions.push(new Question(
        "How many HIV positive infections that are occurring everyday in the world?",
        "6,000",
        "60,000",
        "600,000",
        "1,000,000"));
    questions.push(new Question(
        "Bombyx mori, that produces fine filaments of silk inside the cocoon, is a:",
        "Moth",
        "Butterfly",
        "Dipteran (silkworm)",
        "Mulberry plant hemipteran"));
    questions.push(new Question(
        "What is the weight of human heart?",
        "300 gms",
        "100 gms",
        "800 gms",
        "1000 gms"));
    questions.push(new Question(
        "Which of the following  gland controls the blood pressure?",
        "Adrenal gland",
        "Thalamus gland",
        "Thyroid gland",
        "Pancreas gland"));
    questions.push(new Question(
        "In which organ of the human body are the lymphocyte cells formed?",
        "Long bone",
        "Liver",
        "Pancreas",
        "Spleen"));
    questions.push(new Question(
        " Which of the following process that does not involve evolution of CO2?",
        "Photosynthesis",
        "Combustion",
        "Respiration",
        "Fermentation"));
    questions.push(new Question(
        "The basis of the classification of the element in the modern periodic table is:",
        "Atomic number",
        "Atomic mass",
        "Atomic volume",
        "Atomic density "));
    questions.push(new Question(
        "Which of the following is the heaviest metal?",
        "Platinum",
        "Silver",
        "Gold",
        "Mercury"));
    questions.push(new Question(
        "Which of the following is the lightest metal?  ",
        "Lithium",
        "Magnesium",
        "Aluminium",
        "Platinum"));
    questions.push(new Question(
        "Which of the following is the lightest element?  ",
        "Hydrogen",
        "Helium",
        "Mercury",
        "Platinum "));
    questions.push(new Question(
        "Which of the following is the most fundamental property of the element?",
        "Atomic number",
        "Atomic weight",
        "Molecular weight",
        "Atomic density "));
    questions.push(new Question(
        "The process employed to remove the magnetic impurities from the Ores is called:",
        "Magnetic separation process",
        "Gravity separation process",
        "Forth floatation process",
        "Physical process "));
    questions.push(new Question(
        "The concentration process of sulphide ores is:",
        "Forth floatation process",
        "Gravity separation process",
        "Magnetic separation process",
        "Physical process "));
    questions.push(new Question(
        "The main ore of the mercury is:",
        "Cinnabar",
        "Pyrite",
        "Bauxite",
        "Pyrolusite"));
    questions.push(new Question(
        "The element radium was extracted from:",
        "Pinch blend",
        "Lime stone",
        "Retile",
        "Haematite"));
    questions.push(new Question(
        " Aluminium metal is extracted mainly from its ore:",
        "Bauxite",
        "Magnetite",
        "Dolomite",
        "Lime Pigment"));
    questions.push(new Question(
        "Which of the following is the world's deepest Ocean?",
        "Pacific Ocean",
        "Indian Ocean",
        "Atlantic Ocean",
        "Arctic Ocean"));
    questions.push(new Question(
        "What is ebb?",
        "Withdrawl of tide",
        "Ocean Current",
        "Withdrawl of monsson",
        "Climate Change"));
    questions.push(new Question(
        "Which of the following is the cold Atlantic Currents?",
        "Cayenne Current",
        "California Current",
        "Kuroshino Current",
        "Peruvian Drift"));
    questions.push(new Question(
        "The North Pole lies in the middle of which Ocean?",
        "Arctic Ocean",
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean"));
    questions.push(new Question(
        "Which of the following Ocean is 'S' shaped?",
        "Atlantic Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
        "Indian Ocean"));
    questions.push(new Question(
        "Mariana Trench lies in which of the following Ocean?",
        "Pacific Ocean",
        "Atlantic Ocean",
        "Arctic Ocean",
        "Indian Ocean"));
    questions.push(new Question(
        " Which of the following are responsible for evolution of amphibians and further terrestrial animals?",
        "Tides",
        "Monsoon",
        "Climate Change",
        "Coral Reef"));
    questions.push(new Question(
        "Which of the following part of the Sun is visible by human?",
        "Photosphere",
        "Corona",
        "Chromospheres",
        "Core"));
    questions.push(new Question(
        "Which of the following part of the Sun is visible at the time of eclipse?",
        "Corona",
        "Photosphere",
        "Chromosphere",
        "Core"));
    questions.push(new Question(
        "Which is the deepest point from the sea level on the Earth?",
        "Mariana Trench",
        "North Channel",
        "Pacific Ocean",
        "Red Sea"));
    questions.push(new Question(
        "What is the time taken by the light of the Sun to reach on the Earth?",
        "8 Minute 18 Second",
        "8 Minute",
        "9 Minute",
        "7 minute 20 Second"));
    questions.push(new Question(
        "Which of the following is the largest planet of the Solar System according to size?",
        "Jupiter",
        "Satrun",
        "Neptune",
        "Uranus"));
    questions.push(new Question(
        "Which of the following planets in the Solar System takes shortest revolution?",
        "Mercury",
        "Neptune",
        "Mars",
        "Venus"));
    questions.push(new Question(
        "Find the Jovial Planets among the following.",
        "Uranus",
        "Mars",
        "Earth",
        "Venus"));
    questions.push(new Question(
        " Which planet in the Solar System has highest density?",
        "Earth",
        "Uranus",
        "Neptune",
        "Jupiter"));
    questions.push(new Question("What is the next number in the following sequence– 7, 14, 21, 28?",
        "35",
        "20",
        "17",
        "42",));
    questions.push(new Question("What makes up (approx.) 80% of our brain’s volume?",
        "Water",
        "Skin",
        "Bone",
        "Blood",));
    questions.push(new Question("How many months do we have in a year?",
        "12 months",
        "2 months",
        "120 months",
        "20 months",));
    questions.push(new Question("How many colors are there in a rainbow?",
        "7",
        "8",
        "9",
        "10",));
    questions.push(new Question(" Without fingers I point, without arms I strike, without feet I run. What am I?",
        "A clock.",
        "A rock.",
        "A wheel.",
        "A Pen.",));
    questions.push(new Question(" How many days are there in a year?",
        "365 days",
        "265 days",
        "465 days",
        "165 days",));
    questions.push(new Question("What is the answer of this difficult math question?\n 2 * 3 - 3 = ?",
        "3",
        "2",
        "0",
        "1",));
    questions.push(new Question("Info.cern.ch is famous for being what?",
        "The world's very first website.",
        "The world's very first chat room.",
        "The world's very first company.",
        "The world's very first develop team.",));
    questions.push(new Question(" I'm strong as a rock, but a word can destroy me. What am I?",
        "Silence",
        "Love",
        "Hate",
        "Freedom",));
    questions.push(new Question("I'm called thick when close to the ground, but people smile when I'm high. What am I?",
        "A cloud.",
        "A bird.",
        "A umbrella",
        "A airplane.",));
    questions.push(new Question("The more you cut me the bigger I grow. What am I?",
        "A Hole",
        "A Paper",
        "A hope",
        "A key",));
    questions.push(new Question("What flies when it’s born, lies when it’s alive, and runs when it’s dead?",
        "A snowflake",
        "A drop of water",
        "A bullet",
        "A voice",));
    questions.push(new Question("If you throw me out of a window, you’ll leave a grieving wife. If you leave me in the middle of the door, you might just save a life. What am I?",
        "The letter “N”.",
        "The letter “E”.",
        "The letter “B”.",
        "The letter “Q”.",));
    questions.push(new Question("What question can someone ask all day long, always get totally different answers, and yet all the answers could be correct?",
        "What time is it?",
        "How are you?",
        "What is the weather today?",
        "Doesn't it look cool?",));
    questions.push(new Question("Which insect is the smallest?",
        "Ant",
        "Bee",
        "Butterfly",
        "Spider",));
    questions.push(new Question("What day it is on the third day of the week if the week starts with Tuesday?",
        "Thursday",
        "Monday",
        "Holiday",
        "Summer day",));
    questions.push(new Question("Why do we stop when the traffic light turns red?",
        "Because we obey the traffic rule.",
        "Because it's fun.",
        "Because we decide to show off at the intersection.",
        "Because we want to take a rest.",));
    questions.push(new Question("How many consonants are there in the English alphabet?",
        "21",
        "22",
        "20",
        "31",));
    questions.push(new Question("What is the Italian word for pie?",
        "Pizza",
        "Pipe",
        "Pip",
        "Peach",));
    questions.push(new Question("What grows quicker?",
        "Hair",
        "Toenails",
        "Finger",
        "Head",));
    questions.push(new Question("After you go through a fall I will take over. All life will stall, or at least grow slower. What am I?",
        "Winter",
        "Faith",
        "Perseverance",
        "Insubordination",));
    questions.push(new Question("Name the French novelist and poet, born in 1802, who was exiled to Jersey and who wrote about a hunchback.",
        "Victor Hugo",
        "Colette",
        "Marcel Proust",
        "George Sand",));
    questions.push(new Question("What takes place in Hong Kong's Happy Valley?",
        "Horse racing",
        "Horse flying",
        "Horse eating",
        "horse jumping",));
    questions.push(new Question("Which reptile, according to the song, should you never smile at?",
        "Crocodile",
        "Chameleon",
        "Turtle",
        "Snake",));
    questions.push(new Question("Which Saint’s Day is celebrated on 14th February?",
        "Saint Valentine",
        "Christmas",
        "New Year",
        "Saint Holiday",));
    questions.push(new Question("In which ocean did the famous Titanic sink in 1912?",
        "North Atlantic Ocean",
        "pacific Ocean",
        "Ocean Habitat",
        "Mediterranean",));
    questions.push(new Question("Which two parts of the body continue to grow for your entire life?",
        "Nose and ears",
        "Head and hand",
        "Mouth and eyes",
        "Heart and soul",));
    questions.push(new Question("What has 13 hearts but no organs?",
        "A deck of cards",
        "A demon from hell",
        "A monster",
        "An angel from heaven",));
    questions.push(new Question("I can bring a smile to your face, a tear to your eye, or even a thought to your mind. But, I can’t be seen. What am I?",
        "A Memory",
        "A gust of wind",
        "A smile",
        "A glance",));
    questions.push(new Question("I can be made and I can be played. I can be cracked and I can be told. What am I?",
        "A joke",
        "A game",
        "A story",
        "A portrait",));
    shuffled_list(questions);
}
//</editor-fold>

//<editor-fold desc="rounds_list">
function load_rounds(){
    rounds.push(new Round(1, 120, ["$500,000", "$250,000", "$125,000", "$75,000", "$50,000", "$10,000", "$5000", "$1000", "$0"]));
    rounds.push(new Round(2, 90, ["$500,000", "$250,000", "$125,000", "$75,000", "$50,000", "$10,000", "$5000", "$1000", "$0"]));
    rounds.push(new Round(3, 30, ["3", "2", "1"]));
}
//</editor-fold>

//<editor-fold desc="Functions">
const shuffled_list = list => list.sort(()=>Math.random()-0.5);

function create_element(element_name, text){
    let element = document.createElement(element_name);
    element.innerText = text;
    return element;
}

function render_question( question=questions.pop()){
    stage_div.innerHTML = "";
    current_question = question;
    let question_tag = create_element("div", current_question.question);
    stage_div.appendChild(question_tag);
    render_option(current_question);
}

function render_option(question){
    let options = shuffled_list([question.correct_answer,question.option1,question.option2,question.option3]);
    options.forEach(option=>{
        let option_tag = create_element("div", option);
        stage_div.appendChild(option_tag);
        option_tag.addEventListener("click",()=>{
            // q.correct_answer === x
            if(question.correct_answer===option_tag.innerText){
                render_question();
                tree_move_up(current_round);
            }else if(current_round.number!==3){
                render_question();
                reset_money_tree();
            }else{
                stage_div.innerHTML = `${greeting} ${name}, You are The Weakest Link, goodbye 👋`;
                gaming = false;
            }
        });
    });
}


function render_money_tree(index=(current_round.tree.length-1)){
    let tree = current_round.tree;
    money_tree_div.innerHTML ="";
    tree.forEach((branch, i)=>{
        let branch_tag = create_element("div", branch);
        money_tree_div.appendChild(branch_tag);
        if(i===index){
            branch_tag.classList.add("current_branch");
        }
    });
}

function tree_move_up(round){
    let current_branch_div = document.querySelector(".current_branch");
    try{
        current_branch_div.previousSibling.classList.add("current_branch");
    }catch {
        if(round.number!==3){
            bank_branch();
            reset_money_tree();
        }else{
            stage_div.innerHTML = `🎉Congratulations for our winner, ${greeting} ${name}, you are The Strongest Link, $${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} is yours now.`;
            gaming = false;
        }
    }
    current_branch_div.classList.remove("current_branch");
}

function reset_money_tree(){
    let current_branch_div = document.querySelector(".current_branch");
    current_branch_div.classList.remove("current_branch");
    money_tree_div.lastChild.classList.add("current_branch");
}

function bank_branch(){
    let current_branch_div = document.querySelector(".current_branch");
    let gonna_bank = current_branch_div.innerText.replace('$','').replace(/,/g,'');
    bank += parseInt(gonna_bank);
    bank_div.innerText = `$${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function enable_bank(){
    bank_button.addEventListener("click",()=>{
        if(current_round.number!==3){
            bank_branch();
            reset_money_tree();
        }
    });
}

function begin_timer(time=current_round.time){
    timer = setInterval(()=>{
        if(time === 0){
            clearInterval(timer);
            if(current_round.number!==3){
                render_round(rounds.shift());
            }
            else{
                stage_div.innerHTML = `${greeting} ${name}, You are The Weakest Link, goodbye 👋`;
                gaming = false;
            }
        }else if(!gaming)
            clearInterval(timer);
        timer_div.innerText = time;
        time -= 1;
    },1000);
}

function render_round(round, index, question, time){
    current_round = round;
    round_div.innerText = `ROUND ${round.number}`;
    render_money_tree(index);
    render_question(question);
    begin_timer(time);
    enable_bank();
    gaming = true;
}

function save(){
        localStorage.setItem("current_round",JSON.stringify(current_round));
        localStorage.setItem("current_rounds",JSON.stringify(rounds));
        localStorage.setItem("current_question",JSON.stringify(current_question));
        localStorage.setItem("current_questions",JSON.stringify(questions));
        localStorage.setItem("current_bank",JSON.stringify(bank));
        let current_branch = document.querySelector(".current_branch");
        let current_tree_index =current_round.tree.indexOf(current_branch.innerText);
        localStorage.setItem("current_tree_index",JSON.stringify(current_tree_index));
        localStorage.setItem("current_time",JSON.stringify(timer_div.innerText));
        localStorage.setItem("saved",JSON.stringify(true));
}

function resume(){
    clearInterval(timer);
    let resume_round = JSON.parse(localStorage.getItem("current_round"));
    rounds = JSON.parse(localStorage.getItem("current_rounds"));
    let resume_time = parseInt(JSON.parse(localStorage.getItem("current_time")));
    let resume_tree_index = JSON.parse(localStorage.getItem("current_tree_index"));
    let resume_question = JSON.parse(localStorage.getItem("current_question"));
    bank = JSON.parse(localStorage.getItem("current_bank"));
    bank_div.innerText = `$${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    questions = JSON.parse(localStorage.getItem("current_questions"));
    render_round(resume_round, resume_tree_index, resume_question, resume_time);
}

function init(){
    stage_div.innerText =`Welcome to The Weakest Link, ${greeting} ${name}, click the button go to Round 1`;
    let button = create_element("button", "ROUND 1");
    stage_div.appendChild(button);
    button.addEventListener("click",()=>{
        load_questions();
        load_rounds();
        let round = rounds.shift();
        render_round(round);
    }, {once: true});
}
//</editor-fold>

const round_div = document.querySelector("#round");
const stage_div = document.querySelector("#game_stage");
const money_tree_div = document.querySelector("#money_tree");
const bank_div = document.querySelector("#bank");
const bank_button = document.querySelector("#bank + div");
const timer_div = document.querySelector("#timer");
const save_div = document.querySelector("#save");
const resume_div = document.querySelector("#resume");
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
const sex = localStorage.getItem("sex");

let greeting;
if(sex==="male"){
    greeting = "Mr.";
}else if(sex==="female"){
    greeting = "Ms.";
}

let questions = [];
let rounds=[];
let bank = 0;
let timer;
let gaming = false;
let current_question;
let current_round;

init();

save_div.addEventListener("click",()=>{
    if(gaming)
        save();
});

resume_div.addEventListener("click",()=>{
    let saved = JSON.parse(localStorage.getItem("saved"));
    if(saved)
        resume();
});
