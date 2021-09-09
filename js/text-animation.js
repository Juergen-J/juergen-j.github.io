let TEXTS = ["Frontend developer", "Backend developer", "Creative Person"];

let index = 0;
$(function () {
    setInterval(function () {
        $('#header-text-change').fadeOut(1000, function () {
            // 1500
            $(this).text(TEXTS[index++]).fadeIn(900);
// 2000
            if (index === TEXTS.length)
                index = 0
        });
    }, 0);
//    3000
});