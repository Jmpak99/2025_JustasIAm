
function setShare(){

    if (!Kakao.isInitialized()) {
        Kakao.init('69b60ffde33e69fed5960adba8c69b9f');
    }

    // 결과 이미지 div 안에 있는 <img>태그 선택
    var resultImg = document.querySelector('#resultImg'); 

    // 해당 이미지의 alt 속성을 통해 결과 유형번호 (0-3) 추출
    var resultAlt = resultImg.firstElementChild.alt; 

    // 공유 메시지 제목
    const shareTitle = '신앙생활 유형 테스트 결과'

    // 공유 설명 : infoList에서 해당 유저의 이름 사용
    const shareDes=infoList[resultAlt].name;

    const shareImage= 'https://justasiam.netlify.app/' + 'img/image-' + resultAlt + '.png';
    const shareURL = 'https://justasiam.netlify.app/' + 'result-' + resultAlt + '.html';

    // 카카오톡 공유 메시지 전송
    Kakao.Link.sendDefault({
        objectType: 'feed', // 메시지 타입 : 피드 (카드형)
        content: {
        title: shareTitle, // 카드 제목
        description: shareDes, // 카드 설명
        imageUrl: shareImage, // 썸네일 이미지
        link: {
            mobileWebUrl: shareURL, // 모바일 웹 링크
            webUrl : shareURL, // PC 웹 링크
        },
        },
        buttons: [
        {
            title: '결과 확인하기', // 버튼 텍스트
            link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL
            },
        },
        ]
    });

}