document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.texts, .categori, .categori1');

    function scrolling() {
        var windowPosition = window.innerHeight / 1.3;

        elements.forEach(function(element) {
            var elementRect = element.getBoundingClientRect();

            if (elementRect.top < windowPosition) {
                element.classList.add('texts-transition');
            } else {
                element.classList.remove('texts-transition');
            }
        });
    }

    window.addEventListener('scroll', scrolling);
});

