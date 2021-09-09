$(document).ready(function () {
    $('header.header nav.navigation a').click(function () {
        $('header.header nav.navigation a').removeClass('active');
        $(this).addClass('active');
    });
});
$(function () {
    let currentHash = "home"
    $(document).scroll(function () {
        $('.hash').each(function () {
            let top = window.pageYOffset;
            let distance = top - $(this).offset().top;
            let hash = $(this).attr('name');
            if (distance < 30 && distance > -30 && currentHash !== hash) {
                $('header.header nav.navigation a').removeClass('active');

                $('header.header nav.navigation a').each(function (i, elem) {
                    if ($(this).attr('href') === '#' + hash) {
                        $(this).addClass('active');


                    }
                });
                currentHash = hash;
            }
        });
    });
});
