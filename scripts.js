const boxContent = document.querySelectorAll(".box-content")
window.onscroll = function () {
    for(let i = 0; i < boxContent.length; i++) {
        if(boxContent[i].getBoundingClientRect().top < 200) {
            boxContent[i].classList.add('show')
        }
        else if(boxContent[i].getBoundingClientRect().top > 490){
            boxContent[i].classList.remove('show')
        }
    }
    console.log(boxContent[boxContent.length - 1].getBoundingClientRect())
}