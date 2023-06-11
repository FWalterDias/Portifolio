const contato = document.querySelectorAll('.contato');
const dialog = document.querySelector('dialog');
const buttonDialog = document.querySelector('.dialog-button');

for (const item of contato) {
    item.addEventListener('click', (event)=>{
        dialog.showModal();
    });
}

buttonDialog.addEventListener('click', ()=>{
    dialog.close(); 
});