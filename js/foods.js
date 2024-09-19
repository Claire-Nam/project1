$(document).ready(function () {
  $.ajax({
    url: "https://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=ad14c811-c562-4389-b3da-d9ac6ceb9925&numOfRows=10&pageNo=1",
    method: "GET",
    dataType: "json",
    success: function (res) {
      console.log("성공: ", res);
      let documents = res.response.body.items;
      for (let i = 0; i < documents.length; i++) {
        $(".korean").append("<span>" + documents[i].title + "</span>");
      }
    },
    error: function (err) {
      console.log("실패: ", err);
    },
  });
});
