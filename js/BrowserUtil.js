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
        var target = arguments[0] || {},
            i = 1,
            len = arguments.length;
    };

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

    window.browserUtil = BrowserUtil;

})();