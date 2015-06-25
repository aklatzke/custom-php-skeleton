"use strict";
//# sourceMappingURL=Event.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = (function () {
	function Observer(eventName) {
		var eventTarget = arguments[1] === undefined ? false : arguments[1];

		_classCallCheck(this, Observer);

		this.eventTarget = eventTarget || window || document || false;
		this.eventName = eventName;

		this.event = new Event(eventName);
	}

	_createClass(Observer, [{
		key: "broadcast",
		value: function broadcast(data) {
			this.eventTarget.dispatchEvent(this.event, data);
		}
	}, {
		key: "listen",
		value: function listen(callable) {
			this.eventTarget.addEventListener(this.eventName, callable);
		}
	}]);

	return Observer;
})();
//# sourceMappingURL=Observer.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Differ = (function () {
	function Differ(old, newVal) {
		_classCallCheck(this, Differ);

		this.oldVal = old;
		this.newVal = newVal;
	}

	_createClass(Differ, [{
		key: "compare",
		value: function compare(newVal) {
			return !(this.oldVal === newVal);
		}
	}, {
		key: "compareAndKeep",
		value: function compareAndKeep(newVal) {
			var res = this.compare(newVal);

			this.oldVal = newVal;

			return res;
		}
	}, {
		key: "val",
		value: function val(oldStr) {
			this.oldVal = oldStr;
		}
	}]);

	return Differ;
})();
//# sourceMappingURL=_Differ.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = (function () {
	function Observer(eventName) {
		var eventTarget = arguments[1] === undefined ? false : arguments[1];

		_classCallCheck(this, Observer);

		this.eventTarget = eventTarget || window || document || false;
		this.eventName = eventName;

		this.event = new Event(eventName);
	}

	_createClass(Observer, [{
		key: "broadcast",
		value: function broadcast(data) {
			this.eventTarget.dispatchEvent(this.event, data);
		}
	}, {
		key: "listen",
		value: function listen(callable) {
			this.eventTarget.addEventListener(this.eventName, callable);
		}
	}]);

	return Observer;
})();
//# sourceMappingURL=_Event.js.map
;"use strict";
//# sourceMappingURL=_Events.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = (function () {
	function Init() {
		_classCallCheck(this, Init);

		this.eventListener;
		this.eventTarget;
		this.eventContext;
		this.callable;
		this.fireImmediately;
	}

	_createClass(Init, [{
		key: "checkInstantiation",
		value: function checkInstantiation() {
			var context = this.eventContext || this;

			var func = this.callable.bind(context, event);

			var isRegistered = this.eventListener && this.eventTarget && this.callable;

			if (isRegistered) {
				this.eventTarget.addEventListener(this.eventListener, function (event) {
					return func();
				});
			}

			if (this.fireImmediately && isRegistered) func();

			return this;
		}
	}, {
		key: "setCallable",
		value: function setCallable(callable) {
			var callableIsFunction = !!(callable && callable.constructor && callable.call && callable.apply);
			if (callableIsFunction) this.callable = callable;

			return this.checkInstantiation();
		}
	}, {
		key: "setEventListener",
		value: function setEventListener(listener) {
			this.eventListener = listener;

			return this.checkInstantiation();
		}
	}, {
		key: "setEventTarget",
		value: function setEventTarget(target) {
			this.eventTarget = target;

			return this.checkInstantiation();
		}
	}, {
		key: "setEventContext",
		value: function setEventContext(thisVar) {
			this.eventContext = thisVar;

			return this.checkInstantiation();
		}
	}, {
		key: "fireImmediately",
		value: function fireImmediately(val) {
			this.fireImmediately = val;

			return this.checkInstantiation();
		}
	}]);

	return Init;
})();
//# sourceMappingURL=_Init.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = (function () {
	function Observer(eventName) {
		var eventTarget = arguments[1] === undefined ? false : arguments[1];

		_classCallCheck(this, Observer);

		this.eventTarget = eventTarget || window || document || false;
		this.eventName = eventName;

		this.event = new Event(eventName);
	}

	_createClass(Observer, [{
		key: "broadcast",
		value: function broadcast(data) {
			this.tempData = data;

			this.eventTarget.dispatchEvent(this.event);
		}
	}, {
		key: "listen",
		value: function listen(callable, context) {
			var parent = this;

			context = context || this;

			this.eventTarget.addEventListener(this.eventName, function (e) {
				var func = callable.apply(context, [e, parent.tempData]);

				return func;
			});

			return this.tempData = undefined;
		}
	}]);

	return Observer;
})();
//# sourceMappingURL=_Observer.js.map
;"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Poller = (function () {
	function Poller(callable, interval) {
		_classCallCheck(this, Poller);

		this.callable = callable;
		this.interval = interval;
	}

	_createClass(Poller, [{
		key: "setCallable",
		value: function setCallable(callable) {
			this.callable = callable;

			return this;
		}
	}, {
		key: "setFrequency",
		value: function setFrequency(interval) {
			this.interval = interval;

			return this;
		}
	}, {
		key: "start",
		value: function start() {
			if (this.instance) window.clearInterval(this.instance);

			this.instance = window.setInterval(this.callable, this.interval);

			return this;
		}
	}, {
		key: "stop",
		value: function stop() {
			if (this.instance) window.clearInterval(this.instance);

			return this;
		}
	}, {
		key: "toggle",
		value: function toggle(toggleBool) {
			return toggleBool ? this.start() : this.stop();
		}
	}, {
		key: "fire",
		value: function fire() {
			return this.callable();
		}
	}]);

	return Poller;
})();
//# sourceMappingURL=_Poller.js.map
;'use strict';

