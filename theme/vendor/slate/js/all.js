/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(t,e,i,n){if(3===t.nodeType){var o=t.data.match(e);if(o){var r=document.createElement(i||"span");r.className=n||"highlight";var s=t.splitText(o.index);s.splitText(o[0].length);var a=s.cloneNode(!0);return r.appendChild(a),s.parentNode.replaceChild(r,s),1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName)&&(t.tagName!==i.toUpperCase()||t.className!==n))for(var l=0;l<t.childNodes.length;l++)l+=jQuery.highlight(t.childNodes[l],e,i,n);return 0}}),jQuery.fn.unhighlight=function(t){var e={className:"highlight",element:"span"};return jQuery.extend(e,t),this.find(e.element+"."+e.className).each(function(){var t=this.parentNode;t.replaceChild(this.firstChild,this),t.normalize()}).end()},jQuery.fn.highlight=function(t,e){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(i,e),t.constructor===String&&(t=[t]),t=jQuery.grep(t,function(t){return""!=t}),t=jQuery.map(t,function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==t.length)return this;var n=i.caseSensitive?"":"i",o="("+t.join("|")+")";i.wordsOnly&&(o="\\b"+o+"\\b");var r=new RegExp(o,n);return this.each(function(){jQuery.highlight(this,r,i.element,i.className)})},/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(t,e){var i=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(r){}o(e)},t.widget=function(i,n,o){var r,s,a,l,h={},c=i.split(".")[0];i=i.split(".")[1],r=c+"-"+i,o||(o=n,n=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[c]=t[c]||{},s=t[c][i],a=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new a(t,i)},t.extend(a,s,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),l=new n,l.options=t.widget.extend({},l.options),t.each(o,function(i,o){return t.isFunction(o)?(h[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,r=this._superApply;return this._super=t,this._superApply=e,i=o.apply(this,arguments),this._super=n,this._superApply=r,i}}(),e):(h[i]=o,e)}),a.prototype=t.widget.extend(l,{widgetEventPrefix:s?l.widgetEventPrefix:i},h,{constructor:a,namespace:c,widgetName:i,widgetFullName:r}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete s._childConstructors):n._childConstructors.push(a),t.widget.bridge(i,a)},t.widget.extend=function(i){for(var o,r,s=n.call(arguments,1),a=0,l=s.length;l>a;a++)for(o in s[a])r=s[a][o],s[a].hasOwnProperty(o)&&r!==e&&(i[o]=t.isPlainObject(r)?t.isPlainObject(i[o])?t.widget.extend({},i[o],r):t.widget.extend({},r):r);return i},t.widget.bridge=function(i,o){var r=o.prototype.widgetFullName||i;t.fn[i]=function(s){var a="string"==typeof s,l=n.call(arguments,1),h=this;return s=!a&&l.length?t.widget.extend.apply(null,[s].concat(l)):s,this.each(a?function(){var n,o=t.data(this,r);return o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(n=o[s].apply(o,l),n!==o&&n!==e?(h=n&&n.jquery?h.pushStack(n.get()):n,!1):e):t.error("no such method '"+s+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")}:function(){var e=t.data(this,r);e?e.option(s||{})._init():t.data(this,r,new o(s,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var o,r,s,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(r=a[i]=t.widget.extend({},this.options[i]),s=0;o.length-1>s;s++)r[o[s]]=r[o[s]]||{},r=r[o[s]];if(i=o.pop(),n===e)return r[i]===e?null:r[i];r[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var r,s=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=r=t(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,r=this.widget()),t.each(o,function(o,a){function l(){return i||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?s[a]:a).apply(s,arguments):e}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||t.guid++);var h=o.match(/^(\w+)\s*(.*)$/),c=h[1]+s.eventNamespace,u=h[2];u?r.delegate(u,c,l):n.bind(c,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,r,s=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(o in r)o in i||(i[o]=r[o]);return this.element.trigger(i,n),!(t.isFunction(s)&&s.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),s=!t.isEmptyObject(o),o.complete=r,o.delay&&n.delay(o.delay),s&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i){"use strict";var n="tocify",o="tocify-focus",r="tocify-hover",s="tocify-hide",a="tocify-header",l="."+a,h="tocify-subheader",c="."+h,u="tocify-item",d="."+u,f="tocify-extend-page",p="."+f;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,o=this,r=o.options.ignoreSelector;return e=t(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),e.length?(o.element.addClass(n),void e.each(function(e){t(this).is(r)||(i=t("<ul/>",{id:a+e,"class":a}).append(o._nestElements(t(this),e)),o.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(o.options.selectors).length?t(this).filter(o.options.selectors).each(function(){t(this).is(r)||o._appendSubheaders.call(this,o,i)}):t(this).find(o.options.selectors).each(function(){t(this).is(r)||o._appendSubheaders.call(this,o,i)})}))})):void o.element.addClass(s)},_setActiveElement:function(t){var i=this,n=e.location.hash.substring(1),o=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),o.addClass(i.focusClass),i.options.showAndHide&&o.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&t&&i.options.highlightDefault&&i.element.find(d).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var n,o,r;return n=t.grep(this.items,function(t){return t===e.text()}),this.items.push(n.length?e.text()+i:e.text()),r=this._generateHashValue(n,e,i),o=t("<li/>",{"class":u,"data-unique":r}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:r,"data-unique":r})),o},_generateHashValue:function(t,e,i){var n="",o=this.options.hashGenerator;if("pretty"===o){for(n=e.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof o?o(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(n+=""+i),n},_appendSubheaders:function(e,i){var n=t(this).index(e.options.selectors),o=t(e.options.selectors).eq(n-1),r=+t(this).prop("tagName").charAt(1),s=+o.prop("tagName").charAt(1);s>r?e.element.find(c+"[data-tag="+r+"]").last().append(e._nestElements(t(this),n)):r===s?i.find(d).last().after(e._nestElements(t(this),n)):i.find(d).last().after(t("<ul/>",{"class":h,"data-tag":r})).next(c).append(e._nestElements(t(this),n))},_setEventHandlers:function(){var n=this;this.element.on("click.tocify","li",function(){if(n.options.history&&(e.location.hash=t(this).attr("data-unique")),n.element.find("."+n.focusClass).removeClass(n.focusClass),t(this).addClass(n.focusClass),n.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');n._triggerShow(i)}n._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(n.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==n.options.theme&&t(this).removeClass(n.hoverClass)}}),t(e).on("resize",function(){n.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var o,r,s,a,l=t(e).scrollTop(),h=t(e).height(),c=t(i).height(),u=t("body")[0].scrollHeight;if(n.options.extendPage&&(n.webkit&&l>=u-h-n.options.extendPageOffset||!n.webkit&&h+l>c-n.options.extendPageOffset)&&!t(p).length){if(r=t('div[data-unique="'+t(d).last().attr("data-unique")+'"]'),!r.length)return;s=r.offset().top,t(n.options.context).append(t("<div />",{"class":f,height:Math.abs(s-l)+"px","data-unique":f})),n.extendPageScroll&&(a=n.element.find("li.active"),n._scrollTo(t("div[data-unique="+a.attr("data-unique")+"]")))}setTimeout(function(){var r,s=null;if(0==n.cachedHeights.length&&n.calculateHeights(),n.cachedAnchors.each(function(i){return n.cachedHeights[i]-t(e).scrollTop()<0?void(s=i):!1}),r=t(n.cachedAnchors[s]).attr("data-unique"),o=t('li[data-unique="'+r+'"]'),n.options.highlightOnScroll&&o.length){n.element.find("."+n.focusClass).removeClass(n.focusClass),o.addClass(n.focusClass);var a=n.tocifyWrapper,l=t(o).closest(".tocify-header"),h=l.offset().top,c=a.offset().top,u=h-c;if(u>=t(e).height()){var d=u+a.scrollTop();a.scrollTop(d)}else 0>u&&a.scrollTop(0)}n.options.scrollHistory&&e.location.hash!=="#"+r&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+r,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),n.options.showAndHideOnScroll&&n.options.showAndHide&&n._triggerShow(o,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var n=(t(this).next().length?t(this).next():t(this)).offset().top-50-e.options.highlightOffset;e.cachedHeights[i]=n}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(c).length||e.parent().is(l)||e.parent().is(":visible")?e.children(c).length||e.parent().is(l)||(e=e.closest(c)):e=e.parents(c).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return i.hide(t(c).not(e.parent().is(l)?e:e.closest(l).find(c).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(l)||t.next().is(c)?i.show(t.next(c),e):t.parent().is(c)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(l+","+c).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=r),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,n=i.options.smoothScroll||0,o=i.options.scrollTo+50;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(o)?o.call():o)+"px"},{duration:n})}),i}})}),/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.2
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
function(){var t=function(e){var i=new t.Index;return i.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),e&&e.call(i,i),i};t.version="0.5.2",/*!
 * lunr.utils
 * Copyright (C) 2014 Oliver Nightingale
 */
t.utils={},t.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),/*!
 * lunr.EventEmitter
 * Copyright (C) 2014 Oliver Nightingale
 */
t.EventEmitter=function(){this.events={}},t.EventEmitter.prototype.addListener=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),i=t;if("function"!=typeof e)throw new TypeError("last argument must be a function");i.forEach(function(t){this.hasHandler(t)||(this.events[t]=[]),this.events[t].push(e)},this)},t.EventEmitter.prototype.removeListener=function(t,e){if(this.hasHandler(t)){var i=this.events[t].indexOf(e);this.events[t].splice(i,1),this.events[t].length||delete this.events[t]}},t.EventEmitter.prototype.emit=function(t){if(this.hasHandler(t)){var e=Array.prototype.slice.call(arguments,1);this.events[t].forEach(function(t){t.apply(void 0,e)})}},t.EventEmitter.prototype.hasHandler=function(t){return t in this.events},/*!
 * lunr.tokenizer
 * Copyright (C) 2014 Oliver Nightingale
 */
t.tokenizer=function(t){if(!arguments.length||null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return t.toLowerCase()});for(var e=t.toString().replace(/^\s+/,""),i=e.length-1;i>=0;i--)if(/\S/.test(e.charAt(i))){e=e.substring(0,i+1);break}return e.split(/\s+/).map(function(t){return t.toLowerCase()})},/*!
 * lunr.Pipeline
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions={},t.Pipeline.registerFunction=function(e,i){i in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+i),e.label=i,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){var i=e.label&&e.label in this.registeredFunctions;i||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var i=new t.Pipeline;return e.forEach(function(e){var n=t.Pipeline.registeredFunctions[e];if(!n)throw new Error("Cannot load un-registered function: "+e);i.add(n)}),i},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){t.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},t.Pipeline.prototype.after=function(e,i){t.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(e)+1;this._stack.splice(n,0,i)},t.Pipeline.prototype.before=function(e,i){t.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(e);this._stack.splice(n,0,i)},t.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);this._stack.splice(e,1)},t.Pipeline.prototype.run=function(t){for(var e=[],i=t.length,n=this._stack.length,o=0;i>o;o++){for(var r=t[o],s=0;n>s&&(r=this._stack[s](r,o,t),void 0!==r);s++);void 0!==r&&e.push(r)}return e},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},/*!
 * lunr.Vector
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},t.Vector.Node=function(t,e,i){this.idx=t,this.val=e,this.next=i},t.Vector.prototype.insert=function(e,i){var n=this.list;if(!n)return this.list=new t.Vector.Node(e,i,n),this.length++;for(var o=n,r=n.next;void 0!=r;){if(e<r.idx)return o.next=new t.Vector.Node(e,i,r),this.length++;o=r,r=r.next}return o.next=new t.Vector.Node(e,i,r),this.length++},t.Vector.prototype.magnitude=function(){if(this._magniture)return this._magnitude;for(var t,e=this.list,i=0;e;)t=e.val,i+=t*t,e=e.next;return this._magnitude=Math.sqrt(i)},t.Vector.prototype.dot=function(t){for(var e=this.list,i=t.list,n=0;e&&i;)e.idx<i.idx?e=e.next:e.idx>i.idx?i=i.next:(n+=e.val*i.val,e=e.next,i=i.next);return n},t.Vector.prototype.similarity=function(t){return this.dot(t)/(this.magnitude()*t.magnitude())},/*!
 * lunr.SortedSet
 * Copyright (C) 2014 Oliver Nightingale
 */
t.SortedSet=function(){this.length=0,this.elements=[]},t.SortedSet.load=function(t){var e=new this;return e.elements=t,e.length=t.length,e},t.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t)},this),this.length=this.elements.length},t.SortedSet.prototype.toArray=function(){return this.elements.slice()},t.SortedSet.prototype.map=function(t,e){return this.elements.map(t,e)},t.SortedSet.prototype.forEach=function(t,e){return this.elements.forEach(t,e)},t.SortedSet.prototype.indexOf=function(t,e,i){var e=e||0,i=i||this.elements.length,n=i-e,o=e+Math.floor(n/2),r=this.elements[o];return 1>=n?r===t?o:-1:t>r?this.indexOf(t,o,i):r>t?this.indexOf(t,e,o):r===t?o:void 0},t.SortedSet.prototype.locationFor=function(t,e,i){var e=e||0,i=i||this.elements.length,n=i-e,o=e+Math.floor(n/2),r=this.elements[o];if(1>=n){if(r>t)return o;if(t>r)return o+1}return t>r?this.locationFor(t,o,i):r>t?this.locationFor(t,e,o):void 0},t.SortedSet.prototype.intersect=function(e){for(var i=new t.SortedSet,n=0,o=0,r=this.length,s=e.length,a=this.elements,l=e.elements;;){if(n>r-1||o>s-1)break;a[n]!==l[o]?a[n]<l[o]?n++:a[n]>l[o]&&o++:(i.add(a[n]),n++,o++)}return i},t.SortedSet.prototype.clone=function(){var e=new t.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},t.SortedSet.prototype.union=function(t){var e,i,n;return this.length>=t.length?(e=this,i=t):(e=t,i=this),n=e.clone(),n.add.apply(n,i.toArray()),n},t.SortedSet.prototype.toJSON=function(){return this.toArray()},/*!
 * lunr.Index
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Index=function(){this._fields=[],this._ref="id",this.pipeline=new t.Pipeline,this.documentStore=new t.Store,this.tokenStore=new t.TokenStore,this.corpusTokens=new t.SortedSet,this.eventEmitter=new t.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},t.Index.prototype.on=function(){var t=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,t)},t.Index.prototype.off=function(t,e){return this.eventEmitter.removeListener(t,e)},t.Index.load=function(e){e.version!==t.version&&t.utils.warn("version mismatch: current "+t.version+" importing "+e.version);var i=new this;return i._fields=e.fields,i._ref=e.ref,i.documentStore=t.Store.load(e.documentStore),i.tokenStore=t.TokenStore.load(e.tokenStore),i.corpusTokens=t.SortedSet.load(e.corpusTokens),i.pipeline=t.Pipeline.load(e.pipeline),i},t.Index.prototype.field=function(t,e){var e=e||{},i={name:t,boost:e.boost||1};return this._fields.push(i),this},t.Index.prototype.ref=function(t){return this._ref=t,this},t.Index.prototype.add=function(e,i){var n={},o=new t.SortedSet,r=e[this._ref],i=void 0===i?!0:i;this._fields.forEach(function(i){var r=this.pipeline.run(t.tokenizer(e[i.name]));n[i.name]=r,t.SortedSet.prototype.add.apply(o,r)},this),this.documentStore.set(r,o),t.SortedSet.prototype.add.apply(this.corpusTokens,o.toArray());for(var s=0;s<o.length;s++){var a=o.elements[s],l=this._fields.reduce(function(t,e){var i=n[e.name].length;if(!i)return t;var o=n[e.name].filter(function(t){return t===a}).length;return t+o/i*e.boost},0);this.tokenStore.add(a,{ref:r,tf:l})}i&&this.eventEmitter.emit("add",e,this)},t.Index.prototype.remove=function(t,e){var i=t[this._ref],e=void 0===e?!0:e;if(this.documentStore.has(i)){var n=this.documentStore.get(i);this.documentStore.remove(i),n.forEach(function(t){this.tokenStore.remove(t,i)},this),e&&this.eventEmitter.emit("remove",t,this)}},t.Index.prototype.update=function(t,e){var e=void 0===e?!0:e;this.remove(t,!1),this.add(t,!1),e&&this.eventEmitter.emit("update",t,this)},t.Index.prototype.idf=function(t){var e="@"+t;if(Object.prototype.hasOwnProperty.call(this._idfCache,e))return this._idfCache[e];var i=this.tokenStore.count(t),n=1;return i>0&&(n=1+Math.log(this.tokenStore.length/i)),this._idfCache[e]=n},t.Index.prototype.search=function(e){var i=this.pipeline.run(t.tokenizer(e)),n=new t.Vector,o=[],r=this._fields.reduce(function(t,e){return t+e.boost},0),s=i.some(function(t){return this.tokenStore.has(t)},this);if(!s)return[];i.forEach(function(e,i,s){var a=1/s.length*this._fields.length*r,l=this,h=this.tokenStore.expand(e).reduce(function(i,o){var r=l.corpusTokens.indexOf(o),s=l.idf(o),h=1,c=new t.SortedSet;if(o!==e){var u=Math.max(3,o.length-e.length);h=1/Math.log(u)}return r>-1&&n.insert(r,a*s*h),Object.keys(l.tokenStore.get(o)).forEach(function(t){c.add(t)}),i.union(c)},new t.SortedSet);o.push(h)},this);var a=o.reduce(function(t,e){return t.intersect(e)});return a.map(function(t){return{ref:t,score:n.similarity(this.documentVector(t))}},this).sort(function(t,e){return e.score-t.score})},t.Index.prototype.documentVector=function(e){for(var i=this.documentStore.get(e),n=i.length,o=new t.Vector,r=0;n>r;r++){var s=i.elements[r],a=this.tokenStore.get(s)[e].tf,l=this.idf(s);o.insert(this.corpusTokens.indexOf(s),a*l)}return o},t.Index.prototype.toJSON=function(){return{version:t.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},t.Index.prototype.use=function(t){var e=Array.prototype.slice.call(arguments,1);e.unshift(this),t.apply(this,e)},/*!
 * lunr.Store
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Store=function(){this.store={},this.length=0},t.Store.load=function(e){var i=new this;return i.length=e.length,i.store=Object.keys(e.store).reduce(function(i,n){return i[n]=t.SortedSet.load(e.store[n]),i},{}),i},t.Store.prototype.set=function(t,e){this.store[t]=e,this.length=Object.keys(this.store).length},t.Store.prototype.get=function(t){return this.store[t]},t.Store.prototype.has=function(t){return t in this.store},t.Store.prototype.remove=function(t){this.has(t)&&(delete this.store[t],this.length--)},t.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
t.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",n="[aeiouy]",o=i+"[^aeiouy]*",r=n+"[aeiou]*",s="^("+o+")?"+r+o,a="^("+o+")?"+r+o+"("+r+")?$",l="^("+o+")?"+r+o+r+o,h="^("+o+")?"+n;return function(i){var r,c,u,d,f,p,g;if(i.length<3)return i;if(u=i.substr(0,1),"y"==u&&(i=u.toUpperCase()+i.substr(1)),d=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,d.test(i)?i=i.replace(d,"$1$2"):f.test(i)&&(i=i.replace(f,"$1$2")),d=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,d.test(i)){var v=d.exec(i);d=new RegExp(s),d.test(v[1])&&(d=/.$/,i=i.replace(d,""))}else if(f.test(i)){var v=f.exec(i);r=v[1],f=new RegExp(h),f.test(r)&&(i=r,f=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),g=new RegExp("^"+o+n+"[^aeiouwxy]$"),f.test(i)?i+="e":p.test(i)?(d=/.$/,i=i.replace(d,"")):g.test(i)&&(i+="e"))}if(d=/^(.+?)y$/,d.test(i)){var v=d.exec(i);r=v[1],d=new RegExp(h),d.test(r)&&(i=r+"i")}if(d=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,d.test(i)){var v=d.exec(i);r=v[1],c=v[2],d=new RegExp(s),d.test(r)&&(i=r+t[c])}if(d=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,d.test(i)){var v=d.exec(i);r=v[1],c=v[2],d=new RegExp(s),d.test(r)&&(i=r+e[c])}if(d=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,d.test(i)){var v=d.exec(i);r=v[1],d=new RegExp(l),d.test(r)&&(i=r)}else if(f.test(i)){var v=f.exec(i);r=v[1]+v[2],f=new RegExp(l),f.test(r)&&(i=r)}if(d=/^(.+?)e$/,d.test(i)){var v=d.exec(i);r=v[1],d=new RegExp(l),f=new RegExp(a),p=new RegExp("^"+o+n+"[^aeiouwxy]$"),(d.test(r)||f.test(r)&&!p.test(r))&&(i=r)}return d=/ll$/,f=new RegExp(l),d.test(i)&&f.test(i)&&(d=/.$/,i=i.replace(d,"")),"y"==u&&(i=u.toLowerCase()+i.substr(1)),i}}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),/*!
 * lunr.stopWordFilter
 * Copyright (C) 2014 Oliver Nightingale
 */
