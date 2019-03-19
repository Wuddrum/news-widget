window.onload = function () {
	var newsWidget = document.getElementById('NewsWidget');
	document.addEventListener('scroll', onScroll);

	window.addEventListener('message', function (e) {
		var data = e.data;
		if (!e.origin || !+data || data <= 0)
			return;
		newsWidget.style.height = data + 'px';
	});

	function inView() {
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
			newsWidget.contentWindow.postMessage('s', '*');
			document.removeEventListener('scroll', onScroll);
		}
	}
	onScroll();
};
