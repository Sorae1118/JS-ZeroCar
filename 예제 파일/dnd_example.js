
window.onload = function() {
  const item = document.querySelector(".item");

  item.addEventListener("dragstart", (e) => {
    console("드래그를 시작하면 발생하는 이벤트");
    
  });  
}
