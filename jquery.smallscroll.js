/**
 * a small jQuery scroll plugin.
 *
 * usage for example:
 *
 * <code lang="javascript">
 * $('.article').smallscroll({
 *     element: '.article_container',
 *     upButton: '.page_arrow_toparrow',
 *     downButton: '.page_arrow_botarrow',
 *     step: 164
 * });
 * </code>
 *
 * step can also passed by callback:
 *
 * <code lang="javascript">
 * $('.article').smallscroll({
 *     element: '.article_container',
 *     upButton: '.page_arrow_toparrow',
 *     downButton: '.page_arrow_botarrow',
 *     step: function() {
 *         return this.element.find('>.pastevent_list:first').outerHeight(true);
 *     }
 * });
 * </code>
 *
 * @author micate<micate@qq.com>
 * @homepage http://github.com/micate/smallscroll
 * @depends jQuery 1.3.2+
 * @version 0.1
 */
(function($, undefined) {

var OPTIONS = {
    container: undefined,
    element: undefined,
    upButton: undefined,
    downButton: undefined,
    step: undefined,
    visibleHeight: undefined,
    duration: 200
};

var Scroll = function(options) {
    return this.initialize(options);
};

Scroll.prototype = {
    initialize: function(options) {
        var self = this;
        options = $.extend({}, OPTIONS, options || {});

        // 初始化基础元素
        this.container = this.get(options.container);
        this.element = this.get(options.element);
        this.upButton = this.get(options.upButton);
        this.downButton = this.get(options.downButton);

        // 采用函数的方式计算出步进值和可见高度（如果配置如此的话）
        if ($.isFunction(options.step)) {
            options.step = parseInt(options.step.call(this));
        }
        if ($.isFunction(options.visibleHeight)) {
            options.visibleHeight = parseInt(options.visibleHeight.call(this));
        } else if (options.visibleHeight === undefined) {
            options.visibleHeight = this.container.innerHeight();
        }

        // 可见高度要小于内容高度
        if (options.visibleHeight < this.element.outerHeight(true)) {
            // 向上向下按钮
            this.upButton.show().click(function() {
                self.up();
                return false;
            });
            this.downButton.show().click(function() {
                self.down();
                return false;
            });
        } else {
            this.upButton.hide();
            this.downButton.hide();
        }

        this.options = options;
        return this;
    },
    get: function(selector) {
        return selector && selector.jquery ? selector : $(selector);
    },
    up: function() {
        var top = Math.abs(this.element.position().top);
        if (top > 0) {
            this.element.animate({
                top: Math.max(0, top - this.options.step) * -1
            }, this.options.duration);
        }
    },
    down: function() {
        var top = Math.abs(this.element.position().top),
            height = this.element.outerHeight(true);
        if ((top + this.options.visibleHeight) < height) {
            this.element.animate({
                top: Math.min(height, top + this.options.step) * -1
            }, this.options.duration);
        }
    }
};

$.fn.smallscroll = function(options) {
    return this.each(function() {
        if ($(this).data('smallscroll')) return;
        options = options || {};
        options.container = $(this);
        $(this).data('smallscroll', new Scroll(options));
    });
};

})(jQuery);
