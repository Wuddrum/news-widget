!function() {
    window.addEventListener('message', function(e) {
        var data = e.data;
       // if (!e.origin || e.origin.replace(/^https?:\/\//,'') !== "wuddrum.github.io" || !+data || data <= 0) return;
        document.getElementById('NewsWidget').style.height = data + 'px';
    });
    
    window.addEventListener("load", function () {
        document.addEventListener('scroll', onScroll);

        function inView() {
            var newsWidget = document.getElementById('NewsWidget');
            var windowHeight = window.innerHeight;
            var scrollY = window.scrollY || window.pageYOffset;

            var scrollPosition = scrollY + windowHeight;
            var elementPosition = newsWidget.getBoundingClientRect().top + scrollY + newsWidget.clientHeight;

            if (scrollPosition > elementPosition) {
                return true;
            }

            return false;
        }
        function onScroll() {
            if (inView()) {
                console.log('onScroll_parent');

                var newsWidget = document.getElementById('NewsWidget');
                newsWidget.contentWindow.postMessage('onScroll', '*');
                document.removeEventListener('scroll', onScroll);
            }
        }
        onScroll();
    });
}();
