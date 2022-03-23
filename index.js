let chars = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0
    ,'@','#','$','%','^','&','*','_','-','!'
]
let generateBtn = document.querySelector('.generate');
let inputFieldOne = document.getElementById('password-one');
let inputFieldTwo = document.getElementById('password-two');
let inputFieldThree = document.getElementById('password-three');
let inputFieldFour = document.getElementById('password-four');
let result = []

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * chars.length);
    return randomNumber;
}

function randomPassword() {
  let random = [];
  for (let i = 0; i < 8; i++) {
    random.push(chars[randomNumber()]);
  }

  random = random.join(""); // uklanja zareze iz vracenih vrijednosti
  return random;
}

function generatePasswords() {
  for (let i = 0; i < chars.length; i++) {
    result = randomPassword();
    inputFieldOne.value = result;
    result = randomPassword();
    inputFieldTwo.value = result;
    result = randomPassword();
    inputFieldThree.value = result;
    result = randomPassword();
    inputFieldFour.value = result;
  }
}