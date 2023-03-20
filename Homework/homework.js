let comments = [];

document.getElementById('comment-add').onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    if (commentBody.value ==='') {
      alert ("Убедись, что оба поля не пустые");
    } else if (commentName.value ==='') {
      alert ("Убедись, что оба поля не пустые");
    } else {

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }
    
    commentName.value ='';
    commentBody.value ='';
    comments.push(comment);
    saveComments();
    showComments();
  }

  function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
  }}


function showComments(){
commentField = document.getElementById('comment-field');
  let out = '';
  comments.forEach(function(item){
    out += `
    <div id="comment-div" class="comment-div">
      <p class="text-right small"><em>${timeConventer(item.time)}</em></p>
      <p id="text-name" >${item.name}</p>
      <textarea id='textarea-name' class='hidden'>${item.name}</textarea>
      <div>
        <button id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="delet" onclick ="deletePost(event)"><i class="fa-solid fa-trash"></i></button>
      </div>
      <p id="text-body">${item.body}</p>
      <textarea id='textarea-body' class='hidden'>${item.body}</textarea>
    </div>`

    //Выводит комментарий в html
    commentField.innerHTML = out;  

    let edit = document.querySelector('#edit');
    let nameEl = document.getElementById('text-name');
    let bodyEl = document.querySelector('#text-body');
    let nameInputEl = document.querySelector('#textarea-name');
    let bodyInputEl = document.querySelector('#textarea-body');

    //редактирование комментария
    edit.addEventListener('click', (e) => {
      bodyEl.classList.toggle('hidden');

      bodyInputEl.classList.toggle('hidden');
    });

 
    
     //сохраняет результат редактирования
    bodyInputEl.addEventListener('input', (e) => {
      bodyEl.innerText = e.target.value;
    });
  });
};

//Конвертирует время эпохи в понятный формат
function timeConventer (UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Янв','Фев','Мрт','Апр','Май','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'];
  let year = a.getFullYear();
  let month = months = [a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
  let time = date + '.' + month + '.' + year + ' ' + hour + ':' + min ;
  return time;
}


 // Фенкция для удаления комментария
function deletePost(event){
let element = event.target.parentNode.parentNode.parentNode
element.remove()
} 

