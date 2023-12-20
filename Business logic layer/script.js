function checkLogin() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
  
    if (username === 'Yavor' && password === 'Yavor7') {
      displayResult('Yes', 'green');
      changeBackground('lightgreen');
    } else {
      displayResult('No', 'red');
      changeBackground('pink');
    }
  }
  
  function displayResult(message, color) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = color;
  }
  
  function changeBackground(color) {
    document.body.style.backgroundColor = color;
  }
  
