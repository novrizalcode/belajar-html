$(".input").on("keyup change blur paste cut click", function() {
    var input = $(this).val();
    if (input == "password" || input == "password") {
        $('.inputwrapper').addClass('valid');
        $(this).blur();
    } else {
        $('.inputwrapper').removeClass('valid');
    }
});
