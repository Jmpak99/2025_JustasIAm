
// S : 0
// N : 1
// J: 2
// P : 3

// 4가지 결과 

const qnaList = [
  {
  q: '예배를 드릴 때 나는?',
  a: [
    { answer: 'a. 예배 공간의 분위기(조명, 음악, 의자 배치)가 집중에 영향을 준다 ', type: [0] },
    { answer: 'b. 예배 공간의 요소보다는 내가 예배를 어떻게 경험하는지가 더 중요하다 ', type: [1] },
  ]
  },
  {
    
    q: '설교를 들을 때 나는?',
    a: [
      { answer: 'a. 설교자가 구체적인 적용점을 제시해 줄 때 이해하기 쉽다 ', type: [0] },
      { answer: 'b. 설교자가 던진 질문이나 핵심 메시지를 스스로 정리하며 받아들인다 ', type: [1] },
    ]
  },
  {
    q: '찬양을 들을 때 나는?',
    a: [
      { answer: 'a. 멜로디, 목소리, 악기 소리 등 음악적인 요소에 먼저 집중된다 ', type: [0] },
      { answer: 'b. 가사의 의미나 찬양이 주는 메시지를 먼저 떠올린다 ', type: [1] },
    ]
  },
  {
    q: '기도할 때 나는?',
    a: [
      { answer: 'a. 기도할 내용을 미리 정리해두거나, 기도문을 활용하는 것이 집중이 잘 된다 ', type: [2] },
      { answer: 'b. 기도를 하면서 떠오르는 대로 자유롭게 말하는 것이 자연스럽다 ', type: [3] },
    ]
  },
  {
    q: '성경을 읽을 때 나는?',
    a: [
      { answer: 'a. 일정한 방식이나 순서를 따라가는 게 더 편하다 ', type: [2] },
      { answer: 'b. 그때그때 마음이 가는 본문을 찾아서 읽는 게 더 좋다 ', type: [3] },
    ]
    },
  {
    q: '새로운 성경 본문을 접했을 때 나는?',
    a: [
      { answer: 'a. 문장을 하나하나 따라 읽으면서 단어나 표현에 집중한다 ', type: [0] },
      { answer: 'b. 본문의 흐름을 보면서 전체적인 의미를 파악한다 ', type: [1] },
    ]
  },
  {
    q: '소그룹 모임에서 나눔을 할 때 나는?',
    a: [
      { answer: 'a. 상황의 배경이나 맥락을 먼저 설명한 후에 내 생각을 나눈다 ', type: [1] },
      { answer: 'b. 있었던 일을 그대로 전달하면서 그때의 감정이나 느낌을 공유한다 ', type: [0]},
    ]
  },
  {
    q: '소그룹 안에서 결정할 일이 있을 때 나는?',
    a: [
      { answer: 'a. 빠르고 효율적으로 결정을 내리고, 계획을 세워 실행하는 것이 중요하다 ', type: [2] },
      { answer: 'b. 여러 의견을 들으며 유연하게 논의하고 자연스럽게 방향이 잡히는 것이 좋다 ', type: [3]},
    ]
  },
  {
    q: '수련회에 참여할 때 나는?',
    a: [
      { answer: 'a. 즉흥적으로 진행되는 활동도 편하게 받아들이는 편이다', type: [3] },
      { answer: 'b. 프로그램 일정이 미리 정리되어 있고, 예상할 수 있는 것이 좋다', type: [2]},
    ]
  },
  {
    q: '봉사나 사역을 맡게 될 때 나는?',
    a: [
      { answer: 'a. 역할과 방향을 먼저 정하고 체계적으로 진행하는 걸 선호한다 ', type: [2] },
      { answer: 'b. 일단 시작해보고 필요한 부분을 채워가며 유연하게 진행하는 게 편하다 ', type: [3]},
    ]
  },
]

