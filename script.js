let myNumber = document.querySelector('#guess');
let button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

myNumber.addEventListener('keypress', function(e) {
  if (e.keyCode === 13)  
    play()
})

button.addEventListener('click', play);
function play() {
const userNumber = document.querySelector('#guess').value;
if (userNumber < 1 || userNumber > 20) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...! Something went wrong!',
    text: 'Select number from 1 to 20',
  })
}
else if (isNaN(userNumber)) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...! Something went wrong!',
    text: 'Write the number',
  })
}
else {
  if (userNumber < answer) {
    Swal.fire('Biggest!');
  } 
  else if (userNumber > answer) {
    Swal.fire('Smaller!');
  }
  else {
    Swal.fire({
      title: 'Congratulation!',
      imageUrl: './style/win.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
}
}