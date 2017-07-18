$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.smooth").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
    
});