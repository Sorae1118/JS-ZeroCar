//jQuery 사용할 때
$(document).ready(function() {
    $("#btnMove").click(function(){
        $("div").animate({  
            //style sheet 속성
            left: "+=50px",
            top: "+=50px"
        });
    })
    $("#btnOFF").click(function(){
        $("li").slideUp(500);   //0.5초 동안 태그가 사라짐
    })
    $("#btnON").click(function(){
        $("li").slideDown(500);    //태그 드러남
    })
    $("#btnToggle").click(function(){
        $("li").slideToggle(500);   //사라지고 드러남
    })
});
//-----------------------------------
//jQuery 없이 기존 방식
window.onload = function() {

}