// 주요 섹션 DOM 요소 선택
const main = document.querySelector("#main"); // 시작 페이지
const qna = document.querySelector("#qna"); // 질문 페이지
const result = document.querySelector("#result"); // 결과 페이지

// 총 질문 수
const endPoint = 10; 

// S : 0
// N : 1
// J: 2
// P : 3

// 각 유형별 점수 저장 배열 [S, N, J, P]
const select = [0, 0, 0, 0];

// 결과 유형을 index로 매핑
const resultMap = {
  'SJ' : 0,
  'SP' : 1,
  'NJ' : 2,
  'NP' : 3
};

//선택한 답변 점수를 기반으로 최종 결과 유형 계산
function calResult(){
  const snType = select[0] >= select[1] ? 'S' : 'N'; // S vs N
  const jpType = select[2] >= select[3] ? 'J' : 'P'; // J vs P
  const resultCode = snType + jpType;
  return resultMap[resultCode]
}


// 결과 정보 화면에 세팅
function setResult(){
  let point = calResult(); // 결과 index (0 ~ 3)

  // 결과 타이틀 설정
  const resultNameIntro = document.querySelector('.resultInro');
  resultNameIntro.innerHTML = infoList[point].nameIntro;

  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;
  console.log(infoList[point].name)

  // 결과 이미지 생성
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);


  // 설명 텍스트 설정 (1)
  const resultDesc1 = document.querySelector('.resultDesc1');
  const resultDescTitle1 = document.querySelector('.resultDescTitle1');
  resultDescTitle1.innerHTML = infoList[point].descTitle1;
  resultDesc1.innerHTML = infoList[point].desc1;

  // 설명 텍스트 설정 (2)
  const resultDesc2 = document.querySelector('.resultDesc2');
  const resultDescTitle2 = document.querySelector('.resultDescTitle2');
  resultDescTitle2.innerHTML = infoList[point].descTitle2;
  resultDesc2.innerHTML = infoList[point].desc2;

  // 설명 텍스트 설정 (3)
  const resultDesc3 = document.querySelector('.resultDesc3');
  const resultDescTitle3 = document.querySelector('.resultDescTitle3');
  resultDescTitle3.innerHTML = infoList[point].descTitle3;
  resultDesc3.innerHTML = infoList[point].desc3;
  
  // 설명 텍스트 설정 (4)
  const resultDesc4 = document.querySelector('.resultDesc4');
  const resultDescTitle4 = document.querySelector('.resultDescTitle4');
  resultDescTitle4.innerHTML = infoList[point].descTitle4;
  resultDesc4.innerHTML = infoList[point].desc4;

  // 설명 텍스트 설정 (5)
  const resultDesc5 = document.querySelector('.resultDesc5');
  const resultDescTitle5 = document.querySelector('.resultDescTitle5');
  resultDescTitle5.innerHTML = infoList[point].descTitle5;
  resultDesc5.innerHTML = infoList[point].desc5;

  // 추가 설명 텍스트 desc6 ~ desc14
  document.querySelector('.resultDesc6').innerHTML = infoList[point].desc6;
  document.querySelector('.resultDesc7').innerHTML = infoList[point].desc7;
  document.querySelector('.resultDesc8').innerHTML = infoList[point].desc8;
  document.querySelector('.resultDesc9').innerHTML = infoList[point].desc9;
  document.querySelector('.resultDesc10').innerHTML = infoList[point].desc10;
  document.querySelector('.resultDesc11').innerHTML = infoList[point].desc11;
  document.querySelector('.resultDesc12').innerHTML = infoList[point].desc12;
  document.querySelector('.resultDesc13').innerHTML = infoList[point].desc13;
  document.querySelector('.resultDesc14').innerHTML = infoList[point].desc14;


  // 추천 정보 세팅
  const resultIf = document.querySelector('.ifU');
  const resultbasicj1 = document.querySelector('.basic1');
  const resultbasicj2 = document.querySelector('.basic2');
  const resultbasicj3 = document.querySelector('.basic3');
  resultIf.innerHTML = infoList[point].resultif;
  resultbasicj1.innerHTML = infoList[point].resultbasic1;
  resultbasicj2.innerHTML = infoList[point].resultbasic2;
  resultbasicj3.innerHTML = infoList[point].resultbasic3;
}

// 결과 페이지로 전환하고 결과 세팅
function goResult(){
  // 질문 영역 페이드 아웃
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";

  setTimeout(() => {
    //결과 영역 페이드 인
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";

    setTimeout(() => {
      qna.style.display = "none"; // 질문 숨김
      result.style.display = "block" // 결과 표시
    }, 450)})

    setResult(); // 결과 세팅
}

// 사용자의 선택지를 화면에 추가하고 클릭 이벤트 연결

function addAnswer(answerText, qIdx, idx){
  const a = document.querySelector('.answerBox');
  const answer = document.createElement('button');

  // 선택지 버튼 스타일 클래스 적용
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  answer.innerHTML = answerText;
  a.appendChild(answer);

  // 선택지 클릭 시 이벤트 처리
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');

    // 다른 선택지 비활성화 및 페이드 아웃
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }

    // 페이드아웃 후 다음 질문으로 이동
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      
      // 해당 Type들 점수 +1 누적
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      // 선택지 숨김
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }

      // 다음 질문
      goNext(++qIdx);
    },450)
  }, false);
}

// 다음 질문을 화면에 출력
// qIdx > 현재 질문 인덱스
function goNext(qIdx){
  // 마지막 질문 후 결과로 이동
  if(qIdx === endPoint){
    goResult();
    return;
  }

  // 질문 출력
  const q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;

  // 선택지 출력
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }

  // 상태 바 및 질문 번호 업데이트
  const countStatusNum = document.querySelector('.countStatus'); 
  countStatusNum.innerHTML = (qIdx+1)+"/"+ endPoint;

  const status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}


// 테스트 버튼 클릭 시 호출되는 함수
function begin(){
  // 메인화면 페이드 아웃
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";

  setTimeout(() => {
    // QnA 페이드 인
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    
    setTimeout(() => {
      main.style.display = "none"; // 메인 숨김
      qna.style.display = "block" // 질문 표시
    }, 450)

    let qIdx = 0;
    goNext(qIdx); // 첫 질문 시작ㄹㅇ
  }, 450);
}


//테스트 응시 수를 카운트하는 보조 함수
function countTest(){
  var resultCount = document.getElementById('countTestResult'); 

  var num = resultCount.innerText; 
  num = parseInt(num)+1; 

  resultCount.innerText = num;
}