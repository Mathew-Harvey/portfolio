var showAboutMe = false

$(document).ready(function () {
    $('.aboutMeBtn').click(function () {
        if (showAboutMe == false) {
            showAboutMe = true
            $("#timerEl").toggleClass("hideAboutMe");
            // $(this).html('<i class="clock-icon fas fa-clock"></i><br />Show Timer');
        } else {
            showAboutMe = false
            $("#aboutMe").toggleClass("hideAboutMe");
            // $(this).html('<i class="clock-icon far fa-clock"></i><br />Hide Timer');

        }


    })
});