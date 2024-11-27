// ふわっと表示 
// $(function () {
//     var topBtn = $('#dl_sp,#dl_pc');
//     // topBtn.hide();
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//             topBtn.fadeIn();
//         } else {
//             topBtn.fadeOut();
//         }
//     });
// });

let els = document.querySelectorAll('#dl_sp,#dl_pc');
els.forEach((fadeIn) => {
  window.addEventListener('scroll', ()=> {
    let windowHeight = window.innerHeight;
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 250){
       fadeIn.classList.add('is-scrollIn');
    }
    else{
        fadeIn.classList.remove('is-scrollIn');
    }
  });
});

// ハンバーガーメニュー開閉
//$(function () {
//    $("#navBtn , #navMenu a").click(function () {
//        $("#navMenu").toggleClass("show");
//    });
//});



const btnOpen = document.querySelector('#navMenu');
const btns = document.querySelectorAll("#navBtn , #navMenu a");
btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});


// アコーディオン（PCダウンロードボタン）
// $(function () {
//     $("#dl_pc dt").on("click", function () {
//         $(this).next().slideToggle(300);
//         $(this).toggleClass("open", 300);
//     });
// });


const dt = document.querySelector('#dl_pc dt');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
dt.addEventListener("click", () => {
    dt.classList.toggle("open");
    dt.nextElementSibling.classList.toggle("close");
    //アニメーション
    const keyframes = {
        opacity: [0, 1],
    };

    const options = {
        duration: 3000,
        easing: 'ease',
    };

    dt.nextElementSibling.animate(keyframes, options);

});

