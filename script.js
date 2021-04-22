function randomNumber(){

    let btn = document.getElementById('btn')
        txt = document.getElementById('p1')
        math = Math.floor(Math.random() * 100)

    btn.addEventListener('click', function(){
        txt.innerHTML = math
    })
}


