//검색 버튼 및 검색 입력 요소 선택
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultElements = document.getElementsByClassName("content");

// 검색 버튼 클릭 시 이벤트 처리
searchButton.addEventListener("click", handleSearch);

// 키보드 엔터 키의 이벤트 처리
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSearch(e);
  }
});

// 검색 기능 처리 함수
function handleSearch(e) {
  e.preventDefault();

  const query = searchInput.value.trim(); // 입력값 가져오기 및 공백제거

  //검색어 유효성 검사
  if (!query) {
    alert("검색어를 입력하세요.");
  } else if (!isValidSearch(query)) {
    resultElements[0].innerHTML =
      "<p>해당하는 검색 결과를 찾을 수 없습니다.</p>";
    window.location.href = "search.html";
  } else {
    //유효한 검색어에 실행할 코드
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
}

// 검색어 유효성 검사
function isValidSearch(query) {
  if (query === "000") {
    return false;
  }
  return true;
}
