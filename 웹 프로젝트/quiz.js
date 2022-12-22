let quizSet = {
    author: "공차",
    quiz1: [ //초급
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
        }
        ],
    quiz2: [ //중급
        {
            eng: "What’s the weather like ?",
            kor: "날씨가 어때?"
        },
        {
            eng: "That is what I’m saying.",
            kor: "내 말이 그 말이야."
        },
        {
            eng: "It was a rare, iridescent pearl.",
            kor: "그것은 희귀한 무지개 빛깔의 진주였습니다."
        },
        {
            eng: "She is a comely child.",
            kor: "저 여자아이는 예쁘게 생겼어"
        },
        {
            eng: "I'd like to get something to eat.",
            kor: "먹을 걸 좀 사오고 싶어."
        }
        ],
    quiz3: [ //고급
        {
            eng: "He was completely bewitched by her beauty",
            kor: "그는 그녀의 미모에 완전히 넋이 빠졌다."
        },
        {
            eng: "The baby cuddle up with a pillow.",
            kor: "아기가 베개를 꼭 껴안고 잔다."
        },
        {
            eng: "You mean more to me than anyone in this whole world.",
            kor: "내게 넌 이 세상 어느 누구보다 더 큰 의미를 가지고 있어."
        },
        {
            eng: "My dream would not be complete without you in it.",
            kor: "당신이 그 안에 없다면, 내 꿈은 완벽하게 이뤄질 수 없어요."
        },
        {
            eng: "How lucky am I to have something that makes saying good bye so hard.",
            kor: "작별 인사를 하기 너무 어려운 걸 가지고 있는 나는 참 운이 좋아."
        },
        {
            eng: "The flower that blooms in adversity is the most rare and beautiful of all.",
            kor: "역경 속에서 피어나는 꽃이 가장 귀하고 아름다운 것이다."
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