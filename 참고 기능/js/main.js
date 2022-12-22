const fill = document.querySelector('.fill'); 
    const empties = document.querySelectorAll('.empty');
 
    // Fill listeners
    fill.addEventListener('dragstart', dragStart);      
    fill.addEventListener('dragend', dragEnd); 
 

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver); 
  empty.addEventListener('dragenter', dragEnter); 
  empty.addEventListener('dragleave', dragLeave); 
  empty.addEventListener('drop', dragDrop); 
}
 
// Drag Functions
 
//dragstart  '회색 테두리가 생김' 동작
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
//드래그 하다가 마우스 버튼을 놓는 순간 fill 박스가 발생
function dragEnd() {
  this.className = 'fill';
}
 
function dragOver(e) {
  e.preventDefault();
}
 
//drag enter 시 테두리가 dashed로 변함
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
// 드래그요소가 객체를 위를 벗어나면 empty 박스가 됨.
function dragLeave() {
  this.className = 'empty';
}
// dragdrop : 드래그를 드랍할때 빈 박스안에 fill 이 추가됨.==채워짐
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}