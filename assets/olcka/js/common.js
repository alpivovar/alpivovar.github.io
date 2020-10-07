$(document).ready(function(){
    $('.spoiler-title').click(function(){
        $(this).parent().children('.spoiler-body').slideToggle();
        return false;
    });
});


const btn1 = document.querySelector('#button1'),
      btn2 = document.querySelector('#button2'),
      btn3 = document.querySelector('#button3'),
      divElement1 = document.querySelector('.section_5_item_2'),
      divElement2 = document.querySelector('.section_5_item_3'),
      divElement3 = document.querySelector('.section_5_item_4');

btn1.addEventListener('click', () => {
    divElement1.classList.toggle('show');
    divElement2.classList.remove('show');
    divElement3.classList.remove('show');
});

btn2.addEventListener('click', () => {
    divElement2.classList.toggle('show');
    divElement1.classList.remove('show');
    divElement3.classList.remove('show');
});

btn3.addEventListener('click', () => {
    divElement3.classList.toggle('show');
    divElement1.classList.remove('show');
    divElement2.classList.remove('show');
});

