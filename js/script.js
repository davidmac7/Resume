$(document).ready(function() {
    $(".resume-section").hover(
        function() {
            $(this).css("opacity", "0.7");
        },
        function() {
            $(this).css("opacity", "1");
        }
    );
});
