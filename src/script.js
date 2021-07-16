//Controle carrossel
const carrossel = document.querySelector('.carrouse-slides')
new Glider(carrossel,{
    slidesToShow:1,
    slidesToScroll:1,
    draggable:true,
    arrows:{
        prev: '#previous',
        next:'#next'
    },
    scrollLock: true
})




//registro de email preenchido no localstorage

const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    console.log(email)
    let convertedData = JSON.stringify(email);
    localStorage.setItem('lead', convertedData);
    alert("Obrigado pela visita! \nEmail cadastrado!")
})
