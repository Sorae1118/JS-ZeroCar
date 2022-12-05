function console(e) {
    if(document.querySelectorAll('p').length === 10) {
      document.querySelectorAll('p').forEach(e => e.remove())
    }
    const p = document.createElement('p');
    p.textContent = e;
    document.body.append(p);
}

const item = document.querySelector(".item");

item.addEventListener("dragstart", (e) => {
  console("드래그를 시작하면 발생하는 이벤트");
  
});