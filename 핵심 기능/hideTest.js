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
//정호
function getCardsFromWords(words) {
    let cardsHTML = "";
    let aCardHTML = "";
    let count = 1;
    let changeCount = 0;
    for(let word of words) {
        aCardHTML = `<div class="draggable" draggable="true" originalOrder="${count++}" currentOrder="${changeCount}">${word}</div>`
        cardsHTML += aCardHTML;
    }
    // box 안에, 위에서 생성한 카드들을 추가한다.
    document.querySelector(".cardBox1").innerHTML = cardsHTML;
}
function selectQuiz(quizNo) {
    if(quizNo >= quizSet.quiz.length){
        console.log("퀴즈 번호가 범위를 벗어났습니다.");
        return;
    }
    let words = quizSet.quiz[quizNo].eng.split(" ");
    getCardsFromWords(words);
}

function dragCards() {
    const draggables = document.querySelectorAll(".draggable");
    const cardBox1 = document.querySelectorAll(".cardBox1");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
        });
    });
    cardBox1.forEach(cardBox1 => {
        cardBox1.addEventListener("dragover", e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(cardBox1, e.clientX);
            const draggable = document.querySelector(".dragging");
            if (afterElement === undefined) {
                cardBox1.appendChild(draggable);
            } else {
                cardBox1.insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(cardBox1, x) {
        const draggableElements = [
            ...cardBox1.querySelectorAll(".draggable:not(.dragging)"),
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

window.onload = function () {
    selectQuiz(1);
    dragCards();
}