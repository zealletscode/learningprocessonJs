const form = document.querySelector('form');
const taskInput = document.querySelector('#taskinput');

form.addEventListener('submit', runEvent);
function runEvent(e) {

    //FOR CODING
    let coding, knowledge, creativity, programming, development;
   coding  = 5;
   knowledge = 4;
   creativity = 1;
   programming = 2;
   development = 3;

   //let ranNumber = Math.floor(Math.random() * 10) + 1;
   


   if (taskInput.value == coding) {
   setTimeout(() => {
    taskInput.value ="";
    document.querySelector('.answer').innerText = 'Its Coding';
   }, 2000);

   } else if(taskInput.value === development){
    setTimeout(() => {
        taskInput.value ="";
        document.querySelector('.answer').innerText = 'Its Development';
       }, 2000);
    
   } else if(taskInput.value == knowledge){
    setTimeout(() => {
        taskInput.value ="";
        document.querySelector('.answer').innerText = 'Its Knowledge';
       }, 2000);

   } else if(taskInput.value == creativity){
    setTimeout(() => {
        taskInput.value ="";
        document.querySelector('.answer').innerText = 'Its Creativity';
       }, 2000);

   } else if(taskInput.value == programming){
    setTimeout(() => {
        taskInput.value ="";
        document.querySelector('.answer').innerText = 'Its Programming';
       }, 2000);

   } else{
    setTimeout(() => {
        document.querySelector('.answer').innerText = 'Wrong Guess';
    }, 2000);
   }


    e.preventDefault();
}
