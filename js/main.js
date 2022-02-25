// let arr = new Array(4).fill();
// console.log(arr);
window.onload = () => {
  let images = document.querySelectorAll(".image");
  let imgStack = [0, 0];
  let colWidth = 250;

  let resizeId = "";
  // let body = document.getElementsByTagName("body")[0];

  window.addEventListener("resize", function () {
    this.clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 300);
    console.log("change");
  });
  function doneResizing() {
    let innerWidth = window.innerWidth;
    // innerWidth <= "517" ? (imgStack = [0, 0]) : (imgStack = [0, 0, 0]);

    // switch (innerWidth) {
    //   case innerWidth <= "517":
    //     imgStack = [0, 0];
    //     console.log(imgStack);
    //     break;
    //   case innerWidth >= "768":
    //     imgStack = [0, 0, 0];
    //     break;
    // }

    let imgW;
    if (innerWidth <= "576") {
      imgStack = [0];
      colWidth = 300;
      imgW = 300;
      document.querySelectorAll(".image").style.maxWidth = `${imgW}px`;
    } else if (innerWidth <= "768") {
      imgStack = [0, 0];
    } else if (innerWidth <= "992") {
      imgStack = [0, 0, 0];
    } else if (innerWidth <= "1200") {
      imgStack = [0, 0, 0, 0];
    } else if (innerWidth <= "1400") {
      imgStack = [0, 0, 0, 0, 0];
    } else {
      imgStack = [0, 0, 0, 0, 0, 0, 0];
    }

    // innerWidth <= "768" ? (imgStack = [0, 0, 0]) : (imgStack = [0, 0, 0, 0]);
    // innerWidth <= "517" ? (body.style.backgroundColor = "red") : (body.style.backgroundColor = "blue");
  }

  doneResizing();

  for (let i = 0; i < images.length; i++) {
    let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
    // 최소값
    // apply(null, imgStack)도 상관X
    let x = colWidth * minIndex;
    let y = imgStack[minIndex];
    imgStack[minIndex] += images[i].children[0].height + 20;
    // 이미지 높이에+20
    images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
    // 그냥 애니메이션
    console.log("Window Width:" + innerWidth, imgStack);
    if (i === images.length - 1) {
      document.querySelector(".images").style.height = `${Math.max.apply(0, imgStack)}px`;
      // 마지막 컨테이너 높이 지정
    }

    // let body = document.getElementsByTagName("body")[0];
    // window.onresize = function (event) {
    //   let innerWidth = window.innerWidth;
    //   innerWidth <= "1280" ? (body.style.backgroundColor = "red") : (body.style.backgroundColor = "blue");
    //   // innerWidth <= "1280" ? imgStack.pop() : imgStack.push(0);
    //   console.log(imgStack);
    // };
  }
};
