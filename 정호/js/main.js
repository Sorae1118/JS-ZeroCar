const fill = document.querySelector('.fill'); //fill 박스 셀렉트
const empties = document.querySelectorAll('.empty'); // empty 클래스는 다수이기 때문에 selectorAll 사용
 
   // Fill listeners
fill.addEventListener('dragstart', dragStart); //드래그시작    
fill.addEventListener('dragend', dragEnd);

//드래그 이벤트
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//드래그이벤트 작동할 함수
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}


function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    empties.preventDefault();
}
function dragEnter(e) {
    empties.preventDefault();
    this.className += 'hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty'; 
    this.append(fill);
}
