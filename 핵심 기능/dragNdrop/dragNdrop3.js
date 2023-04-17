//==============================================
// 전역변수 영역
//==============================================
let draggingCard = null; // 드래그 중인 카드 객체로 등록, 전역으로 해줘야 함
let dragOverBox = null;  // 드래깅 객체가 올라간 box 객체 등록
let dragOverCard = null; // 드래깅 객체가 올라간 card 객체 등록
//let strQuiz = "How was your day?";
//let quizWords = strQuiz.split(" "); //빈칸 단위로 단어들이 배열에 저장됨. 4개의 단어
//let c = document.querySelector(".card") => 중요! card클래스가 여러개 있을 때 쿼리 셀렉터는 맨 첫번째를 들고옴
//==============================================
// words 배열에 있는 단어들로 카드들을 생성하는 HTML 문장을 완성하는 함수
function getCardsFromWords(words) {
    let cardsHTML = "";
    let aCardHTML = "";
    let count = 1;
    let changeCount = 0;
    for(let word of words) {
        aCardHTML = `<div class="card" draggable="true" originalOrder="${count++}" currentOrder="${changeCount}">${word}</div>`
        cardsHTML += aCardHTML;
    }
    // box 안에, 위에서 생성한 카드들을 추가한다.
    document.querySelector(".box").innerHTML = cardsHTML;
}
function selectQuiz(quizNo) {
    if(quizNo >= quizSet.quiz.length){
        console.log("퀴즈 번호가 범위를 벗어났습니다.");
        return;
    }
    let words = quizSet.quiz[quizNo].eng.split(" ");
    getCardsFromWords(words);
}
//==============================================
// class card 객체 이벤트 핸들러 영역  => 이벤트가 발생했을 때 어떻게 처리할 것인가를 정해줌
//==============================================
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
//==============================================
// class box 객체 이벤트 핸들러 영역
//==============================================
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
//==============================================
window.onload = function() {
    // 단어 카드들을 먼저 생성한다
    //getCardsFromWords(quizWords);
    selectQuiz(1);
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
    let boxArray = document.querySelectorAll(".box");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
}
let items = document.getElementsByClassName("item");
    console.log(items);
    for(let item of items) {
        item.addEventListener("click", selectQuiz);
    }
//==============================================