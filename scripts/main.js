const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sushi_akami.png") {
    myImage.setAttribute("src", "images/sushi_ootoro.png");
  } else {
      myImage.setAttribute("src", "images/sushi_akami.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}


myButton.onclick = () => {
  setUserName();
};
