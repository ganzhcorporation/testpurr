const btn=document.querySelector('form');
const inputs=document.querySelectorAll('input');

btn.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    inputs.forEach(input =>{
    if(input.value===""){
        input.style.border='3px solid red'
        return
    } else{
        input.style.border='3px solid blue'
        console.log('данные ушли!!!')
    }
    })
    inputs.forEach(input =>{
        input.value=""})
})