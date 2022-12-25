window.onload = showAdvice;

$(".btn").click(function () {
  showAdvice();
});

function showAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      $(".adviceID").text(data.id);
      $(".adviceText").html(data.advice);
    })
    .catch((error) => {
      alert("hata alındı");
    });
}
