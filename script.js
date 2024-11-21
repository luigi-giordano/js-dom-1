const immagineLampadinaSpenta = document.querySelector('.img-fluid');
const immagineLampadinaAccesa = document.getElementById('on');
const bottoneLampadina = document.querySelector('.btn');


bottoneLampadina.addEventListener('click', () =>{
  immagineLampadinaAccesa.classList.toggle('hide');
  immagineLampadinaSpenta.classList.toggle('hide');
})