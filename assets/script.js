// About me text toggle

$(document).ready(function () {
    $('#aboutMeBtn').click(function () {
               $("#aboutMe").toggleClass("hideAboutMe");
                   }
    )
});

$(document).ready(function () {
    $('#closeAboutMe').click(function () {
               $("#aboutMe").toggleClass("hideAboutMe");
                   }
    )
});

// Contact Me toggle

$(document).ready(function () {
    $('.contactMeBtn').click(function () {
               $("#contactMe").toggleClass("hideContactMe");
                   }
    )
});

$(document).ready(function () {
    $('#closeContactMe').click(function () {
               $("#contactMe").toggleClass("hideContactMe");
                   }
    )
});
