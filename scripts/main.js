/* IMAGE SWITCHER */
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/taco.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

/* WELCOME MESSAGE */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {  // falsey
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }

  /* CLICK HANDLER */
  myButton.onclick = function() {
    setUserName();
  }