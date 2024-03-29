//============================= 전역변수 ========================================
let draggingCard = null; 
let dragOverBox = null; 
let dragOverCard = null;
//============================= Jquery 사용 ====================================
$(document).ready(function(){
    $("#checkBtn").click(function(){
        $(".container3").show();
        $("#loading").fadeIn(1000);
        let location = document.querySelector(".container3").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
        $("#loading").delay(3000).fadeOut(1000);
    });
});
$(window).ready(function () {
    $("#title").hide();
    $(".start").hide();
    $(".container2").hide();
    $(".container3").hide();
    $(".container4").hide();
    $(".container5").hide();

    $("#title").fadeIn(1000);
    $(".start").delay(1000).fadeIn(1000);

    $("#btn1").click( function(){
        let location = document.querySelector(".rank").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })

    $(".item").click( function(){
        $(".container2").hide();
        $(".container3").hide();
        $(".container4").fadeOut();
        $(".container5").fadeOut();
        console.log($(".item"));
        if($(this)){
            $(".item").not().removeClass("selectitem");
            $(this).addClass("selectitem");
        }
        $(".container2").fadeIn(1500);
        let location = document.querySelector(".container2").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })

    $("#checkBtn").click(function(){
        $(".container3").delay(4000).fadeOut();
        if(check()){
            $(".container4").hide();
            $(".container4").delay(4000).fadeIn(1000);
        }else{
            $(".container5").hide();
            $(".container5").delay(4000).fadeIn(1000);
        }
    });

    $("#btn2").click( function() {
        $(".container4").fadeOut();
        $(".item").not().removeClass("selectitem");
        let location = document.querySelector(".rank").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
        $(".container2").fadeOut();
    })

    $("#btn3").click( function() {
        $(".container5").hide();
        $(".container2").hide();
        $(".container2").fadeIn();
        let location = document.querySelector(".container2").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })
});

//============================= 퀴즈 문제 ======================================
let quizNo; //퀴즈 번호
let rank;   //초급, 중급, 고급

function check() {
    let ans = answer(quizNo, rank);
    let f = document.querySelectorAll(".card");
    console.log(ans);
    console.log(f);
    for(let i = 0; i < ans.length; i++) {
        if(f[i].textContent != ans[i]){
            console.log("틀림");
            return false;
        }
    }
    console.log("정답");
    return true;
}

function shuffleArray(array) {  //배열 셔플
    array.sort(() => Math.random() - 0.5);
}

function getCardsFromWords2(words) {    //단어를 넣어주고 div 태그 생성
    let cardsHTML = "";
    let aCardHTML = "";
    let count = 1;

    shuffleArray(words);

    for(let word of words) {
        aCardHTML = `<div class="card" draggable="true" originalOrder="${count++}" 
        data-aos="flip-left" data-aos-delay="600">${word}</div>`;
        cardsHTML += aCardHTML;
    }
    // box 안에, 위에서 생성한 카드들을 추가한다.
    document.querySelector(".showcard").innerHTML = cardsHTML;
    addEvent();
}

function selectQuiz() {
    quizNo = 0;
    let korean = "";
    let words = "";

    if(this.id == "item1") {
        rank = 1;
        quizNo = Math.floor(Math.random() * quizSet.quiz1.length);
        korean = quizSet.quiz1[quizNo].kor;
        words = quizSet.quiz1[quizNo].eng.split(" ");
    }
    if(this.id == "item2") {
        rank = 2;
        quizNo = Math.floor(Math.random() * quizSet.quiz2.length);
        korean = quizSet.quiz2[quizNo].kor;
        words = quizSet.quiz2[quizNo].eng.split(" ");
    }
    if(this.id == "item3") {
        rank = 3;
        quizNo = Math.floor(Math.random() * quizSet.quiz3.length);
        korean = quizSet.quiz3[quizNo].kor;
        words = quizSet.quiz3[quizNo].eng.split(" ");
    }
    console.log(rank);
    console.log(quizNo);
    
    document.querySelector("#korean").innerHTML = korean;
    getCardsFromWords2(words);
}

//=========================== 이벤트 핸들러 연결 ============================
function onDragStartCard(ev) {
    console.log(this);
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

function addEvent() {
    let cardArray = document.querySelectorAll(".card");
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
        card.addEventListener("drop", onDropCard);
    }

    let boxArray = document.querySelectorAll(".showcard");
    for(let box of boxArray) {
        box.addEventListener("dragover",onDragOverBox);
        box.addEventListener("dragleave",onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
    let btn = document.querySelector("#checkBtn");
    btn.addEventListener("click", check);

    console.log(cardArray);
    console.log(boxArray);
}

window.onload = function() {
    
    let items = document.getElementsByClassName("item");
    console.log(items);
    for(let item of items) {
        item.addEventListener("click", selectQuiz);
    }
}

history.scrollRestoration = "manual"; //새로고침 시 top 0 