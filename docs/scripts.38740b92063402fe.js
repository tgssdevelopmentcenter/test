!function(C,M){"object"==typeof exports&&"undefined"!=typeof module?module.exports=M():"function"==typeof define&&define.amd?define(M):(C=C||self).Tribute=M()}(this,function(){"use strict";function C(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function M(l,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function A(l,r,e){return r&&M(l.prototype,r),e&&M(l,e),l}function O(l,r){(null==r||r>l.length)&&(r=l.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=l[e];return t}if(Array.prototype.find||(Array.prototype.find=function(l){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof l)throw new TypeError("predicate must be a function");for(var n,r=Object(this),e=r.length>>>0,t=arguments[1],i=0;i<e;i++)if(l.call(t,n=r[i],i,r))return n}),window&&"function"!=typeof window.CustomEvent){var D=function(r,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(r,e.bubbles,e.cancelable,e.detail),t};void 0!==window.Event&&(D.prototype=window.Event.prototype),window.CustomEvent=D}var re=function(){function l(r){C(this,l),this.tribute=r,this.tribute.events=this}return A(l,[{key:"bind",value:function(e){e.boundKeydown=this.keydown.bind(e,this),e.boundKeyup=this.keyup.bind(e,this),e.boundInput=this.input.bind(e,this),e.addEventListener("keydown",e.boundKeydown,!1),e.addEventListener("keyup",e.boundKeyup,!1),e.addEventListener("input",e.boundInput,!1)}},{key:"unbind",value:function(e){e.removeEventListener("keydown",e.boundKeydown,!1),e.removeEventListener("keyup",e.boundKeyup,!1),e.removeEventListener("input",e.boundInput,!1),delete e.boundKeydown,delete e.boundKeyup,delete e.boundInput}},{key:"keydown",value:function(e,t){e.shouldDeactivate(t)&&(e.tribute.isActive=!1,e.tribute.hideMenu());var n=this;e.commandEvent=!1,l.keys().forEach(function(i){i.key===t.keyCode&&(e.commandEvent=!0,e.callbacks()[i.value.toLowerCase()](t,n))})}},{key:"input",value:function(e,t){e.inputEvent=!0,e.keyup.call(this,e,t)}},{key:"click",value:function(e,t){var n=e.tribute;if(n.menu&&n.menu.contains(t.target)){var i=t.target;for(t.preventDefault(),t.stopPropagation();"li"!==i.nodeName.toLowerCase();)if(!(i=i.parentNode)||i===n.menu)throw new Error("cannot find the <li> container for the click");n.selectItemAtIndex(i.getAttribute("data-index"),t),n.hideMenu()}else n.current.element&&!n.current.externalTrigger&&(n.current.externalTrigger=!1,setTimeout(function(){return n.hideMenu()}))}},{key:"keyup",value:function(e,t){if(e.inputEvent&&(e.inputEvent=!1),e.updateSelection(this),27!==t.keyCode){if(!e.tribute.allowSpaces&&e.tribute.hasTrailingSpace)return e.tribute.hasTrailingSpace=!1,e.commandEvent=!0,void e.callbacks().space(t,this);if(!e.tribute.isActive)if(e.tribute.autocompleteMode)e.callbacks().triggerChar(t,this,"");else{var n=e.getKeyCode(e,this,t);if(isNaN(n)||!n)return;var i=e.tribute.triggers().find(function(o){return o.charCodeAt(0)===n});void 0!==i&&e.callbacks().triggerChar(t,this,i)}e.tribute.current.mentionText.length<e.tribute.current.collection.menuShowMinLength||((e.tribute.current.trigger||e.tribute.autocompleteMode)&&!1===e.commandEvent||e.tribute.isActive&&8===t.keyCode)&&e.tribute.showMenuFor(this,!0)}}},{key:"shouldDeactivate",value:function(e){if(!this.tribute.isActive)return!1;if(0===this.tribute.current.mentionText.length){var t=!1;return l.keys().forEach(function(n){e.keyCode===n.key&&(t=!0)}),!t}return!1}},{key:"getKeyCode",value:function(e,t,n){var i=e.tribute,o=i.range.getTriggerInfo(!1,i.hasTrailingSpace,!0,i.allowSpaces,i.autocompleteMode);return!!o&&o.mentionTriggerChar.charCodeAt(0)}},{key:"updateSelection",value:function(e){this.tribute.current.element=e;var t=this.tribute.range.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);t&&(this.tribute.current.selectedPath=t.mentionSelectedPath,this.tribute.current.mentionText=t.mentionText,this.tribute.current.selectedOffset=t.mentionSelectedOffset)}},{key:"callbacks",value:function(){var e=this;return{triggerChar:function(n,i,o){var u=e.tribute;u.current.trigger=o;var a=u.collection.find(function(s){return s.trigger===o});u.current.collection=a,u.current.mentionText.length>=u.current.collection.menuShowMinLength&&u.inputEvent&&u.showMenuFor(i,!0)},enter:function(n,i){e.tribute.isActive&&e.tribute.current.filteredItems&&(n.preventDefault(),n.stopPropagation(),setTimeout(function(){e.tribute.selectItemAtIndex(e.tribute.menuSelected,n),e.tribute.hideMenu()},0))},escape:function(n,i){e.tribute.isActive&&(n.preventDefault(),n.stopPropagation(),e.tribute.isActive=!1,e.tribute.hideMenu())},tab:function(n,i){e.callbacks().enter(n,i)},space:function(n,i){e.tribute.isActive&&(e.tribute.spaceSelectsMatch?e.callbacks().enter(n,i):e.tribute.allowSpaces||(n.stopPropagation(),setTimeout(function(){e.tribute.hideMenu(),e.tribute.isActive=!1},0)))},up:function(n,i){if(e.tribute.isActive&&e.tribute.current.filteredItems){n.preventDefault(),n.stopPropagation();var o=e.tribute.current.filteredItems.length,u=e.tribute.menuSelected;o>u&&u>0?(e.tribute.menuSelected--,e.setActiveLi()):0===u&&(e.tribute.menuSelected=o-1,e.setActiveLi(),e.tribute.menu.scrollTop=e.tribute.menu.scrollHeight)}},down:function(n,i){if(e.tribute.isActive&&e.tribute.current.filteredItems){n.preventDefault(),n.stopPropagation();var o=e.tribute.current.filteredItems.length-1,u=e.tribute.menuSelected;o>u?(e.tribute.menuSelected++,e.setActiveLi()):o===u&&(e.tribute.menuSelected=0,e.setActiveLi(),e.tribute.menu.scrollTop=0)}},delete:function(n,i){e.tribute.isActive&&e.tribute.current.mentionText.length<1?e.tribute.hideMenu():e.tribute.isActive&&e.tribute.showMenuFor(i)}}}},{key:"setActiveLi",value:function(e){var t=this.tribute.menu.querySelectorAll("li"),n=t.length>>>0;e&&(this.tribute.menuSelected=parseInt(e));for(var i=0;i<n;i++){var o=t[i];if(i===this.tribute.menuSelected){o.classList.add(this.tribute.current.collection.selectClass);var u=o.getBoundingClientRect(),a=this.tribute.menu.getBoundingClientRect();u.bottom>a.bottom?this.tribute.menu.scrollTop+=u.bottom-a.bottom:u.top<a.top&&(this.tribute.menu.scrollTop-=a.top-u.top)}else o.classList.remove(this.tribute.current.collection.selectClass)}}},{key:"getFullHeight",value:function(e,t){var n=e.getBoundingClientRect().height;if(t){var i=e.currentStyle||window.getComputedStyle(e);return n+parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}}],[{key:"keys",value:function(){return[{key:9,value:"TAB"},{key:8,value:"DELETE"},{key:13,value:"ENTER"},{key:27,value:"ESCAPE"},{key:32,value:"SPACE"},{key:38,value:"UP"},{key:40,value:"DOWN"}]}}]),l}(),oe=function(){function l(r){C(this,l),this.tribute=r,this.tribute.menuEvents=this,this.menu=this.tribute.menu}return A(l,[{key:"bind",value:function(e){var t=this;this.menuClickEvent=this.tribute.events.click.bind(null,this),this.menuContainerScrollEvent=this.debounce(function(){t.tribute.isActive&&t.tribute.showMenuFor(t.tribute.current.element,!1)},300,!1),this.windowResizeEvent=this.debounce(function(){t.tribute.isActive&&t.tribute.range.positionMenuAtCaret(!0)},300,!1),this.tribute.range.getDocument().addEventListener("MSPointerDown",this.menuClickEvent,!1),this.tribute.range.getDocument().addEventListener("mousedown",this.menuClickEvent,!1),window.addEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.addEventListener("scroll",this.menuContainerScrollEvent,!1):window.addEventListener("scroll",this.menuContainerScrollEvent)}},{key:"unbind",value:function(e){this.tribute.range.getDocument().removeEventListener("mousedown",this.menuClickEvent,!1),this.tribute.range.getDocument().removeEventListener("MSPointerDown",this.menuClickEvent,!1),window.removeEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.removeEventListener("scroll",this.menuContainerScrollEvent,!1):window.removeEventListener("scroll",this.menuContainerScrollEvent)}},{key:"debounce",value:function(e,t,n){var u,i=arguments,o=this;return function(){var a=o,s=i,f=n&&!u;clearTimeout(u),u=setTimeout(function(){u=null,n||e.apply(a,s)},t),f&&e.apply(a,s)}}}]),l}(),ue=function(){function l(r){C(this,l),this.tribute=r,this.tribute.range=this}return A(l,[{key:"getDocument",value:function(){var e;return this.tribute.current.collection&&(e=this.tribute.current.collection.iframe),e?e.contentWindow.document:document}},{key:"positionMenuAtCaret",value:function(e){var i,t=this,n=this.tribute.current,o=this.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==o){if(!this.tribute.positionMenu)return void(this.tribute.menu.style.cssText="display: block;");i=this.isContentEditable(n.element)?this.getContentEditableCaretPosition(o.mentionPosition):this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element,o.mentionPosition),this.tribute.menu.style.cssText="top: ".concat(i.top,"px;\n                                     left: ").concat(i.left,"px;\n                                     right: ").concat(i.right,"px;\n                                     bottom: ").concat(i.bottom,"px;\n                                     position: absolute;\n                                     display: block;"),"auto"===i.left&&(this.tribute.menu.style.left="auto"),"auto"===i.top&&(this.tribute.menu.style.top="auto"),e&&this.scrollIntoView(),window.setTimeout(function(){var u={width:t.tribute.menu.offsetWidth,height:t.tribute.menu.offsetHeight},a=t.isMenuOffScreen(i,u),s=window.innerWidth>u.width&&(a.left||a.right),c=window.innerHeight>u.height&&(a.top||a.bottom);(s||c)&&(t.tribute.menu.style.cssText="display: none",t.positionMenuAtCaret(e))},0)}else this.tribute.menu.style.cssText="display: none"}},{key:"selectElement",value:function(e,t,n){var i,o=e;if(t)for(var u=0;u<t.length;u++){if(void 0===(o=o.childNodes[t[u]]))return;for(;o.length<n;)n-=o.length,o=o.nextSibling;0===o.childNodes.length&&!o.length&&(o=o.previousSibling)}var a=this.getWindowSelection();(i=this.getDocument().createRange()).setStart(o,n),i.setEnd(o,n),i.collapse(!0);try{a.removeAllRanges()}catch(s){}a.addRange(i),e.focus()}},{key:"replaceTriggerText",value:function(e,t,n,i,o){var u=this.getTriggerInfo(!0,n,t,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==u){var a=this.tribute.current,s=new CustomEvent("tribute-replaced",{detail:{item:o,instance:a,context:u,event:i}});if(this.isContentEditable(a.element)){var v=u.mentionPosition+u.mentionText.length;this.tribute.autocompleteMode||(v+=u.mentionTriggerChar.length),this.pasteHtml(e+="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:"\xa0",u.mentionPosition,v)}else{var c=this.tribute.current.element,f="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";e+=f;var d=u.mentionPosition,h=u.mentionPosition+u.mentionText.length+f.length;this.tribute.autocompleteMode||(h+=u.mentionTriggerChar.length-1),c.value=c.value.substring(0,d)+e+c.value.substring(h,c.value.length),c.selectionStart=d+e.length,c.selectionEnd=d+e.length}a.element.dispatchEvent(new CustomEvent("input",{bubbles:!0})),a.element.dispatchEvent(s)}}},{key:"pasteHtml",value:function(e,t,n){var i,o;o=this.getWindowSelection(),(i=this.getDocument().createRange()).setStart(o.anchorNode,t),i.setEnd(o.anchorNode,n),i.deleteContents();var u=this.getDocument().createElement("div");u.innerHTML=e;for(var s,c,a=this.getDocument().createDocumentFragment();s=u.firstChild;)c=a.appendChild(s);i.insertNode(a),c&&((i=i.cloneRange()).setStartAfter(c),i.collapse(!0),o.removeAllRanges(),o.addRange(i))}},{key:"getWindowSelection",value:function(){return this.tribute.collection.iframe?this.tribute.collection.iframe.contentWindow.getSelection():window.getSelection()}},{key:"getNodePositionInParent",value:function(e){if(null===e.parentNode)return 0;for(var t=0;t<e.parentNode.childNodes.length;t++)if(e.parentNode.childNodes[t]===e)return t}},{key:"getContentEditableSelectedPath",value:function(e){var t=this.getWindowSelection(),n=t.anchorNode,i=[];if(null!=n){for(var u,a=n.contentEditable;null!==n&&"true"!==a;)u=this.getNodePositionInParent(n),i.push(u),null!==(n=n.parentNode)&&(a=n.contentEditable);return i.reverse(),{selected:n,path:i,offset:t.getRangeAt(0).startOffset}}}},{key:"getTextPrecedingCurrentSelection",value:function(){var t="";if(this.isContentEditable(this.tribute.current.element)){var o=this.getWindowSelection().anchorNode;if(null!=o){var u=o.textContent,a=this.getWindowSelection().getRangeAt(0).startOffset;u&&a>=0&&(t=u.substring(0,a))}}else{var n=this.tribute.current.element;if(n){var i=n.selectionStart;n.value&&i>=0&&(t=n.value.substring(0,i))}}return t}},{key:"getLastWordInText",value:function(e){var t;return(t=(e=e.replace(/\u00A0/g," ")).split(this.tribute.autocompleteSeparator?this.tribute.autocompleteSeparator:/\s+/))[t.length-1].trim()}},{key:"getTriggerInfo",value:function(e,t,n,i,o){var s,c,f,u=this,a=this.tribute.current;if(this.isContentEditable(a.element)){var d=this.getContentEditableSelectedPath(a);d&&(s=d.selected,c=d.path,f=d.offset)}else s=this.tribute.current.element;var h=this.getTextPrecedingCurrentSelection(),m=this.getLastWordInText(h);if(o)return{mentionPosition:h.length-m.length,mentionText:m,mentionSelectedElement:s,mentionSelectedPath:c,mentionSelectedOffset:f};if(null!=h){var b,v=-1;if(this.tribute.collection.forEach(function(w){var E=w.trigger,k=w.requireLeadingSpace?u.lastIndexWithLeadingSpace(h,E):h.lastIndexOf(E);k>v&&(v=k,b=E,n=w.requireLeadingSpace)}),v>=0&&(0===v||!n||/[\xA0\s]/g.test(h.substring(v-1,v)))){var p=h.substring(v+b.length,h.length);b=h.substring(v,v+b.length);var y=p.substring(0,1),T=p.length>0&&(" "===y||"\xa0"===y);t&&(p=p.trim());var S=i?/[^\S ]/g:/[\xA0\s]/g;if(this.tribute.hasTrailingSpace=S.test(p),!T&&(e||!S.test(p)))return{mentionPosition:v,mentionText:p,mentionSelectedElement:s,mentionSelectedPath:c,mentionSelectedOffset:f,mentionTriggerChar:b}}}}},{key:"lastIndexWithLeadingSpace",value:function(e,t){for(var n=e.split("").reverse().join(""),i=-1,o=0,u=e.length;o<u;o++){for(var a=o===e.length-1,s=/\s/.test(n[o+1]),c=!0,f=t.length-1;f>=0;f--)if(t[f]!==n[o-f]){c=!1;break}if(c&&(a||s)){i=e.length-1-o;break}}return i}},{key:"isContentEditable",value:function(e){return"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName}},{key:"isMenuOffScreen",value:function(e,t){var n=window.innerWidth,i=window.innerHeight,o=document.documentElement,u=(window.pageXOffset||o.scrollLeft)-(o.clientLeft||0),a=(window.pageYOffset||o.scrollTop)-(o.clientTop||0),c="number"==typeof e.right?e.right:e.left+t.width,f="number"==typeof e.bottom?e.bottom:e.top+t.height,d="number"==typeof e.left?e.left:u+n-e.right-t.width;return{top:("number"==typeof e.top?e.top:a+i-e.bottom-t.height)<Math.floor(a),right:c>Math.ceil(u+n),bottom:f>Math.ceil(a+i),left:d<Math.floor(u)}}},{key:"getMenuDimensions",value:function(){var e={width:null,height:null};return this.tribute.menu.style.cssText="top: 0px;\n                                 left: 0px;\n                                 position: fixed;\n                                 display: block;\n                                 visibility; hidden;",e.width=this.tribute.menu.offsetWidth,e.height=this.tribute.menu.offsetHeight,this.tribute.menu.style.cssText="display: none;",e}},{key:"getTextAreaOrInputUnderlinePosition",value:function(e,t,n){var o=null!==window.mozInnerScreenX,u=this.getDocument().createElement("div");u.id="input-textarea-caret-position-mirror-div",this.getDocument().body.appendChild(u);var a=u.style,s=window.getComputedStyle?getComputedStyle(e):e.currentStyle;a.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(a.wordWrap="break-word"),a.position="absolute",a.visibility="hidden",["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach(function(L){a[L]=s[L]}),o?(a.width="".concat(parseInt(s.width)-2,"px"),e.scrollHeight>parseInt(s.height)&&(a.overflowY="scroll")):a.overflow="hidden",u.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(u.textContent=u.textContent.replace(/\s/g,"\xa0"));var c=this.getDocument().createElement("span");c.textContent=e.value.substring(t)||".",u.appendChild(c);var f=e.getBoundingClientRect(),d=document.documentElement,h=(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0),m=(window.pageYOffset||d.scrollTop)-(d.clientTop||0),v=0,b=0;this.menuContainerIsBody&&(v=f.top,b=f.left);var p={top:v+m+c.offsetTop+parseInt(s.borderTopWidth)+parseInt(s.fontSize)-e.scrollTop,left:b+h+c.offsetLeft+parseInt(s.borderLeftWidth)},y=window.innerWidth,T=window.innerHeight,S=this.getMenuDimensions(),w=this.isMenuOffScreen(p,S);w.right&&(p.right=y-p.left,p.left="auto");var E=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(w.bottom){var k=this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect();p.bottom=E-(T-k.top)+(T-f.top-c.offsetTop),p.top="auto"}return(w=this.isMenuOffScreen(p,S)).left&&(p.left=y>S.width?h+y-S.width:h,delete p.right),w.top&&(p.top=T>S.height?m+T-S.height:m,delete p.bottom),this.getDocument().body.removeChild(u),p}},{key:"getContentEditableCaretPosition",value:function(e){var t,n=this.getWindowSelection();(t=this.getDocument().createRange()).setStart(n.anchorNode,e),t.setEnd(n.anchorNode,e),t.collapse(!1);var i=t.getBoundingClientRect(),o=document.documentElement,u=(window.pageXOffset||o.scrollLeft)-(o.clientLeft||0),a=(window.pageYOffset||o.scrollTop)-(o.clientTop||0),f={left:i.left+u,top:i.top+i.height+a},d=window.innerWidth,h=window.innerHeight,m=this.getMenuDimensions(),v=this.isMenuOffScreen(f,m);v.right&&(f.left="auto",f.right=d-i.left-u);var b=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(v.bottom){var y=b-(h-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);f.top="auto",f.bottom=y+(h-i.top)}return(v=this.isMenuOffScreen(f,m)).left&&(f.left=d>m.width?u+d-m.width:u,delete f.right),v.top&&(f.top=h>m.height?a+h-m.height:a,delete f.bottom),this.menuContainerIsBody||(f.left=f.left?f.left-this.tribute.menuContainer.offsetLeft:f.left,f.top=f.top?f.top-this.tribute.menuContainer.offsetTop:f.top),f}},{key:"scrollIntoView",value:function(e){var n,o=this.menu;if(void 0!==o){for(;void 0===n||0===n.height;)if(0===(n=o.getBoundingClientRect()).height&&(void 0===(o=o.childNodes[0])||!o.getBoundingClientRect))return;var u=n.top,a=u+n.height;if(u<0)window.scrollTo(0,window.pageYOffset+n.top-20);else if(a>window.innerHeight){var s=window.pageYOffset+n.top-20;s-window.pageYOffset>100&&(s=window.pageYOffset+100);var c=window.pageYOffset-(window.innerHeight-a);c>s&&(c=s),window.scrollTo(0,c)}}}},{key:"menuContainerIsBody",get:function(){return this.tribute.menuContainer===document.body||!this.tribute.menuContainer}}]),l}(),ae=function(){function l(r){C(this,l),this.tribute=r,this.tribute.search=this}return A(l,[{key:"simpleFilter",value:function(e,t){var n=this;return t.filter(function(i){return n.test(e,i)})}},{key:"test",value:function(e,t){return null!==this.match(e,t)}},{key:"match",value:function(e,t,n){var o=(n=n||{}).pre||"",u=n.post||"",a=n.caseSensitive&&t||t.toLowerCase();if(n.skip)return{rendered:t,score:0};e=n.caseSensitive&&e||e.toLowerCase();var s=this.traverse(a,e,0,0,[]);return s?{rendered:this.render(t,s.cache,o,u),score:s.score}:null}},{key:"traverse",value:function(e,t,n,i,o){if(this.tribute.autocompleteSeparator&&(t=t.split(this.tribute.autocompleteSeparator).splice(-1)[0]),t.length===i)return{score:this.calculateScore(o),cache:o.slice()};if(!(e.length===n||t.length-i>e.length-n)){for(var s,c,u=t[i],a=e.indexOf(u,n);a>-1;){if(o.push(a),c=this.traverse(e,t,a+1,i+1,o),o.pop(),!c)return s;(!s||s.score<c.score)&&(s=c),a=e.indexOf(u,a+1)}return s}}},{key:"calculateScore",value:function(e){var t=0,n=1;return e.forEach(function(i,o){o>0&&(e[o-1]+1===i?n+=n+1:n=1),t+=n}),t}},{key:"render",value:function(e,t,n,i){var o=e.substring(0,t[0]);return t.forEach(function(u,a){o+=n+e[u]+i+e.substring(u+1,t[a+1]?t[a+1]:e.length)}),o}},{key:"filter",value:function(e,t,n){var i=this;return n=n||{},t.reduce(function(o,u,a,s){var c=u;n.extract&&((c=n.extract(u))||(c=""));var f=i.match(e,c,n);return null!=f&&(o[o.length]={string:f.rendered,score:f.score,index:a,original:u}),o},[]).sort(function(o,u){return u.score-o.score||o.index-u.index})}}]),l}();return function(){function l(r){var g,e=this,t=r.values,n=void 0===t?null:t,i=r.loadingItemTemplate,o=void 0===i?null:i,u=r.iframe,a=void 0===u?null:u,s=r.selectClass,c=void 0===s?"highlight":s,f=r.containerClass,d=void 0===f?"tribute-container":f,h=r.itemClass,m=void 0===h?"":h,v=r.trigger,b=void 0===v?"@":v,p=r.autocompleteMode,y=void 0!==p&&p,T=r.autocompleteSeparator,S=void 0===T?null:T,w=r.selectTemplate,E=void 0===w?null:w,k=r.menuItemTemplate,N=void 0===k?null:k,L=r.lookup,_=void 0===L?"key":L,W=r.fillAttr,H=void 0===W?"value":W,P=r.collection,R=void 0===P?null:P,$=r.menuContainer,se=void 0===$?null:$,B=r.noMatchTemplate,x=void 0===B?null:B,F=r.requireLeadingSpace,ce=void 0===F||F,j=r.allowSpaces,z=void 0!==j&&j,q=r.replaceTextSuffix,fe=void 0===q?null:q,K=r.positionMenu,he=void 0===K||K,U=r.spaceSelectsMatch,de=void 0!==U&&U,X=r.searchOpts,V=void 0===X?{}:X,Y=r.menuItemLimit,Q=void 0===Y?null:Y,G=r.menuShowMinLength,J=void 0===G?0:G;if(C(this,l),this.autocompleteMode=y,this.autocompleteSeparator=S,this.menuSelected=0,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=se,this.allowSpaces=z,this.replaceTextSuffix=fe,this.positionMenu=he,this.hasTrailingSpace=!1,this.spaceSelectsMatch=de,this.autocompleteMode&&(b="",z=!1),n)this.collection=[{trigger:b,iframe:a,selectClass:c,containerClass:d,itemClass:m,selectTemplate:(E||l.defaultSelectTemplate).bind(this),menuItemTemplate:(N||l.defaultMenuItemTemplate).bind(this),noMatchTemplate:(g=x,"string"==typeof g?""===g.trim()?null:g:"function"==typeof g?g.bind(e):x||function(){return"<li>No Match Found!</li>"}.bind(e)),lookup:_,fillAttr:H,values:n,loadingItemTemplate:o,requireLeadingSpace:ce,searchOpts:V,menuItemLimit:Q,menuShowMinLength:J}];else{if(!R)throw new Error("[Tribute] No collection specified.");this.autocompleteMode&&console.warn("Tribute in autocomplete mode does not work for collections"),this.collection=R.map(function(g){return{trigger:g.trigger||b,iframe:g.iframe||a,selectClass:g.selectClass||c,containerClass:g.containerClass||d,itemClass:g.itemClass||m,selectTemplate:(g.selectTemplate||l.defaultSelectTemplate).bind(e),menuItemTemplate:(g.menuItemTemplate||l.defaultMenuItemTemplate).bind(e),noMatchTemplate:(I=x,"string"==typeof I?""===I.trim()?null:I:"function"==typeof I?I.bind(e):x||function(){return"<li>No Match Found!</li>"}.bind(e)),lookup:g.lookup||_,fillAttr:g.fillAttr||H,values:g.values,loadingItemTemplate:g.loadingItemTemplate,requireLeadingSpace:g.requireLeadingSpace,searchOpts:g.searchOpts||V,menuItemLimit:g.menuItemLimit||Q,menuShowMinLength:g.menuShowMinLength||J};var I})}new ue(this),new re(this),new oe(this),new ae(this)}return A(l,[{key:"triggers",value:function(){return this.collection.map(function(e){return e.trigger})}},{key:"attach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._attach(e[n]);else this._attach(e)}},{key:"_attach",value:function(e){e.hasAttribute("data-tribute")&&console.warn("Tribute was already bound to "+e.nodeName),this.ensureEditable(e),this.events.bind(e),e.setAttribute("data-tribute",!0)}},{key:"ensureEditable",value:function(e){if(-1===l.inputTypes().indexOf(e.nodeName)){if(!e.contentEditable)throw new Error("[Tribute] Cannot bind to "+e.nodeName);e.contentEditable=!0}}},{key:"createMenu",value:function(e){var t=this.range.getDocument().createElement("div"),n=this.range.getDocument().createElement("ul");return t.className=e,t.appendChild(n),this.menuContainer?this.menuContainer.appendChild(t):this.range.getDocument().body.appendChild(t)}},{key:"showMenuFor",value:function(e,t){var n=this;if(!this.isActive||this.current.element!==e||this.current.mentionText!==this.currentMentionTextSnapshot){this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(this.current.collection.containerClass),e.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");var i=function(u){if(n.isActive){var a=[];u.forEach(function(d,h){a.push({index:h,original:d,score:0,string:d.key})}),n.current.filteredItems=a;var s=n.menu.querySelector("ul");if(n.range.positionMenuAtCaret(t),!a.length){var c=new CustomEvent("tribute-no-match",{detail:n.menu});return n.current.element.dispatchEvent(c),void("function"==typeof n.current.collection.noMatchTemplate&&!n.current.collection.noMatchTemplate()||!n.current.collection.noMatchTemplate?n.hideMenu():s.innerHTML="function"==typeof n.current.collection.noMatchTemplate?n.current.collection.noMatchTemplate():n.current.collection.noMatchTemplate)}s.innerHTML="";var f=n.range.getDocument().createDocumentFragment();a.forEach(function(d,h){var m=n.range.getDocument().createElement("li");m.setAttribute("data-index",h),m.className=n.current.collection.itemClass,m.addEventListener("mousemove",function(v){var p=function Z(l,r){return function ee(l){if(Array.isArray(l))return l}(l)||function te(l,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(l)){var e=[],t=!0,n=!1,i=void 0;try{for(var u,o=l[Symbol.iterator]();!(t=(u=o.next()).done)&&(e.push(u.value),!r||e.length!==r);t=!0);}catch(a){n=!0,i=a}finally{try{!t&&null!=o.return&&o.return()}finally{if(n)throw i}}return e}}(l,r)||function ne(l,r){if(l){if("string"==typeof l)return O(l,r);var e=Object.prototype.toString.call(l).slice(8,-1);if("Object"===e&&l.constructor&&(e=l.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O(l,r)}}(l,r)||function ie(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n._findLiTarget(v.target),2);0!==v.movementY&&n.events.setActiveLi(p[1])}),n.menuSelected===h&&m.classList.add(n.current.collection.selectClass),m.innerHTML=n.current.collection.menuItemTemplate(d),f.appendChild(m)}),s.appendChild(f)}};"function"==typeof this.current.collection.values?(this.current.collection.loadingItemTemplate&&(this.menu.querySelector("ul").innerHTML=this.current.collection.loadingItemTemplate,this.range.positionMenuAtCaret(t)),this.current.collection.values(this.current.mentionText,i)):i(this.current.collection.values)}}},{key:"_findLiTarget",value:function(e){if(!e)return[];var t=e.getAttribute("data-index");return t?[e,t]:this._findLiTarget(e.parentNode)}},{key:"showMenuForCollection",value:function(e,t){e!==document.activeElement&&this.placeCaretAtEnd(e),this.current.collection=this.collection[t||0],this.current.externalTrigger=!0,this.current.element=e,e.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(e,this.current.collection.trigger),this.showMenuFor(e)}},{key:"placeCaretAtEnd",value:function(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}}},{key:"insertTextAtCursor",value:function(e){var t,n;(n=(t=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(e);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),t.removeAllRanges(),t.addRange(n)}},{key:"insertAtCaret",value:function(e,t){var n=e.scrollTop,i=e.selectionStart,o=e.value.substring(0,i),u=e.value.substring(e.selectionEnd,e.value.length);e.value=o+t+u,e.selectionStart=i+=t.length,e.selectionEnd=i,e.focus(),e.scrollTop=n}},{key:"hideMenu",value:function(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}},{key:"selectItemAtIndex",value:function(e,t){if("number"==typeof(e=parseInt(e))&&!isNaN(e)){var n=this.current.filteredItems[e],i=this.current.collection.selectTemplate(n);null!==i&&this.replaceText(i,t,n)}}},{key:"replaceText",value:function(e,t,n){this.range.replaceTriggerText(e,!0,!0,t,n)}},{key:"_append",value:function(e,t,n){if("function"==typeof e.values)throw new Error("Unable to append to values, as it is a function.");e.values=n?t:e.values.concat(t)}},{key:"append",value:function(e,t,n){var i=parseInt(e);if("number"!=typeof i)throw new Error("please provide an index for the collection to update.");this._append(this.collection[i],t,n)}},{key:"appendCurrent",value:function(e,t){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,e,t)}},{key:"detach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._detach(e[n]);else this._detach(e)}},{key:"_detach",value:function(e){var t=this;this.events.unbind(e),e.tributeMenu&&this.menuEvents.unbind(e.tributeMenu),setTimeout(function(){e.removeAttribute("data-tribute"),t.isActive=!1,e.tributeMenu&&e.tributeMenu.remove()})}},{key:"isActive",get:function(){return this._isActive},set:function(e){if(this._isActive!=e&&(this._isActive=e,this.current.element)){var t=new CustomEvent("tribute-active-".concat(e));this.current.element.dispatchEvent(t)}}}],[{key:"defaultSelectTemplate",value:function(e){return void 0===e?"".concat(this.current.collection.trigger).concat(this.current.mentionText):this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+e.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+e.original[this.current.collection.fillAttr]}},{key:"defaultMenuItemTemplate",value:function(e){return e.string}},{key:"inputTypes",value:function(){return["TEXTAREA","INPUT"]}}]),l}()});