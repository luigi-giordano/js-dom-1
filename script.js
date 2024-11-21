//VARIABILI
const immagineLampadinaSpenta = document.getElementById('light off');
const immagineLampadinaAccesa = document.getElementById('light on');
//VARIABILI
const bottoneLampadinaSpenta = document.querySelector('.btn');
const bottoneLampadina = document.getElementById('bottone')

//SELEZIONO IL PARAGRAFO CREATO DINAMICAMENTE E UNA VOLTA TROVATO LO INVOCO
bottoneLampadina.addEventListener('click', () =>{
  immagineLampadinaAccesa.classList.toggle('hide');
  bottoneLampadina.innerHTML = immagineLampadinaSpenta.classList.contains('hide') ? 'Accendi' : 'Spegni';
  immagineLampadinaSpenta.classList.toggle('hide');
})