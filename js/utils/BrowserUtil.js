/**
 * Created by shenlei on 2015/8/31.
 */
(function (){

    var
        trimRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function BrowserUtil(){

    }

    BrowserUtil.fn = BrowserUtil.prototype = {

        jquery: '0.0.1',

        constructor: BrowserUtil
    };

    BrowserUtil.extend  = BrowserUtil.fn.extend = function (){
        var target = arguments[1] || this,
            src = arguments[0],
            prop, temp, clone, propType;

        for ( prop in src ){

            temp = src[ prop ];

            propType = type(temp);

            if (temp && propType === 'Array' || propType === 'Object' ){
                if ( propType === 'Array' ) {
                    clone = [];

                } else {
                    clone = {};
                }
                // 覆盖性扩展(覆盖原对象中的同名属性)， 后期需要修改吗？？
                target[ prop ] = BrowserUtil.extend( temp, clone );

            } else if ( temp !== undefined ) {
                target[ prop ] = temp;
            }

        }

        return target;
    };

    function widgetContentHeight(){
        var
            element,
            height,
            value,
            xpReg = /^[0-9]+(px|pc|pt|cm|pc|in|mm|ex|em|\%)$/g;

        if ( arguments.length == 1 ){
            element = arguments[0];
            height = document.defaultView.getComputedStyle(element, null).height;
            return height;
        } else if ( arguments.length == 2 ){
            element = arguments[0];
            value = arguments[1];
            if ( typeof value === 'number')
                element.style.height = value + 'px';
            else if ( typeof value === 'string' && value.match(xpReg) !== null )
                element.style.height = value;
        }
    }

    function type(obj){
        var typeInfo;

        if (obj == null) return obj + "";

        typeInfo = Object.prototype.toString.call(obj);

        return typeInfo.substring( 8, typeInfo.length - 1 );
    }

    function isEmptyObject(obj) {

        var prop;

        for ( prop in obj)
            return false;

        return true;
    }

    /* export module */
    if ( typeof define === "function" && define.amd ) {
        define( "BrowserUtil", [], function() {
            return BrowserUtil;
        });
    }

    window.BrowserUtil = BrowserUtil;

})();