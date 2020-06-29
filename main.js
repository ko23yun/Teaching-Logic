const togglebtn = document.querySelector('.navtogglebtn');
const menu = document.querySelector('.navmenu');
const help = document.querySelector('.navhelp');

togglebtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  help.classList.toggle('active');
});

const togglebtn2 = document.querySelector('.Bbasic__togglebtn');
const menu2 = document.querySelector('.Bbasic__ul');
const icons2 = document.querySelector('.Bbasic__help');

togglebtn2.addEventListener('click', () => {
  menu2.classList.toggle('active');
  icons2.classList.toggle('active');
});
