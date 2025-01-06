let TEXTS = ["Frontend developer", "Backend developer", "DevOPS"];

let index = 0;
$(function () {
    setInterval(function () {
        $('#header-text-change').fadeOut(1000, function () {
            $(this).text(TEXTS[index++]).fadeIn(900);
            if (index === TEXTS.length)
                index = 0
        });
    }, 0);
});