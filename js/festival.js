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

// api 연결하기
$(document).ready(function () {
  $.ajax({
    url: "https://thingproxy.freeboard.io/fetch/http://api.kcisa.kr/openapi/API_CNV_061/request?serviceKey=0d282533-0ef6-43a3-b4e7-f9dddc189d37&numOfRows=10&pageNo=1",
    method: "GET",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "x-requested-with": "XMLHttpRequest", // Ajax 요청임을 명시
    },
    success: function (res) {
      console.log("성공: ", res);
    },
    error: function (err) {
      console.log("실패: ", err);
    },
  });
});
