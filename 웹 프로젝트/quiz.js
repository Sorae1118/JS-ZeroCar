let quizSet = {
    author: "공차",
    quiz1: [
        {
            eng: "Birds sing",
            kor: "새들이 노래한다."
        },
        {
            eng: "She laughed.",
            kor: "그녀가 웃었다."
        },
        {
            eng: "The girl screamed.",
            kor: "그 소녀는 소리쳤다."
        },
        {
            eng: "How was your day ?",
            kor: "오늘 하루 어땠어?"
        },
        {
            eng: "Take your time, please.",
            kor: "천천히 하세요."
        },
        {
            eng: "My cousin is a math teacher.",
            kor: "내 사촌은 수학 선생님이다."
        },
        {
            eng: "The students kept quiet.",
            kor: "그 학생들은 조용히 있었다."
        },
        {
            eng: "You look upset today.",
            kor: "너 오늘 화나 보인다."
        },
        {
            eng: "The music sounded wonderful",
            kor: "그 음악은 근사하게 들렸다."
        },
        {
            eng: "",
            kor: ""
        },
        {
            eng: "",
            kor: ""
        }
        ],
    quiz2: [
        {
            eng: "What’s the weather like ?",
            kor: "날씨가 어때?"
        },
        {
            eng: "That is what I’m saying.",
            kor: "내 말이 그 말이야."
        }
        ],
    quiz3: [
        {
            eng: "He was completely bewitched by her beauty",
            kor: "그는 그녀의 미모에 완전히 넋이 빠졌다."
        },
        {
            eng: "The baby cuddle up with a pillow.",
            kor: "아기가 베개를 꼭 껴안고 잔다."
        }
    ]
}

function answer(quizNo, rank=1) {
    let answerArray;
    
    if(rank==1)
        answerArray = quizSet.quiz1[quizNo].eng.split(" ");
    if(rank==2)
        answerArray = quizSet.quiz2[quizNo].eng.split(" ");
    if(rank==3)
        answerArray = quizSet.quiz3[quizNo].eng.split(" ");
    
    return answerArray;
}
