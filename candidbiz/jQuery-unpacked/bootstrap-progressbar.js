/* bootstrap-progressbar v0.5.0 | Copyright 2012 minddust.com | http://www.apache.org/licenses/LICENSE-2.0 */
(function (a) {
	var h = function (d, e) {
		this.element = a(d);
		this.options = a.extend({}, a.fn.progressbar.defaults, e)
	};
	h.prototype = {
		constructor: h,
		transition: function () {
			var d = this.element,
				e = d.parent(),
				f = this.back,
				g = this.front,
				c = this.options,
				j = d.attr("data-percentage"),
				h = d.attr("data-amount-part"),
				k = d.attr("data-amount-total"),
				l, p, q, i;
			l = e.hasClass("vertical");
			p = c.update && "function" === typeof c.update ? c.update : a.fn.progressbar.defaults.update;
			q = c.done && "function" === typeof c.done ? c.done : a.fn.progressbar.defaults.done;
			i = c.fail && "function" === typeof c.fail ? c.fail : a.fn.progressbar.defaults.fail;
			if (c.use_percentage && !j) i("bootstrap-progressbar: you can't use percentage without data-percentage being set");
			else {
				if (!c.use_percentage) {
					if (!h && !k) {
						i("bootstrap-progressbar: you can't use values without data-amount-part and data-amount-total being set");
						return
					}
					j = Math.round(100 * h / k)
				}
				if (c.display_text === a.fn.progressbar.display_text.center && !g && !f) {
					this.back = f = a("<span>").addClass("progressbar-back-text");
					this.front = g = a("<span>").addClass("progressbar-front-text");
					e.prepend(f);
					d.prepend(g);
					var b;
					l ? (b = e.css("height"), f.css("height", b), f.css("line-height", b), g.css("height", b), g.css("line-height", b), a(window).resize(function () {
						b = e.css("height");
						f.css("height", b);
						f.css("line-height", b);
						g.css("height", b);
						g.css("line-height", b)
					})) : (b = e.css("width"), g.css("width", b), a(window).resize(function () {
						b = e.css("width");
						g.css("width", b)
					}))
				}
				setTimeout(function () {
					var b, i, m, n, o;
					l ? d.css("height", j + "%") : d.css("width", j + "%");
					var r = setInterval(function () {
						l ? (m = d.height(), n = e.height()) : (m = d.width(), n = e.width());
						b = Math.round(100 * m / n);
						i = Math.round(m / n * k);
						b >= j && (b = j, i = h, q(), clearInterval(r));
						c.display_text !== a.fn.progressbar.display_text.none && (o = c.use_percentage ? b + "%" : i + " / " + k, c.display_text === a.fn.progressbar.display_text.filled ? d.text(o) : c.display_text === a.fn.progressbar.display_text.center && (f.text(o), g.text(o)));
						p(b)
					}, c.refresh_speed)
				}, c.transition_delay)
			}
		}
	};
	a.fn.progressbar = function (d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("progressbar"),
				g = "object" === typeof d && d;
			f || e.data("progressbar", f = new h(this, g));
			if ("string" === typeof d) f[d]();
			f.transition()
		})
	};
	a.fn.progressbar.display_text = {
		none: 0,
		filled: 1,
		center: 2
	};
	a.fn.progressbar.defaults = {
		transition_delay: 300,
		refresh_speed: 50,
		display_text: a.fn.progressbar.display_text.none,
		use_percentage: !0,
		update: a.noop,
		done: a.noop,
		fail: a.noop
	};
	a.fn.progressbar.Constructor = h
})(window.jQuery);