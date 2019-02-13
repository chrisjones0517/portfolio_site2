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
            $('.container').prepend('<div id="earth"></div>');
            $('#launchSound').currentTime = 0;
        }, 25000);
    });
});