!function() {
    window.addEventListener('message', function(e) {
        var data = e.data;
        if (!e.origin || e.origin.replace(/^https?:\/\//,'') !== "wuddrum.github.io" || !+data || data <= 0) return;
        document.getElementById('NewsWidget').style.height = data + 'px';
    });
}();