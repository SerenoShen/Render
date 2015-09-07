/**
 * Created by shenlei on 2015/9/1.
 */

BQ.ui.Button = (function (){

    var typeMap = {
        'Original' : OriginalButton,
        'Submit' : SubmitButton,
        'Reset' : ResetButton,
        'Link' : LinkButton,
        'Image' : ImageButton
    };

    /**
     * Factory Method
     *
     * Generator concrete object according to the incoming parameter type values
     *
     * All support type value has declared in typeMap.
     *
     * @param type
     * @param data
     *
     */
    function Button(type, data){
        if ( typeof typeMap[ type ] === 'function'){
            typeMap[ type ](data);
        } else {
            throw new Error("Don't Support Button type : " + type);
        }
    }

    Button.prototype = {
        addStyle : function (ele, styles){
            var prop;
            for ( prop in styles ){
                if ( styles.hasOwnProperty( prop ) ){
                    ele.style[ prop ] = styles[ prop ];
                }
            }
        },

        addAttribute : function (ele, attributes){
            var prop;
            for ( prop in attributes ){
                if ( attributes.hasOwnProperty( prop ) ){
                    ele.setAttribute(prop, attributes[ prop ]);
                }
            }
        },

        createComponent : function (type, data){
            var
                parent = data[ 'parent' ] || document.body,
                node = document.createElement((type + "").toLowerCase());
            node.id = data[ 'id' ];
            node.name = data[ 'name'];
            node.innerHTML = data[ 'text' ];
            node.innerText = data[ 'text' ];
            this.addAttribute(node, data[ 'nodeAttribute']);
            this.addStyle(node, data[ 'nodeStyle' ]);
            parent.appendChild(node);
        }
    };

    function OriginalButton(data){

    }

    function SubmitButton(data){

    }

    function ResetButton(data){

    }

    function LinkButton(data){

    }

    function ImageButton(data){

    }

    return Button;
})();