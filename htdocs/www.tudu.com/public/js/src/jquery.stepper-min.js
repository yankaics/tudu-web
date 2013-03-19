(function(A){A.fn.stepper=function(E){E=A.extend({min:0,max:10,step:1,start:0,decimals:0,format:"",symbol:""},E||{});E.pow=Math.pow(10,E.decimals);var D={BACK:8,TAB:9,LEFT:37,UP:38,RIGHT:39,DOWN:40,PGUP:33,PGDN:34,HOME:36,END:35,PERIOD:190,MINUS:109,NUMPAD_DECIMAL:110,NUMPAD_SUBTRACT:109};function G(K,H,J){var I=parseFloat(K.value);if(undefined==J||J){var L=Math.round(I*E.pow)%(E.step*E.pow);if(L!=0){I-=L/E.pow;if(H<0){H=0}}}I=parseFloat(I)+parseFloat(H);if(isNaN(I)){I=E.start}if(I<E.min){I=E.min}if(I>E.max){I=E.max}K.value=F(I)}function F(H){H=Math.round(parseFloat(H)*E.pow)/E.pow;if(E.format=="percent"){return H+"%"}return H}function C(H){if(H>=96&&H<=105){H="NUMPAD"}switch(H){case D.TAB:case D.BACK:case D.LEFT:case D.RIGHT:case D.PERIOD:case D.MINUS:case D.NUMPAD_DECIMAL:case D.NUMPAD_SUBTRACT:case"NUMPAD":return true;default:return(/[0-9\-\.]/).test(String.fromCharCode(H))}}function B(J){var I=J.css("display");if(I!="none"&&I!==null&&!J.parents(":hidden").size()){return J.outerWidth()}var K=J.clone();K.css({position:"absolute",left:-999});K.appendTo(document.body);var H=K.outerWidth();K.remove();return H}return this.each(function(){var I=this;if(this.type!="text"){return}var H=A(this).addClass("stepper-input").attr("autocomplete","off"),K=B(H);var J=A('<span class="stepper-wrap"><span class="stepper-inner"></span></span>').css("width",K);H.wrap(J);var M=A('<button class="stepper-plus" type="button"></button>');var L=A('<button class="stepper-minus" type="button"></button>');H.after(M,L);if(!I.value){I.value=F(E.start)}H.bind("keydown.stepper",function(O){var N=(window.event?event.keyCode:(O.which?O.which:null));switch(N){case D.UP:case D.PGUP:G(I,E.step);break;case D.DOWN:case D.PGDN:G(I,-E.step);break}A("#hint").html(N);return C(N)}).bind("DOMMouseScroll mousewheel",function(N,O){if(N.wheelDelta){O=N.wheelDelta/120}if(N.detail){O=-N.detail/3}if(A.browser.opera){O=-N.wheelDelta}if(O>0){G(I,E.step)}else{if(O<0){G(I,-E.step)}}return false}).bind("blur",function(N){G(I,0,false)});M.bind("click",function(N){G(I,E.step)});L.bind("click",function(N){G(I,-E.step)})})}})(jQuery);
