!function() {
    window.addEventListener('message', function(e) {
        var data = e.data;
        if (!e.origin || e.origin.replace(/^https?:\/\//,'') !== "wuddrum.github.io" || !+data || data <= 0) return;
        document.getElementById('NewsWidget').style.height = data + 'px';
    });
    
    var newsWidget = document.getElementById('NewsWidget');
    
    // attach a listener to the iframe load
    newsWidget.addEventListener("load", function () {
        var newsWidgetHeight = newsWidget.clientHeight;
        
        // attach a listener to the page scroll
        document.addEventListener('scroll', onScroll);

        function inView() {
            // check if in view
            var windowHeight = window.innerHeight;
            var scrollY = window.scrollY || window.pageYOffset;

            var scrollPosition = scrollY + windowHeight;
            var elementPosition = newsWidget.getBoundingClientRect().top + scrollY + newsWidgetHeight;

            if (scrollPosition > elementPosition) {
                return true;
            }

            return false;
        }

        function onScroll() {
            // fire on page scroll
            if (inView()) {
                // when in view send a message to the iframe and remove the onScrolllistener 
                console.log('onScroll_parent');
                newsWidget.contentWindow.postMessage('onScroll', '*');
                document.removeEventListener('scroll', onScroll);
            }
        }
});
}();
