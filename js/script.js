let taps = document.querySelectorAll(".taps li");
let arrTaps = Array.from(taps);
let divs = document.querySelectorAll(".work .row > div");
let arrDivs = Array.from(divs);

arrTaps.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // console.log(ele)
    arrTaps.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    arrDivs.forEach((div) => {
      div.style.display = "block";
    });
    // console.log(e.currentTarget.dataset.count)
    document.querySelector(e.currentTarget.dataset.count).style.display = 'none';
  });
});
