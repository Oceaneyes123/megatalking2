export function getBookList() {
  let bookList = {
    books_1: [
      {
        tab: require("../assets/tab/vidtab1.png"),
        image: require("../assets/tab/video1.jpg"),
        title: "셀럽 토크쇼",
        details:
          "<엠마왓슨투나잇쇼>,<앤 헤서웨이 코난쇼> … 여러 셀럽들의 인터뷰를 통해 자주사용되는 표현과 다양한 구어체를 배울 수 있는 과정입니다."
      },
      {
        tab: require("../assets/tab/vid1.png"),
        image: require("../assets/tab/video1.jpg"),
        title: "셀럽 토크쇼",
        details:
          "<엠마왓슨투나잇쇼>,<앤 헤서웨이 코난쇼> … 여러 셀럽들의 인터뷰를 통해 자주사용되는 표현과 다양한 구어체를 배울 수 있는 과정입니다."
      },
      {
        tab: require("../assets/tab/vidtab2.png"),
        image: require("../assets/tab/video2.jpg"),
        title: "TED",
        details:
          "TED의 교육영상을 통해 다양한 분야의 지식과 함께 유용한 영어표현들을 공부해 보세요. 흥미로운 지식과 함께 영어공부에도 많은 도움이 되실 거예요."
      },
      {
        tab: require("../assets/tab/vid2.png"),
        image: require("../assets/tab/video2.jpg"),
        title: "TED",
        details:
          "TED의 교육영상을 통해 다양한 분야의 지식과 함께 유용한 영어표현들을 공부해 보세요. 흥미로운 지식과 함께 영어공부에도 많은 도움이 되실 거예요."
      },
      {
        tab: require("../assets/tab/vidtab3.png"),
        image: require("../assets/tab/video3.jpg"),
        title: "Movie",
        details:
          "영화속 대사를 통해 다양한 영어표현을 배워보세요. 영화의 재미와 함께 섬세한 감정표현, 영국식, 미국식 액센트도 덤으로 연습하실 수 있는 흥미진진한 수업이 되실거예요."
      },
      {
        tab: require("../assets/tab/vid3.png"),
        image: require("../assets/tab/video3.jpg"),
        title: "Movie",
        details:
          "영화속 대사를 통해 다양한 영어표현을 배워보세요. 영화의 재미와 함께 섬세한 감정표현, 영국식, 미국식 액센트도 덤으로 연습하실 수 있는 흥미진진한 수업이 되실거예요."
      },
      {
        tab: require("../assets/tab/vidtab4.png"),
        image: require("../assets/tab/video4.jpg"),
        title: "셀럽과의 대화",
        details:
          "셀럽의 가방속에는 뭐가 있을까요? 테일러 스위프트와 함께하는 73개의 질문들, 제시카 알바 - 홈 셀프케어 뷰티루틴, 샤니나 샤이크의 60분 쇼핑 챌린지등 셀럽과의 흥미로운 대화와 함께 다채로운 표현을 연습하세요~"
      },
      {
        tab: require("../assets/tab/vid4.png"),
        image: require("../assets/tab/video4.jpg"),
        title: "셀럽과의 대화",
        details:
          "셀럽의 가방속에는 뭐가 있을까요? 테일러 스위프트와 함께하는 73개의 질문들, 제시카 알바 - 홈 셀프케어 뷰티루틴, 샤니나 샤이크의 60분 쇼핑 챌린지등 셀럽과의 흥미로운 대화와 함께 다채로운 표현을 연습하세요~"
      },
      {
        tab: require("../assets/tab/vidtab5.png"),
        image: require("../assets/tab/video5.jpg"),
        title: "Pop Song",
        details:
          "애드시런, 아델, 빌리 아일리시, 마룬5, 리한나, 아리아나 그란데 등의 인기있는 팝송을 통해 좋아하는 노래도 듣고 노래가사에 담긴 영어표현을 배울 수 있는 과정입니다. "
      },
      {
        tab: require("../assets/tab/vid5.png"),
        image: require("../assets/tab/video5.jpg"),
        title: "Pop Song",
        details:
          "애드시런, 아델, 빌리 아일리시, 마룬5, 리한나, 아리아나 그란데 등의 인기있는 팝송을 통해 좋아하는 노래도 듣고 노래가사에 담긴 영어표현을 배울 수 있는 과정입니다. "
      }
    ],

    books_2: [
      {
        image: require("../assets/curriculum/phonics.jpg"),
        title: "Phonics 1~6",
        details:
          "기본 알파벳과 기본 단어부터 차근차근 배우고자 하시는 분, 부담없이 시작 할 수 있는 왕기초 발음교정 과정입니다. 1권부터 6권까지 3개월완성! (빠른 진도시 한달만에도 완성가능)"
      },
      {
        image: require("../assets/curriculum/adv_phonics.jpg"),
        title: "Advanced Phonics 1~6",
        details:
          "각 Phonics의 발음들을 보다 심층적으로, 빠르게 배울 수 있는 퀵Phonics 커리큘럼입니다. Phonics를 전체적으로 복습하고자 하시는 분, 빠르게 Phonics를 익히고자 하시는분께 적합합니다."
      },
      {
        image: require("../assets/curriculum/p_course_jr.jpg"),
        title: "P-course Junior Basic~Advanced",
        details:
          "기초적인 단어들을 사용하여, 간단한 문장들을 만들어보는 과정입니다. 그림과 함께 단어들을 학습할 수 있기 때문에, 보다 쉽고 편안한 단어암기가 가능합니다."
      },
      {
        image: require("../assets/curriculum//c-course_jr.jpg"),
        title: "C-course Junior Basic~Advanced",
        details:
          "주위에서 흔히 볼 수 있는 사물들과 환경들로, 친숙한 회화표현들을 익혀보는 과정입니다. 그림과 함께 쉽게 회화를 익혀볼 수 있습니다."
      }
    ],

    books_3: [
      // {
      //   image: require("../assets/curriculum/conv.jpg"),
      //   title: "Regular Conversation Step 1~3",
      //   details:
      //     "짧은 회화 다이얼로그 학습입니다. 부담스럽지 않게 그날그날의 주제 표현들을 학습할 수 있습니다. 레벨별로 보다 더 다양한 주제들이 등장하며, 레벨이 올라감에 따라 본문의 양이 조금씩 많아집니다."
      // },
      {
        image: require("../assets/curriculum/interactive.jpg"),
        title: "Interactive English Series (Beginner)",
        details:
          "4단계 레벨로 나누어져 있으며, 동영상컨텐츠가 함께 준비되어 있어, 듣기연습과 말하기 연습, 복습과 예습에 다양하게 활용하실 수 있습니다. 간단한 회화 주제들부터 시작하여 일상생활에서 사용하는 고급스러운 표현과 심오한 주제까지 고루 학습할 수 있습니다."
      },
      {
        image: require("../assets/curriculum/interactive2.jpg"),
        title: "Interactive English Series (Intermediate)",
        details:
          "4단계 레벨로 나누어져 있으며, 동영상컨텐츠가 함께 준비되어 있어, 듣기연습과 말하기 연습, 복습과 예습에 다양하게 활용하실 수 있습니다. 간단한 회화 주제들부터 시작하여 일상생활에서 사용하는 고급스러운 표현과 심오한 주제까지 고루 학습할 수 있습니다."
      },
      {
        image: require("../assets/curriculum/interactive3.jpg"),
        title: `Interactive English Series \n (Upper Intermediate)`,
        details:
          "4단계 레벨로 나누어져 있으며, 동영상컨텐츠가 함께 준비되어 있어, 듣기연습과 말하기 연습, 복습과 예습에 다양하게 활용하실 수 있습니다. 간단한 회화 주제들부터 시작하여 일상생활에서 사용하는 고급스러운 표현과 심오한 주제까지 고루 학습할 수 있습니다."
      },
      {
        image: require("../assets/curriculum/interactive4.jpg"),
        title: "Interactive English Series (Advance)",
        details:
          "4단계 레벨로 나누어져 있으며, 동영상컨텐츠가 함께 준비되어 있어, 듣기연습과 말하기 연습, 복습과 예습에 다양하게 활용하실 수 있습니다. 간단한 회화 주제들부터 시작하여 일상생활에서 사용하는 고급스러운 표현과 심오한 주제까지 고루 학습할 수 있습니다."
      }
    ],

    books_4: [
      {
        image: require("../assets/curriculum/milestones.jpg"),
        title: "Milestones",
        details:
          "기초적인 단어들을 사용하여, 간단한 문장들을 만들어보는 과정입니다. 그림과 함께 단어들을 학습할 수 있기 때문에, 보다 쉽고 편안한 단어암기가 가능합니다."
      },
      {
        image: require("../assets/curriculum/1st_step.jpg"),
        title: "First Step In Conversation Level 1~3",
        details:
          "다양한 상황과 단어들을 이용한 중급 회화 입니다. 그림과 함께한 중급용 회화교재입니다. 배운 숙어를 활용하여 응용연습을 함으로, 회화실력을 다져나갈 수 있습니다."
      }
    ],

    books_5: [
      {
        mobile: require("../assets/mobile/perfect-reading&talking.png"),
        image: require("../assets/curriculum/ft_q_a1.webp"),
        title: "리딩&스피킹 퍼펙트리딩",
        details: `영어지문을 정확하게 이해하는 독해력을 기르면서 중요표현
                    연습하고 대화하기.일상생활과 사회생활에서 접할수있는 다
                    양한 상식이나 시사적인 부분을 독해하면서 서로 의견을 주고
                    받을수 있습니다.
                    `
      }
    ],

    books_6: [
      {
        mobile: require("../assets/mobile/free-Q&A.png"),
        image: require("../assets/curriculum/ft_q_a1.webp"),
        title: "프리토킹 묻고 답하기",
        details: "미리 예정된 토픽에 대해 편안하게 대화하기"
      },
      {
        mobile: require("../assets/mobile/free-opinion.png"),
        image: require("../assets/curriculum/ft_op1.webp"),
        title: "프리토킹 의견말하기",
        details: "일상에 자주 거론되는 이슈에 대한 나의 의견 영어로 말하기"
      },
      {
        mobile: require("../assets/mobile/free-description.png"),
        image: require("../assets/curriculum/ft_ds1.webp"),
        title: "프리토킹 사진묘사",
        details: "일상에 자주 거론되는 이슈에 대한 나의 의견 영어로 말하기"
      },
      {
        mobile: require("../assets/mobile/newspaper_article.png"),
        image: require("../assets/curriculum/news.jpg"),
        title: "프리토킹 영자신문",
        details: "최신 뉴스기사를 영어로 접하면서 대화하기"
      },
      {
        mobile: require("../assets/mobile/debate.png"),
        image: require("../assets/curriculum/debate.jpg"),
        title: "Debate",
        details:
          "토론과정에 더하여, 사회적인 이슈가 되었던 문제들을 토론하는 과정입니다. 인터뷰나 다양한 논술시험에 대비하여 자신의 의견을 정리해볼 수 있는 과정입니다."
      }
    ],

    books_7: [
      {
        mobile: require("../assets/mobile/be_situational_dialogues.png"),
        image: require("../assets/curriculum/bd_1.webp"),
        title: "비지니스 회화과정",
        details:
          "직장생활에서 일어날수있는 여러 상황을 대화지문으로 배우고 영어로 정확하게 소통하는 연습하기"
      },
      {
        image: require("../assets/curriculum/be_sd.jpg"),
        title: "Business English (Situational Dialogues)",
        details:
          "전화응대, 프레젠테이션, 보고하기, 회의자료 준비 및 회의하기 등의 업무상 필요한 모든 회화전략을 담았습니다. 실용적으로 사용할 비즈니스 회화를 학습하고자 하는 수강생에게 적합합니다.",
        mobile: require("../assets/mobile/business.png")
      },
      {
        image: require("../assets/curriculum/email.jpg"),
        title: "E-mail",
        details:
          "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다.",
        mobile: require("../assets/mobile/email.png")
      },
      {
        image: require("../assets/curriculum/meeting.jpg"),
        title: "Meeting",
        details:
          "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다.",
        mobile: require("../assets/mobile/meeting.png")
      },
      {
        mobile: require("../assets/mobile/negotiations.png"),
        image: require("../assets/curriculum/negotiation.jpg"),
        title: "Negotiation",
        details:
          "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다."
      },
      {
        image: require("../assets/curriculum/presentation.jpg"),
        title: "Presentation",
        details:
          "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다.",
        mobile: require("../assets/mobile/presentation.png")
      },
      {
        image: require("../assets/curriculum/be_sd.jpg"),
        title: "Business English (Discussion and Analysis)",
        details:
          "마케팅적 토론, 광고, 금융, 사내조직 등의 여러 비즈니스상의 키워드들에 대한 심도있는 토론과정입니다. 다양한 비즈니스 용어들을 익힐 수 있으며, 지문과 질문에 대한 흥미로운 토론학습입니다.",
        mobile: require("../assets/mobile/business.png")
      }
    ],

    books_8: [
      {
        mobile: require("../assets/mobile/speaking-patten-100.png"),
        image: require("../assets/curriculum/sp_1.jpg"),
        title: "Speaking Pattern 과정",
        details: "자주 나오는 중요한 패턴 100개 연습하기"
      },
      {
        mobile: require("../assets/mobile/grammar-in-patten-basic.png"),
        image: require("../assets/curriculum/dp_sp.webp"),
        title: "Grammar in Pattern 과정",
        details: "패턴속에 문법까지 짚어가며 정확한 표현배우기"
      },
      {
        mobile: require("../assets/mobile/daily-dialogue.png"),
        image: require("../assets/curriculum/dd_1.jpg"),
        title: "일상 Dialogue 과정",
        details:
          "현지인과 맞닥뜨리게되는 다양한 상황속에서 영어로 편하게 의사소통하기"
      }
    ],

    books_9: [
      {
        mobile: require("../assets/mobile/interview-english.png"),
        image: require("../assets/curriculum/int_1.webp"),
        title: "Interview (영어 면접)과정",
        details:
          "영어면접에서 면접관의 질문을 정확히 이해하고 나를 충분히 어필하는 연습하기"
      },
      {
        mobile: require("../assets/mobile/hotel_dialogues.png"),
        image: require("../assets/curriculum/hotel.jpg"),
        title: "Hotel Dialogues",
        details:
          "방 예약부터 전화응대, 체크인 등 호텔에서 일어날 수 있는 다양하고 고급스러운 서비스표현들을 담고 있습니다. 호텔리어를 준비하시는 수강생, 또는 여행을 자주 가시거나 여행을 계획중이신 수강생들에게 좋은 과정입니다."
      },
      {
        mobile: require("../assets/mobile/cabin_crew.png"),
        image: require("../assets/curriculum/cabin_crew.jpg"),
        title: "Cabin Crew",
        details:
          "승무원의 역사, 의상, 기내상식과 기내방송등 승무원의 모든 스피킹을 담았습니다. 승무원을 준비하시는 수강생분들, 승무원영어과정으로 알차게 준비해보세요!"
      },
      {
        mobile: require("../assets/mobile/ielts.png"),
        image: require("../assets/curriculum/ielts.jpg"),
        title: "IELTS",
        details:
          "IELTS란, 국제영어능력시험으로써, 영국, 오스트레일리아, 캐나다, 뉴질랜드 대학입학에 필요한 영어시험입니다. 대부분 대학입학성적으로 6.0점 이상을 요구하며, 화상및전화영어를 통하여는, 스피킹시험을 준비하실 수 있습니다. 수업을 통해 발음교정과 다양한 토픽에 맞는 스피킹을 준비하게 됩니다."
      },
      {
        mobile: require("../assets/mobile/medical_english.png"),
        image: require("../assets/curriculum/medical_english.jpg"),
        title: "Medical English",
        details:
          "검진, 예약, 차트작성, 응급상황 시 대처방법 등 실무에 필요한 의학영어들을 담았습니다. 의학용어들이 등장하여 어휘에 난이도가 있긴 하지만 몇몇 난이도 있는 용어를 제외하면, 다양한 상황에서의 의학회화들을 실용적으로 학습해나갈 수 있는 과정입니다."
      }
    ]
  };

  return bookList;
}

