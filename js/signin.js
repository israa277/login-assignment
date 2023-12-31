var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passInput = document.getElementById('password');
var btn = document.getElementById('signUp');
var Message = document.getElementById('message');
var Success = document.getElementById('Success');
var emailLocal = document.getElementById('emailLocal');
btn.addEventListener('click' , addData);
nameInput.addEventListener('input',deleteMessage);
emailInput.addEventListener('input',deleteMessage);
passInput.addEventListener('input',deleteMessage);
var dataList = [];
if (localStorage.getItem('dataUser')!= null ){
    dataList = JSON.parse(localStorage.getItem('dataUser'));
}
function addData(){
    if (nameInput.value != "" && emailInput.value != "" && passInput.value != ""){
        var Data ={
            Name: nameInput.value ,
            Email: emailInput.value ,
            Password: passInput.value
        }
        if(dataList.length==0){
            dataList.push(Data);
            localStorage.setItem('dataUser', JSON.stringify(dataList));
            Success.classList.remove('d-none');
            Message.classList.add('d-none')
        } else{
             var emialExists = false;
             for (var i = 0 ; i<dataList.length ; i++){
                if(dataList[i].Email === emailInput.value){
                    emialExists = true;
                    break;
                    emailLocal.classList.remove('d-none');
                    Message.classList.add('d-none')
                }
             } if (emialExists){
                emailLocal.classList.remove('d-none');
                Message.classList.add('d-none');
             }else{
                dataList.push(Data);
                localStorage.setItem('dataUser', JSON.stringify(dataList));
                emailLocal.classList.add('d-none');
                Success.classList.remove('d-none');
                Message.classList.add('d-none');
             }
        }
        clearData()
    }else{
        Message.classList.remove('d-none');
        Success.classList.add('d-none');
        emailLocal.classList.add('d-none')
    }

}
function clearData(){
    nameInput.value = "";
    passInput.value = "";
    emailInput.value = "";
}

function deleteMessage(){
    Success.classList.add('d-none');
    emailLocal.classList.add('d-none')
}


     // for(var i=0 ; i<dataList.length ; i++ ){
            //     if(dataList[i].Email != emailInput.value ){
            //         dataList.push(Data);
            //         localStorage.setItem('dataUser', JSON.stringify(dataList));
            //         Success.classList.add('d-none');
                    
            //     }else{
            //         emailLocal.classList.remove('d-none');
            //     }
            