function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===page));
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.page===page));
  window.scrollTo({top:0,behavior:'smooth'});
}
let searchTimer=null;
function startSearch(){
  navigate('voice');
  const state=document.getElementById('voiceState');
  const hint=document.getElementById('voiceHint');
  const start=document.getElementById('searchButton');
  const cancel=document.getElementById('cancelButton');
  state.textContent='Ищем собеседника…';
  hint.textContent='Это демонстрация интерфейса. Реальное соединение пока не выполняется.';
  start.classList.add('hidden'); cancel.classList.remove('hidden');
  searchTimer=setTimeout(()=>{
    state.textContent='Пока никого нет';
    hint.textContent='Поиск в демо-версии завершён. Когда подключим сервер, здесь появится реальное соединение.';
    cancel.classList.add('hidden'); start.classList.remove('hidden');
  },3500);
}
function cancelSearch(){
  clearTimeout(searchTimer);
  document.getElementById('voiceState').textContent='Поиск отменён';
  document.getElementById('voiceHint').textContent='Ты можешь попробовать ещё раз.';
  document.getElementById('cancelButton').classList.add('hidden');
  document.getElementById('searchButton').classList.remove('hidden');
}
function showToast(message){
  const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2200);
}
