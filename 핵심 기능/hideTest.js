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


window.onload = function () {
    selectQuiz(1);
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".container2");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
        });
    });
    containers.forEach(container => {
        container.addEventListener("dragover", e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientX);
            const draggable = document.querySelector(".dragging");
            if (afterElement === undefined) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(container, x) {
        const draggableElements = [
            ...container.querySelectorAll(".draggable:not(.dragging)"),
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