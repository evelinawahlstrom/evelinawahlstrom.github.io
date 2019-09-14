
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/7426473A-5F04-4C0C-8485-AAC699F7401D.jpg') {
    myImage.setAttribute ('src','images/firefox2.jpg');
  } else {
    myImage.setAttribute ('src','images/7426473A-5F04-4C0C-8485-AAC699F7401D.jpg');
  }
}


