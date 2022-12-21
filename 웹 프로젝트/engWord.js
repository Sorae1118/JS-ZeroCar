$(window).ready(function () {
    $("#dmd").hide();
    $(".d1").hide();
    $("#dmd").fadeIn(1000);
    $(".d1").delay(1000).fadeIn(1000);

    $("#btn1").click( function(){
        let location = document.querySelector("#cardBox").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })
    $(".item").click( function(){
        console.log($(".item"));
        if($(this)){
            $(".item").not().removeClass("selectItem");
            $(this).addClass("selectItem");
        }
        let location = document.querySelector(".container2").offsetTop;
        window.scrollTo({ top: location, behavior: "smooth" });
    })

    $("#checkBtn").click( function(){
        alert("정답입니다!!")
        //let check = document.querySelectorAll(".draggable이나 cardBox1을 해서 찾아준후 roginalOrder 번호를 체크하여 찾으면되는데 그게안됨")
        //check[1] 하면 정보가 나오긴하는데 정보에서 orginaleorder을 못가져오겟음
        //draggable을 쿼리샐랙터올로해서 찾으면 웹사이트에서 순서를 바꿔도 바꾼채로 가져오는게 아니라 만들어진대로 그대로 가져옴 cardbox1을 가져와야할거같음
    })
});

function getCardsFromWords2(words) {
    let cardsHTML = "";
    let aCardHTML = "";
    let count = 1;
    let changeCount = 0;

    function shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffleArray(words);

    for(let word of words) {
        aCardHTML = `<div class="card" draggable="true" originalOrder="${count++}" currentOrder="${changeCount}">${word}</div>`
        cardsHTML += aCardHTML;
    }
    // box 안에, 위에서 생성한 카드들을 추가한다.
    document.querySelector(".randomCard").innerHTML = cardsHTML;
    cardsHTML.classList.add("draggable");
}

function randomNumber(min, max) {
    if(max > 300)
        max -= 100
    return Math.random() * (max - min) + min;
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

function dragCards() {
    const draggables = document.querySelectorAll(".card");
    const randomCards = document.querySelectorAll(".randomCard");

    draggables.forEach(card => {
        card.addEventListener("dragstart", () => {
            card.classList.add("dragging");
        });

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
        });
    });

    randomCards.forEach(randomCard => {
        randomCard.addEventListener("dragover", e => {
            e.preventDefault(); 
        const afterElement = getDragAfterElement(randomCard, e.clientX);
        const card = document.querySelector(".card");
        if (afterElement === undefined) {
            randomCard.appendChild(card);
        } else {
            randomCard.insertBefore(card, afterElement);
        }
        });
    });

    function getDragAfterElement(randomCard, x) {
        const draggableElements = [
        ...randomCard.querySelectorAll(".draggable:not(.dragging)"),
        ];

        return draggableElements.reduce(
            (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            // console.log(offset);
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
            },
            { offset: Number.NEGATIVE_INFINITY },
        ).element;
    }
}
function clickButton() {
 
}
window.onload = function () {
    let items = document.getElementsByClassName("item");
    console.log(items);
    for(let item of items) {
        item.addEventListener("click", selectQuiz);
    }
    dragCards();
}