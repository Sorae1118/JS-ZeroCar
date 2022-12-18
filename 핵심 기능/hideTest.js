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
});

//정호
function getCardsFromWords(words) {
    let field = document.querySelector('.randomCard');
    let fieldRect = field.getBoundingClientRect();
    let xMin = 0;
    let yMin = 0;
    let xMax = fieldRect.width;
    let yMax = fieldRect.height;

    let cardsHTML = "";
    let newDiv = "";
    let count = 1;
    let changeCount = 0;
    for(let word of words) { //단어 만큼 div를 만들어줌
        //newDiv = `<div draggable="true" originalOrder="${count++}" currentOrder="${changeCount}">${word}</div>`
        let newDiv = document.createElement('div');
        newDiv.innerHTML = word;
        newDiv.classList.add("draggable");

        let x = randomNumber(xMin, xMax);
        let y = randomNumber(yMin, yMax);
      
        newDiv.style.position = 'absolute';
        newDiv.style.left = `${x}px`;
        newDiv.style.top = `${y}px`;

        field.appendChild(newDiv);
    }

    // box 안에, 위에서 생성한 카드들을 추가한다.
    //let card = document.querySelector(".randomCard");
    //card.innerHTML = cardsHTML;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
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