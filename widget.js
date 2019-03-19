!function (window, document, id) {
	window.addEventListener('message', function (e) {
		var data = e.data;
		if (!+data || data <= 0)
			return;
		document.getElementById(id).style.height = data + 'px';
	});

	window.onload = function () {
		var newsWidget = document.getElementById(id);
		document.addEventListener('scroll', onScroll);
		function onScroll() {
			var scrollY = window.scrollY || window.pageYOffset;
			if (scrollY + window.innerHeight > newsWidget.getBoundingClientRect().top + scrollY + newsWidget.clientHeight) {
				newsWidget.contentWindow.postMessage('s', '*');
				document.removeEventListener('scroll', onScroll);
			}
		}
		onScroll();
	};
}
(window, document, 'NewsWidget');
