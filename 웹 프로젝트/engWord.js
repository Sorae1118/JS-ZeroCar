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
//============================= 퀴즈 문제 ======================================
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
    // box 안에, 위에서 생성한 카드들을 추가한다.
    document.querySelector(".showcard").innerHTML = cardsHTML;
}

function selectQuiz() {
    let quizNo = Math.floor(Math.random() * 4);
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

//=========================== 이벤트 핸들러 연결 ============================
function onDragStartCard(ev) {
    draggingCard = this;    //이동 중인 특정 카드 this
    this.classList.add("draggingCard"); // 클래스 추가. 모든 HTML 속성은 classList 를 가지고 있음. 즉 여러개의 클래스를 쓸 수 있음
}

function onDragEndCard(ev) {
    ev.preventDefault(); //웹 브라우저의 디폴트 처리를 하지 못하도록 한다. ???????
    this.classList.remove("draggingCard"); //클래스를 제거해줌
    draggingCard = null;
    //dragOverBox가 null이 아니면 처리할 내용 => 즉 dragleave가 발생하지 않았을 때
    if(dragOverBox) {
        dragOverBox.classList.remove("overBox"); //this는 드래그 이벤트임 this를 쓰면 안됨
        dragOverBox = null;
    }
    //dragOverCar가 null이 아니면
    if(dragOverCard) {
        dragOverCard.classList.remove("overCard"); 
        dragOverCard = null;
    }
}

function onDragOverCard(ev) {
    ev.preventDefault();
    ev.stopPropagation(); //dragOver 이벤트가 부모 노드로 전파되는 것을 차단한다. 즉 박스에 영향을 주지 않기 위함.
    dragOverCard = this;
    this.classList.add("overCard");
}

function onDragLeaveCard(ev) {
    ev.preventDefault();
    dragOverCard = null;
    this.classList.remove("overCard"); 
}

function onDropCard(ev) {
    this.parentNode.insertBefore(draggingCard, this); //모든 객체는 parentNode가 있음. insertBefore(삽입할 객체, 뒤에 위치하는 객체)
}

//=========================== 박스 ====================================
function onDragOverBox(ev) {
    ev.preventDefault();
    dragOverBox = this;
    this.classList.add("overBox");  //this 의 정확한 의미를 알아야 함
}

function onDragLeaveBox(ev) {
    ev.preventDefault();
    dragOverBox = null;
    this.classList.remove("overBox");
}

function onDropBox(ev) {
    dragOverBox.appendChild(draggingCard); //append는 맨 뒤에 추가함
}

window.onload = function() {
    let items = document.getElementsByClassName("item");
    console.log(items);
    for(let item of items) {
        item.addEventListener("click", selectQuiz);
    }

    // card 객체 이벤트 핸들러 연결하기
    let cardArray = document.querySelectorAll(".card"); // 모든 카드??
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
        card.addEventListener("drop", onDropCard);
    }
    // box 객체 이벤트 핸들러 연결하기
    let boxArray = document.querySelectorAll(".showcard");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
}
