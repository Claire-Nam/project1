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
const swiper = new Swiper(".swiper-container", {
    height: 400,
    width: 240,
    direction: 'horizontal',
    effect: 'coverflow',
  
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 30,
    freeMode: true,
    freeModeSticky: true,
    mousewheel: true,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 40,
    },
    virtual: {
      slides: (function() {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push(
            '<img src="https://picsum.photos/600/600/?image=' +
              (i + 1) +
              '"/><p>' +
              (i + 1) +
              "</p>"
          );
        }
        return slides;
      })()
    }
  });
  