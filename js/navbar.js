
// 햄버거 메뉴 버튼 요소 선택
const toggleBtn = document.querySelector('.navbar__toggleBtn');

// 네비게이션 메뉴 요소 선택
const menu = document.querySelector('.navbar__menu');

// SNS 아이콘 영역 선택 (페이스북, 인스타 등)
const sns = document.querySelector('.navbar__sns');

// 햄버거 버튼 클릭 시 실행되는 이벤트 등록
toggleBtn.addEventListener('click', () => {
        // 메뉴에 'active' 클래스 토글 (있으면 제거, 없으면 추가)
        menu.classList.toggle('active');

        // SNS 영역에도 'active'클래스 토글
        sns.classList.toggle('active');
});

