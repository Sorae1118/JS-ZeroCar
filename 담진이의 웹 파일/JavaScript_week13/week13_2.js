
function gid(id) {
    return document.getElementById(id);
}
// 새 단어(newWord)를 포함하는 새 행을 하나 생성하여
// 테이블 끝에 추가한다.
function appendRow(newWord) {
    let tbody = gid("myTBody");
    //테이블 끝에 새 행을 추가
    let newRow = tbody.insertRow(tbody.rows.length); //<tr></tr>
    //새로 생성된 행(newRow)에 컬럼(셀) 두 개를 생성
    let c1 = newRow.insertCell(0); //<td></td>
    let c2 = newRow.insertCell(1); //<td></td>

    c1.innerHTML = newWord;
    c2.innerHTML = newWord.length;
}
function onKeyDown(ev) {
    if(ev.keyCode == 13) {
        //입력된 단어를 테이블을 추가한다
        //appendRow($("#textInput").val());
        //input tag 의 내용을 삭제한다
        let newWord = $("#textInput").val();
        newWord = newWord.trim();
        if(newWOrd.length > 0) {
            appendRow(newWord);
            $("#textInput").val()
        }
       // gid("msg").innerHTML += $("#textInput").val() + ", ";
       // $("#textInput").val("");    //input tag의 내용을 삭제 . 빈 문자열로
    }
    //gid("msg").innerHTML += ev.keyCode + ", ";
} 
window.onload = function() {
    gid("textInput").addEventListener("keydown", onKeyDown);
}