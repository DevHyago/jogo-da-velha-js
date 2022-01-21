let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Adicionando evento de click a cada box
for(let i = 0; i < boxes.length; i++){

   //Quando alguem clica na caixa
   boxes[i].addEventListener('click', function() {
      
      let el = checkEl(player1, player2);

      //Verifica se o elemento já está ocupado
      if(this.childNodes.length == 0){
         let cloneEl = el.cloneNode(true);
         this.appendChild(cloneEl);

         //Computar Jogada
         if(player1 == player2){
            player1++;
         }else{
            player2++;
         }
      }

   });
}

function checkEl(player1, player2){
   if(player1 == player2){
      //X
      el = x;
   }else{
      //O
      el = o;
   }
   return el;
}