t.stopWordFilter=function(e){return-1===t.stopWordFilter.stopWords.indexOf(e)?e:void 0},t.stopWordFilter.stopWords=new t.SortedSet,t.stopWordFilter.stopWords.length=119,t.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),/*!
 * lunr.trimmer
 * Copyright (C) 2014 Oliver Nightingale
 */
t.trimmer=function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")},t.Pipeline.registerFunction(t.trimmer,"trimmer"),/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
t.TokenStore=function(){this.root={docs:{}},this.length=0},t.TokenStore.load=function(t){var e=new this;return e.root=t.root,e.length=t.length,e},t.TokenStore.prototype.add=function(t,e,i){var i=i||this.root,n=t[0],o=t.slice(1);return n in i||(i[n]={docs:{}}),0===o.length?(i[n].docs[e.ref]=e,void(this.length+=1)):this.add(o,e,i[n])},t.TokenStore.prototype.has=function(t){if(!t)return!1;for(var e=this.root,i=0;i<t.length;i++){if(!e[t[i]])return!1;e=e[t[i]]}return!0},t.TokenStore.prototype.getNode=function(t){if(!t)return{};for(var e=this.root,i=0;i<t.length;i++){if(!e[t[i]])return{};e=e[t[i]]}return e},t.TokenStore.prototype.get=function(t,e){return this.getNode(t,e).docs||{}},t.TokenStore.prototype.count=function(t,e){return Object.keys(this.get(t,e)).length},t.TokenStore.prototype.remove=function(t,e){if(t){for(var i=this.root,n=0;n<t.length;n++){if(!(t[n]in i))return;i=i[t[n]]}delete i.docs[e]}},t.TokenStore.prototype.expand=function(t,e){var i=this.getNode(t),n=i.docs||{},e=e||[];return Object.keys(n).length&&e.push(t),Object.keys(i).forEach(function(i){"docs"!==i&&e.concat(this.expand(t+i,e))},this),e},t.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.lunr=e()}(this,function(){return t})}(),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(t){function e(t){if(t){$("#lang-selector a").removeClass("active"),$("#lang-selector a[data-language-name='"+t+"']").addClass("active");for(var e=0;e<o.length;e++)$(".highlight."+o[e]).hide();$(".highlight."+t).show(),$(window.location.hash).get(0).scrollIntoView(!0),window.scrollBy(0,-50)}}function i(t){if(history){var e=window.location.hash;e&&(e=e.replace(/^#+/,"")),history.pushState({},"","?"+t+"#"+e)}}function n(t){var i=(t[0],localStorage.getItem("language"));o=t,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),o)?(e(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):e(null!==i&&-1!=jQuery.inArray(i,o)?i:o[0])}var o=[];t.setupLanguages=n,t.activateLanguage=e,$(function(){$("#lang-selector a").on("click",function(){var t=$(this).data("language-name");return i(t),e(t),!1}),window.onpopstate=function(){e(window.location.search.substr(1))}})}(window),function(t){function e(){$("h1").each(function(){var t=$(this),e=t.nextUntil("h1"),i=$('<section id="section-'+t.prop("id")+'"></section>');t.after(i.append(e)),i.prepend(t),v.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function i(){u=$(".content"),d=$(".dark-box"),f=$(".search-info"),$("#input-search").on("keyup",s).on("focus",a).on("blur",l)}function n(t){return $(".tocify-item[data-unique="+t+"]").closest(".tocify-header")}function o(t,e){var i=parseInt(e.id.replace(/[^\d]/g,""),10),n=parseInt(t.id.replace(/[^\d]/g,""),10);return i===n?0:n>i?-1:1}function r(){var t=$(".tocify-header").sort(o);$.each(t,function(t,e){$(e).insertBefore($("#toc ul:first-child"))})}function s(t){var e=$("section, #toc .tocify-header");if(f.hide(),c(),27===t.keyCode&&(this.value=""),this.value){e.hide();var i=v.search(this.value);if(i.length){r();var o;if($.each(i,function(t,e){if(!(e.score<=1e-4)){var i=e.ref;$("#section-"+i).show();var r=n(i);o&&n(o).insertBefore(r),r.show(),o=i}}),i.length>1){var s=i[0].ref,a=i[1].ref;n(s).insertBefore(n(a))}h.call(this)}else e.show(),f.text('No Results Found for "'+this.value+'"').show()}else e.show();p.triggerHandler("scroll.tocify"),p.triggerHandler("resize")}function a(){s.call(this,{})}function l(){c(),f.hide()}function h(){this.value&&u.highlight(this.value,g)}function c(){u.unhighlight(g)}var u,d,f,p=$(t),g={element:"span",className:"search-highlight"},v=new lunr.Index;v.ref("id"),v.field("title",{boost:10}),v.field("body"),v.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(i)}(window),function(t){function e(){e=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-2,scrollHistory:!0,hashGenerator:function(t,e){return e.prop("id")}}).data("toc-tocify")}function i(){setTimeout(function(){e.setOption("showEffectSpeed",180)},50)}var e;t.toc=e,$(e),$(i)}(window);