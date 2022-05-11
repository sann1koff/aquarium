let pageUpIcon = document.querySelector('.page-up-button');
window.onscroll = function(){
    if(window.pageYOffset >= 400){
        pageUpIcon.style.display = 'block'
    } else{ pageUpIcon.style.display = 'none'}
};

pageUpIcon.onclick = function(){
    window.scrollTo(0, 0);
}