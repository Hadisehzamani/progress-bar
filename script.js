let nextbtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let circles = document.querySelectorAll('.circle')
let progress = document.getElementById('progress')
let currentPage = 1

nextbtn.addEventListener('click', function(){
    currentPage++;
    if(currentPage > circles.length){
        currentPage = circles.length
    }
    update();

})

prevBtn.addEventListener('click', function(){
    currentPage--;
    if(currentPage < 1){
        currentPage = 1;
    }
    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentPage){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1)/(circles.length - 1)) * 100 + '%'
    if(currentPage === 1){
        prevBtn.disabled = true

    }
    else if(currentPage === circles.length){
        nextbtn.disabled = true
    }
    else{
        prevBtn.disabled = false;
        nextbtn.disabled = false;
    }
}