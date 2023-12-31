var button = document.getElementById('logout');
button.addEventListener('click' , function(){
    window.location = './index.html'
})


document.getElementById("title").innerHTML = `welcome ${localStorage.getItem('userName')} <i class="fa-regular fa-face-smile-beam "> </i><i class="fa-solid fa-heart"></i>`


