
let age = document.getElementById("age");
let gender = document.getElementsByClassName("gender");
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let calculate = document.getElementById("calculate");
let clr = document.getElementById("clear");
let male = document.getElementById('male');
let female = document.getElementById('female');
let form = document.querySelector('form');
let display = document.getElementById('display');
let ageError = document.getElementById('ageError');
let heightError = document.getElementById('heightError');
let weightError = document.getElementById('weightError');
let object = {
    age : '',
    gender : '',
    height : '',
    weight : ''
}
const radioMale = function(){
    female.checked = false;
}
const radioFemale = function(){
    male.checked = false;
}
male.addEventListener('click',radioMale);
female.addEventListener('click',radioFemale);
calculate.addEventListener('click', function(e){
    e.preventDefault();
    object.age = age.value;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            object.gender = gender[i].value;
        }
    }
    object.height = parseInt(height.value);
    object.weight = parseInt(weight.value);
    let execute = true;
    for(let key in object){
        if(object[key]===''){
            execute = false;
        }
    }
    if(execute){
        if(isNaN(object.age)){
            ageError.style.visibility = "visible";
        }else if(isNaN(object.height)){
            heightError.style.visibility = "visible";
        }else if(isNaN(object.weight)){
            weightError.style.visibility = "visible";
        }else{
            let BMI = object.weight/((object.height/100)**2);
            if(BMI <=16){
                display.innerText= 'Severe thinness';
            }else if(BMI >16 && BMI <=17){
                display.innerText = 'Moderate thinness';
            }else if(BMI >17 && BMI <=18.5){
                display.innerText = 'Mild thinness';
            }else if(BMI >18.5 && BMI <=25){
                display.innerText = 'Normal';
            }else if(BMI >25 && BMI <=30){
                display.innerText = 'Over weight';
            }else if(BMI >30 && BMI <=35){
                display.innerText = 'Obese class I';
            }else if(BMI >35 && BMI <=40){
                display.innerText = 'Obese class II';
            }else if(BMI > 40){
                display.innerText = 'Obese class II'
            }
            ageError.style.visibility = "hidden";
            weightError.style.visibility = "hidden";
            heightError.style.visibility = "hidden";
        }
    }else{
        alert('all fields are mandatory')
    }
})
clr.addEventListener('click', function() {
    form.reset();
    display.innerText = '';
    ageError.style.visibility = "hidden";
    weightError.style.visibility = "hidden";
    heightError.style.visibility = "hidden";
})
