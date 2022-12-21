//============================= 전역변수 ========================================
let draggingCard = null; 
let dragOverBox = null; 
let dragOverCard = null;
//============================= Jquery 사용 ====================================
$(window).ready(function () {
    $("#title").hide();
    $(".start").hide();
    $("#title").fadeIn(1000);
    $(".start").delay(1000).fadeIn(1000);

    $("#btn1").click( function(){
        let location = document.querySelector(".rank").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })
    $(".item").click( function(){
        console.log($(".item"));
        if($(this)){
            $(".item").not().removeClass("selectitem");
            $(this).addClass("selectitem");
        }
        let location = document.querySelector(".container2").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })

    $("#checkbtn").click( function(){
        alert("정답입니다!!")
        //let check = document.querySelectorAll(".draggable이나 cardBox1을 해서 찾아준후 roginalOrder 번호를 체크하여 찾으면되는데 그게안됨")
        //check[1] 하면 정보가 나오긴하는데 정보에서 orginaleorder을 못가져오겟음
        //draggable을 쿼리샐랙터올로해서 찾으면 웹사이트에서 순서를 바꿔도 바꾼채로 가져오는게 아니라 만들어진대로 그대로 가져옴 cardbox1을 가져와야할거같음
    })
});
//=========================== 퀴즈 문제 =========================================
function shuffleArray(array) {  //배열 셔플
    array.sort(() => Math.random() - 0.5);
}

function getCardsFromWords2(words) {    //단어를 넣어주고 div 태그 생성
    let cardsHTML = "";
    let aCardHTML = "";
    let count = 1;
    let changeCount = 0;

    shuffleArray(words);

    for(let word of words) {
        aCardHTML = `<div class="card" draggable="true" originalOrder="${count++}" currentOrder="${changeCount}">${word}</div>`
        cardsHTML += aCardHTML;
    }
    
    document.querySelector(".showcard").innerHTML = cardsHTML;
}

function selectQuiz() {
    let quizNo = Math.floor(Math.random() * 3);
    console.log(quizNo);
    if(quizNo >= quizSet.quiz.length){
        console.log("퀴즈 번호가 범위를 벗어났습니다.");
        return;
    }
    let korean = quizSet.quiz[quizNo].kor;
    let words = quizSet.quiz[quizNo].eng.split(" ");
    document.querySelector("#korean").innerHTML = korean;
    console.log(words);
    getCardsFromWords2(words);
}

//=========================== 이벤트 핸들러 연결 =======================================
function addEvent() { 
    let cardArray = document.querySelectorAll(".card");
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
        card.addEventListener("drop", onDropCard);
    }
    
    let boxArray = document.querySelectorAll(".box");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
}
window.onload = function () {
    let items = document.getElementsByClassName("item");
    console.log(items);
    for(let item of items) {
        item.addEventListener("click", selectQuiz);
    }
    addEvent();
}

//=============================수업시간 드래그 앤 드롭================================
//===============================================================================
function onDragStartCard(ev) {
    draggingCard = this;   
    this.classList.add("draggingCard");
}

function onDragEndCard(ev) {
    ev.preventDefault(); 
    this.classList.remove("draggingCard");
    draggingCard = null;

    if(dragOverBox) {
        dragOverBox.classList.remove("overBox");
        dragOverBox = null;
    }
    
    if(dragOverCard) {
        dragOverCard.classList.remove("overCard"); 
        dragOverCard = null;
    }
}

function onDragOverCard(ev) {
    ev.preventDefault();
    ev.stopPropagation(); 
    dragOverCard = this;
    this.classList.add("overCard");
}

function onDragLeaveCard(ev) {
    ev.preventDefault();
    dragOverCard = null;
    this.classList.remove("overCard"); 
}

function onDropCard(ev) {
    this.parentNode.insertBefore(draggingCard, this); 
}
//========박스===================================================================
function onDragOverBox(ev) {
    ev.preventDefault();
    dragOverBox = this;
    this.classList.add("overBox");
}

function onDragLeaveBox(ev) {
    ev.preventDefault();
    dragOverBox = null;
    this.classList.remove("overBox");
}

function onDropBox(ev) {
    dragOverBox.appendChild(draggingCard); 
}