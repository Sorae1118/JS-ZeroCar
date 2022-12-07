//===============================================================
//전역변수 영역
//===============================================================
let draggingCard = null; //드래깅 중인 카드 객체로 설정
let dragOverBox = null; //드래깅 객체가 올라간 box 객체 등록
let dragOverCard = null; //드래깅 객체가 올라간 card 객체등록
//===============================================================
// class card 객체 이벤트 헨들러 영역
//===============================================================
function onDragStartCard(ev) {
    draggingCard = this;
    this.classList.add("draggingCard");
    //모든 html객체는 클래스 리스트라는 객체를 가지고잇다
}
//===============================================================
function onDragEndCard(ev) {
    ev.preventDefault();  //웹브라우저의 디폴트 처리를 하지 못하도록 한다.
    this.classList.remove("draggingCard");
    draggingCard = null;
    if(dragOverBox) {//dragOverBox가 설정되어있으면 통과 
        dragOverBox.classList.remove("overBox");
        dragOverBox = null;
    }
    //drag over Card가 null이 아니면 처리할 내용
    if(dragOverCard) {
        dragOverCard.classList.remove("overCard");
        dragOverCard = null;
    }
}
//===============================================================
function onDragOverCard(ev) {
    ev.preventDefault();
    ev.stopPropagation(); // dragover 이벤트가 부모 노드로 전파되는것을 차단.
    dragOverCard = this;
    this.classList.add("overCard");
}
//===============================================================
function onDragLeaveCard(ev) {
    ev.preventDefault();
    dragOverCard = null;
    this.classList.remove("overCard")
}
//===============================================================
//class Box 객체 이벤트 핸들러 영역
function onDragOverBox(ev) { //핸들러에선 기본적으로 이벤트 객체가 붙음 ev넣어주기
    ev.preventDefault(); //브라우저가 선조치를 할수없게끔함
    this.classList.add("overBox");
    dragOverBox = this;
    //dragOverBox가 null이 아니면 처리할 내용
    }
//===============================================================
function onDragLeaveBox(ev) {
    ev.preventDefault();
    this.classList.remove("overBox");
    dragOverBox = null;
}
//===============================================================
function onDropBox(ev) {
    dragOverBox.appendChild(draggingCard);
}
//===============================================================

//===============================================================
window.onload = function() { 
    let cardArray = document.querySelectorAll(".card");
    for(let card of cardArray){
        card.addEventListener("dragstart",onDragStartCard) //("drangstartcard",  ) 할때 on을 빼줘야됨
        card.addEventListener("dragend",onDragEndCard)
        card.addEventListener("dragover",onDragOverCard) 
        card.addEventListener("dragleave",onDragLeaveCard)
    }
    //box 객체 이벤트 핸들러 연결하기
    let boxArray = document.querySelectorAll(".box");
    for(let box of boxArray){
        box.addEventListener("dragover",onDragOverBox)
        box.addEventListener("dragleave",onDragLeaveBox)
        box.addEventListener("drop",onDropBox)
    }

    let boxArray2 = document.querySelectorAll(".cardbox");
    for(let box of boxArray2){
        box.addEventListener("dragover",onDragOverBox)
        box.addEventListener("dragleave",onDragLeaveBox)
        box.addEventListener("drop",onDropBox)
    }
}
//===============================================================
//===============================================================

$(document).ready(function(){
    $("#btnOff").click(function(){
        $("li").slideUp(500);
    });

});