export function getBookLevel() {
  return {
    booksInLevels: [
      {
        level: "1 - 3",
        books: [
          "기초 발음교정",
          "기초 문장연습",
          "기초 회화연습",
          "초급회화",
          "기초 패턴회화",
          "초급 토론과정",
          "패턴 연습편1",
          "패턴 연습편2",
          "패턴연습편3  동사연습편1  상황별연습1"
        ]
      },
      {
        level: "4 - 5",
        books: [
          "중급회화",
          "중급  토론과정",
          "심화토론 과정고급",
          "주니어 조선 초급",
          "주니어 조선 중급",
          "비즈니스 회화",
          "동사연습편2 상황별연습2 비즈니스전화",
          "동사연습편3 상황별연습3 비즈니스회의"
        ]
      },
      {
        level: "6 - 7",
        books: [
          "뉴욕라이브 잉글리쉬",
          "문법 패턴회화",
          "시사 토론과정",
          "주니어 조선 고급",
          "전문조선 초급",
          "비즈니스 맞춤",
          "비즈니스 이메일",
          "비즈니스 프리젠테이션",
          "취업 인터뷰",
          "호텔영어 승무원영어"
        ]
      },
      {
        level: "8 - 9",
        books: [
          "전문조선 고급",
          "전문조선 고급",
          "비즈니스 토론",
          "IELTS 오픽",
          "토익스피킹 심화토익스피킹"
        ]
      },
      {
        level: "10",
        books: ["의학영어"]
      }
    ]
  };
}

export function getTabs() {
  return {
    sliderTabs: [
      `유튜브 <br />회화과정`,
      `입문과정`,
      `정규 <br />회화과정`,
      `초/중급 <br />회화과정`,
      `리딩 & 스피킹`,
      `프리토킹 <br />토론`,
      `비즈니스 <br />과정`,
      `문법/ <br />패턴`,
      `취업준비/ <br />특별 과정`
    ]
  };
}
