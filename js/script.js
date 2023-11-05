const btn=document.getElementById('myBtn');
const modal=document.getElementById('myModal');
btn.addEventListener('click',openModal);
function openModal(){
  modal.classList.add('open');
  modal.querySelector('.close').addEventListener('click',closeModal);
  document.addEventListener('keydown',escClose);
  modal.addEventListener('click',outClose);
}
function escClose(event){
  if(event.key==='Escape')closeModal();
}
function outClose(event){
  if(!event.target.closest('.modal-content'))
  closeModal();
}
function closeModal(){
  modal.classList.remove('open');
  modal.querySelector('.close').removeEventListener('click',closeModal);
  document.removeEventListener('keydown',escClose);
  modal.removeEventListener('click',outClose);
}
