var emailInput = document.getElementById('emailLogin');
var passInput = document.getElementById('passwordLogin');
var Message = document.getElementById('messageLogin');
var incorrect = document.getElementById("incorrect");
var register = document.getElementById('register')
var btn = document.getElementById('login');
btn.addEventListener('click', addData )
var data = []
if(localStorage.getItem('dataUser') != null){
    data = JSON.parse(localStorage.getItem('dataUser'));
}
function addData(){
    if (emailInput.value != "" && passInput.value != ""){
        if(data.length == 0){
            register.classList.remove('d-none');
            Message.classList.add('d-none')
        }else{
            for(var i = 0 ; i<data.length ; i++){
                if(data[i].Email === emailInput.value && data[i].Password === passInput.value){
                   incorrect.classList.add('d-none');
                   window.location = './home.html';
                   localStorage.setItem('userName',(data[i].Name) )
                  
                  }else{
                       incorrect.classList.remove('d-none');
                       Message.classList.add('d-none');
                   }
            }
        }
            
        
    }else{
        Message.classList.remove('d-none');
        incorrect.classList.add('d-none');
    }
}
