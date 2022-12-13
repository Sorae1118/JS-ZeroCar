//==============================================
// 전역변수 영역
//==============================================
let draggingCard = null; // 드래그 중인 카드 객체로 등록, 전역으로 해줘야 함
let dragOverBox = null;  // 드래깅 객체가 올라간 객체 등록
//==============================================
// class card 객체 이벤트 핸들러 영역  => 이벤트가 발생했을 때 어떻게 처리할 것인가를 정해줌
//==============================================
function onDragStartCard(ev) {
    draggingCard = this;    //이동 중인 특정 카드 this
    this.classList.add("draggingCard"); // 클래스 추가. 모든 HTML 속성은 classList 를 가지고 있음. 즉 여러개의 클래스를 쓸 수 있음
}

function onDragEndCard(ev) {
    ev.preventDefault(); //웹 브라우저의 디폴트 처리를 하지 못하도록 한다.
    this.classList.remove("draggingCard"); //클래스를 제거해줌
    draggingCard = null;
    //dragOverBox가 null이 아니면 처리할 내용 => 즉 dragleave가 발생하지 않았을 때
    if(dragOverBox) {
        dragOverBox.classList.remove("overBox"); //this는 드래그 이벤트임 this를 쓰면 안됨
    }
}
//==============================================
// class box 객체 이벤트 핸들러 영역
//==============================================
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
    dragOverBox.appendChild(draggingCard); //append는 맨 뒤에 추가함
}
//==============================================
window.onload = function() {
    // card 객체 이벤트 핸들러 연결하기
    let cardArray = document.querySelectorAll(".card"); // 모든 카드??
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
    }
    // box 객체 이벤트 핸들러 연결하기
    let boxArray = document.querySelectorAll(".box");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
}
//==============================================

