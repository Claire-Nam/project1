document.addEventListener("DOMContentLoaded", function () {
  const monthElements = document.getElementsByClassName("mon-festival");

  function getMonths() {
    const date = new Date(); // Date 객체 생성
    const month = date.getMonth() + 1;

    // HTML의 첫번째 요소의 innerHTML 수정
    if (monthElements.length > 0) {
      monthElements[0].innerHTML = `<h2>${month}월의 축제</h2>`;
    }
  }

  getMonths();

  // Swiper 초기화
  const swiper = new Swiper(".swiper", {
    direction: "horizontal", // 가로로 넘기기
    loop: true, // 슬라이드 무한 반복
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000, // 3초 간격으로 자동으로 넘어감
    },
  });
});
