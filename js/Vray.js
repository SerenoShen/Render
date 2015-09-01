/**
 * Created by shenlei on 2015/8/31.
 */

/**
 *  接口定义：
 *
 *  render(parent | selector, data) : void
 *      -- 页面渲染函数, 通过 data 提供的数据进行页面渲染
 *
 *  css(ele | selector, stylesheet) : void
 *      -- 为 ele 指定的节点设置样式,样式规则由 stylesheet 对象指定
 *
 *  bind(ele | selector, handler) : void
 *      -- 为 ele 添加事件句柄
 *
 *  unbind(ele | selector, handler) : void
 *      -- 移除 ele 上的 handler, 如 bind 操作时 handler 为匿名函数，unbind 将失败
 *
 *  update(ele | selector, data) : void
 *      -- 跟新节点内容
 *
 *  setAttr(ele | selector, attr) : void
 *      -- 跟新元素属性
 *
 *  getAttr(ele | selector, attr) : void
 *      -- 获取元素指定属性，如果参数 attr 为空，则返回 ele 元素的所有属性集合
 */

(function (){

    'use strict';

    function Vray(){

    }

    Vray.fn = Vray.prototype = {
        version : '0.0.1',

        constructor : 'Vray'
    };

    // declare public function name
    var
        render,
        css,
        bind,
        unbind,
        update,
        setAttr,
        getAttr,
        extend;

    /* Start : realize public function */

    render = function ( parent, data ){

    };

    css = function ( target, styles ){

    };

    bind = function ( target, handler ){

    };

    unbind = function ( target, handler ){

    };

    update = function ( target, handler ){

    };

    setAttr = function ( target, attributes ){

    };

    getAttr = function ( target, attributes ){

    };

    extend = function (){

        var target = arguments[1] || this,
            src = arguments[0],
            prop, temp, clone, propType;

        for ( prop in src ){

            temp = src[ prop ];

            // 减少函数栈的开销
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

    /* End : realize public function  */

    // declare private field


    /* Start : realize private util method */

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

    /* End : realize private util method */

    // export module
    if ( typeof define === "function" && define.amd ) {
        define( "vray", [], function() {
            return Vray;
        });
    }

    window.vray  = window.R = Vray;

})();