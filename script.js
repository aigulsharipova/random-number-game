let myNumber = document.querySelector('#guess');
let button = document.querySelector('#btn');

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
}