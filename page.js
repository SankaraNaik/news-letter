const openBtn=document.querySelector('button');
const closeBtn=document.querySelector('#close');
const modal=document.querySelector('.modal');
const form=document.querySelector('form');


//open modal
openBtn.addEventListener('click' , openModal);

function openModal(){
    modal.style.display = 'grid';
}

//close modal
closeBtn.addEventListener('click' , clsModal);
function clsModal(){
    modal.classList.add('close-modal-animation');
    setTimeout(()=>{
        modal.style.display = 'none';
        window.location.reload();

    },2000)
}

modal.addEventListener('click' , function(e){
    if(e.target.classList.contains('modal')){
        clsModal();
    }
})


//greeting message
form.addEventListener('click',submitForm)
function submitForm(){
    const card=document.querySelector('.card');
    card.innerHTML="<h1>Thank you for visiting! </h1>";

    
    setTimeout(()=>{
        clsModal();
    },2000)
}