// 'SJ' : 0,
// 'SP' : 1,
// 'NJ' : 2,
// 'NP' : 3
const infoList = [
  {
    nameIntro :"신뢰할 수 있는 질서를 따르는 신앙",
    name: '<실천적 신앙인>',
    descTitle1: '📌 이런 특징이 있어요 !',
    desc1:'신앙을 체계적으로 실천하는 것을 중요하게 여겨요',
    desc2:'전통과 검증된 방식을 신뢰하며, 안정적인 신앙생활을 추구해요',
    desc3:'규칙적인 신앙 습관(예배, 기도, 성경 읽기 등)을 유지하려 해요 ',
    descTitle2:'🔍 예배와 신앙생활에서는',
    desc4:'설교 적용: 구체적인 적용점을 선호하며, 삶에 직접 연결하려 해요',
    desc5:'예배 태도: 예배의 형식과 절차가 안정감을 주며, 익숙한 방식을 선호해요',
    desc6:'봉사/사역: 역할과 계획이 명확할 때 더 적극적으로 참여해요',
    descTitle3:'🌱 이런 점이 신앙적 강점이에요 !',
    desc7:'신앙을 꾸준히 실천하며, 성실하게 신앙생활을 이어가요',
    desc8:'신뢰할 수 있는 지침과 원칙을 따르며, 공동체의 질서를 지켜요',
    desc9:'신앙의 전통과 교리를 중요하게 여기며, 후배 신앙인들에게 좋은 본이 되요',
    descTitle4:'⚠️ 이런 점은 주의해야 해요 !',
    desc10:'형식적인 틀에 갇혀 신앙의 본질을 놓치지 않도록 주의해야 해요',
    desc11:'새로운 방식이나 변화에 대해 지나치게 거부감을 가질 수 있어요',
    desc12:'규칙과 질서에 집중하다가 타인의 유연한 신앙 태도를 비판적으로 볼 수도 있어요',
    descTitle5:'🙋 이런 질문을 나눠봐요 !',
    desc13:'신앙에서 규칙(전통, 질서, 루팅)을 지키는 것이 얼마나 중요하다고 생각하나요?',
    desc14:'내가 신앙의 원칙을 지키는 것이 하나님과의 관계보다 더 중요하게 여겨진 적은 없었나요?',
    resultif:'🔍 이 말씀을 추천해요 ! (시편 37 : 23-24)',
    resultbasic1:'23. 여호와께서 사람의 걸음을 정하시고 그의 길을 기뻐하시나니',
    resultbasic2:'24. 그는 넘어지나 아주 엎드러지지 아니함은 여호와께서 그의 손으로 붙드심이로다',
    resultbasic3:''
  },
  {
    nameIntro :"경험을 통해 살아있는 신앙",
    name: '<경험적 신앙인>',
    descTitle1: '📌 이런 특징이 있어요 !',
    desc1:'자유롭고 실용적인 신앙을 선호하며, 경험을 중요하게 여겨요',
    desc2:'형식적인 틀보다 즉흥적인 감동과 체험을 더 가치 있게 여겨요',
    desc3:'규칙적인 신앙 습관보다는 현장에서 직접 부딪히며 배우는 신앙을 지향해요',
    descTitle2:'🔍 예배와 신앙생활에서는',
    desc4:'설교 적용: 이론보다 실제적인 경험을 통해 신앙을 이해하고 싶어 해요',
    desc5:'예배 태도: 예배의 흐름과 분위기를 중요하게 여기며, 형식에 얽매이지 않아요',
    desc6:'봉사/사역: 정해진 방식보다는 유연하게 대처할 수 있는 역할에서 더 빛을 발해요',
    descTitle3:'🌱 이런 점이 신앙적 강점이에요 !',
    desc7:'신앙을 삶과 연결하며, 현실 속에서 실천하는 것이 자연스러워요',
    desc8:'새로운 경험을 통해 신앙을 확장하며, 유연하게 적용할 수 있어요',
    desc9:'다양한 방식으로 하나님을 경험하고, 창의적인 신앙생활을 할 수 있어요',
    descTitle4:'⚠️ 이런 점은 주의해야 해요 !',
    desc10:'즉흥적인 신앙이 지나치면 꾸준한 훈련과 영적 성숙이 부족할 수 있어요',
    desc11:'전통적인 신앙 방식이나 규칙을 너무 답답하게 느껴 소홀해질 수 있어요',
    desc12:'깊이 있는 신학적 고민 없이 감각적인 체험만을 신앙의 중심으로 둘 위험이 있어요',
    descTitle5:'🙋 이런 질문을 나눠봐요 !',
    desc13:'하나님을 결정적으로 믿게 된 신앙의 경험이 있나요, 어떤 경험이었나요?',
    desc14:'감정에 따라 신앙이 들쑥날숙할 대 어떻게 꾸준함을 유지할 수 있었나요?',
    resultif:'🔍 이 말씀을 추천해요 ! (시편 16 : 11)',
    resultbasic1:'11. 주께서 생명의 길을 내게 보이시리니 주의 앞에는 충만한 기쁨이 있고 주의 오른쪽에는 영원한 즐거움이 있나이다',
    resultbasic2:'',
    resultbasic3:'',
  },
  {
    nameIntro :"비전을 추구하는 신앙",
    name: '<비전적 신앙인>',
    descTitle1: '📌 이런 특징이 있어요 !',
    desc1:'신앙을 깊이 탐구하고 의미를 찾는 것을 중요하게 여겨요',
    desc2:'신앙의 본질과 큰 그림을 보며, 방향성을 고민해요',
    desc3:'개인적인 확신과 비전 중심의 신앙을 추구해요 ',
    descTitle2:'🔍 예배와 신앙생활에서는',
    desc4:'설교 적용: 메시지의 핵심을 파악하고, 본질적인 의미를 숙고해요',
    desc5:'예배 태도: 예배를 통해 영적인 통찰을 얻고, 변화와 성장을 경험하기 원해요',
    desc6:'봉사/사역: 단순한 역할 수행보다, 사역의 목적과 방향성이 분명할 때 더 적극적이에요',
    descTitle3:'🌱 이런 점이 신앙적 강점이에요 !',
    desc7:'신앙의 의미와 목적을 깊이 고민하며, 장기적인 비전을 세워요',
    desc8:'영적 성장과 변화에 대한 갈망이 크며, 신앙의 깊이를 추구해요',
    desc9:'복음의 본질과 핵심을 붙잡고, 신앙을 철학적으로 탐구하는 것을 즐겨요',
    descTitle4:'⚠️ 이런 점은 주의해야 해요 !',
    desc10:'이론과 비전에 집중하다가 현실적인 실천이 부족할 수 있어요',
    desc11:'자신의 신앙적 확신이 강해 타인의 다양한 신앙 형태를 받아들이기 어려울 수 있어요',
    desc12:'계획과 방향성이 명확하지 않으면 신앙적 동기를 잃을 위험이 있어요',
    descTitle5:'🙋 이런 질문을 나눠봐요 !',
    desc13:'미래가 불확실하고 내 계획이 실패할 것 같을 때, 어떻게 하나님의 인도를 신뢰할 수 있을까요?',
    desc14:'다른 사람의 신앙 이야기나 비전을 들으면서 깊이 감명받거나 영향을 받은 적이 있나요?',
    resultif:'🔍 이 말씀을 추천해요 ! (이사야 56 : 8 - 9)',
    resultbasic1:'8. 이는 내 생각이 너희의 생각과 다르며 내 길은 너희의 길과 다름이니라 여호와의 말씀이니라',
    resultbasic2:'9. 이는 하늘이 땅보다 높음 같이 내 길은 너희의 길보다 높으며 내 생각은 너희의 생각보다 높음이니라',
    resultbasic3:'',
  },
  {
    nameIntro :"열린 사고로 성장하는 신앙",
    name: '<탐구적 신앙인>',
    descTitle1: '📌 이런 특징이 있어요 !',
    desc1:'새로운 시각과 질문을 통해 신앙을 탐구하는 것을 좋아해요',
    desc2:'신앙의 전통이나 틀보다는 유연하고 창의적인 방식을 선호해요',
    desc3:'다양한 가능성을 탐색하며, 정형화되지 않은 방식으로 신앙을 적용하려 해요',
    descTitle2:'🔍 예배와 신앙생활에서는',
    desc4:'설교 적용: 고정된 해석보다는, 다양한 시각에서 성경을 바라보기를 원해요',
    desc5:'예배 태도: 예배의 형식보다는, 의미와 개별적인 경험을 더 중요하게 여겨요',
    desc6:'봉사/사역: 새로운 접근 방식과 창의적인 아이디어를 반영할 수 있을 때 더 열정적으로 참여해요',
    descTitle3:'🌱 이런 점이 신앙적 강점이에요 !',
    desc7:'열린 마음으로 신앙을 탐구하며, 다양한 방식으로 하나님을 경험해요',
    desc8:'새로운 아이디어와 창의적인 접근을 통해 신앙과 공동체를 발전시킬 수 있어요',
    desc9:'신앙의 정답을 고정된 틀 안에서 찾기보다, 다양한 해석과 방법을 시도해요',
    descTitle4:'⚠️ 이런 점은 주의해야 해요 !',
    desc10:'신앙의 전통과 기본적인 교리를 가볍게 여기고 흩어진 관심만 가질 수 있어요',
    desc11:'체계적인 신앙 훈련이 부족하면 신앙이 흔들릴 위험이 있어요',
    desc12:'너무 열린 사고로 인해 확고한 신앙의 중심을 잡지 못할 수 있어요',
    descTitle5:'🙋 이런 질문을 나눠봐요 !',
    desc13:'성경을 읽다가 떠올랐던 흥미로운 질무이나 아이디어, 통찰이 있다면 무엇인가요?',
    desc14:'신앙을 표현(혹은 전도)하기 위한 자신만의 방법(글쓰기, 음악, 토론 행동 등)이 있나요?',
    resultif:'🔍 이 말씀을 추천해요 ! (에배소서 3 : 20 - 21)',
    resultbasic1:'20. 우리 가운데서 역사하시는 능력대로 우리가 구하거나 생각하는 모든 것에 더 넘치도록 능히 하실 이에게',
    resultbasic2:'21. 교회 안에서와 그리스도 예수 안에서 영광이 대대로 영원 무궁하기를 원하노라',
    resultbasic3:'',
  }
]
