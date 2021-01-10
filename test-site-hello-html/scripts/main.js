// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://www.joblo.com/assets/images/joblo/news/2020/11/The-Mandalorian-Baby-Yoda-cookies-913.jpg') {
      myImage.setAttribute('src','https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDc5ODE0OS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1ODYwNTI1MH0.NyAWm-LLTAvc4yadPGNYWeE-ZUmVcJPnuQEWV0jRgXo/img.jpg?width=1500&coordinates=516%2C0%2C599%2C0&height=2000');
    } else {
      myImage.setAttribute('src','https://www.joblo.com/assets/images/joblo/news/2020/11/The-Mandalorian-Baby-Yoda-cookies-913.jpg');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }