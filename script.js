function toggleSidebar() {
    // 사이드바 및 오버레이 DOM 요소 가져오기
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    
    // 사이드바와 오버레이의 'active' 클래스를 토글하여 보이기/숨기기
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}
