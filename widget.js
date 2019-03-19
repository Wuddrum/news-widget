!function (window, document, id) {
	window.addEventListener('message', function (e) {
		var data = e.data;
		if (data + 1 < 2)
			return;
		document.getElementById(id).style.height = data + 'px';
	});

	window.onload = function () {
		var newsWidget = document.getElementById(id);
		document.addEventListener('scroll', onScroll);

		function onScroll() {
			if (window.innerHeight > newsWidget.getBoundingClientRect().top) {
				document.removeEventListener('scroll', onScroll);
				newsWidget.contentWindow.postMessage('s', '*');
			}
		}
		onScroll();
	};
}
(window, document, 'NewsWidget');
