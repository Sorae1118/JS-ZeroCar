//================================================
//Function Zone
//================================================
function gid(id) {
    return document.getElementById(id);
}
//------------------------------------------------
function appendRow(newWord) {
    let tbody = gid("myTBody");
    //테이블 끝에 새 행을 추가한다.
    let newRow = tbody.insertRow(tbody.rows.length); //<tr></tr>
    //새로 생성된 행(newRow)에 칼럼(셀) 두 개를 생성한다.
    let cell0 = newRow.insertCell(0); //<td></td>
    let cell1 = newRow.insertCell(1); //<td></td>

    cell0.innerHTML = newWord;
    cell0.addEventListener("click", insertFront);
    cell1.innerHTML = newWord.length;
    cell1.addEventListener("dblclick", deleteRow);
}
//================================================
// Event Handler Zone
//================================================
// click 한 cell 1을 포함하는 행 전체를 테이블에서 삭제한다.
function deleteRow() {
    gid("myTBody").deleteRow(this.parentNode.rowIndex - 1); //나중에 2개로 나누자
}
//================================================
//어떤 행의 cell 0를 클릭하면 input tag의 입력 내용을 받아서
//cell 0를 포함하는 행의 앞에 새 행을 만들어 추가한다.
function insertFront(ev) {
    //빈 단어 여부를 확인한다.
    let newWord = $("#textInput").val();  //입력된 내용을 읽어온다.
    newWord = newWord.trim();   //앞부분과 뒷부분의 무의미 공백을 제거한다.
    if(newWord.length == 0) //입력할 단어가 없거나 여백 뿐이면
        return 0;           //어떤 처리도 하지 않고 돌아간다.
    $("#textInput").val(""); //input tag의 내용을 공백으로 만든다.
    //this.parentNode 까지는 행을 나타냄
    //alert(this.parentNode.rowIndex); 인덱스 확인 방법
    //새로 삽입할 행의 인덱스를 계산
    let newRowIndex = this.parentNode.rowIndex - 1;
    //새 행을 생성한다.
    let newRow = gid("myTBody").insertRow(newRowIndex);
    //새로 생성된 행(newRow)에 칼럼(셀) 두 개를 생성한다.
    let cell0 = newRow.insertCell(0); //<td></td>
    let cell1 = newRow.insertCell(1); //<td></td>

    cell0.innerHTML = newWord;
    cell0.addEventListener("click", insertFront);
    cell1.innerHTML = newWord.length;
    cell1.addEventListener("dblclick", deleteRow);

}
function onKeyDown(ev) {
    if(ev.keyCode == 13) {
        //빈 단어 여부를 확인한다.
        let newWord = $("#textInput").val();  //입력된 내용을 읽어온다.
        newWord = newWord.trim();   //앞부분과 뒷부분의 무의미 공백을 제거한다.
        if(newWord.length > 0) {
            //입력된 단어를 테이블에 추가한다.
            appendRow(newWord);
            $("#textInput").val("");
            //input tag의 내용을 삭제한다.
        }
    }
}
//================================================
window.onload = function() {
    gid("textInput").addEventListener("keydown", onKeyDown);
}
//================================================
//================================================