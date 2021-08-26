/* HELLO WORLD */
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


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

  /* click handler */
  myButton.onclick = function() {
    setUserName();
  }