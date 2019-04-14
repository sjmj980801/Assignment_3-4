const start_button = document.querySelector("#start_button");
const rules_button = document.querySelector("#rules_button");
const info_tag = document.querySelector("#info > form");
const rules_tag = document.querySelector("#rules");
const name_tag = document.querySelector("input[name=name]");
const age_tag = document.querySelector("input[name=age]");
const name_validate = document.querySelector("input[name=name] + div");
const age_validate = document.querySelector("input[name=age] + div");
const get_started_anchor = document.querySelector("#get_started");
const get_started_fail = document.querySelector("#get_started + div");

let name_valid = false;
let age_valid = false;

name_tag.addEventListener("change",function(){
    let name = name_tag.value.replace(/ /g,'');
    localStorage.setItem("name", name_tag.value);
    let valid = name.match(/^[a-z]{3,}$/i);
    if(!valid){
        name_validate.innerText="The name should be more than 3 letters and letters only.";
        localStorage.removeItem("name");
        name_valid = false;
    }else{
        name_valid = true;
        name_validate.innerText = "";
    }
});

age_tag.addEventListener("change",function(){
    let age = age_tag.value.replace(/ /g,'');
    localStorage.setItem("age",age);
    let valid = age.match(/^\d{1,2}$/);
    if(!valid){
        age_validate.innerText="The age should be the number in range of 0-99.";
        age_valid = false;
        localStorage.removeItem("age");
    }else{
        age_validate.innerText = "";
        age_valid = true;
    }
});


start_button.addEventListener("click",function(){
    info_tag.style.display = "block";
    rules_tag.style.display = "none";
        name_tag.value="";
        age_tag.value="";
        name_validate.innerText="";
        age_validate.innerText="";
    }
);

rules_button.addEventListener("click",function(){
    rules_tag.style.display = "block";
    info_tag.style.display = "none";
    }
);

get_started_anchor.addEventListener("click",function(){
    let sex_tag = document.querySelector("input[name=sex]:checked");
    if(age_valid&&name_valid){
        localStorage.setItem("sex",sex_tag.value);
        get_started_anchor.href="html/gaming.html";
    }else{
        get_started_fail.innerText="Fill the form first.";
    }
}, false);
