// window.onload = function () {
//     document.querySelector(".wrapper").style.backgroundImage = "url(images/pollback.png)";
// };



const pollquestion = document.querySelector(".pollquestion");
const pollprogr = document.querySelector(".poll-progress");
const topprogress = document.querySelector(".poll-top-progressbar");
const nextpoll = document.querySelector(".next-poll");
const prevpoll = document.querySelector(".prev-poll");
const coment = document.querySelector("#coment");
const ansyes = document.querySelector("#ansyes");
const ansno = document.querySelector("#ansno");



const questions = [
    `Вы знали о том что в трц МегаГринн есть лазертаг арена?`,
    'Вы уже играли в лазертаг ранее?',
    'Считаете ли вы лазертаг игрой только для детей?',
    'Считаете ли вы игру в лазертаг полезной для здоровья?',
    'Есть ли у вас дети ?',
    'Занимаетесь ли вы спортом?',
    'Готовы ли вы оставить отзыв если игра вам понравится?'
    
];

let answerYes=[0,0,0,0,0,0,0];
let answerNo=[0,0,0,0,0,0,0];
let ansvercoment=["","","","","","","","","","",];
let yesNo=["","","","","","","",""];
let allansvers="";

const maxnubmers = 7;

function changetext( question , number ) {
    pollquestion.innerText = question;


    pollprogr.innerText = number + " / " + maxnubmers;

}
let ipoll = 0;
      
function gettext(igrow) {

    ansvercoment[ipoll]=coment.value
    answerYes[ipoll]=ansyes.checked;
    answerNo[ipoll]=ansno.checked;

ipoll= ipoll+igrow;

ansyes.checked=answerYes[ipoll];
ansno.checked=answerNo[ipoll];
coment.value=ansvercoment[ipoll];
if(ipoll<1){
    prevpoll.classList.add("button-blocked");

} else {
    prevpoll.classList.remove("button-blocked");

}



    if (ipoll < 7) {
        
        changetext(questions[ipoll], (ipoll + 1));
        topprogress.style.right = (100 - 100 / (7 / (ipoll + 1))) + "%";
    } else {
        document.querySelector(".poll-first").style.display = "none";
        document.querySelector(".calmgift").style.display = "block";
        for(let i = 0 ; i<7;i++){

            if(answerYes[i]==true){
yesNo[i]="Да";
            };
            if(answerNo[i]==true){
        
yesNo[i]="Нет";
            };


           allansvers+= (i+1)+ ")"+ questions[i] + "  " + yesNo[i]+ " "+ ansvercoment[i]+ '|||| \n';

        }
        console.log(allansvers);
    }


}


nextpoll.addEventListener("click", function(){
    gettext(1);
});
prevpoll.addEventListener("click", function(){
    gettext(-1);} );