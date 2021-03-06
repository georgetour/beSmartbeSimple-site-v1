$(document).ready(function () {

  //Smooth animation  pages
    $(".showEffect1").animate({left: "0"}, {
        duration: 1500
    });

    $(".showEffect2").animate({left: "0"}, {
        duration: 1800
    });

    $(".showEffect3").animate({left: "0"}, {
        duration: 2300
    });

    $(".showEffect4").animate({left: "0"}, {
        duration: 2500
    });

    $(".showEffect5").animate({left: "0"}, {
        duration: 3000
    });

    $(".showEffect6").animate({left: "0"}, {
        duration: 3200
    });

    $(".showEffect7").animate({right: "0"}, {
        duration: 1200
    });


    $(".showEffect8").animate({right: "0"}, {
        duration: 5000
    });
   
    

    $('.footerAbout').on('click',function () {
        $(about).click();

    });

    $('.footerContact').on('click',function () {
        $(contactUs).click();
    });

    $('.learnMore').on('click',function () {
        $(services).click();

    });

    //Let's collapse the bootstrap navbar in mobile when we click a link
   $('.nav a').click(function(){
        $('.navbar-collapse').collapse('hide');
   });


//Hiding from html the error message
    $('#error').hide();

    //Creating empty string variable to use in error id  message below
    var errorMessage ;

    //Flag variuable to cntrol when form wil be submitted
    var flag = 0;

    $('#contact').submit(function (event) {

        //Pattern for only letters and numbers
        function validation(gameTitle) {
            var pattern = /^\s*[a-zA-Z0-9,\s]+\s*$/;
            return pattern.test(gameTitle);

        }

        //Pattern for email only
        function isValidEmailAddress(emailAddress) {
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test(emailAddress);
        }

        //Recaptcha front end validation
        var response = grecaptcha.getResponse();

        if (!isValidEmailAddress($('#email').val())) {
            event.preventDefault();
            errorMessage = 'Give correct email';
            $('#error').html(errorMessage);
            $('#error').show();
            $('#error').fadeOut(3000);
            flag = 2;
        }



        if(response.length == 0){
            event.preventDefault();
            errorMessagebot = 'You are not a bor are you?';
            $('#error').html(errorMessagebot);
            $('#error').show();
            $('#error').fadeOut(3000);
            flag = 2;

        }
        else{
            flag=0;
        }
        if(flag==2){
            event.preventDefault();
        }



    })






});