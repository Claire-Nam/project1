document.addEventListener("DOMContentLoaded", function () {
  const monthElements = document.getElementsByClassName("mon-festival");

  function getMonths() {
    const date = new Date(); // Date 객체 생성
    const month = date.getMonth() + 1;

    // HTML의 첫번째 요소의 innerHTML 수정
    monthElements[0].innerHTML = `<h2>${month}월의 축제</h2>`;
  }

  getMonths();
});

const swiperElements = document.getElementsByClassName(".swiper");

const swiper = new Swiper("swiperElements", {
  virtual: {
    enabled: true,
  },
});
