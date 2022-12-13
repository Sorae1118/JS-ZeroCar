function gid(id) {
    return document.getElementById(id);
}
function mouseOver(ev) {
    ev.stopPropagation(); // 상위로 전파되는 특성을 가지는 이벤트 객체에게, 전파를 막아주는 메소드. 안쓰면 상위 태그들도 실행됨
    this.style.backgroundColor = "pink";
    gid("eventLog").innerHTML += `mouse Over ${this.id}<br>`; //innerHTMl안은 html 영역임
}
//더블클릭하면 공백으로 만들어줌
function clearP() {
    this.innerHTML = "";
}

function mouseOut() {
    this.style.backgroundColor = "white";
    gid("eventLog").innerHTML += `mouse Out ${this.id}<br>`; //innerHTMl안은 html 영역임
}

function mouseEnter() { //결론: mouseover는 자식요소에서 마우스포인터가 와도 실행되지만, enter는 밖에서 자기 자신에게 직접 와야만 실행(자식에서온건 실행안됨)
    this.style.border = "2px solid blue";
    gid("eventLog").innerHTML += `mouse Enter ${this.id}<br>`; //innerHTMl안은 html 영역임
}

function mouseLeave() {
    this.style.border = "1px solid black";
    gid("eventLog").innerHTML += `mouse Leave ${this.id}<br>`; //innerHTMl안은 html 영역임
}

window.onload = function() {
    let divArray = document.getElementsByTagName("div");
    for(let div of divArray){
        div.addEventListener("mouseover", mouseOver);
        div.addEventListener("mouseout", mouseOut);
        div.addEventListener("mouseenter", mouseEnter);
        div.addEventListener("mouseleave", mouseLeave);
    }
    //--------------------------------------------
    gid("eventLog").addEventListener("dblclick", clearP);
}