modules.define('content', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    window.addEventListener('DOMcontentLoader', function() {
                        'use strict';
                    
                        let tab = document.querySelectorAll('.content__tab'),
                            tabs = document.querySelector('.content__tabs'),
                            tabContent = document.querySelectorAll('.content__wrap');
                    
                        console.log(tab);
                    });
                }
            }
        }
    }));
    
    });



