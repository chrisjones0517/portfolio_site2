$(document).ready(() => {

    $('html,body').animate({ scrollTop: 30000 });

    $('#launchBtn').click(() => {
        $('#launchBtn').css('visibility', 'hidden');
        $('.container').css('animation', 'shake 0.3s linear infinite');
        $('#launchSound').trigger('play');
        $('#flame').css('display', 'inline-block');
        $('#flame').css('animation', 'thrust 0.1s linear infinite');
        $('#rocketDiv').css('top', '1055vw');

        setTimeout(() => {
            $('.container').css('animation', 'bgScroll 20s ease-in 1');
            $('.container').css('background-image', '');
        }, 5000);

        setTimeout(() => {
            $('.container').remove();
            $('html,body').animate({ scrollTop: 0 });
            $('body').prepend('<div class="container"></div')
            $('#launchSound').trigger('pause');
            $('.container').css({
                'background-image': 'url("./window.png")',
                'background-repeat': 'no-repeat',
                'background-size': '130vw 100vw',
                'background-position': 'top',
                'z-index': '-1'
            });
            $('.container').prepend('<div id="portfolio"><div id="topLayer"></div></div>');
            $('#launchSound').currentTime = 0;
            $('body').append('<iframe src="https://www.youtube.com/embed/iYYRH4apXDo?start=30&autoplay=1" style="display:none" allow="autoplay"></iframe>');
            $('#portfolio').css('animation', 'bgScrollWindow 500s linear 1');
            $('#topLayer').css('animation', 'topLayerScroll 1000s linear 1');
        }, 25000);
    });
});

