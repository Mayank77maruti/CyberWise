
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$(document).ready(function(){
    $('.faq-item .question').click(function(){
        $(this).next('.answer').toggleClass('show');
    });
});
