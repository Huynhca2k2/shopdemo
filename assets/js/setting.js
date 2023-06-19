
const $ = document.querySelector.bind(document)

const modal = $('.modal');
const formLogin = $('.form-login');
const formRegister = $('.form-register');

function toggleClassDisplay() {
    modal.classList.toggle('display-none');
    formLogin.classList.toggle('display-none')
  }

function switchToLogin(){
    formLogin.classList.toggle('display-none')
    formRegister.classList.toggle('display-none')
}
