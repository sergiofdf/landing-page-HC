//Controle do carrossel pelo scroll do mouse
const carrossel = document.querySelector(".carrossel-container")
carrossel.addEventListener("wheel", event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(300,0)
    }else{
        event.target.scrollBy(-300,0)
    }
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