$.fn.toggleAttribute = function (attribute) {
	var _this = $(this);

	if (_this.attr(attribute) === 'false' || _this.attr(attribute) === undefined) _this.attr(attribute, true);else _this.attr(attribute, false);

	return _this;
};
//# sourceMappingURL=_jQuery.js.map
;"use strict";

window.app = window.app || {};
//# sourceMappingURL=bootstrap.js.map
;"use strict";

jQuery(function () {

	function changeTabs(el) {
		var target = $(el).data("target");

		$(el).addClass("active").siblings().removeClass("active");

		$("[data-receiver=" + target + "]").addClass("active-tab").siblings(".tab-target").removeClass("active-tab");
	}

	var partialObserver = new Observer("partial-update");
	// trigger any 'descendant' events from this one
	partialObserver.listen(function (e, data) {
		insightObserver.broadcast();
	});

	partialObserver.listen(function (e, data) {
		if ($(this.selector).length) return $(this.selector).masonry({
			"itemSelector": ".grid-item",
			"columnWidth": 120
		});else return false;
	}, $(".grid"));

	partialObserver.listen(function (e, data) {
		$(this.selector).each(function () {
			var firstTab = $(this).find(".tab-item").first();

			changeTabs(firstTab);
		});
	}, $(".tab-list"));

	var requestObserver = new Observer("request-partial-update");

	requestObserver.listen(function (e, params) {
		var target = params.target;

		$.getJSON(target + "?partial=true", function (data) {
			if (data.partial) {
				$("main").html(data.partial);

				partialObserver.broadcast();
			}
		});

		window.history.pushState(target, "", target);
	});

	var dataPoller = new Poller();
	var dataObserver = new Observer("data-update");
	var saveObserver = new Observer("save-triggered");
	var insightObserver = new Observer("insights-update");

	insightObserver.listen(function (e, data) {
		if (!data) data = $(".editor-insights");
		if (!data.length) return;
		data = $(data).children();

		$(".editor-insights").html(data);

		// get highest nesting level
		var highest = data.map(function (i, e) {
			return parseInt($(e).attr("class").replace("list-item depth-", ""), 10);
		}).get().reduce(function (x, y) {
			return x > y ? x : y;
		});

		function nest(depthLevel) {
			$(".depth-" + depthLevel).each(function () {
				var container = $(this);
				var items = container.nextUntil(".depth-" + depthLevel);

				if (items.length) container.find(".inner-text").addClass("has-children toggle-children");

				$(items).each(function () {
					$(this).appendTo(container);
				});
			});
		}

		for (var i = 0; i <= highest; i++) {
			nest(i);
		}
	});

	saveObserver.listen(function (e, data) {
		// update the preview pane
		$("[data-preview-area]").text($("[data-editor-area]").val());
		// update the insights pane
		insightObserver.broadcast(data.insights);
		var span = $("[data-editor-info]").find("span");
		var oldText = span.text();
		// animate the banner
		span.fadeOut("fast", function () {
			var _this = $(this);
			_this.html("<i class='fa fa-save'></i> File Saved!");
			_this.fadeIn("fast");

			window.setTimeout(function () {
				_this.fadeOut("fast", function () {
					_this.html(oldText);
					_this.fadeIn("fast");
				});
			}, 500);
		});
	});

	dataObserver.listen(function (e, data) {
		if (data.isChanged) {
			data.data = encodeURIComponent(data.data);
			data.title = encodeURIComponent(data.title);

			$.post("/note/save/" + data.id + "?text=" + data.data + "&id=" + data.id + "&title=" + data.title, function (data) {
				var data = $.parseJSON(data);
				saveObserver.broadcast(data);
			});
		}
	});

	var contentDif = new Differ();
	var titleDif = new Differ();

	contentDif.val($("[data-editor-area]").val());
	titleDif.val($("[data-title-text]").text());

	dataPoller.setCallable(function () {
		var freshData = $("[data-editor-area]").val();
		var noteID = $("[data-file-name]").data("file-name");
		var noteTitle = $("[data-title-text]").text();

		var contentChanged = contentDif.compareAndKeep(freshData);
		var titleChanged = titleDif.compareAndKeep(noteTitle);

		if (contentChanged || titleChanged) dataObserver.broadcast({
			"isChanged": true,
			"data": freshData,
			"id": noteID,
			"title": noteTitle
		});
	}).setFrequency(3000);

	/** INITIALIZATION SETUP **/

	var initObserver = new Observer("init");

	initObserver.listen(function () {
		partialObserver.broadcast();
		insightObserver.broadcast();
	});

	initObserver.broadcast();

	/** FLASH MESSAGES SETUP **/

	var flashObserver = new Observer("flash-message");

	flashObserver.listen(function (e, newFlash) {
		newFlash = $(newFlash);

		$(this.selector).replaceWith(newFlash);

		newFlash.show();
	}, $("[data-flash]"));

	/******************************************************/

	/** JQUERY EVENTS **/

	/******************************************************/

	/** TAG OPEN/CLOSE EVENT **/
	$(document).on("click", ".built-tag-header", function () {
		if ($(this).parent().find(".built-tag-inner").is(":hidden")) {
			var prompt = window.prompt("Password");
			if (prompt === "krikkiters") $(this).parent().find(".built-tag-inner").toggle();
		} else {
			$(this).parent().find(".built-tag-inner").toggle();
		}
	});
	/** END TAG OPEN/CLOSE EVENT **/

	/** FLASH MESSAGE EVENTS **/
	$(document).on("click", "[data-flash-close]", function (e) {
		$(this).closest("[data-flash]").fadeToggle("fast");
	});
	/** END FLASH MESSAGE EVENTS **/

	/** ICON EVENTS **/
	$(document).on("click", ".archive", function (e) {
		e.preventDefault();

		var check = window.confirm("Do you really want to delete this?");

		if (!check) return;

		var _this = $(this),
		    gridItem = _this.closest(".grid-item");

		gridItem.append("<div class='thinking' />");

		$.getJSON($(this).attr("href"), function (data) {
			if (data.success === true) {
				gridItem.remove();

				partialObserver.broadcast(true);
				flashObserver.broadcast(data.flashPartial);
			}
		});
	});
	/** END ICON ACTIONS **/

	/** ADD AN ITEM EVENT **/
	$(document).on("submit", ".add-item-form", function (e) {
		e.preventDefault();

		var name = $("[data-id-input]").val();

		$.getJSON("/note/new/" + name, function (data) {
			requestObserver.broadcast({
				"target": "/note/" + name
			});

			flashObserver.broadcast(data.flashPartial);
		});
	});
	/** END ADD ITEM EVENT **/

	/** EDIT ITEM EVENT **/
	$(document).on("click", "[data-edit-toggle]", function (e) {
		e.preventDefault();
		var element = $(this);

		var beingActivated = !$(this).hasClass("active");

		$(this).toggleClass("active");

		$("[data-editor-area]").toggle();
		$("[data-preview-area]").toggle();
		$("[data-title-text]").toggleAttribute("contenteditable", true);

		if (beingActivated) $("[data-editor-info]").show().find("span").text("Edit Mode");else $("[data-editor-info]").hide();

		contentDif.val($("[data-editor-area]").html());

		dataPoller.toggle(beingActivated).fire();

		return true;
	});
	/** END EDIT ITEM EVENT **/

	/** PARTIAL EVENT TRIGGER **/
	$(document).on("click", "[data-update-partial]", function (e) {
		e.preventDefault();

		requestObserver.broadcast({
			"target": $(this).attr("href")
		});
	});
	/** END PARTIAL EVENT TRIGGER **/

	$(document).on("click", ".has-children.toggle-children", function (e) {
		e.stopPropagation();

		$(this).siblings().toggle();
	});

	$(document).on("click", ".tab-item", function (e) {
		changeTabs($(this));
	});
});
//# sourceMappingURL=events.js.map
;"use strict";
//# sourceMappingURL=observers.js.map
;"use strict";
//# sourceMappingURL=partials.js.map
