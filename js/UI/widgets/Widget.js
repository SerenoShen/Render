/**
 * Created by shenlei on 2015/9/1.
 */

/**
 *
 * Widget 设计为单例的，Widget 仅仅包含一些所有组件都拥有的公共方法
 *
 */
BQ.ui.Widget = (function (){

    // declare public function name
    var
        addEventHandler,
        removeEventHandler,
        stopPropagation,
        preventDefault,
        getEventTarget,
        getEvent,
        widgetContentHeight,
        widgetContentWidth,
        widgetPadding,
        widgetMargin,
        ownPosition;


    /* START : realize private object and method */

    /**
     *
     * 跨浏览器支持的客户端事件处理函数,
     *
     * 这里只支持浏览器原生支持的事件类型，
     *
     * 如果需要实现控件特有的事件类型，需要在控件的实现类中添加
     *
     */
    var EventUtil = {

        addHandler : function (ele, type, handler){
            if ( ele.addEventListener ){
                ele.addEventListener(type, handler, false);
            } else if ( ele.attachEvent ){
                ele.attachEvent("on" + type, handler);
            } else {
                ele[ "on" + type ] = handler;
            }
        },

        removeHandler : function (ele, type, handler){
            if ( ele.removeEventListener ){
                ele.removeEventListener(type, handler, false);
            } else if ( ele.detachEvent ){
                ele.detachEvent("on" + type, handler);
            } else {
                ele[ "on" + type ] = null;
            }
        },

        stopPropagation : function (event){
            if ( event.stopPropagation ){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },

        getEvent : function (event){
            return event ? event : window.event;
        },

        getTarget : function (event){
            return event.target || event.srcElement;
        },

        preventDefault : function (event){
            if ( event.preventDefault ){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }
    };

    /* END : realize private object or method */

    addEventHandler = function (type, handler){
        EventUtil.addHandler(this, type, handler);
    };

    removeEventHandler = function (type, handler){
        EventUtil.removeHandler(this, type, handler);
    };

    stopPropagation = function (event){
        EventUtil.stopPropagation(event);
    };

    preventDefault = function (event){
        EventUtil.preventDefault(event);
    };

    getEventTarget = function (event){
        EventUtil.getTarget(event);
    };

    getEvent = function (event){
        EventUtil.getEvent(event);
    };


    widgetContentHeight = function (){
        var height, value,
            xpReg = /^[0-9]+(px|pc|pt|cm|pc|in|mm|ex|em|\%)$/g;

        if ( arguments.length == 0 ){
            if ( document.defaultView.getComputedStyle(this, null) )
                height = document.defaultView.getComputedStyle(this, null).height;
            else
                height = this.currentStyle.height;
        } else if ( arguments.length == 1 ){
            value = arguments[0];
            if ( typeof value === 'number')
                this.style.height = value + 'px';
            else if ( typeof value === 'string' && value.match(xpReg) !== null )
                this.style.height = value;
        }

        return height;
    };

    widgetContentWidth = function (){
        var width, value,
            xpReg = /^[0-9]+(px|pc|pt|cm|pc|in|mm|ex|em|\%)$/g;

        if ( arguments.length == 0 ){
            if ( document.defaultView.getComputedStyle(this, null) )
                width = document.defaultView.getComputedStyle(this, null).width;
            else
                width = this.currentStyle.width;
        } else if ( arguments.length == 1 ){
            value = arguments[0];
            if ( typeof value === 'number')
                this.style.height = value + 'px';
            else if ( typeof value === 'string' && value.match(xpReg) !== null )
                this.style.height = value;
        }

        return width;
    };

    ownPosition = function (){

    };

    return {
        addEventHandler     : addEventHandler,
        removeEventHandler  : removeEventHandler,
        stopPropagation     : stopPropagation,
        preventDefault      : preventDefault,
        getEventTarget      : getEventTarget,
        getEvent            : getEvent,
        widgetContentHeight : widgetContentHeight,
        widgetContentWidth  : widgetContentWidth,
        ownPosition         : ownPosition
    }

})();