let div_Image=document.querySelector('.img');
let image=document.getElementById('vedio');
let full_screen= document.querySelector('.full_screen')
let full_screen_imag= document.querySelector('.full_screen img')

function changePosition() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        
        
        vedio.classList.add('vedio')
        
    }else{
        vedio.classList.remove('vedio')
    }
}


window.addEventListener('load', changePosition);
window.addEventListener('resize', changePosition);

vedio.onclick = function(){
    change_screen(vedio)
}
function change_screen(ele){
    ele.classList.toggle('changeWidth')

} 

let progress = document.querySelector('.progres')
let progress_span = document.querySelector('.progres span')

window.onscroll = function () {
    if (this.scrollY >= 664) {
        
        progress_span.style.width = "63%";
    }else{
        progress_span.style.width = "";
    }
}

let Book=document.querySelector('.Book');
let comment_dots=document.querySelector('.comment_dots');
let circle_question=document.querySelector('.circle_question');
let user=document.querySelector('.user');
let textarea = document.getElementById('textarea')

window.onscroll = function(){
    console.log(this.scrollY);

    
}
Book.onclick = function () {
   
    scrollToPosition(400)
}
comment_dots.onclick = function () {
   
    scrollToPosition(2191);
    

}
circle_question.onclick = function () {
   
    scrollToPosition(321);
    

}
user.onclick = function () {
   
    scrollToPosition(173);
    

}
function scrollToPosition(position) {
    window.scrollTo({
        top: position,
        behavior: 'smooth' 
    });
}
let PDF_Bage = document.querySelector('.PDF');
let PDF_Bage_icon = document.querySelector('.PDF i');
let Course_Overview = document.querySelector('.Course_Overview');


PDF_Bage_icon.onclick = function () {
    PDF_Bage.classList.add('none')
    PDF_Bage.classList.remove('block')
}
Course_Overview.onclick = function () {
    PDF_Bage.classList.remove('none')
    PDF_Bage.classList.add('block')
    
}