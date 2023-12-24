# JavaScript를 활용한 영단어 카드게임 - 공차팀
<br>

## 프로젝트 소개
* 영단어 카드 게임입니다. 단어가 주어지면 해당 단어로 문법을 고려하여 문장을 완성합니다.
* 문장의 결과에 따라 정답 또는 오답을 출력합니다.
<br>

## 공차팀 구성원
|조담진|서정호|김민지|
|---|---|---|
|![image](https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/87d97c7c-2aa1-4ef8-bc00-833099c6bc3c)|![image](https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/e1b99fe3-6218-430f-8506-2492c779e362)|![image](https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/90bceb53-70e1-4b24-9149-9735d561c41f)|
|[Sorae1118](https://github.com/Sorae1118)|[jeongho77](https://github.com/jeongho77)|[minso00](https://github.com/minso00)|

<br>

## 🔨 Stacks
- Frontend
<div style="display:flex; flex-direction:row;">
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>
<br>

- Tools & Environment
<div style="display:flex; flex-direction:row;">
    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
</div>
<br>

## 📀 Function
1. 로그인 / 로그아웃, 회원가입
2. 게시글과 게시글 내의 댓글 기능
3. 컴파일러 위젯 [sphere-engine](https://docs.sphere-engine.com/compilers/widget/integration)
<br>

## 📺 화면구성

1. 메인 화면
* 메인 페이지입니다. 시작하기 버튼 클릭시 정해진 위치로 이동합니다. ![스크린샷 2023-12-25 오전 5 05 25](https://github.com/Sorae1118/JS-ZeroCar/assets/115053276/470430a8-ca89-4fb5-a5fb-0c50f1b1434f)
  <br><br><br>

2. 로그인 화면
* 로그인 페이지입니다.<img width="1440" alt="스크린샷 2023-12-23 오후 7 54 14" src="https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/2c7e5e97-2bca-4d4d-a0df-7c6ad0933ddf"><br><br><br>

3. 회원가입 화면
* 회원가입 페이지입니다.<img width="1440" alt="스크린샷 2023-12-23 오후 7 54 29" src="https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/c661e91e-81fc-409d-8efb-8c336cb2a28b"><br><br><br>

4. 게시글 화면
* 여러 게시글을 확인할 수 있는 페이지입니다.
* 가장 최근 게시물부터 보이도록 DB에서 호출합니다.<img width="1440" alt="스크린샷 2023-12-23 오후 7 53 16" src="https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/e92ab667-5e37-4d04-82e1-f3189a74a57f"><br><br><br>

5. 상세글 화면
* 게시글 상세 페이지입니다.
* 각 페이지는 생성일, 조회수, 좋아요수가 나타납니다.<img width="1440" alt="스크린샷 2023-12-23 오후 7 53 56" src="https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/58ed9659-9460-4393-8694-c6d2d0cb08ec"><br><br><br>

6. 컴파일러 화면
* 사용자가 원하는 언어를 테스트할 수 있는 페이지입니다.
* 스크립트로 sphere-engine API를 호출합니다. 아래 코드를 참고하세요. 
```
<script>SEC_HTTPS = true;
    SEC_BASE = "compilers.widgets.sphere-engine.com";
    (function (d, s, id) {
        SEC = window.SEC || (window.SEC = []);
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
        js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "sphere-engine-compilers-jssdk"));
</script>
```
* 원하는 언어를 선택하여 실행할 수 있습니다.<img width="1440" alt="스크린샷 2023-12-23 오후 7 54 08" src="https://github.com/Sorae1118/FinalPjt_JSP/assets/115053276/61a7c6ae-95d4-458b-b843-c949af148dd0">








      



