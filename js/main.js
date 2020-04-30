// jsを記述する際はここに記載していく<

$(document).ready(function(){
    $('.cource').slick({
        prevArrow: '<span class="prev-arrow">&lt;</span>',
        nextArrow: '<span class="next-arrow">&gt;</span>',
       infinite: true,
        dots:true,
        slidesToShow: 3,
        centerMode: true, //要素を中央寄せ
        centerPadding:'100px', //両サイドの見えている部分のサイズ
        autoplay:true, //自動再生
        responsive: [{
             breakpoint: 480,
                  settings: {
                       centerMode: false,
             }
        }]
  });
});
