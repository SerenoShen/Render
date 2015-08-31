/**
 * Created by shenlei on 2015/8/31.
 */

/**
 *  接口定义：
 *
 *  render(root | selector, data) : void
 *      -- 页面渲染函数, 通过 data 提供的数据，以 root 为根节点进行页面渲染
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
(function($){

    function Vray (){

    }

    Vray.fn = Vray.prototype = {

        version : '0.0.1',

        constructor : Vray,

        /* declare public function */
        render : render,

        css : css,

        bind : bind,

        unbind : unbind,

        update : update,

        setAttr : setAttr,

        getAttr : getAttr

    };


    function render(target, node, data){

    }

    function css(target, stylesheet){

    }

    function bind(target, handler){

    }

    function unbind(target, handler){

    }

    function update(target, data){

    }

    function setAttr(target, attr){

    }

    function getAttr(target, attr){

    }


    function createNode(nodeType, nodeStyle, data){

    }


    if ( typeof define === "function" && define.amd ) {
        define( "vray", [], function() {
            return Vray;
        });
    }

    window.vray  = window.R = Vray;

})(jQuery);