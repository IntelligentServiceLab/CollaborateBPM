/*! AGILE-BPM 版权所有，翻版必究 */
!function (modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {i: moduleId, l: !1, exports: {}};
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
    }

    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        })
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function () {
            return module.default
        } : function () {
            return module
        };
        return __webpack_require__.d(getter, "a", getter), getter
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7)
}([, function (module, exports) {
    var g;
    g = function () {
        return this
    }();
    try {
        g = g || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (g = window)
    }
    module.exports = g
}, function (module, exports, __webpack_require__) {
    (function (global) {
        module.exports = global.$ = __webpack_require__(9)
    }).call(exports, __webpack_require__(1))
}, function (module, exports) {
    var ToolsController = window.ToolsController = {};
    ToolsController.getEnum = function (path, listMode) {
        var deferred = $.Deferred(), data = {path: path, listMode: listMode};
        return listMode || (data.listMode = !1), $.ajax({
            url: __ctx + "/sys/tools/getEnum",
            type: "POST",
            dataType: "json",
            data: data,
            error: function (data, status) {
                deferred.reject(status)
            },
            success: function (data) {
                deferred.resolve(data)
            }
        }), deferred.promise()
    }, ToolsController.getConstant = function (path, key) {
        var deferred = $.Deferred();
        return $.ajax({
            url: __ctx + "/sys/tools/getConstant",
            type: "POST",
            dataType: "json",
            data: {path: path, key: key || ""},
            error: function (data, status) {
                deferred.reject(status)
            },
            success: function (data) {
                deferred.resolve(data)
            }
        }), deferred.promise()
    }, ToolsController.getInterFaceImpls = function (classPath) {
        var deferred = $.Deferred();
        return $.ajax({
            url: __ctx + "/sys/tools/getInterFaceImpls",
            type: "POST",
            dataType: "json",
            data: {classPath: classPath},
            error: function (data, status) {
                deferred.reject(status)
            },
            success: function (data) {
                deferred.resolve(data)
            }
        }), deferred.promise()
    }, ToolsController.getCurrentTime = function (format) {
        var currentTime = null;
        if ($.ajax({
            url: __ctx + "/sys/tools/getCurrentTime",
            type: "POST",
            data: {format: format},
            dataType: "json",
            async: !1,
            success: function (data) {
                data.isOk && (currentTime = data.data)
            }
        }), !currentTime) throw"请求出错，请检查格式及服务器是否正常";
        return currentTime
    }
}, , , , function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {value: !0});
    var __WEBPACK_IMPORTED_MODULE_0_expose_loader_jquery__ = __webpack_require__(8);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_expose_loader_jquery__);
    __webpack_require__(11), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(3), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(3)
}, function (module, exports, __webpack_require__) {
    (function (global) {
        module.exports = global.$ = __webpack_require__(2)
    }).call(exports, __webpack_require__(1))
}, function (module, exports, __webpack_require__) {
    (function (global) {
        module.exports = global.jQuery = __webpack_require__(10)
    }).call(exports, __webpack_require__(1))
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function (global, factory) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function (w) {
            if (!w.document) throw new Error("jQuery requires a window with a document");
            return factory(w)
        } : factory(global)
    }("undefined" != typeof window ? window : this, function (window, noGlobal) {
        function isArraylike(obj) {
            var length = "length" in obj && obj.length, type = jQuery.type(obj);
            return "function" !== type && !jQuery.isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj))
        }

        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function (elem, i) {
                return !!qualifier.call(elem, i, elem) !== not
            });
            if (qualifier.nodeType) return jQuery.grep(elements, function (elem) {
                return elem === qualifier !== not
            });
            if ("string" == typeof qualifier) {
                if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function (elem) {
                return indexOf.call(qualifier, elem) >= 0 !== not
            })
        }

        function sibling(cur, dir) {
            for (; (cur = cur[dir]) && 1 !== cur.nodeType;) ;
            return cur
        }

        function createOptions(options) {
            var object = optionsCache[options] = {};
            return jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
                object[flag] = !0
            }), object
        }

        function completed() {
            document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready()
        }

        function Data() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = jQuery.expando + Data.uid++
        }

        function dataAttr(elem, key, data) {
            var name;
            if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), "string" == typeof (data = elem.getAttribute(name))) {
                try {
                    data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data)
                } catch (e) {
                }
                data_user.set(elem, key, data)
            } else data = void 0;
            return data
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {
            }
        }

        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
        }

        function disableScript(elem) {
            return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
        }

        function setGlobalEval(elems, refElements) {
            for (var i = 0, l = elems.length; i < l; i++) data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"))
        }

        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (1 === dest.nodeType) {
                if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(dest, pdataOld), events = pdataOld.events)) {
                    delete pdataCur.handle, pdataCur.events = {};
                    for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i])
                }
                data_user.hasData(src) && (udataOld = data_user.access(src), udataCur = jQuery.extend({}, udataOld), data_user.set(dest, udataCur))
            }
        }

        function getAll(context, tag) {
            var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
            return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret
        }

        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
        }

        function actualDisplay(name, doc) {
            var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
            return elem.detach(), display
        }

        function defaultDisplay(nodeName) {
            var doc = document, display = elemdisplay[nodeName];
            return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
        }

        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name]), computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret
        }

        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function () {
                    return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments)
                }
            }
        }

        function vendorPropName(style, name) {
            if (name in style) return name;
            for (var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;) if ((name = cssPrefixes[i] + capName) in style) return name;
            return origName
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rnumsplit.exec(value);
            return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
            return val
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = !0, val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
            if (val <= 0 || null == val) {
                if (val = curCSS(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }

        function showHide(elements, show) {
            for (var display, elem, hidden, values = [], index = 0, length = elements.length; index < length; index++) elem = elements[index], elem.style && (values[index] = data_priv.get(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), "none" === display && hidden || data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
            for (index = 0; index < length; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
            return elements
        }

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing)
        }

        function createFxNow() {
            return setTimeout(function () {
                fxNow = void 0
            }), fxNow = jQuery.now()
        }

        function genFx(type, includeWidth) {
            var which, i = 0, attrs = {height: type};
            for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
            return includeWidth && (attrs.opacity = attrs.width = type), attrs
        }

        function createTween(value, prop, animation) {
            for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, anim = this, orig = {}, style = elem.style,
                hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
            opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function () {
                hooks.unqueued || oldfire()
            }), hooks.unqueued++, anim.always(function () {
                anim.always(function () {
                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
                })
            })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), "inline" === ("none" === display ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display) && "none" === jQuery.css(elem, "float") && (style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function () {
                style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
            }));
            for (prop in props) if (value = props[prop], rfxtypes.exec(value)) {
                if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                    if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                    hidden = !0
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
            } else display = void 0;
            if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display); else {
                dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = data_priv.access(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function () {
                    jQuery(elem).hide()
                }), anim.done(function () {
                    var prop;
                    data_priv.remove(elem, "fxshow");
                    for (prop in orig) jQuery.style(elem, prop, orig[prop])
                });
                for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0))
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
                value = hooks.expand(value), delete props[name];
                for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing)
            } else specialEasing[name] = easing
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = animationPrefilters.length,
                deferred = jQuery.Deferred().always(function () {
                    delete tick.elem
                }), tick = function () {
                    if (stopped) return !1;
                    for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                    return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), !1)
                }, animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {specialEasing: {}}, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function (prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        return animation.tweens.push(tween), tween
                    },
                    stop: function (gotoEnd) {
                        var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                        return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                    }
                }), props = animation.props;
            for (propFilter(props, animation.opts.specialEasing); index < length; index++) if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
            return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }

        function addToPrefiltersOrTransports(structure) {
            return function (dataTypeExpression, func) {
                "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func)) for (; dataType = dataTypes[i++];) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
            }
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            function inspect(dataType) {
                var selected;
                return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
                }), selected
            }

            var inspected = {}, seekingTransport = structure === transports;
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }

        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
            return deep && jQuery.extend(!0, target, deep), target
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
            for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
            if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break
            }
            if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    firstDataType || (firstDataType = type)
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
            for (current = dataTypes.shift(); current;) if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift()) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                if (!(conv = converters[prev + " " + current] || converters["* " + current])) for (conv2 in converters) if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                    !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0], dataTypes.unshift(tmp[1]));
                    break
                }
                if (!0 !== conv) if (conv && s.throws) response = conv(response); else try {
                    response = conv(response)
                } catch (e) {
                    return {state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current}
                }
            }
            return {state: "success", data: response}
        }

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) jQuery.each(obj, function (i, v) {
                traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v ? i : "") + "]", v, traditional, add)
            }); else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj); else for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
        }

        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView
        }

        var arr = [], slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {},
            toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {},
            document = window.document, jQuery = function (selector, context) {
                return new jQuery.fn.init(selector, context)
            }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function (all, letter) {
                return letter.toUpperCase()
            };
        jQuery.fn = jQuery.prototype = {
            jquery: "2.1.4",
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function () {
                return slice.call(this)
            },
            get: function (num) {
                return null != num ? num < 0 ? this[num + this.length] : this[num] : slice.call(this)
            },
            pushStack: function (elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                return ret.prevObject = this, ret.context = this.context, ret
            },
            each: function (callback, args) {
                return jQuery.each(this, callback, args)
            },
            map: function (callback) {
                return this.pushStack(jQuery.map(this, function (elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            slice: function () {
                return this.pushStack(slice.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (i) {
                var len = this.length, j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        }, jQuery.extend = jQuery.fn.extend = function () {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1,
                length = arguments.length, deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
            return target
        }, jQuery.extend({
            expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (msg) {
                throw new Error(msg)
            }, noop: function () {
            }, isFunction: function (obj) {
                return "function" === jQuery.type(obj)
            }, isArray: Array.isArray, isWindow: function (obj) {
                return null != obj && obj === obj.window
            }, isNumeric: function (obj) {
                return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0
            }, isPlainObject: function (obj) {
                return "object" === jQuery.type(obj) && !obj.nodeType && !jQuery.isWindow(obj) && !(obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf"))
            }, isEmptyObject: function (obj) {
                var name;
                for (name in obj) return !1;
                return !0
            }, type: function (obj) {
                return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
            }, globalEval: function (code) {
                var script, indirect = eval;
                (code = jQuery.trim(code)) && (1 === code.indexOf("use strict") ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
            }, camelCase: function (string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            }, nodeName: function (elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            }, each: function (obj, callback, args) {
                var i = 0, length = obj.length, isArray = isArraylike(obj);
                if (args) {
                    if (isArray) for (; i < length && !1 !== callback.apply(obj[i], args); i++) ; else for (i in obj) if (!1 === callback.apply(obj[i], args)) break
                } else if (isArray) for (; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++) ; else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
                return obj
            }, trim: function (text) {
                return null == text ? "" : (text + "").replace(rtrim, "")
            }, makeArray: function (arr, results) {
                var ret = results || [];
                return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret
            }, inArray: function (elem, arr, i) {
                return null == arr ? -1 : indexOf.call(arr, elem, i)
            }, merge: function (first, second) {
                for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
                return first.length = i, first
            }, grep: function (elems, callback, invert) {
                for (var matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) !callback(elems[i], i) !== callbackExpect && matches.push(elems[i]);
                return matches
            }, map: function (elems, callback, arg) {
                var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
                if (isArray) for (; i < length; i++) null != (value = callback(elems[i], i, arg)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i, arg)) && ret.push(value);
                return concat.apply([], ret)
            }, guid: 1, proxy: function (fn, context) {
                var tmp, args, proxy;
                if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function () {
                    return fn.apply(context || this, args.concat(slice.call(arguments)))
                }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy
            }, now: Date.now, support: support
        }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });
        var Sizzle = function (window) {
            function Sizzle(selector, context, results, seed) {
                var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], nodeType = context.nodeType, "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                if (!seed && documentIsHTML) {
                    if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                        if (9 === nodeType) {
                            if (!(elem = context.getElementById(m)) || !elem.parentNode) return results;
                            if (elem.id === m) return results.push(elem), results
                        } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
                    } else {
                        if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                        if ((m = match[3]) && support.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
                    }
                    if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        if (nid = old = expando, newContext = context, newSelector = 1 !== nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                            for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) groups[i] = nid + toSelector(groups[i]);
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context, newSelector = groups.join(",")
                        }
                        if (newSelector) try {
                            return push.apply(results, newContext.querySelectorAll(newSelector)), results
                        } catch (qsaError) {
                        } finally {
                            old || context.removeAttribute("id")
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed)
            }

            function createCache() {
                function cache(key, value) {
                    return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
                }

                var keys = [];
                return cache
            }

            function markFunction(fn) {
                return fn[expando] = !0, fn
            }

            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div)
                } catch (e) {
                    return !1
                } finally {
                    div.parentNode && div.parentNode.removeChild(div), div = null
                }
            }

            function addHandle(attrs, handler) {
                for (var arr = attrs.split("|"), i = attrs.length; i--;) Expr.attrHandle[arr[i]] = handler
            }

            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) return diff;
                if (cur) for (; cur = cur.nextSibling;) if (cur === b) return -1;
                return a ? 1 : -1
            }

            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    return argument = +argument, markFunction(function (seed, matches) {
                        for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                    })
                })
            }

            function testContext(context) {
                return context && void 0 !== context.getElementsByTagName && context
            }

            function setFilters() {
            }

            function toSelector(tokens) {
                for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
                return selector
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir, checkNonElements = base && "parentNode" === dir, doneName = done++;
                return combinator.first ? function (elem, context, xml) {
                    for (; elem = elem[dir];) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml)
                } : function (elem, context, xml) {
                    var oldCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        for (; elem = elem[dir];) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                    } else for (; elem = elem[dir];) if (1 === elem.nodeType || checkNonElements) {
                        if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                        if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
                    }
                }
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function (elem, context, xml) {
                    for (var i = matchers.length; i--;) if (!matchers[i](elem, context, xml)) return !1;
                    return !0
                } : matchers[0]
            }

            function multipleContexts(selector, contexts, results) {
                for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                return results
            }

            function condense(unmatched, map, filter, context, xml) {
                for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++) (elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i)));
                return newUnmatched
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function (seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                for (temp = [], i = matcherOut.length; i--;) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                postFinder(null, matcherOut = [], temp, xml)
                            }
                            for (i = matcherOut.length; i--;) (elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                        }
                    } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                })
            }

            function matcherFromTokens(tokens) {
                for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) {
                    return elem === checkContext
                }, implicitRelative, !0), matchAnyContext = addCombinator(function (elem) {
                    return indexOf(checkContext, elem) > -1
                }, implicitRelative, !0), matchers = [function (elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    return checkContext = null, ret
                }]; i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)]; else {
                    if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                        for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++) ;
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: " " === tokens[i - 2].type ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                    }
                    matchers.push(matcher)
                }
                return elementMatcher(matchers)
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [],
                            contextBackup = outermostContext,
                            elems = seed || byElement && Expr.find.TAG("*", outermost),
                            dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                            len = elems.length;
                        for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
                            if (byElement && elem) {
                                for (j = 0; matcher = elementMatchers[j++];) if (matcher(elem, context, xml)) {
                                    results.push(elem);
                                    break
                                }
                                outermost && (dirruns = dirrunsUnique)
                            }
                            bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                        }
                        if (matchedCount += i, bySet && i !== matchedCount) {
                            for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                            if (seed) {
                                if (matchedCount > 0) for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                setMatched = condense(setMatched)
                            }
                            push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                        }
                        return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                    };
                return bySet ? markFunction(superMatcher) : superMatcher
            }

            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate,
                setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains,
                expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0,
                classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(),
                sortOrder = function (a, b) {
                    return a === b && (hasDuplicate = !0), 0
                }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push,
                push = arr.push, slice = arr.slice, indexOf = function (list, elem) {
                    for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                    return -1
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                identifier = characterEncoding.replace("w", "w#"),
                attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    ID: new RegExp("^#(" + characterEncoding + ")"),
                    CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                    TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/,
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g,
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function (_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 65536;
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
                }, unloadHandler = function () {
                    setDocument()
                };
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function (target, els) {
                        push_native.apply(target, slice.call(els))
                    } : function (target, els) {
                        for (var j = target.length, i = 0; target[j++] = els[i++];) ;
                        target.length = j - 1
                    }
                }
            }
            support = Sizzle.support = {}, isXML = Sizzle.isXML = function (elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return !!documentElement && "HTML" !== documentElement.nodeName
            }, setDocument = Sizzle.setDocument = function (node) {
                var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, parent = doc.defaultView, parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), documentIsHTML = !isXML(doc), support.attributes = assert(function (div) {
                    return div.className = "i", !div.getAttribute("className")
                }), support.getElementsByTagName = assert(function (div) {
                    return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length
                }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function (div) {
                    return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length
                }), support.getById ? (Expr.find.ID = function (id, context) {
                    if (void 0 !== context.getElementById && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [m] : []
                    }
                }, Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                        return elem.getAttribute("id") === attrId
                    }
                }) : (delete Expr.find.ID, Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                        var node = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
                        return node && node.value === attrId
                    }
                }), Expr.find.TAG = support.getElementsByTagName ? function (tag, context) {
                    return void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0
                } : function (tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if ("*" === tag) {
                        for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
                        return tmp
                    }
                    return results
                }, Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
                    if (documentIsHTML) return context.getElementsByClassName(className)
                }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function (div) {
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\f]' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
                }), assert(function (div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
                })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function (div) {
                    support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
                }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
                    var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                    return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                } : function (a, b) {
                    if (b) for (; b = b.parentNode;) if (b === a) return !0;
                    return !1
                }, sortOrder = hasCompare ? function (a, b) {
                    if (a === b) return hasDuplicate = !0, 0;
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return compare || (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return hasDuplicate = !0, 0;
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                    if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    if (aup === bup) return siblingCheck(a, b);
                    for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                    for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                    for (; ap[i] === bp[i];) i++;
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                }, doc) : document
            }, Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements)
            }, Sizzle.matchesSelector = function (elem, expr) {
                if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
                } catch (e) {
                }
                return Sizzle(expr, document, null, [elem]).length > 0
            }, Sizzle.contains = function (context, elem) {
                return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
            }, Sizzle.attr = function (elem, name) {
                (elem.ownerDocument || elem) !== document && setDocument(elem);
                var fn = Expr.attrHandle[name.toLowerCase()],
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
            }, Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
            }, Sizzle.uniqueSort = function (results) {
                var elem, duplicates = [], j = 0, i = 0;
                if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                    for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
                    for (; j--;) results.splice(duplicates[j], 1)
                }
                return sortInput = null, results
            }, getText = Sizzle.getText = function (elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (nodeType) {
                    if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                        if ("string" == typeof elem.textContent) return elem.textContent;
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
                    } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
                } else for (; node = elem[i++];) ret += getText(node);
                return ret
            }, Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (match) {
                        return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
                    }, CHILD: function (match) {
                        return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
                    }, PSEUDO: function (match) {
                        var excess, unquoted = !match[6] && match[2];
                        return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return "*" === nodeNameSelector ? function () {
                            return !0
                        } : function (elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                        }
                    }, CLASS: function (className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                            return pattern.test("string" == typeof elem.className && elem.className || void 0 !== elem.getAttribute && elem.getAttribute("class") || "")
                        })
                    }, ATTR: function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);
                            return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"))
                        }
                    }, CHILD: function (type, what, argument, first, last) {
                        var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4),
                            ofType = "of-type" === what;
                        return 1 === first && 0 === last ? function (elem) {
                            return !!elem.parentNode
                        } : function (elem, context, xml) {
                            var cache, outerCache, node, diff, nodeIndex, start,
                                dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode,
                                name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                            if (parent) {
                                if (simple) {
                                    for (; dir;) {
                                        for (node = elem; node = node[dir];) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                        start = dir = "only" === type && !start && "nextSibling"
                                    }
                                    return !0
                                }
                                if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                    for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) if (1 === node.nodeType && ++diff && node === elem) {
                                        outerCache[type] = [dirruns, nodeIndex, diff];
                                        break
                                    }
                                } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1]; else for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem));) ;
                                return (diff -= last) === first || diff % first == 0 && diff / first >= 0
                            }
                        }
                    }, PSEUDO: function (pseudo, argument) {
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                            for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i])
                        }) : function (elem) {
                            return fn(elem, 0, args)
                        }) : fn
                    }
                },
                pseudos: {
                    not: markFunction(function (selector) {
                        var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                            for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                        }) : function (elem, context, xml) {
                            return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop()
                        }
                    }), has: markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0
                        }
                    }), contains: markFunction(function (text) {
                        return text = text.replace(runescape, funescape), function (elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        }
                    }), lang: markFunction(function (lang) {
                        return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function (elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-")
                            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                            return !1
                        }
                    }), target: function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id
                    }, root: function (elem) {
                        return elem === docElem
                    }, focus: function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    }, enabled: function (elem) {
                        return !1 === elem.disabled
                    }, disabled: function (elem) {
                        return !0 === elem.disabled
                    }, checked: function (elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                    }, selected: function (elem) {
                        return elem.parentNode && elem.parentNode.selectedIndex, !0 === elem.selected
                    }, empty: function (elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                        return !0
                    }, parent: function (elem) {
                        return !Expr.pseudos.empty(elem)
                    }, header: function (elem) {
                        return rheader.test(elem.nodeName)
                    }, input: function (elem) {
                        return rinputs.test(elem.nodeName)
                    }, button: function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return "input" === name && "button" === elem.type || "button" === name
                    }, text: function (elem) {
                        var attr;
                        return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
                    }, first: createPositionalPseudo(function () {
                        return [0]
                    }), last: createPositionalPseudo(function (matchIndexes, length) {
                        return [length - 1]
                    }), eq: createPositionalPseudo(function (matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }), even: createPositionalPseudo(function (matchIndexes, length) {
                        for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                        return matchIndexes
                    }), odd: createPositionalPseudo(function (matchIndexes, length) {
                        for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                        return matchIndexes
                    }), lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                        for (var i = argument < 0 ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
                        return matchIndexes
                    }), gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                        for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i);
                        return matchIndexes
                    })
                }
            }, Expr.pseudos.nth = Expr.pseudos.eq;
            for (i in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) Expr.pseudos[i] = function (type) {
                return function (elem) {
                    return "input" === elem.nodeName.toLowerCase() && elem.type === type
                }
            }(i);
            for (i in {submit: !0, reset: !0}) Expr.pseudos[i] = function (type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return ("input" === name || "button" === name) && elem.type === type
                }
            }(i);
            return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) return parseOnly ? 0 : cached.slice(0);
                for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                    matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    }), soFar = soFar.slice(matched.length));
                    for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    }), soFar = soFar.slice(matched.length));
                    if (!matched) break
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            }, compile = Sizzle.compile = function (selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
                }
                return cached
            }, select = Sizzle.select = function (selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
                    match = !seed && tokenize(selector = compiled.selector || selector);
                if (results = results || [], 1 === match.length) {
                    if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                        if (!(context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0])) return results;
                        compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
                    }
                    for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                        if (tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens))) return push.apply(results, seed), results;
                        break
                    }
                }
                return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), results
            }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function (div1) {
                return 1 & div1.compareDocumentPosition(document.createElement("div"))
            }), assert(function (div) {
                return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href")
            }) || addHandle("type|href|height|width", function (elem, name, isXML) {
                if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
            }), support.attributes && assert(function (div) {
                return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value")
            }) || addHandle("value", function (elem, name, isXML) {
                if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue
            }), assert(function (div) {
                return null == div.getAttribute("disabled")
            }) || addHandle(booleans, function (elem, name, isXML) {
                var val;
                if (!isXML) return !0 === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
            }), Sizzle
        }(window);
        jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
        var rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            risSimple = /^.[^:#\[\.,]*$/;
        jQuery.filter = function (expr, elems, not) {
            var elem = elems[0];
            return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
                return 1 === elem.nodeType
            }))
        }, jQuery.fn.extend({
            find: function (selector) {
                var i, len = this.length, ret = [], self = this;
                if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return !0
                }));
                for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret
            }, filter: function (selector) {
                return this.pushStack(winnow(this, selector || [], !1))
            }, not: function (selector) {
                return this.pushStack(winnow(this, selector || [], !0))
            }, is: function (selector) {
                return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (jQuery.fn.init = function (selector, context) {
            var match, elem;
            if (!selector) return this;
            if ("string" == typeof selector) {
                if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector)) || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
                if (match[1]) {
                    if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                    return this
                }
                return elem = document.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, this[0] = elem), this.context = document, this.selector = selector, this
            }
            return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this))
        }).prototype = jQuery.fn, rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = {children: !0, contents: !0, next: !0, prev: !0};
        jQuery.extend({
            dir: function (elem, dir, until) {
                for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType;) if (1 === elem.nodeType) {
                    if (truncate && jQuery(elem).is(until)) break;
                    matched.push(elem)
                }
                return matched
            }, sibling: function (n, elem) {
                for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
                return matched
            }
        }), jQuery.fn.extend({
            has: function (target) {
                var targets = jQuery(target, this), l = targets.length;
                return this.filter(function () {
                    for (var i = 0; i < l; i++) if (jQuery.contains(this, targets[i])) return !0
                })
            }, closest: function (selectors, context) {
                for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break
                }
                return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched)
            }, index: function (elem) {
                return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (selector, context) {
                return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))))
            }, addBack: function (selector) {
                return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
            }
        }), jQuery.each({
            parent: function (elem) {
                var parent = elem.parentNode;
                return parent && 11 !== parent.nodeType ? parent : null
            }, parents: function (elem) {
                return jQuery.dir(elem, "parentNode")
            }, parentsUntil: function (elem, i, until) {
                return jQuery.dir(elem, "parentNode", until)
            }, next: function (elem) {
                return sibling(elem, "nextSibling")
            }, prev: function (elem) {
                return sibling(elem, "previousSibling")
            }, nextAll: function (elem) {
                return jQuery.dir(elem, "nextSibling")
            }, prevAll: function (elem) {
                return jQuery.dir(elem, "previousSibling")
            }, nextUntil: function (elem, i, until) {
                return jQuery.dir(elem, "nextSibling", until)
            }, prevUntil: function (elem, i, until) {
                return jQuery.dir(elem, "previousSibling", until)
            }, siblings: function (elem) {
                return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
            }, children: function (elem) {
                return jQuery.sibling(elem.firstChild)
            }, contents: function (elem) {
                return elem.contentDocument || jQuery.merge([], elem.childNodes)
            }
        }, function (name, fn) {
            jQuery.fn[name] = function (until, selector) {
                var matched = jQuery.map(this, fn, until);
                return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.unique(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched)
            }
        });
        var rnotwhite = /\S+/g, optionsCache = {};
        jQuery.Callbacks = function (options) {
            options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
            var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [],
                fire = function (data) {
                    for (memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingIndex < firingLength; firingIndex++) if (!1 === list[firingIndex].apply(data[0], data[1]) && options.stopOnFalse) {
                        memory = !1;
                        break
                    }
                    firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable())
                }, self = {
                    add: function () {
                        if (list) {
                            var start = list.length;
                            !function add(args) {
                                jQuery.each(args, function (_, arg) {
                                    var type = jQuery.type(arg);
                                    "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg)
                                })
                            }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory))
                        }
                        return this
                    }, remove: function () {
                        return list && jQuery.each(arguments, function (_, arg) {
                            for (var index; (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), firing && (index <= firingLength && firingLength--, index <= firingIndex && firingIndex--)
                        }), this
                    }, has: function (fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length)
                    }, empty: function () {
                        return list = [], firingLength = 0, this
                    }, disable: function () {
                        return list = stack = memory = void 0, this
                    }, disabled: function () {
                        return !list
                    }, lock: function () {
                        return stack = void 0, memory || self.disable(), this
                    }, locked: function () {
                        return !stack
                    }, fireWith: function (context, args) {
                        return !list || fired && !stack || (args = args || [], args = [context, args.slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this
                    }, fire: function () {
                        return self.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!fired
                    }
                };
            return self
        }, jQuery.extend({
            Deferred: function (func) {
                var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
                    state = "pending", promise = {
                        state: function () {
                            return state
                        }, always: function () {
                            return deferred.done(arguments).fail(arguments), this
                        }, then: function () {
                            var fns = arguments;
                            return jQuery.Deferred(function (newDefer) {
                                jQuery.each(tuples, function (i, tuple) {
                                    var fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function () {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                    })
                                }), fns = null
                            }).promise()
                        }, promise: function (obj) {
                            return null != obj ? jQuery.extend(obj, promise) : promise
                        }
                    }, deferred = {};
                return promise.pipe = promise.then, jQuery.each(tuples, function (i, tuple) {
                    var list = tuple[2], stateString = tuple[3];
                    promise[tuple[1]] = list.add, stateString && list.add(function () {
                        state = stateString
                    }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function () {
                        return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this
                    }, deferred[tuple[0] + "With"] = list.fireWith
                }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
            }, when: function (subordinate) {
                var progressValues, progressContexts, resolveContexts, i = 0, resolveValues = slice.call(arguments),
                    length = resolveValues.length,
                    remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                    deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
                    updateFunc = function (i, contexts, values) {
                        return function (value) {
                            contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values)
                        }
                    };
                if (length > 1) for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); i < length; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
                return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
            }
        });
        var readyList;
        jQuery.fn.ready = function (fn) {
            return jQuery.ready.promise().done(fn), this
        }, jQuery.extend({
            isReady: !1, readyWait: 1, holdReady: function (hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0)
            }, ready: function (wait) {
                (!0 === wait ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, !0 !== wait && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))))
            }
        }), jQuery.ready.promise = function (obj) {
            return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(obj)
        }, jQuery.ready.promise();
        var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, len = elems.length, bulk = null == key;
            if ("object" === jQuery.type(key)) {
                chainable = !0;
                for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw)
            } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function (elem, key, value) {
                return bulk.call(jQuery(elem), value)
            })), fn)) for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
        };
        jQuery.acceptData = function (owner) {
            return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType
        }, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = {
            key: function (owner) {
                if (!Data.accepts(owner)) return 0;
                var descriptor = {}, unlock = owner[this.expando];
                if (!unlock) {
                    unlock = Data.uid++;
                    try {
                        descriptor[this.expando] = {value: unlock}, Object.defineProperties(owner, descriptor)
                    } catch (e) {
                        descriptor[this.expando] = unlock, jQuery.extend(owner, descriptor)
                    }
                }
                return this.cache[unlock] || (this.cache[unlock] = {}), unlock
            }, set: function (owner, data, value) {
                var prop, unlock = this.key(owner), cache = this.cache[unlock];
                if ("string" == typeof data) cache[data] = value; else if (jQuery.isEmptyObject(cache)) jQuery.extend(this.cache[unlock], data); else for (prop in data) cache[prop] = data[prop];
                return cache
            }, get: function (owner, key) {
                var cache = this.cache[this.key(owner)];
                return void 0 === key ? cache : cache[key]
            }, access: function (owner, key, value) {
                var stored;
                return void 0 === key || key && "string" == typeof key && void 0 === value ? (stored = this.get(owner, key), void 0 !== stored ? stored : this.get(owner, jQuery.camelCase(key))) : (this.set(owner, key, value), void 0 !== value ? value : key)
            }, remove: function (owner, key) {
                var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
                if (void 0 === key) this.cache[unlock] = {}; else {
                    jQuery.isArray(key) ? name = key.concat(key.map(jQuery.camelCase)) : (camel = jQuery.camelCase(key), key in cache ? name = [key, camel] : (name = camel, name = name in cache ? [name] : name.match(rnotwhite) || [])), i = name.length;
                    for (; i--;) delete cache[name[i]]
                }
            }, hasData: function (owner) {
                return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {})
            }, discard: function (owner) {
                owner[this.expando] && delete this.cache[owner[this.expando]]
            }
        };
        var data_priv = new Data, data_user = new Data, rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;
        jQuery.extend({
            hasData: function (elem) {
                return data_user.hasData(elem) || data_priv.hasData(elem)
            }, data: function (elem, name, data) {
                return data_user.access(elem, name, data)
            }, removeData: function (elem, name) {
                data_user.remove(elem, name)
            }, _data: function (elem, name, data) {
                return data_priv.access(elem, name, data)
            }, _removeData: function (elem, name) {
                data_priv.remove(elem, name)
            }
        }), jQuery.fn.extend({
            data: function (key, value) {
                var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                if (void 0 === key) {
                    if (this.length && (data = data_user.get(elem), 1 === elem.nodeType && !data_priv.get(elem, "hasDataAttrs"))) {
                        for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                        data_priv.set(elem, "hasDataAttrs", !0)
                    }
                    return data
                }
                return "object" == typeof key ? this.each(function () {
                    data_user.set(this, key)
                }) : access(this, function (value) {
                    var data, camelKey = jQuery.camelCase(key);
                    if (elem && void 0 === value) {
                        if (void 0 !== (data = data_user.get(elem, key))) return data;
                        if (void 0 !== (data = data_user.get(elem, camelKey))) return data;
                        if (void 0 !== (data = dataAttr(elem, camelKey, void 0))) return data
                    } else this.each(function () {
                        var data = data_user.get(this, camelKey);
                        data_user.set(this, camelKey, value), -1 !== key.indexOf("-") && void 0 !== data && data_user.set(this, key, value)
                    })
                }, null, value, arguments.length > 1, null, !0)
            }, removeData: function (key) {
                return this.each(function () {
                    data_user.remove(this, key)
                })
            }
        }), jQuery.extend({
            queue: function (elem, type, data) {
                var queue;
                if (elem) return type = (type || "fx") + "queue", queue = data_priv.get(elem, type), data && (!queue || jQuery.isArray(data) ? queue = data_priv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []
            }, dequeue: function (elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type), next = function () {
                        jQuery.dequeue(elem, type)
                    };
                "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
            }, _queueHooks: function (elem, type) {
                var key = type + "queueHooks";
                return data_priv.get(elem, key) || data_priv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function () {
                        data_priv.remove(elem, [type + "queue", key])
                    })
                })
            }
        }), jQuery.fn.extend({
            queue: function (type, data) {
                var setter = 2;
                return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function () {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
                })
            }, dequeue: function (type) {
                return this.each(function () {
                    jQuery.dequeue(this, type)
                })
            }, clearQueue: function (type) {
                return this.queue(type || "fx", [])
            }, promise: function (type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
                    --count || defer.resolveWith(elements, [elements])
                };
                for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) (tmp = data_priv.get(elements[i], type + "queueHooks")) && tmp.empty && (count++, tmp.empty.add(resolve));
                return resolve(), defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, cssExpand = ["Top", "Right", "Bottom", "Left"],
            isHidden = function (elem, el) {
                return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem)
            }, rcheckableType = /^(?:checkbox|radio)$/i;
        !function () {
            var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");
            input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
        }();
        support.focusinBubbles = "onfocusin" in window;
        var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
        jQuery.event = {
            global: {},
            add: function (elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
                    elemData = data_priv.get(elem);
                if (elemData) for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function (e) {
                    return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0
                }), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && !1 !== special.setup.call(elem, data, namespaces, eventHandle) || elem.addEventListener && elem.addEventListener(type, eventHandle, !1)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0)
            },
            remove: function (elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
                    elemData = data_priv.hasData(elem) && data_priv.get(elem);
                if (elemData && (events = elemData.events)) {
                    for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                        for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                        origCount && !handlers.length && (special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle) || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                    } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                    jQuery.isEmptyObject(events) && (delete elemData.handle, data_priv.remove(elem, "events"))
                }
            },
            trigger: function (event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                        tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                    for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle"), handle && handle.apply(cur, data), (handle = ontype && cur[ontype]) && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), !1 === event.result && event.preventDefault());
                    return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && !1 !== special._default.apply(eventPath.pop(), data) || !jQuery.acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result
                }
            },
            dispatch: function (event) {
                event = jQuery.event.fix(event);
                var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments),
                    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                if (args[0] = event, event.delegateTarget = this, !special.preDispatch || !1 !== special.preDispatch.call(this, event)) {
                    for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) for (event.currentTarget = matched.elem, j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.namespace_re && !event.namespace_re.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, void 0 !== (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && !1 === (event.result = ret) && (event.preventDefault(), event.stopPropagation()));
                    return special.postDispatch && special.postDispatch.call(this, event), event.result
                }
            },
            handlers: function (event, handlers) {
                var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type)) for (; cur !== this; cur = cur.parentNode || this) if (!0 !== cur.disabled || "click" !== event.type) {
                    for (matches = [], i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                    matches.length && handlerQueue.push({elem: cur, handlers: matches})
                }
                return delegateCount < handlers.length && handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                }), handlerQueue
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (event, original) {
                    return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (event, original) {
                    var eventDoc, doc, body, button = original.button;
                    return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event
                }
            },
            fix: function (event) {
                if (event[jQuery.expando]) return event;
                var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
                for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
                return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && jQuery.nodeName(this, "input")) return this.click(), !1
                    }, _default: function (event) {
                        return jQuery.nodeName(event.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (event) {
                        void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
                    }
                }
            },
            simulate: function (type, elem, event, bubble) {
                var e = jQuery.extend(new jQuery.Event, event, {type: type, isSimulated: !0, originalEvent: {}});
                bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault()
            }
        }, jQuery.removeEvent = function (elem, type, handle) {
            elem.removeEventListener && elem.removeEventListener(type, handle, !1)
        }, jQuery.Event = function (src, props) {
            if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
            src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && !1 === src.returnValue ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), this[jQuery.expando] = !0
        }, jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix, bindType: fix, handle: function (event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
                }
            }
        }), support.focusinBubbles || jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0)
            };
            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix);
                    attaches || doc.addEventListener(orig, handler, !0), data_priv.access(doc, fix, (attaches || 0) + 1)
                }, teardown: function () {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix) - 1;
                    attaches ? data_priv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), data_priv.remove(doc, fix))
                }
            }
        }), jQuery.fn.extend({
            on: function (types, selector, data, fn, one) {
                var origFn, type;
                if ("object" == typeof types) {
                    "string" != typeof selector && (data = data || selector, selector = void 0);
                    for (type in types) this.on(type, selector, data, types[type], one);
                    return this
                }
                if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), !1 === fn) fn = returnFalse; else if (!fn) return this;
                return 1 === one && (origFn = fn, fn = function (event) {
                    return jQuery().off(event), origFn.apply(this, arguments)
                }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function () {
                    jQuery.event.add(this, types, fn, data, selector)
                })
            }, one: function (types, selector, data, fn) {
                return this.on(types, selector, data, fn, 1)
            }, off: function (types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
                if ("object" == typeof types) {
                    for (type in types) this.off(type, selector, types[type]);
                    return this
                }
                return !1 !== selector && "function" != typeof selector || (fn = selector, selector = void 0), !1 === fn && (fn = returnFalse), this.each(function () {
                    jQuery.event.remove(this, types, fn, selector)
                })
            }, trigger: function (type, data) {
                return this.each(function () {
                    jQuery.event.trigger(type, data, this)
                })
            }, triggerHandler: function (type, data) {
                var elem = this[0];
                if (elem) return jQuery.event.trigger(type, data, elem, !0)
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
            clone: function (elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(!0),
                    inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]); else cloneCopyEvent(elem, clone);
                return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone
            }, buildFragment: function (elems, context, scripts, selection) {
                for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++) if ((elem = elems[i]) || 0 === elem) if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem); else if (rhtml.test(elem)) {
                    for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
                    jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = ""
                } else nodes.push(context.createTextNode(elem));
                for (fragment.textContent = "", i = 0; elem = nodes[i++];) if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)) for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
                return fragment
            }, cleanData: function (elems) {
                for (var data, elem, type, key, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) {
                    if (jQuery.acceptData(elem) && (key = elem[data_priv.expando]) && (data = data_priv.cache[key])) {
                        if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        data_priv.cache[key] && delete data_priv.cache[key]
                    }
                    delete data_user.cache[elem[data_user.expando]]
                }
            }
        }), jQuery.fn.extend({
            text: function (value) {
                return access(this, function (value) {
                    return void 0 === value ? jQuery.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value)
                    })
                }, null, value, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        manipulationTarget(this, elem).appendChild(elem)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
                })
            }, remove: function (selector, keepData) {
                for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
                return this
            }, empty: function () {
                for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
                return this
            }, clone: function (dataAndEvents, deepDataAndEvents) {
                return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function () {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            }, html: function (value) {
                return access(this, function (value) {
                    var elem = this[0] || {}, i = 0, l = this.length;
                    if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                    if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = value.replace(rxhtmlTag, "<$1></$2>");
                        try {
                            for (; i < l; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                            elem = 0
                        } catch (e) {
                        }
                    }
                    elem && this.empty().append(value)
                }, null, value, arguments.length)
            }, replaceWith: function () {
                var arg = arguments[0];
                return this.domManip(arguments, function (elem) {
                    arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this)
                }), arg && (arg.length || arg.nodeType) ? this : this.remove()
            }, detach: function (selector) {
                return this.remove(selector, !0)
            }, domManip: function (args, callback) {
                args = concat.apply([], args);
                var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this,
                    iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
                if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function (index) {
                    var self = set.eq(index);
                    isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback)
                });
                if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
                    for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
                    if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval(node.textContent.replace(rcleanScript, "")))
                }
                return this
            }
        }), jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (name, original) {
            jQuery.fn[name] = function (selector) {
                for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
                return this.pushStack(ret)
            }
        });
        var iframe, elemdisplay = {}, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
            getStyles = function (elem) {
                return elem.ownerDocument.defaultView.opener ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : window.getComputedStyle(elem, null)
            };
        !function () {
            function computePixelPositionAndBoxSizingReliable() {
                div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", div.innerHTML = "", docElem.appendChild(container);
                var divStyle = window.getComputedStyle(div, null);
                pixelPositionVal = "1%" !== divStyle.top, boxSizingReliableVal = "4px" === divStyle.width, docElem.removeChild(container)
            }

            var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement,
                container = document.createElement("div"), div = document.createElement("div");
            div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", container.appendChild(div), window.getComputedStyle && jQuery.extend(support, {
                pixelPosition: function () {
                    return computePixelPositionAndBoxSizingReliable(), pixelPositionVal
                }, boxSizingReliable: function () {
                    return null == boxSizingReliableVal && computePixelPositionAndBoxSizingReliable(), boxSizingReliableVal
                }, reliableMarginRight: function () {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", docElem.appendChild(container), ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight), docElem.removeChild(container), div.removeChild(marginDiv), ret
                }
            }))
        }(), jQuery.swap = function (elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
            ret = callback.apply(elem, args || []);
            for (name in options) elem.style[name] = old[name];
            return ret
        };
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
            rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
            cssShow = {position: "absolute", visibility: "hidden", display: "block"},
            cssNormalTransform = {letterSpacing: "0", fontWeight: "400"}, cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function (elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return "" === ret ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (elem, name, value, extra) {
                if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                    var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                    if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                    type = typeof value, "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (style[name] = value))
                }
            },
            css: function (elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name);
                return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), !0 === extra || jQuery.isNumeric(num) ? num || 0 : val) : val
            }
        }), jQuery.each(["height", "width"], function (i, name) {
            jQuery.cssHooks[name] = {
                get: function (elem, computed, extra) {
                    if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, name, extra)
                    }) : getWidthOrHeight(elem, name, extra)
                }, set: function (elem, value, extra) {
                    var styles = extra && getStyles(elem);
                    return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0)
                }
            }
        }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
            if (computed) return jQuery.swap(elem, {display: "inline-block"}, curCSS, [elem, "marginRight"])
        }), jQuery.each({margin: "", padding: "", border: "Width"}, function (prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function (value) {
                    for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    return expanded
                }
            }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
        }), jQuery.fn.extend({
            css: function (name, value) {
                return access(this, function (elem, name, value) {
                    var styles, len, map = {}, i = 0;
                    if (jQuery.isArray(name)) {
                        for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                        return map
                    }
                    return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            }, show: function () {
                return showHide(this, !0)
            }, hide: function () {
                return showHide(this)
            }, toggle: function (state) {
                return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function () {
                    isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
                })
            }
        }), jQuery.Tween = Tween, Tween.prototype = {
            constructor: Tween,
            init: function (elem, options, prop, end, easing, unit) {
                this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function () {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function (percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function (tween) {
                    var result;
                    return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) : tween.elem[tween.prop]
                }, set: function (tween) {
                    jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function (tween) {
                tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
            }
        }, jQuery.easing = {
            linear: function (p) {
                return p
            }, swing: function (p) {
                return .5 - Math.cos(p * Math.PI) / 2
            }
        }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter], tweeners = {
                "*": [function (prop, value) {
                    var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value),
                        unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                        start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                        scale = 1, maxIterations = 20;
                    if (start && start[3] !== unit) {
                        unit = unit || start[3], parts = parts || [], start = +target || 1;
                        do {
                            scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit)
                        } while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations)
                    }
                    return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween
                }]
            };
        jQuery.Animation = jQuery.extend(Animation, {
            tweener: function (props, callback) {
                jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.split(" ");
                for (var prop, index = 0, length = props.length; index < length; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback)
            }, prefilter: function (callback, prepend) {
                prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback)
            }
        }), jQuery.speed = function (speed, easing, fn) {
            var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && !0 !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function () {
                jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
            }, opt
        }, jQuery.fn.extend({
            fadeTo: function (speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback)
            }, animate: function (prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function () {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        (empty || data_priv.get(this, "finish")) && anim.stop(!0)
                    };
                return doAnimation.finish = doAnimation, empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            }, stop: function (type, clearQueue, gotoEnd) {
                var stopQueue = function (hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop, stop(gotoEnd)
                };
                return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && !1 !== type && this.queue(type || "fx", []), this.each(function () {
                    var dequeue = !0, index = null != type && type + "queueHooks", timers = jQuery.timers,
                        data = data_priv.get(this);
                    if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                    for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                    !dequeue && gotoEnd || jQuery.dequeue(this, type)
                })
            }, finish: function (type) {
                return !1 !== type && (type = type || "fx"), this.each(function () {
                    var index, data = data_priv.get(this), queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                    for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                    delete data.finish
                })
            }
        }), jQuery.each(["toggle", "show", "hide"], function (i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function (speed, easing, callback) {
                return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
            }
        }), jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (name, props) {
            jQuery.fn[name] = function (speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        }), jQuery.timers = [], jQuery.fx.tick = function () {
            var timer, i = 0, timers = jQuery.timers;
            for (fxNow = jQuery.now(); i < timers.length; i++) (timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
            timers.length || jQuery.fx.stop(), fxNow = void 0
        }, jQuery.fx.timer = function (timer) {
            jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop()
        }, jQuery.fx.interval = 13, jQuery.fx.start = function () {
            timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
        }, jQuery.fx.stop = function () {
            clearInterval(timerId), timerId = null
        }, jQuery.fx.speeds = {slow: 600, fast: 200, _default: 400}, jQuery.fn.delay = function (time, type) {
            return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function (next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function () {
                    clearTimeout(timeout)
                }
            })
        }, function () {
            var input = document.createElement("input"), select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = "t" === input.value
        }();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function (name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1)
            }, removeAttr: function (name) {
                return this.each(function () {
                    jQuery.removeAttr(this, name)
                })
            }
        }), jQuery.extend({
            attr: function (elem, name, value) {
                var hooks, ret, nType = elem.nodeType;
                if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name))
            }, removeAttr: function (elem, value) {
                var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
                if (attrNames && 1 === elem.nodeType) for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name)
            }, attrHooks: {
                type: {
                    set: function (elem, value) {
                        if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            return elem.setAttribute("type", value), val && (elem.value = val), value
                        }
                    }
                }
            }
        }), boolHook = {
            set: function (elem, value, name) {
                return !1 === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name
            }
        }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function (elem, name, isXML) {
                var ret, handle;
                return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret
            }
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i;
        jQuery.fn.extend({
            prop: function (name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1)
            }, removeProp: function (name) {
                return this.each(function () {
                    delete this[jQuery.propFix[name] || name]
                })
            }
        }), jQuery.extend({
            propFix: {for: "htmlFor", class: "className"}, prop: function (elem, name, value) {
                var ret, hooks, notxml, nType = elem.nodeType;
                if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
            }, propHooks: {
                tabIndex: {
                    get: function (elem) {
                        return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1
                    }
                }
            }
        }), support.optSelected || (jQuery.propHooks.selected = {
            get: function (elem) {
                var parent = elem.parentNode;
                return parent && parent.parentNode && parent.parentNode.selectedIndex, null
            }
        }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            jQuery.propFix[this.toLowerCase()] = this
        });
        var rclass = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function (value) {
                var classes, elem, cur, clazz, j, finalValue, proceed = "string" == typeof value && value, i = 0,
                    len = this.length;
                if (jQuery.isFunction(value)) return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, this.className))
                });
                if (proceed) for (classes = (value || "").match(rnotwhite) || []; i < len; i++) if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
                    for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                    finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue)
                }
                return this
            }, removeClass: function (value) {
                var classes, elem, cur, clazz, j, finalValue,
                    proceed = 0 === arguments.length || "string" == typeof value && value, i = 0, len = this.length;
                if (jQuery.isFunction(value)) return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, this.className))
                });
                if (proceed) for (classes = (value || "").match(rnotwhite) || []; i < len; i++) if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
                    for (j = 0; clazz = classes[j++];) for (; cur.indexOf(" " + clazz + " ") >= 0;) cur = cur.replace(" " + clazz + " ", " ");
                    finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue)
                }
                return this
            }, toggleClass: function (value, stateVal) {
                var type = typeof value;
                return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function (i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
                }) : this.each(function () {
                    if ("string" === type) for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className); else "undefined" !== type && "boolean" !== type || (this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || !1 === value ? "" : data_priv.get(this, "__className__") || "")
                })
            }, hasClass: function (selector) {
                for (var className = " " + selector + " ", i = 0, l = this.length; i < l; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
                return !1
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function (value) {
                var hooks, ret, isFunction, elem = this[0];
                {
                    if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function (i) {
                        var val;
                        1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function (value) {
                            return null == value ? "" : value + ""
                        })), (hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
                    });
                    if (elem) return (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)
                }
            }
        }), jQuery.extend({
            valHooks: {
                option: {
                    get: function (elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return null != val ? val : jQuery.trim(jQuery.text(elem))
                    }
                }, select: {
                    get: function (elem) {
                        for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++) if (option = options[i], (option.selected || i === index) && (support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            if (value = jQuery(option).val(), one) return value;
                            values.push(value)
                        }
                        return values
                    }, set: function (elem, value) {
                        for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;) option = options[i], (option.selected = jQuery.inArray(option.value, values) >= 0) && (optionSet = !0);
                        return optionSet || (elem.selectedIndex = -1), values
                    }
                }
            }
        }), jQuery.each(["radio", "checkbox"], function () {
            jQuery.valHooks[this] = {
                set: function (elem, value) {
                    if (jQuery.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0
                }
            }, support.checkOn || (jQuery.valHooks[this].get = function (elem) {
                return null === elem.getAttribute("value") ? "on" : elem.value
            })
        }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (i, name) {
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        }), jQuery.fn.extend({
            hover: function (fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            }, bind: function (types, data, fn) {
                return this.on(types, null, data, fn)
            }, unbind: function (types, fn) {
                return this.off(types, null, fn)
            }, delegate: function (selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            }, undelegate: function (selector, types, fn) {
                return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            }
        });
        var nonce = jQuery.now(), rquery = /\?/;
        jQuery.parseJSON = function (data) {
            return JSON.parse(data + "")
        }, jQuery.parseXML = function (data) {
            var xml, tmp;
            if (!data || "string" != typeof data) return null;
            try {
                tmp = new DOMParser, xml = tmp.parseFromString(data, "text/xml")
            } catch (e) {
                xml = void 0
            }
            return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
        };
        var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {},
            transports = {}, allTypes = "*/".concat("*"), ajaxLocation = window.location.href,
            ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ajaxLocation,
                type: "GET",
                isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function (url, options) {
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), (modified = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                }

                "object" == typeof url && (options = url, url = void 0), options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i,
                    s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0,
                    strAbort = "canceled", jqXHR = {
                        readyState: 0, getResponseHeader: function (key) {
                            var match;
                            if (2 === state) {
                                if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return null == match ? null : match
                        }, getAllResponseHeaders: function () {
                            return 2 === state ? responseHeadersString : null
                        }, setRequestHeader: function (name, value) {
                            var lname = name.toLowerCase();
                            return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this
                        }, overrideMimeType: function (type) {
                            return state || (s.mimeType = type), this
                        }, statusCode: function (map) {
                            var code;
                            if (map) if (state < 2) for (code in map) statusCode[code] = [statusCode[code], map[code]]; else jqXHR.always(map[jqXHR.status]);
                            return this
                        }, abort: function (statusText) {
                            var finalText = statusText || strAbort;
                            return transport && transport.abort(finalText), done(0, finalText), this
                        }
                    };
                if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
                fireGlobals = jQuery.event && s.global, fireGlobals && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), !1 === s.cache && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || 2 === state)) return jqXHR.abort();
                strAbort = "abort";
                for (i in {success: 1, error: 1, complete: 1}) jqXHR[i](s[i]);
                if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                    jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function () {
                        jqXHR.abort("timeout")
                    }, s.timeout));
                    try {
                        state = 1, transport.send(requestHeaders, done)
                    } catch (e) {
                        if (!(state < 2)) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return jqXHR
            },
            getJSON: function (url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function (url, callback) {
                return jQuery.get(url, void 0, callback, "script")
            }
        }), jQuery.each(["get", "post"], function (i, method) {
            jQuery[method] = function (url, data, callback, type) {
                return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                })
            }
        }), jQuery._evalUrl = function (url) {
            return jQuery.ajax({url: url, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, jQuery.fn.extend({
            wrapAll: function (html) {
                var wrap;
                return jQuery.isFunction(html) ? this.each(function (i) {
                    jQuery(this).wrapAll(html.call(this, i))
                }) : (this[0] && (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function () {
                    for (var elem = this; elem.firstElementChild;) elem = elem.firstElementChild;
                    return elem
                }).append(this)), this)
            }, wrapInner: function (html) {
                return jQuery.isFunction(html) ? this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i))
                }) : this.each(function () {
                    var self = jQuery(this), contents = self.contents();
                    contents.length ? contents.wrapAll(html) : self.append(html)
                })
            }, wrap: function (html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function (i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
                }).end()
            }
        }), jQuery.expr.filters.hidden = function (elem) {
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0
        }, jQuery.expr.filters.visible = function (elem) {
            return !jQuery.expr.filters.hidden(elem)
        };
        var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.param = function (a, traditional) {
            var prefix, s = [], add = function (key, value) {
                value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
            };
            if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function () {
                add(this.name, this.value)
            }); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
            return s.join("&").replace(r20, "+")
        }, jQuery.fn.extend({
            serialize: function () {
                return jQuery.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function () {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                }).map(function (i, elem) {
                    var val = jQuery(this).val();
                    return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
                        return {name: elem.name, value: val.replace(rCRLF, "\r\n")}
                    }) : {name: elem.name, value: val.replace(rCRLF, "\r\n")}
                }).get()
            }
        }), jQuery.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (e) {
            }
        };
        var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {0: 200, 1223: 204},
            xhrSupported = jQuery.ajaxSettings.xhr();
        window.attachEvent && window.attachEvent("onunload", function () {
            for (var key in xhrCallbacks) xhrCallbacks[key]()
        }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function (options) {
            var callback;
            if (support.cors || xhrSupported && !options.crossDomain) return {
                send: function (headers, complete) {
                    var i, xhr = options.xhr(), id = ++xhrId;
                    if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                    options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                    for (i in headers) xhr.setRequestHeader(i, headers[i]);
                    callback = function (type) {
                        return function () {
                            callback && (delete xhrCallbacks[id], callback = xhr.onload = xhr.onerror = null, "abort" === type ? xhr.abort() : "error" === type ? complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "string" == typeof xhr.responseText ? {text: xhr.responseText} : void 0, xhr.getAllResponseHeaders()))
                        }
                    }, xhr.onload = callback(), xhr.onerror = callback("error"), callback = xhrCallbacks[id] = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null)
                    } catch (e) {
                        if (callback) throw e
                    }
                }, abort: function () {
                    callback && callback()
                }
            }
        }), jQuery.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (text) {
                    return jQuery.globalEval(text), text
                }
            }
        }), jQuery.ajaxPrefilter("script", function (s) {
            void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET")
        }), jQuery.ajaxTransport("script", function (s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function (_, complete) {
                        script = jQuery("<script>").prop({
                            async: !0,
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function (evt) {
                            script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type)
                        }), document.head.appendChild(script[0])
                    }, abort: function () {
                        callback && callback()
                    }
                }
            }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                return this[callback] = !0, callback
            }
        }), jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer,
                jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function () {
                return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
            }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function () {
                responseContainer = arguments
            }, jqXHR.always(function () {
                window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
            }), "script"
        }), jQuery.parseHTML = function (data, context, keepScripts) {
            if (!data || "string" != typeof data) return null;
            "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
        };
        var _load = jQuery.fn.load;
        jQuery.fn.load = function (url, params, callback) {
            if ("string" != typeof url && _load) return _load.apply(this, arguments);
            var selector, type, response, self = this, off = url.indexOf(" ");
            return off >= 0 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function (responseText) {
                response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).complete(callback && function (jqXHR, status) {
                self.each(callback, response || [jqXHR.responseText, status, jqXHR])
            }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
            jQuery.fn[type] = function (fn) {
                return this.on(type, fn)
            }
        }), jQuery.expr.filters.animated = function (elem) {
            return jQuery.grep(jQuery.timers, function (fn) {
                return elem === fn.elem
            }).length
        };
        var docElem = window.document.documentElement;
        jQuery.offset = {
            setOffset: function (elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                    position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
            }
        }, jQuery.fn.extend({
            offset: function (options) {
                if (arguments.length) return void 0 === options ? this : this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i)
                });
                var docElem, win, elem = this[0], box = {top: 0, left: 0}, doc = elem && elem.ownerDocument;
                if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (void 0 !== elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
                    top: box.top + win.pageYOffset - docElem.clientTop,
                    left: box.left + win.pageXOffset - docElem.clientLeft
                }) : box
            }, position: function () {
                if (this[0]) {
                    var offsetParent, offset, elem = this[0], parentOffset = {top: 0, left: 0};
                    return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
                    return offsetParent || docElem
                })
            }
        }), jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function (val) {
                return access(this, function (elem, method, val) {
                    var win = getWindow(elem);
                    if (void 0 === val) return win ? win[prop] : elem[method];
                    win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : elem[method] = val
                }, method, val, arguments.length, null)
            }
        }), jQuery.each(["top", "left"], function (i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
                if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
            })
        }), jQuery.each({Height: "height", Width: "width"}, function (name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function (defaultExtra, funcName) {
                jQuery.fn[funcName] = function (margin, value) {
                    var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                        extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                    return access(this, function (elem, type, value) {
                        var doc;
                        return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : void 0, chainable, null)
                }
            })
        }), jQuery.fn.size = function () {
            return this.length
        }, jQuery.fn.andSelf = jQuery.fn.addBack, __WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return jQuery
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        var _jQuery = window.jQuery, _$ = window.$;
        return jQuery.noConflict = function (deep) {
            return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
        }, void 0 === noGlobal && (window.jQuery = window.$ = jQuery), jQuery
    })
}, function (module, exports) {
    window.__ctx = "/agile-bpm-platform", jQuery(function () {
        jQuery.ajaxSetup({crossDomain: !0, xhrFields: {withCredentials: !0}}), jQuery.support.cors = !0
    }), window.getCtxUrl = function (url, replaceRequestParam) {
        return !url || url.startWith(__ctx) || url.startWith("http") || (url.startWith("/") || (url = "/" + url), url = __ctx + url, replaceRequestParam && -1 != url.indexOf("?") && $.getParams && (url = url.format($.getParams()))), url
    }, window.getProjectUrl = function (url) {
        if (url && -1 == url.indexOf("http://") && "/" === url.substring(0, 1)) {
            var pathname = window.document.location.pathname,
                projectPath = pathname.substring(0, pathname.substr(1).indexOf("/") + 1);
            return -1 != "/bus,/bpm,/sys,/org,/form,/flow-editor,/bpmplugin".indexOf(projectPath) ? url : url.startWith(projectPath) ? url : projectPath + url
        }
        return url
    }
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
    function String_toDate(str, format, a) {
        return -1 == format.indexOf(a) ? null : str.substr(format.indexOf(a), a.length)
    }

    function forbidF5(exp) {
        window.navigator.userAgent.indexOf(exp) >= 0 && (document.onkeydown = function (e) {
            var ev = window.event || e;
            if (116 == (ev.keyCode || ev.which)) return ev.keyCode ? ev.keyCode = 0 : ev.which = 0, cancelBubble = !0, !1
        })
    }

    var $ = jQuery;
    jQuery.extend({
        isIE: function () {
            return 0 == navigator.appName.indexOf("Microsoft")
        }, isIE6: function () {
            return !(!$.browser.msie || "6.0" != $.browser.version || $.support.style)
        }, fixPNG: function (imgObj) {
            var arVersion = navigator.appVersion.split("MSIE"), version = parseFloat(arVersion[1]);
            if (version >= 5.5 && version < 7 && document.body.filters) {
                var imgID = imgObj.id ? "id='" + imgObj.id + "' " : "",
                    imgClass = imgObj.className ? "class='" + imgObj.className + "' " : "",
                    imgTitle = imgObj.title ? "title='" + imgObj.title + "' " : "title='" + imgObj.alt + "' ",
                    imgStyle = "display:inline-block;" + imgObj.style.cssText,
                    strNewHTML = "<span " + imgID + imgClass + imgTitle + ' style="width:' + imgObj.width + "px; height:" + imgObj.height + "px;" + imgStyle + ";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgObj.src + "', sizingMethod='scale');\"></span>";
                imgObj.outerHTML = strNewHTML
            }
        }, getParameter: function (key) {
            for (var parameters = unescape(window.location.search.substr(1)).split("&"), i = 0; i < parameters.length; i++) {
                var paramCell = parameters[i].split("=");
                if (2 == paramCell.length && paramCell[0].toUpperCase() == key.toUpperCase()) return paramCell[1]
            }
            return ""
        }, getMonthDays: function (year, month) {
            if (month < 0 || month > 11) return 30;
            var arrMon = new Array(12);
            return arrMon[0] = 31, arrMon[1] = year % 4 == 0 ? 29 : 28, arrMon[2] = 31, arrMon[3] = 30, arrMon[4] = 31, arrMon[5] = 30, arrMon[6] = 31, arrMon[7] = 31, arrMon[8] = 30, arrMon[9] = 31, arrMon[10] = 30, arrMon[11] = 31, arrMon[month]
        }, weekOfYear: function (year, month, day) {
            var date1 = new Date(year, 0, 1), date2 = new Date(year, month - 1, day, 1),
                firstDay = 864e5 * (7 - date1.getDay());
            return date1 = date1.getTime(), date2 = date2.getTime(), Math.ceil((date2 - date1 - firstDay) / 6048e5) + 1
        }, timeLag: function (difference) {
            var r = "", days = Math.floor(difference / 864e5), leave1 = difference % 864e5,
                hours = Math.floor(leave1 / 36e5), leave2 = leave1 % 36e5, minutes = Math.floor(leave2 / 6e4),
                leave3 = leave2 % 6e4, seconds = Math.round(leave3 / 1e3);
            return days > 0 && (r += days + "天"), hours > 0 && (r += hours + "小时"), minutes > 0 && (r += minutes + "分钟"), seconds > 0 && (r += seconds + "秒"), r || (leave3 ? difference + "毫秒" : "")
        }, timeDifference: function (date1, date2) {
            return $.timeLag(date2 - date1)
        }, addBookmark: function (title, url) {
            if (window.sidebar) window.sidebar.addPanel(title, url, ""); else if (document.all) window.external.AddFavorite(url, title); else if (window.opera && window.print) return !0
        }, setCookie: function (name, value) {
            var expdate = new Date, argv = arguments, argc = arguments.length, expires = argc > 2 ? argv[2] : null,
                path = argc > 3 ? argv[3] : null, domain = argc > 4 ? argv[4] : null, secure = argc > 5 && argv[5];
            null != expires && expdate.setTime(expdate.getTime() + 1e3 * expires), document.cookie = name + "=" + escape(value) + (null == expires ? "" : ";  expires=" + expdate.toGMTString()) + (null == path ? "" : ";  path=" + path) + (null == domain ? "" : ";  domain=" + domain) + (1 == secure ? ";  secure" : "")
        }, delCookie: function (name) {
            var exp = new Date;
            exp.setTime(exp.getTime() - 1);
            var cval = getCookie(name);
            document.cookie = name + "=" + cval + ";  expires=" + exp.toGMTString()
        }, getCookie: function (name) {
            for (var arg = name + "=", alen = arg.length, clen = document.cookie.length, i = 0; i < clen;) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg) return $.getCookieVal(j);
                if (0 == (i = document.cookie.indexOf("  ", i) + 1)) break
            }
            return null
        }, getCookieVal: function (offset) {
            var endstr = document.cookie.indexOf(";", offset);
            return -1 == endstr && (endstr = document.cookie.length), unescape(document.cookie.substring(offset, endstr))
        }, openFullWindow: function (url) {
            var h = screen.availHeight - 65, w = screen.availWidth - 5,
                vars = "top=0,left=0,height=" + h + ",width=" + w + ",status=no,toolbar=no,menubar=no,location=no,resizable=1,scrollbars=1";
            return window.open($.handProjectUrl(url), "", vars, !0)
        }, handProjectUrl: function (url) {
            if (url && -1 == url.indexOf("http://") && "/" === url.substring(0, 1)) {
                var pathname = window.document.location.pathname,
                    projectPath = pathname.substring(0, pathname.substr(1).indexOf("/") + 1);
                return "/flow-editor" === projectPath || "/bpm" === projectPath || "/sys" === projectPath || "/org" === projectPath || "/form" === projectPath ? url : projectPath + url
            }
            return url
        }, isEmpty: function (v, allowBlank) {
            return null === v || void 0 === v || !allowBlank && "" === v
        }, convertCurrency: function (currencyDigits) {
            var integral, decimal, outputCharacters, parts, digits, radices, bigRadices, decimals, zeroCount, i, p, d,
                quotient, modulus;
            if ("" == (currencyDigits = currencyDigits.toString())) return "";
            if (null != currencyDigits.match(/[^,.\d]/)) return "";
            if (null == currencyDigits.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/)) return "";
            if (currencyDigits = currencyDigits.replace(/,/g, ""), currencyDigits = currencyDigits.replace(/^0+/, ""), Number(currencyDigits) > 99999999999.99) return "";
            if (parts = currencyDigits.split("."), parts.length > 1 ? (integral = parts[0], decimal = parts[1], decimal = decimal.substr(0, 2)) : (integral = parts[0], decimal = ""), digits = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"), radices = new Array("", "拾", "佰", "仟"), bigRadices = new Array("", "万", "亿"), decimals = new Array("角", "分"), outputCharacters = "", Number(integral) > 0) {
                for (zeroCount = 0, i = 0; i < integral.length; i++) p = integral.length - i - 1, d = integral.substr(i, 1), quotient = p / 4, modulus = p % 4, "0" == d ? zeroCount++ : (zeroCount > 0 && (outputCharacters += digits[0]), zeroCount = 0, outputCharacters += digits[Number(d)] + radices[modulus]), 0 == modulus && zeroCount < 4 && (outputCharacters += bigRadices[quotient]);
                outputCharacters += "元"
            }
            if ("" != decimal) for (i = 0; i < decimal.length; i++) "0" != (d = decimal.substr(i, 1)) && (outputCharacters += digits[Number(d)] + decimals[i]);
            return "" == outputCharacters && (outputCharacters = "零元"), "" == decimal && (outputCharacters += "整"), outputCharacters = "" + outputCharacters
        }, cloneObject: function (obj) {
            var o = obj.constructor === Array ? [] : {};
            for (var i in obj) obj.hasOwnProperty(i) && (o[i] = "object" == typeof obj[i] ? cloneObject(obj[i]) : obj[i]);
            return o
        }, getFileExtName: function (fileName) {
            var pos = fileName.lastIndexOf(".");
            return -1 == pos ? "" : fileName.substring(pos + 1)
        }, comdify: function (v) {
            if (v && "" != v) {
                n = v + "";
                var re = /\d{1,3}(?=(\d{3})+$)/g;
                return n.trim().replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
                    return s1.replace(re, "$&,") + s2
                })
            }
            return v
        }, toNumber: function (v) {
            if (v && "" != v) {
                if (-1 == v.indexOf(",")) return v;
                return v.split(",").join("")
            }
            return 0
        }, getParams: function () {
            for (var locUrl = window.location.search.substr(1), aryParams = locUrl.split("&"), json = {}, i = 0; i < aryParams.length; i++) {
                var pair = aryParams[i], aryEnt = pair.split("="), key = aryEnt[0], val = aryEnt[1];
                json[key] ? json[key] = json[key] + "," + val : json[key] = val
            }
            return json
        }, getParam: function (name) {
            for (var locUrl = window.location.search.substr(1), aryParams = locUrl.split("&"), rtn = "", i = 0; i < aryParams.length; i++) {
                var pair = aryParams[i], aryEnt = pair.split("="), key = aryEnt[0], val = aryEnt[1];
                key == name && ("" == rtn ? rtn = val : rtn += "," + val)
            }
            return rtn
        }, getResultData: function (defer, fn, msgType, isFastJson) {
            defer.then(function (result) {
                $.getResult(result, fn, msgType, null, null, isFastJson)
            }, function (status) {
                1 == status && $.Dialog.alert("加载失败！" + status, 2)
            })
        }, getResultMsg: function (defer, fn, errorFn, isFastJson) {
            defer.then(function (result) {
                $.getResult(result, fn, "alert", "alert", errorFn, isFastJson)
            }, function (status) {
                errorFn && errorFn(status), $.Dialog.alert("加载失败！" + status, 2)
            })
        }, getResult: function (result, fn, errMsgType, sucMsgType, errorFn, isFastJson) {
            if ("object" != typeof result) if (result.startWith("{") || result.startWith("[")) var result = eval("(" + result + ")"); else result = {
                isOk: !1,
                msg: "服务器反馈数据格式存在异常，无法解析反馈结果！",
                cause: result
            };
            if (isFastJson && FastJson.format(result), !result.isOk) return errMsgType && "toast" !== errMsgType ? "alert" === errMsgType && $.Dialog.alert(result.msg, 2) : $.Toast.error(result.msg), console.error(result), void (errorFn && errorFn(result));
            sucMsgType ? "toast" === sucMsgType ? ($.Toast.success(result.msg), fn && fn(result.data)) : "alert" === errMsgType && $.Dialog.alert(result.msg, function () {
                fn && fn(result.data)
            }, 1) : fn && fn(result.data)
        }, getPageSize: function () {
            var winW, winH;
            return window.innerHeight ? (winW = window.innerWidth, winH = window.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (winW = document.documentElement.clientWidth, winH = document.documentElement.clientHeight) : document.body && (winW = document.body.clientWidth, winH = document.body.clientHeight), {
                width: winW,
                height: winH
            }
        }
    }), String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    }, String.prototype.lTrim = function () {
        return this.replace(/(^\s*)/g, "")
    }, String.prototype.rTrim = function () {
        return this.replace(/(\s*$)/g, "")
    }, String.prototype.isPicture = function () {
        if (this.indexOf(".") > -1) {
            var p = this.lastIndexOf("."), strPostfix = this.substring(p, this.length) + "|";
            if (strPostfix = strPostfix.toLowerCase(), ".jpeg|.gif|.jpg|.png|.bmp|.pic|".indexOf(strPostfix) > -1) return !0
        }
        return !1
    }, String.prototype.toDate = function (format) {
        format || (format = "yyyy-MM-dd");
        var year = String_toDate(this, format, "yyyy"), month = String_toDate(this, format, "MM"),
            day = String_toDate(this, format, "dd"), hour = String_toDate(this, format, "HH"),
            minth = String_toDate(this, format, "mm"), second = String_toDate(this, format, "ss"), date = new Date(0);
        return date.setFullYear(year || 1), date.setMonth(parseInt(month || 1) - 1), date.setDate(day || 1), date.setHours(hour || 0), date.setMinutes(minth || 0), date.setSeconds(second || 0), date
    }, Array.prototype.unique = function (method) {
        if (!angular.isArray(this)) return this;
        var flag, sameObj = method || function (a, b) {
            var tag = !0;
            for (var x in a) {
                if (!b[x]) return !1;
                if ("object" == typeof a[x]) tag = sameObj(a[x], b[x]); else if (a[x] !== b[x]) return !1
            }
            return tag
        }, that = this.slice(0);
        this.length = 0;
        for (var i = 0; i < that.length; i++) {
            var x = that[i];
            flag = !0;
            for (var j = 0; j < this.length; j++) if (y = this[j], sameObj(x, y)) {
                flag = !1;
                break
            }
            flag && (this[this.length] = x)
        }
        return this
    }, String.prototype.endWith = function (str, isCasesensitive) {
        if (null == str || "" == str || 0 == this.length || str.length > this.length) return !1;
        var tmp = this.substring(this.length - str.length);
        return void 0 == isCasesensitive || isCasesensitive ? tmp == str : tmp.toLowerCase() == str.toLowerCase()
    }, String.prototype.startWith = function (str, isCasesensitive) {
        if (null == str || "" == str || 0 == this.length || str.length > this.length) return !1;
        var tmp = this.substr(0, str.length);
        return void 0 == isCasesensitive || isCasesensitive ? tmp == str : tmp.toLowerCase() == str.toLowerCase()
    }, String.prototype.htmlEncode = function () {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&#34;").replace(/\'/g, "&#39;")
    }, String.prototype.htmlDecode = function () {
        return this.replace(/\&amp\;/g, "&").replace(/\&gt\;/g, ">").replace(/\&lt\;/g, "<").replace(/\&quot\;/g, "'").replace(/\&\#39\;/g, "'")
    }, String.prototype.jsonEscape = function () {
        return this.replace(/\"/g, "&quot;").replace(/\n/g, "&nuot;")
    }, String.prototype.jsonUnescape = function () {
        return this.replace(/&quot;/g, '"').replace(/&nuot;/g, "\n")
    }, String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2)
    }, Array.prototype.remove = function (val) {
        for (var i = 0; i < this.length; i++) this[i] === val && (this.splice(i, 1), i--);
        return this
    }, Array.prototype.insert = function (index, item) {
        return this.splice(index, 0, item), this
    }, String.prototype.format = function (context) {
        return _stringRender(this, context)
    }, window._stringRender = function (template, scopeData) {
        var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
        return template.replace(tokenReg, function (word, slash1, token, slash2) {
            if (slash1 || slash2) return word.replace("\\", "");
            var variables = token.replace(/\s/g, "").split(".");
            if (word.startWith("{url.")) return $.getParam(variables[1]);
            for (var i, key, currentObject = scopeData, i = 0; key = variables[i++];) if (void 0 === (currentObject = currentObject[key]) || null === currentObject) return "";
            return currentObject
        })
    }, Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(format) && (format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(format) && (format = format.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return format
    }, Date.prototype.between = function (date, type) {
        if (type || (type = "date"), "hour" == type) {
            var dateSpan = date.getTime() - this.getTime();
            return Math.floor(dateSpan / 36e5)
        }
        if ("date" == type) {
            var dateSpan = date.getTime() - this.getTime();
            return Math.floor(dateSpan / 864e5)
        }
        return "month" == type ? 12 * (date.getFullYear() - this.getFullYear()) + (date.getMonth() - this.getMonth()) : "year" == type ? date.getFullYear() - this.getFullYear() : void 0
    }, window.GetRandomNum = function (Min, Max) {
        var Range = Max - Min, Rand = Math.random();
        return Min + Math.round(Rand * Range)
    }, window.GetRandomStr = function (len) {
        len = len || 32;
        for (var $chars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefhijklmnoprstuvwxyz", maxPos = $chars.length, pwd = "", i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        return pwd
    };
    var JsonUtil = {
        n: "\n", t: "\t", convertToString: function (obj) {
            return JsonUtil.__writeObj(obj, 1)
        }, __writeObj: function (obj, level, isInArray) {
            if (null == obj) return "null";
            if (obj.constructor == Number || obj.constructor == Date || obj.constructor == String || obj.constructor == Boolean) {
                var v = obj.toString(), tab = isInArray ? JsonUtil.__repeatStr(JsonUtil.t, level - 1) : "";
                return obj.constructor == String || obj.constructor == Date ? tab + '"' + v + '"' : obj.constructor == Boolean ? tab + v.toLowerCase() : tab + v
            }
            var currentObjStrings = [];
            for (var name in obj) {
                var temp = [], paddingTab = JsonUtil.__repeatStr(JsonUtil.t, level);
                temp.push(paddingTab), temp.push(name + " : ");
                var val = obj[name];
                if (null == val) temp.push("null"); else {
                    var c = val.constructor;
                    if (c == Array) {
                        temp.push(JsonUtil.n + paddingTab + "[" + JsonUtil.n);
                        for (var levelUp = level + 2, tempArrValue = [], i = 0; i < val.length; i++) tempArrValue.push(JsonUtil.__writeObj(val[i], levelUp, !0));
                        temp.push(tempArrValue.join("," + JsonUtil.n)), temp.push(JsonUtil.n + paddingTab + "]")
                    } else c == Function ? temp.push(val) : temp.push(JsonUtil.__writeObj(val, level + 1))
                }
                currentObjStrings.push(temp.join(""))
            }
            return (level > 1 && !isInArray ? JsonUtil.n : "") + JsonUtil.__repeatStr(JsonUtil.t, level - 1) + "{" + JsonUtil.n + currentObjStrings.join("," + JsonUtil.n) + JsonUtil.n + JsonUtil.__repeatStr(JsonUtil.t, level - 1) + "}"
        }, __isArray: function (obj) {
            return !!obj && obj.constructor == Array
        }, __repeatStr: function (str, times) {
            var newStr = [];
            if (times > 0) for (var i = 0; i < times; i++) newStr.push(str);
            return newStr.join("")
        }
    };
    window.parseToJson = function (jsonStr) {
        if ("" !== jsonStr) return eval("(" + jsonStr + ")")
    }, window.CacheUtil = {}, CacheUtil.set = function (key, value) {
        localStorage[key] = value
    }, CacheUtil.get = function (key) {
        return localStorage[key]
    }, CacheUtil.clean = function (key) {
        localStorage.rmStorage(key)
    }, CacheUtil.setJSON = function (key, value) {
        var json = JSON.stringify(value);
        localStorage[key] = json
    }, CacheUtil.getJSON = function (key) {
        var json = localStorage[key];
        return void 0 == json ? null : JSON.parse(json)
    }, window.CloneUtil = {
        deep: function (obj) {
            return jQuery.extend(!0, {}, obj)
        }, shallow: function (obj) {
            return jQuery.extend({}, obj)
        }, list: function (obj) {
            return $.map(obj, function (n) {
                return n
            })
        }
    }, window.TraverseTreeUtil = {
        traverse: function (node, nodeAttrName, callback) {
            if (node && (callback(node), node[nodeAttrName] && node[nodeAttrName].length > 0)) for (var i = 0; i < node[nodeAttrName].length; i++) TraverseTreeUtil.traverse(node[nodeAttrName][i], nodeAttrName, callback)
        }
    }
}, function (module, exports) {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    +function (a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
    }(jQuery), function (a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"), b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
            return !1
        }

        a.fn.emulateTransitionEnd = function (b) {
            var c = !1, d = this;
            a(this).one("bsTransitionEnd", function () {
                c = !0
            });
            var e = function () {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function () {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function (b) {
                    return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var c = a(this), e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
            })
        }

        var c = '[data-dismiss="alert"]', d = function (b) {
            a(b).on("click", c, this.close)
        };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
            function c() {
                g.detach().trigger("closed.bs.alert").remove()
            }

            var e = a(this), f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
            var g = a(f);
            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
        };
        var e = a.fn.alert;
        a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
            return a.fn.alert = e, this
        }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
            })
        }

        var c = function (b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
        };
        c.VERSION = "3.3.6", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
            var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
                d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
            }, this), 0)
        }, c.prototype.toggle = function () {
            var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var d = a.fn.button;
        a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
            return a.fn.button = d, this
        }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }

        var c = function (b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, c.prototype.keydown = function (a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                a.preventDefault()
            }
        }, c.prototype.cycle = function (b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, c.prototype.getItemIndex = function (a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        }, c.prototype.getItemForDirection = function (a, b) {
            var c = this.getItemIndex(b);
            if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
            var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
            return this.$items.eq(f)
        }, c.prototype.to = function (a) {
            var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        }, c.prototype.pause = function (b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, c.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, c.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, c.prototype.slide = function (b, d) {
            var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
                h = "next" == b ? "left" : "right", i = this;
            if (f.hasClass("active")) return this.sliding = !1;
            var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active")
                }
                var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
                return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
            return a.fn.carousel = d, this
        };
        var e = function (c) {
            var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
            a('[data-ride="carousel"]').each(function () {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d)
        }

        function c(b) {
            return this.each(function () {
                var c = a(this), e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
            })
        }

        var d = function (b, c) {
            this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, d.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse")) && b.transitioning)) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                    }
                }
            }
        }, d.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                }
            }
        }, d.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, d.prototype.getParent = function () {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
        var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
            return a.fn.collapse = e, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
            c.call(f, h)
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }

        function c(c) {
            c && 3 === c.which || (a(e).remove(), a(f).each(function () {
                var d = a(this), e = b(d), f = {relatedTarget: this};
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
            }))
        }

        function d(b) {
            return this.each(function () {
                var c = a(this), d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
            })
        }

        var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
        g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = b(e), g = f.hasClass("open");
                if (c(), !g) {
                    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                    var h = {relatedTarget: this};
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                }
                return !1
            }
        }, g.prototype.keydown = function (c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var d = a(this);
                if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                    var e = b(d), g = e.hasClass("open");
                    if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                    var i = e.find(".dropdown-menu li:not(.disabled):visible a");
                    if (i.length) {
                        var j = i.index(c.target);
                        38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                    }
                }
            }
        };
        var h = a.fn.dropdown;
        a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
            return a.fn.dropdown = h, this
        }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
    }(jQuery), function (a) {
        "use strict";

        function b(b, d) {
            return this.each(function () {
                var e = a(this), f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
            })
        }

        var c = function (b, c) {
            this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, c.prototype.toggle = function (a) {
            return this.isShown ? this.hide() : this.show(a)
        }, c.prototype.show = function (b) {
            var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                var f = a.Event("shown.bs.modal", {relatedTarget: b});
                e ? d.$dialog.one("bsTransitionEnd", function () {
                    d.$element.trigger("focus").trigger(f)
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
            }))
        }, c.prototype.hide = function (b) {
            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
        }, c.prototype.enforceFocus = function () {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
                this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
            }, this))
        }, c.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, c.prototype.resize = function () {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
        }, c.prototype.hideModal = function () {
            var a = this;
            this.$element.hide(), this.backdrop(function () {
                a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
            })
        }, c.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, c.prototype.backdrop = function (b) {
            var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var f = a.support.transition && e;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function () {
                    d.removeBackdrop(), b && b()
                };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
            } else b && b()
        }, c.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, c.prototype.adjustDialog = function () {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            })
        }, c.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, c.prototype.checkScrollbar = function () {
            var a = window.innerWidth;
            if (!a) {
                var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
        }, c.prototype.setScrollbar = function () {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        }, c.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, c.prototype.measureScrollbar = function () {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure", this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b
        };
        var d = a.fn.modal;
        a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
            return a.fn.modal = d, this
        }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
            var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
                a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                    d.is(":visible") && d.trigger("focus")
                })
            }), b.call(f, g, this)
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }

        var c = function (a, b) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, c.prototype.init = function (b, c, d) {
            if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, c.prototype.getDefaults = function () {
            return c.DEFAULTS
        }, c.prototype.getOptions = function (b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, c.prototype.getDelegateOptions = function () {
            var b = {}, c = this.getDefaults();
            return this._options && a.each(this._options, function (a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, c.prototype.enter = function (b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show())
        }, c.prototype.isInStateTrue = function () {
            for (var a in this.inState) if (this.inState[a]) return !0;
            return !1
        }, c.prototype.leave = function (b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide())
        }, c.prototype.show = function () {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !d) return;
                var e = this, f = this.tip(), g = this.getUID(this.type);
                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                    i = /\s?auto?\s?/i, j = i.test(h);
                j && (h = h.replace(i, "") || "top"), f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
                if (j) {
                    var n = h, o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                }
                var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h);
                var q = function () {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
            }
        }, c.prototype.applyPlacement = function (b, c) {
            var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
                h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                using: function (a) {
                    d.css({top: Math.round(a.top), left: Math.round(a.left)})
                }
            }, b), 0), d.addClass("in");
            var i = d[0].offsetWidth, j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(m, d[0][n], l)
        }, c.prototype.replaceArrow = function (a, b, c) {
            this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
        }, c.prototype.setContent = function () {
            var a = this.tip(), b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, c.prototype.hide = function (b) {
            function d() {
                "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
            }

            var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
            return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
        }, c.prototype.fixTitle = function () {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, c.prototype.hasContent = function () {
            return this.getTitle()
        }, c.prototype.getPosition = function (b) {
            b = b || this.$element;
            var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
            var f = d ? {top: 0, left: 0} : b.offset(),
                g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
                h = d ? {width: a(window).width(), height: a(window).height()} : null;
            return a.extend({}, e, g, h, f)
        }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {top: b.top + b.height / 2 - d / 2, left: b.left + b.width}
        }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
            var e = {top: 0, left: 0};
            if (!this.$viewport) return e;
            var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
            } else {
                var j = b.left - f, k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
            }
            return e
        }, c.prototype.getTitle = function () {
            var b = this.$element, c = this.options;
            return b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }, c.prototype.getUID = function (a) {
            do {
                a += ~~(1e6 * Math.random())
            } while (document.getElementById(a));
            return a
        }, c.prototype.tip = function () {
            if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, c.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, c.prototype.enable = function () {
            this.enabled = !0
        }, c.prototype.disable = function () {
            this.enabled = !1
        }, c.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, c.prototype.toggle = function (b) {
            var c = this;
            b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, c.prototype.destroy = function () {
            var a = this;
            clearTimeout(this.timeout), this.hide(function () {
                a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
            })
        };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
            return a.fn.tooltip = d, this
        }
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }

        var c = function (a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
            return c.DEFAULTS
        }, c.prototype.setContent = function () {
            var a = this.tip(), b = this.getTitle(), c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
        }, c.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, c.prototype.getContent = function () {
            var a = this.$element, b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }, c.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
            return a.fn.popover = d, this
        }
    }(jQuery), function (a) {
        "use strict";

        function b(c, d) {
            this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
        }

        function c(c) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }

        b.VERSION = "3.3.6", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, b.prototype.refresh = function () {
            var b = this, c = "offset", d = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
            }).sort(function (a, b) {
                return a[0] - b[0]
            }).each(function () {
                b.offsets.push(this[0]), b.targets.push(this[1])
            })
        }, b.prototype.process = function () {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
                d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
                g = this.activeTarget;
            if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
            if (g && b < e[0]) return this.activeTarget = null, this.clear();
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
        }, b.prototype.activate = function (b) {
            this.activeTarget = b, this.clear();
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
        }, b.prototype.clear = function () {
            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
            return a.fn.scrollspy = d, this
        }, a(window).on("load.bs.scrollspy.data-api", function () {
            a('[data-spy="scroll"]').each(function () {
                var b = a(this);
                c.call(b, b.data())
            })
        })
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
            })
        }

        var c = function (b) {
            this.element = a(b)
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
            var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                    g = a.Event("show.bs.tab", {relatedTarget: e[0]});
                if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    var h = a(d);
                    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                        e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e[0]
                        })
                    })
                }
            }
        }, c.prototype.activate = function (b, d, e) {
            function f() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
            }

            var g = d.find("> .active"),
                h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
        };
        var d = a.fn.tab;
        a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
            return a.fn.tab = d, this
        };
        var e = function (c) {
            c.preventDefault(), b.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
    }(jQuery), function (a) {
        "use strict";

        function b(b) {
            return this.each(function () {
                var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
            })
        }

        var c = function (b, d) {
            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getState = function (a, b, c, d) {
            var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
            if (null != c && "top" == this.affixed) return c > e && "top";
            if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(a - d >= e + g) && "bottom";
            var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
            return null != c && c >= e ? "top" : null != d && i + j >= a - d && "bottom"
        }, c.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop(), b = this.$element.offset();
            return this.pinnedOffset = b.top - a
        }, c.prototype.checkPositionWithEventLoop = function () {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, c.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                    g = Math.max(a(document).height(), a(document.body).height());
                "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                var h = this.getState(g, b, e, f);
                if (this.affixed != h) {
                    null != this.unpin && this.$element.css("top", "");
                    var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                    if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == h && this.$element.offset({top: g - b - f})
            }
        };
        var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
            return a.fn.affix = d, this
        }, a(window).on("load", function () {
            a('[data-spy="affix"]').each(function () {
                var c = a(this), d = c.data();
                d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
            })
        })
    }(jQuery)
}, function (module, exports) {
    !function (e, q, h) {
        var o = function (a, b) {
                var c = q.createElementNS("http://www.w3.org/2000/svg", a);
                return e.each(b, function (a, b) {
                    c.setAttribute(a, b)
                }), c
            }, t = "createElementNS" in q && o("svg", {}).createSVGRect, r = 1 / (window.devicePixelRatio || 1),
            j = e.fn.peity = function (a, b) {
                return t && this.each(function () {
                    var c = e(this), d = c.data("peity");
                    if (d) a && (d.type = a), e.extend(d.opts, b); else {
                        var f = j.defaults[a], g = {};
                        e.each(c.data(), function (a, b) {
                            a in f && (g[a] = b)
                        });
                        var h = e.extend({}, f, g, b), d = new s(c, a, h);
                        c.change(function () {
                            d.draw()
                        }).data("peity", d)
                    }
                    d.draw()
                }), this
            }, s = function (a, b, c) {
                this.$el = a, this.type = b, this.opts = c
            }, m = s.prototype;
        m.draw = function () {
            j.graphers[this.type].call(this, this.opts)
        }, m.fill = function () {
            var a = this.opts.fill, b = a;
            return e.isFunction(b) || (b = function (b, d) {
                return a[d % a.length]
            }), b
        }, m.prepare = function (a, b) {
            var c;
            return this.svg ? c = e(this.svg).empty() : (this.svg = o("svg", {class: "peity"}), this.$el.hide().after(this.svg), c = e(this.svg).data("peity", this)), this.svg.setAttribute("height", b), this.svg.setAttribute("width", a), c
        }, m.values = function () {
            return e.map(this.$el.text().split(this.opts.delimiter), function (a) {
                return parseFloat(a)
            })
        }, j.defaults = {}, j.graphers = {}, j.register = function (a, b, c) {
            this.defaults[a] = b, this.graphers[a] = c
        }, j.register("pie", {delimiter: null, diameter: 16, fill: ["#ff9900", "#fff4dd", "#ffc66e"]}, function (a) {
            if (!a.delimiter) {
                var b = this.$el.text().match(/[^0-9\.]/);
                a.delimiter = b ? b[0] : ","
            }
            if (b = this.values(), "/" == a.delimiter) var c = b[0], b = [c, h.max(0, b[1] - c)];
            for (var d = 0, c = b.length, f = 0; d < c; d++) f += b[d];
            for (var a = this.prepare(a.width || a.diameter, a.height || a.diameter), d = a.width(), g = a.height(), a = d / 2, g = g / 2, p = h.min(a, g), e = h.PI, j = this.fill(), i = -e / 2, d = 0; d < c; d++) {
                var k, n = b[d], l = n / f;
                if (0 != l) {
                    if (1 == l) k = o("circle", {cx: a, cy: g, r: p}); else {
                        k = 2 * l * e;
                        var l = i + k, m = p * h.cos(i) + a, i = p * h.sin(i) + g, q = p * h.cos(l) + a,
                            r = p * h.sin(l) + g;
                        k = o("path", {d: ["M", a, g, "L", m, i, "A", p, p, 0, k > e ? 1 : 0, 1, q, r, "Z"].join(" ")}), i = l
                    }
                    k.setAttribute("fill", j.call(this, n, d, b)), this.svg.appendChild(k)
                }
            }
        }), j.register("line", {
            delimiter: ",",
            fill: "#c6d9fd",
            height: 16,
            max: null,
            min: 0,
            stroke: "#4d89f9",
            strokeWidth: 1,
            width: 32
        }, function (a) {
            var b = this.values();
            1 == b.length && b.push(b[0]);
            for (var c = h.max.apply(h, b.concat([a.max])), d = h.min.apply(h, b.concat([a.min])), f = this.prepare(a.width, a.height), g = f.width(), f = f.height() - a.strokeWidth, e = g / (b.length - 1), c = c - d, j = 0 == c ? f : f / c, m = f + d * j, c = [0, m], i = 0; i < b.length; i++) c.push(i * e, f - j * (b[i] - d) + a.strokeWidth / 2);
            c.push(g, m), b = o("polygon", {
                fill: a.fill,
                points: c.join(" ")
            }), this.svg.appendChild(b), a.strokeWidth && (a = o("polyline", {
                fill: "transparent",
                points: c.slice(2, c.length - 2).join(" "),
                stroke: a.stroke,
                "stroke-width": a.strokeWidth,
                "stroke-linecap": "square"
            }), this.svg.appendChild(a))
        }), j.register("bar", {
            delimiter: ",",
            fill: ["#4D89F9"],
            gap: 1,
            height: 16,
            max: null,
            min: 0,
            width: 32
        }, function (a) {
            for (var b = this.values(), c = h.max.apply(h, b.concat([a.max])), d = h.min.apply(h, b.concat([a.min])), f = this.prepare(a.width, a.height), g = f.width(), f = f.height(), e = c - d, j = 0 == e ? 0 : f / e, a = a.gap, g = (g + a) / b.length, m = this.fill(), i = 0; i < b.length; i++) {
                var n = b[i], l = f - j * (n - d), k = j * n;
                0 == k ? (k = r, (0 >= d && 0 < c || 0 == e) && (l -= r)) : 0 > k && (l += k, k = -k), n = o("rect", {
                    fill: m.call(this, n, i, b),
                    x: i * g,
                    y: l,
                    width: g - a,
                    height: k
                }), this.svg.appendChild(n)
            }
        })
    }(jQuery, document, Math)
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function (window, document, undefined) {
        !function (factory) {
            "use strict";
            __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        }(function ($) {
            "use strict";

            function QTip(target, options, id, attr) {
                this.id = id, this.target = target, this.tooltip = NULL, this.elements = {target: target}, this._id = NAMESPACE + "-" + id, this.timers = {img: {}}, this.options = options, this.plugins = {}, this.cache = {
                    event: {},
                    target: $(),
                    disabled: FALSE,
                    attr: attr,
                    onTooltip: FALSE,
                    lastClass: ""
                }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = FALSE
            }

            function invalidOpt(a) {
                return a === NULL || "object" !== $.type(a)
            }

            function invalidContent(c) {
                return !($.isFunction(c) || c && c.attr || c.length || "object" === $.type(c) && (c.jquery || c.then))
            }

            function sanitizeOptions(opts) {
                var content, text, ajax, once;
                return invalidOpt(opts) ? FALSE : (invalidOpt(opts.metadata) && (opts.metadata = {type: opts.metadata}), "content" in opts && (content = opts.content, invalidOpt(content) || content.jquery || content.done ? content = opts.content = {text: text = invalidContent(content) ? FALSE : content} : text = content.text, "ajax" in content && (ajax = content.ajax, once = ajax && ajax.once !== FALSE, delete content.ajax, content.text = function (event, api) {
                    var loading = text || $(this).attr(api.options.content.attr) || "Loading...",
                        deferred = $.ajax($.extend({}, ajax, {context: api})).then(ajax.success, NULL, ajax.error).then(function (content) {
                            return content && once && api.set("content.text", content), content
                        }, function (xhr, status, error) {
                            api.destroyed || 0 === xhr.status || api.set("content.text", status + ": " + error)
                        });
                    return once ? loading : (api.set("content.text", loading), deferred)
                }), "title" in content && (invalidOpt(content.title) || (content.button = content.title.button, content.title = content.title.text), invalidContent(content.title || FALSE) && (content.title = FALSE))), "position" in opts && invalidOpt(opts.position) && (opts.position = {
                    my: opts.position,
                    at: opts.position
                }), "show" in opts && invalidOpt(opts.show) && (opts.show = opts.show.jquery ? {target: opts.show} : opts.show === TRUE ? {ready: TRUE} : {event: opts.show}), "hide" in opts && invalidOpt(opts.hide) && (opts.hide = opts.hide.jquery ? {target: opts.hide} : {event: opts.hide}), "style" in opts && invalidOpt(opts.style) && (opts.style = {classes: opts.style}), $.each(PLUGINS, function () {
                    this.sanitize && this.sanitize(opts)
                }), opts)
            }

            function convertNotation(options, notation) {
                for (var obj, i = 0, option = options, levels = notation.split("."); option = option[levels[i++]];) i < levels.length && (obj = option);
                return [obj || options, levels.pop()]
            }

            function setCallback(notation, args) {
                var category, rule, match;
                for (category in this.checks) for (rule in this.checks[category]) (match = new RegExp(rule, "i").exec(notation)) && (args.push(match), ("builtin" === category || this.plugins[category]) && this.checks[category][rule].apply(this.plugins[category] || this, args))
            }

            function createWidgetClass(cls) {
                return WIDGET.concat("").join(cls ? "-" + cls + " " : " ")
            }

            function cloneEvent(event) {
                return event && {
                    type: event.type,
                    pageX: event.pageX,
                    pageY: event.pageY,
                    target: event.target,
                    relatedTarget: event.relatedTarget,
                    scrollX: event.scrollX || window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
                    scrollY: event.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
                } || {}
            }

            function delay(callback, duration) {
                if (duration > 0) return setTimeout($.proxy(callback, this), duration);
                callback.call(this)
            }

            function showMethod(event) {
                if (this.tooltip.hasClass(CLASS_DISABLED)) return FALSE;
                clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = delay.call(this, function () {
                    this.toggle(TRUE, event)
                }, this.options.show.delay)
            }

            function hideMethod(event) {
                if (this.tooltip.hasClass(CLASS_DISABLED)) return FALSE;
                var relatedTarget = $(event.relatedTarget),
                    ontoTooltip = relatedTarget.closest(SELECTOR)[0] === this.tooltip[0],
                    ontoTarget = relatedTarget[0] === this.options.show.target[0];
                if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== relatedTarget[0] && "mouse" === this.options.position.target && ontoTooltip || this.options.hide.fixed && /mouse(out|leave|move)/.test(event.type) && (ontoTooltip || ontoTarget)) try {
                    event.preventDefault(), event.stopImmediatePropagation()
                } catch (e) {
                } else this.timers.hide = delay.call(this, function () {
                    this.toggle(FALSE, event)
                }, this.options.hide.delay, this)
            }

            function inactiveMethod(event) {
                if (this.tooltip.hasClass(CLASS_DISABLED) || !this.options.hide.inactive) return FALSE;
                clearTimeout(this.timers.inactive), this.timers.inactive = delay.call(this, function () {
                    this.hide(event)
                }, this.options.hide.inactive)
            }

            function repositionMethod(event) {
                this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(event)
            }

            function delegate(selector, events, method) {
                $(document.body).delegate(selector, (events.split ? events : events.join(ns + " ")) + ns, function () {
                    var api = QTIP.api[$.attr(this, ATTR_ID)];
                    api && !api.disabled && method.apply(api, arguments)
                })
            }

            function init(elem, id, opts) {
                var obj, posOptions, attr, config, title, docBody = $(document.body),
                    newTarget = elem[0] === document ? docBody : elem,
                    metadata = elem.metadata ? elem.metadata(opts.metadata) : NULL,
                    metadata5 = "html5" === opts.metadata.type && metadata ? metadata[opts.metadata.name] : NULL,
                    html5 = elem.data(opts.metadata.name || "qtipopts");
                try {
                    html5 = "string" == typeof html5 ? $.parseJSON(html5) : html5
                } catch (e) {
                }
                if (config = $.extend(TRUE, {}, QTIP.defaults, opts, "object" == typeof html5 ? sanitizeOptions(html5) : NULL, sanitizeOptions(metadata5 || metadata)), posOptions = config.position, config.id = id, "boolean" == typeof config.content.text) {
                    if (attr = elem.attr(config.content.attr), config.content.attr === FALSE || !attr) return FALSE;
                    config.content.text = attr
                }
                if (posOptions.container.length || (posOptions.container = docBody), posOptions.target === FALSE && (posOptions.target = newTarget), config.show.target === FALSE && (config.show.target = newTarget), config.show.solo === TRUE && (config.show.solo = posOptions.container.closest("body")), config.hide.target === FALSE && (config.hide.target = newTarget), config.position.viewport === TRUE && (config.position.viewport = posOptions.container), posOptions.container = posOptions.container.eq(0), posOptions.at = new CORNER(posOptions.at, TRUE), posOptions.my = new CORNER(posOptions.my), elem.data(NAMESPACE)) if (config.overwrite) elem.qtip("destroy", !0); else if (config.overwrite === FALSE) return FALSE;
                return elem.attr(ATTR_HAS, id), config.suppress && (title = elem.attr("title")) && elem.removeAttr("title").attr(oldtitle, title).attr("title", ""), obj = new QTip(elem, config, id, !!attr), elem.data(NAMESPACE, obj), elem.one("remove.qtip-" + id + " removeqtip.qtip-" + id, function () {
                    var api;
                    (api = $(this).data(NAMESPACE)) && api.destroy(!0)
                }), obj
            }

            function camel(s) {
                return s.charAt(0).toUpperCase() + s.slice(1)
            }

            function vendorCss(elem, prop) {
                var cur, val, ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                    props = (prop + " " + cssPrefixes.join(ucProp + " ") + ucProp).split(" "), i = 0;
                if (cssProps[prop]) return elem.css(cssProps[prop]);
                for (; cur = props[i++];) if ((val = elem.css(cur)) !== undefined) return cssProps[prop] = cur, val
            }

            function intCss(elem, prop) {
                return Math.ceil(parseFloat(vendorCss(elem, prop)))
            }

            function Tip(qtip, options) {
                this._ns = "tip", this.options = options, this.offset = options.offset, this.size = [options.width, options.height], this.init(this.qtip = qtip)
            }

            function Modal(api, options) {
                this.options = options, this._ns = "-modal", this.init(this.qtip = api)
            }

            function Ie6(api, qtip) {
                this._ns = "ie6", this.init(this.qtip = api)
            }

            var QTIP, PROTOTYPE, CORNER, CHECKS, trackingBound, TRUE = !0, FALSE = !1, NULL = null, X = "x", Y = "y",
                WIDTH = "width", TOP = "top", LEFT = "left", RIGHT = "right", CENTER = "center",
                FLIPINVERT = "flipinvert", SHIFT = "shift", PLUGINS = {}, NAMESPACE = "qtip", ATTR_HAS = "data-hasqtip",
                ATTR_ID = "data-qtip-id", WIDGET = ["ui-widget", "ui-tooltip"], SELECTOR = "." + NAMESPACE,
                INACTIVE_EVENTS = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
                CLASS_FIXED = NAMESPACE + "-fixed", CLASS_DEFAULT = NAMESPACE + "-default",
                CLASS_FOCUS = NAMESPACE + "-focus", CLASS_HOVER = NAMESPACE + "-hover",
                CLASS_DISABLED = NAMESPACE + "-disabled", oldtitle = "oldtitle", BROWSER = {
                    ie: function () {
                        for (var v = 3, div = document.createElement("div"); (div.innerHTML = "\x3c!--[if gt IE " + ++v + "]><i></i><![endif]--\x3e") && div.getElementsByTagName("i")[0];) ;
                        return v > 4 ? v : NaN
                    }(),
                    iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || FALSE
                };
            PROTOTYPE = QTip.prototype, PROTOTYPE._when = function (deferreds) {
                return $.when.apply($, deferreds)
            }, PROTOTYPE.render = function (show) {
                if (this.rendered || this.destroyed) return this;
                var self = this, options = this.options, cache = this.cache, elements = this.elements,
                    text = options.content.text, title = options.content.title, button = options.content.button,
                    posOptions = options.position, deferreds = (this._id, []);
                return $.attr(this.target[0], "aria-describedby", this._id), this.tooltip = elements.tooltip = $("<div/>", {
                    id: this._id,
                    class: [NAMESPACE, CLASS_DEFAULT, options.style.classes, NAMESPACE + "-pos-" + options.position.my.abbrev()].join(" "),
                    width: options.style.width || "",
                    height: options.style.height || "",
                    tracking: "mouse" === posOptions.target && posOptions.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": FALSE,
                    "aria-describedby": this._id + "-content",
                    "aria-hidden": TRUE
                }).toggleClass(CLASS_DISABLED, this.disabled).attr(ATTR_ID, this.id).data(NAMESPACE, this).appendTo(posOptions.container).append(elements.content = $("<div />", {
                    class: NAMESPACE + "-content",
                    id: this._id + "-content",
                    "aria-atomic": TRUE
                })), this.rendered = -1, this.positioning = TRUE, title && (this._createTitle(), $.isFunction(title) || deferreds.push(this._updateTitle(title, FALSE))), button && this._createButton(), $.isFunction(text) || deferreds.push(this._updateContent(text, FALSE)), this.rendered = TRUE, this._setWidget(), $.each(PLUGINS, function (name) {
                    var instance;
                    "render" === this.initialize && (instance = this(self)) && (self.plugins[name] = instance)
                }), this._unassignEvents(), this._assignEvents(), this._when(deferreds).then(function () {
                    self._trigger("render"), self.positioning = FALSE, self.hiddenDuringWait || !options.show.ready && !show || self.toggle(TRUE, cache.event, FALSE), self.hiddenDuringWait = FALSE
                }), QTIP.api[this.id] = this, this
            }, PROTOTYPE.destroy = function (immediate) {
                function process() {
                    if (!this.destroyed) {
                        this.destroyed = TRUE;
                        var target = this.target, title = target.attr(oldtitle);
                        this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), $.each(this.plugins, function (name) {
                            this.destroy && this.destroy()
                        }), clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this._unassignEvents(), target.removeData(NAMESPACE).removeAttr(ATTR_ID).removeAttr(ATTR_HAS).removeAttr("aria-describedby"), this.options.suppress && title && target.attr("title", title).removeAttr(oldtitle), this._unbind(target), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = NULL, delete QTIP.api[this.id]
                    }
                }

                return this.destroyed ? this.target : (immediate === TRUE && "hide" !== this.triggering || !this.rendered ? process.call(this) : (this.tooltip.one("tooltiphidden", $.proxy(process, this)), !this.triggering && this.hide()), this.target)
            }, CHECKS = PROTOTYPE.checks = {
                builtin: {
                    "^id$": function (obj, o, v, prev) {
                        var id = v === TRUE ? QTIP.nextid : v, new_id = NAMESPACE + "-" + id;
                        id !== FALSE && id.length > 0 && !$("#" + new_id).length ? (this._id = new_id, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : obj[o] = prev
                    },
                    "^prerender": function (obj, o, v) {
                        v && !this.rendered && this.render(this.options.show.ready)
                    },
                    "^content.text$": function (obj, o, v) {
                        this._updateContent(v)
                    },
                    "^content.attr$": function (obj, o, v, prev) {
                        this.options.content.text === this.target.attr(prev) && this._updateContent(this.target.attr(v))
                    },
                    "^content.title$": function (obj, o, v) {
                        if (!v) return this._removeTitle();
                        v && !this.elements.title && this._createTitle(), this._updateTitle(v)
                    },
                    "^content.button$": function (obj, o, v) {
                        this._updateButton(v)
                    },
                    "^content.title.(text|button)$": function (obj, o, v) {
                        this.set("content." + o, v)
                    },
                    "^position.(my|at)$": function (obj, o, v) {
                        "string" == typeof v && (obj[o] = new CORNER(v, "at" === o))
                    },
                    "^position.container$": function (obj, o, v) {
                        this.rendered && this.tooltip.appendTo(v)
                    },
                    "^show.ready$": function (obj, o, v) {
                        v && (!this.rendered && this.render(TRUE) || this.toggle(TRUE))
                    },
                    "^style.classes$": function (obj, o, v, p) {
                        this.rendered && this.tooltip.removeClass(p).addClass(v)
                    },
                    "^style.(width|height)": function (obj, o, v) {
                        this.rendered && this.tooltip.css(o, v)
                    },
                    "^style.widget|content.title": function () {
                        this.rendered && this._setWidget()
                    },
                    "^style.def": function (obj, o, v) {
                        this.rendered && this.tooltip.toggleClass(CLASS_DEFAULT, !!v)
                    },
                    "^events.(render|show|move|hide|focus|blur)$": function (obj, o, v) {
                        this.rendered && this.tooltip[($.isFunction(v) ? "" : "un") + "bind"]("tooltip" + o, v)
                    },
                    "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function () {
                        if (this.rendered) {
                            var posOptions = this.options.position;
                            this.tooltip.attr("tracking", "mouse" === posOptions.target && posOptions.adjust.mouse), this._unassignEvents(), this._assignEvents()
                        }
                    }
                }
            }, PROTOTYPE.get = function (notation) {
                if (this.destroyed) return this;
                var o = convertNotation(this.options, notation.toLowerCase()), result = o[0][o[1]];
                return result.precedance ? result.string() : result
            };
            var rmove = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
                rrender = /^prerender|show\.ready/i;
            PROTOTYPE.set = function (option, value) {
                if (this.destroyed) return this;
                var name, rendered = this.rendered, reposition = FALSE, options = this.options;
                this.checks;
                return "string" == typeof option ? (name = option, option = {}, option[name] = value) : option = $.extend({}, option), $.each(option, function (notation, value) {
                    if (rendered && rrender.test(notation)) return void delete option[notation];
                    var previous, obj = convertNotation(options, notation.toLowerCase());
                    previous = obj[0][obj[1]], obj[0][obj[1]] = value && value.nodeType ? $(value) : value, reposition = rmove.test(notation) || reposition, option[notation] = [obj[0], obj[1], value, previous]
                }), sanitizeOptions(options), this.positioning = TRUE, $.each(option, $.proxy(setCallback, this)), this.positioning = FALSE, this.rendered && this.tooltip[0].offsetWidth > 0 && reposition && this.reposition("mouse" === options.position.target ? NULL : this.cache.event), this
            }, PROTOTYPE._update = function (content, element, reposition) {
                var self = this, cache = this.cache;
                return this.rendered && content ? ($.isFunction(content) && (content = content.call(this.elements.target, cache.event, this) || ""), $.isFunction(content.then) ? (cache.waiting = TRUE, content.then(function (c) {
                    return cache.waiting = FALSE, self._update(c, element)
                }, NULL, function (e) {
                    return self._update(e, element)
                })) : content === FALSE || !content && "" !== content ? FALSE : (content.jquery && content.length > 0 ? element.empty().append(content.css({
                    display: "block",
                    visibility: "visible"
                })) : element.html(content), this._waitForContent(element).then(function (images) {
                    images.images && images.images.length && self.rendered && self.tooltip[0].offsetWidth > 0 && self.reposition(cache.event, !images.length)
                }))) : FALSE
            }, PROTOTYPE._waitForContent = function (element) {
                var cache = this.cache;
                return cache.waiting = TRUE, ($.fn.imagesLoaded ? element.imagesLoaded() : $.Deferred().resolve([])).done(function () {
                    cache.waiting = FALSE
                }).promise()
            }, PROTOTYPE._updateContent = function (content, reposition) {
                this._update(content, this.elements.content, reposition)
            }, PROTOTYPE._updateTitle = function (content, reposition) {
                this._update(content, this.elements.title, reposition) === FALSE && this._removeTitle(FALSE)
            }, PROTOTYPE._createTitle = function () {
                var elements = this.elements, id = this._id + "-title";
                elements.titlebar && this._removeTitle(), elements.titlebar = $("<div />", {class: NAMESPACE + "-titlebar " + (this.options.style.widget ? createWidgetClass("header") : "")}).append(elements.title = $("<div />", {
                    id: id,
                    class: NAMESPACE + "-title",
                    "aria-atomic": TRUE
                })).insertBefore(elements.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function (event) {
                    $(this).toggleClass("ui-state-active ui-state-focus", "down" === event.type.substr(-4))
                }).delegate(".qtip-close", "mouseover mouseout", function (event) {
                    $(this).toggleClass("ui-state-hover", "mouseover" === event.type)
                }), this.options.content.button && this._createButton()
            }, PROTOTYPE._removeTitle = function (reposition) {
                var elements = this.elements;
                elements.title && (elements.titlebar.remove(), elements.titlebar = elements.title = elements.button = NULL, reposition !== FALSE && this.reposition())
            }, PROTOTYPE.reposition = function (event, effect) {
                if (!this.rendered || this.positioning || this.destroyed) return this;
                this.positioning = TRUE;
                var pluginCalculations, offset, cache = this.cache, tooltip = this.tooltip,
                    posOptions = this.options.position, target = posOptions.target, my = posOptions.my,
                    at = posOptions.at, viewport = posOptions.viewport, container = posOptions.container,
                    adjust = posOptions.adjust, method = adjust.method.split(" "),
                    tooltipWidth = tooltip.outerWidth(FALSE), tooltipHeight = tooltip.outerHeight(FALSE),
                    targetWidth = 0, targetHeight = 0, type = tooltip.css("position"), position = {left: 0, top: 0},
                    visible = tooltip[0].offsetWidth > 0, isScroll = event && "scroll" === event.type, win = $(window),
                    doc = container[0].ownerDocument, mouse = this.mouse;
                if ($.isArray(target) && 2 === target.length) at = {x: LEFT, y: TOP}, position = {
                    left: target[0],
                    top: target[1]
                }; else if ("mouse" === target) at = {
                    x: LEFT,
                    y: TOP
                }, !mouse || !mouse.pageX || !adjust.mouse && event && event.pageX ? event && event.pageX || ((!adjust.mouse || this.options.show.distance) && cache.origin && cache.origin.pageX ? event = cache.origin : event && (!event || "resize" !== event.type && "scroll" !== event.type) || (event = cache.event)) : event = mouse, "static" !== type && (position = container.offset()), doc.body.offsetWidth !== (window.innerWidth || doc.documentElement.clientWidth) && (offset = $(document.body).offset()), position = {
                    left: event.pageX - position.left + (offset && offset.left || 0),
                    top: event.pageY - position.top + (offset && offset.top || 0)
                }, adjust.mouse && isScroll && mouse && (position.left -= (mouse.scrollX || 0) - win.scrollLeft(), position.top -= (mouse.scrollY || 0) - win.scrollTop()); else {
                    if ("event" === target ? event && event.target && "scroll" !== event.type && "resize" !== event.type ? cache.target = $(event.target) : event.target || (cache.target = this.elements.target) : "event" !== target && (cache.target = $(target.jquery ? target : this.elements.target)), target = cache.target, target = $(target).eq(0), 0 === target.length) return this;
                    target[0] === document || target[0] === window ? (targetWidth = BROWSER.iOS ? window.innerWidth : target.width(), targetHeight = BROWSER.iOS ? window.innerHeight : target.height(), target[0] === window && (position = {
                        top: (viewport || target).scrollTop(),
                        left: (viewport || target).scrollLeft()
                    })) : PLUGINS.imagemap && target.is("area") ? pluginCalculations = PLUGINS.imagemap(this, target, at, PLUGINS.viewport ? method : FALSE) : PLUGINS.svg && target && target[0].ownerSVGElement ? pluginCalculations = PLUGINS.svg(this, target, at, PLUGINS.viewport ? method : FALSE) : (targetWidth = target.outerWidth(FALSE), targetHeight = target.outerHeight(FALSE), position = target.offset()), pluginCalculations && (targetWidth = pluginCalculations.width, targetHeight = pluginCalculations.height, offset = pluginCalculations.offset, position = pluginCalculations.position), position = this.reposition.offset(target, position, container), (BROWSER.iOS > 3.1 && BROWSER.iOS < 4.1 || BROWSER.iOS >= 4.3 && BROWSER.iOS < 4.33 || !BROWSER.iOS && "fixed" === type) && (position.left -= win.scrollLeft(), position.top -= win.scrollTop()), (!pluginCalculations || pluginCalculations && pluginCalculations.adjustable !== FALSE) && (position.left += at.x === RIGHT ? targetWidth : at.x === CENTER ? targetWidth / 2 : 0, position.top += "bottom" === at.y ? targetHeight : at.y === CENTER ? targetHeight / 2 : 0)
                }
                return position.left += adjust.x + (my.x === RIGHT ? -tooltipWidth : my.x === CENTER ? -tooltipWidth / 2 : 0), position.top += adjust.y + ("bottom" === my.y ? -tooltipHeight : my.y === CENTER ? -tooltipHeight / 2 : 0), PLUGINS.viewport ? (position.adjusted = PLUGINS.viewport(this, position, posOptions, targetWidth, targetHeight, tooltipWidth, tooltipHeight), offset && position.adjusted.left && (position.left += offset.left), offset && position.adjusted.top && (position.top += offset.top)) : position.adjusted = {
                    left: 0,
                    top: 0
                }, this._trigger("move", [position, viewport.elem || viewport], event) ? (delete position.adjusted, effect === FALSE || !visible || isNaN(position.left) || isNaN(position.top) || "mouse" === target || !$.isFunction(posOptions.effect) ? tooltip.css(position) : $.isFunction(posOptions.effect) && (posOptions.effect.call(tooltip, this, $.extend({}, position)), tooltip.queue(function (next) {
                    $(this).css({opacity: "", height: ""}), BROWSER.ie && this.style.removeAttribute("filter"), next()
                })), this.positioning = FALSE, this) : this
            }, PROTOTYPE.reposition.offset = function (elem, pos, container) {
                function scroll(e, i) {
                    pos.left += i * e.scrollLeft(), pos.top += i * e.scrollTop()
                }

                if (!container[0]) return pos;
                var scrolled, position, parentOffset, overflow, ownerDocument = $(elem[0].ownerDocument),
                    quirks = !!BROWSER.ie && "CSS1Compat" !== document.compatMode, parent = container[0];
                do {
                    "static" !== (position = $.css(parent, "position")) && ("fixed" === position ? (parentOffset = parent.getBoundingClientRect(), scroll(ownerDocument, -1)) : (parentOffset = $(parent).position(), parentOffset.left += parseFloat($.css(parent, "borderLeftWidth")) || 0, parentOffset.top += parseFloat($.css(parent, "borderTopWidth")) || 0), pos.left -= parentOffset.left + (parseFloat($.css(parent, "marginLeft")) || 0), pos.top -= parentOffset.top + (parseFloat($.css(parent, "marginTop")) || 0), scrolled || "hidden" === (overflow = $.css(parent, "overflow")) || "visible" === overflow || (scrolled = $(parent)))
                } while (parent = parent.offsetParent);
                return scrolled && (scrolled[0] !== ownerDocument[0] || quirks) && scroll(scrolled, 1), pos
            };
            var C = (CORNER = PROTOTYPE.reposition.Corner = function (corner, forceY) {
                corner = ("" + corner).replace(/([A-Z])/, " $1").replace(/middle/gi, CENTER).toLowerCase(), this.x = (corner.match(/left|right/i) || corner.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (corner.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!forceY;
                var f = corner.charAt(0);
                this.precedance = "t" === f || "b" === f ? Y : X
            }).prototype;
            C.invert = function (z, center) {
                this[z] = this[z] === LEFT ? RIGHT : this[z] === RIGHT ? LEFT : center || this[z]
            }, C.string = function () {
                var x = this.x, y = this.y;
                return x === y ? x : this.precedance === Y || this.forceY && "center" !== y ? y + " " + x : x + " " + y
            }, C.abbrev = function () {
                var result = this.string().split(" ");
                return result[0].charAt(0) + (result[1] && result[1].charAt(0) || "")
            }, C.clone = function () {
                return new CORNER(this.string(), this.forceY)
            }, PROTOTYPE.toggle = function (state, event) {
                var cache = this.cache, options = this.options, tooltip = this.tooltip;
                if (event) {
                    if (/over|enter/.test(event.type) && /out|leave/.test(cache.event.type) && options.show.target.add(event.target).length === options.show.target.length && tooltip.has(event.relatedTarget).length) return this;
                    cache.event = cloneEvent(event)
                }
                if (this.waiting && !state && (this.hiddenDuringWait = TRUE), !this.rendered) return state ? this.render(1) : this;
                if (this.destroyed || this.disabled) return this;
                var identicalState, allow, after, type = state ? "show" : "hide", opts = this.options[type],
                    posOptions = (this.options[state ? "hide" : "show"], this.options.position),
                    contentOptions = this.options.content, width = this.tooltip.css("width"),
                    visible = this.tooltip.is(":visible"), animate = state || 1 === opts.target.length,
                    sameTarget = !event || opts.target.length < 2 || cache.target[0] === event.target;
                return (typeof state).search("boolean|number") && (state = !visible), identicalState = !tooltip.is(":animated") && visible === state && sameTarget, allow = identicalState ? NULL : !!this._trigger(type, [90]), this.destroyed ? this : (allow !== FALSE && state && this.focus(event), !allow || identicalState ? this : ($.attr(tooltip[0], "aria-hidden", !state), state ? (cache.origin = cloneEvent(this.mouse), $.isFunction(contentOptions.text) && this._updateContent(contentOptions.text, FALSE), $.isFunction(contentOptions.title) && this._updateTitle(contentOptions.title, FALSE), !trackingBound && "mouse" === posOptions.target && posOptions.adjust.mouse && ($(document).bind("mousemove." + NAMESPACE, this._storeMouse), trackingBound = TRUE), width || tooltip.css("width", tooltip.outerWidth(FALSE)), this.reposition(event, arguments[2]), width || tooltip.css("width", ""), opts.solo && ("string" == typeof opts.solo ? $(opts.solo) : $(SELECTOR, opts.solo)).not(tooltip).not(opts.target).qtip("hide", $.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete cache.origin, trackingBound && !$(SELECTOR + '[tracking="true"]:visible', opts.solo).not(tooltip).length && ($(document).unbind("mousemove." + NAMESPACE), trackingBound = FALSE), this.blur(event)), after = $.proxy(function () {
                    state ? (BROWSER.ie && tooltip[0].style.removeAttribute("filter"), tooltip.css("overflow", ""), "string" == typeof opts.autofocus && $(this.options.show.autofocus, tooltip).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : tooltip.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    }), this._trigger(state ? "visible" : "hidden")
                }, this), opts.effect === FALSE || animate === FALSE ? (tooltip[type](), after()) : $.isFunction(opts.effect) ? (tooltip.stop(1, 1), opts.effect.call(tooltip, this), tooltip.queue("fx", function (n) {
                    after(), n()
                })) : tooltip.fadeTo(90, state ? 1 : 0, after), state && opts.target.trigger("qtip-" + this.id + "-inactive"), this))
            }, PROTOTYPE.show = function (event) {
                return this.toggle(TRUE, event)
            }, PROTOTYPE.hide = function (event) {
                return this.toggle(FALSE, event)
            }, PROTOTYPE.focus = function (event) {
                if (!this.rendered || this.destroyed) return this;
                var qtips = $(SELECTOR), tooltip = this.tooltip, curIndex = parseInt(tooltip[0].style.zIndex, 10),
                    newIndex = QTIP.zindex + qtips.length;
                return tooltip.hasClass(CLASS_FOCUS) || this._trigger("focus", [newIndex], event) && (curIndex !== newIndex && (qtips.each(function () {
                    this.style.zIndex > curIndex && (this.style.zIndex = this.style.zIndex - 1)
                }), qtips.filter("." + CLASS_FOCUS).qtip("blur", event)), tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex), this
            }, PROTOTYPE.blur = function (event) {
                return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(CLASS_FOCUS), this._trigger("blur", [this.tooltip.css("zIndex")], event), this)
            }, PROTOTYPE.disable = function (state) {
                return this.destroyed ? this : ("toggle" === state ? state = !(this.rendered ? this.tooltip.hasClass(CLASS_DISABLED) : this.disabled) : "boolean" != typeof state && (state = TRUE), this.rendered && this.tooltip.toggleClass(CLASS_DISABLED, state).attr("aria-disabled", state), this.disabled = !!state, this)
            }, PROTOTYPE.enable = function () {
                return this.disable(FALSE)
            }, PROTOTYPE._createButton = function () {
                var self = this, elements = this.elements, tooltip = elements.tooltip,
                    button = this.options.content.button, isString = "string" == typeof button,
                    close = isString ? button : "Close tooltip";
                elements.button && elements.button.remove(), button.jquery ? elements.button = button : elements.button = $("<a />", {
                    class: "qtip-close " + (this.options.style.widget ? "" : NAMESPACE + "-icon"),
                    title: close,
                    "aria-label": close
                }).prepend($("<span />", {
                    class: "ui-icon ui-icon-close",
                    html: "&times;"
                })), elements.button.appendTo(elements.titlebar || tooltip).attr("role", "button").click(function (event) {
                    return tooltip.hasClass(CLASS_DISABLED) || self.hide(event), FALSE
                })
            }, PROTOTYPE._updateButton = function (button) {
                if (!this.rendered) return FALSE;
                var elem = this.elements.button;
                button ? this._createButton() : elem.remove()
            }, PROTOTYPE._setWidget = function () {
                var on = this.options.style.widget, elements = this.elements, tooltip = elements.tooltip,
                    disabled = tooltip.hasClass(CLASS_DISABLED);
                tooltip.removeClass(CLASS_DISABLED), CLASS_DISABLED = on ? "ui-state-disabled" : "qtip-disabled", tooltip.toggleClass(CLASS_DISABLED, disabled), tooltip.toggleClass("ui-helper-reset " + createWidgetClass(), on).toggleClass(CLASS_DEFAULT, this.options.style.def && !on), elements.content && elements.content.toggleClass(createWidgetClass("content"), on), elements.titlebar && elements.titlebar.toggleClass(createWidgetClass("header"), on), elements.button && elements.button.toggleClass(NAMESPACE + "-icon", !on)
            }, PROTOTYPE._storeMouse = function (event) {
                (this.mouse = cloneEvent(event)).type = "mousemove"
            }, PROTOTYPE._bind = function (targets, events, method, suffix, context) {
                var ns = "." + this._id + (suffix ? "-" + suffix : "");
                events.length && $(targets).bind((events.split ? events : events.join(ns + " ")) + ns, $.proxy(method, context || this))
            }, PROTOTYPE._unbind = function (targets, suffix) {
                $(targets).unbind("." + this._id + (suffix ? "-" + suffix : ""))
            };
            var ns = "." + NAMESPACE;
            $(function () {
                delegate(SELECTOR, ["mouseenter", "mouseleave"], function (event) {
                    var state = "mouseenter" === event.type, tooltip = $(event.currentTarget),
                        target = $(event.relatedTarget || event.target), options = this.options;
                    state ? (this.focus(event), tooltip.hasClass(CLASS_FIXED) && !tooltip.hasClass(CLASS_DISABLED) && clearTimeout(this.timers.hide)) : "mouse" === options.position.target && options.hide.event && options.show.target && !target.closest(options.show.target[0]).length && this.hide(event), tooltip.toggleClass(CLASS_HOVER, state)
                }), delegate("[" + ATTR_ID + "]", INACTIVE_EVENTS, inactiveMethod)
            }), PROTOTYPE._trigger = function (type, args, event) {
                var callback = $.Event("tooltip" + type);
                return callback.originalEvent = event && $.extend({}, event) || this.cache.event || NULL, this.triggering = type, this.tooltip.trigger(callback, [this].concat(args || [])), this.triggering = FALSE, !callback.isDefaultPrevented()
            }, PROTOTYPE._bindEvents = function (showEvents, hideEvents, showTarget, hideTarget, showMethod, hideMethod) {
                if (hideTarget.add(showTarget).length === hideTarget.length) {
                    var toggleEvents = [];
                    hideEvents = $.map(hideEvents, function (type) {
                        var showIndex = $.inArray(type, showEvents);
                        return showIndex > -1 ? void toggleEvents.push(showEvents.splice(showIndex, 1)[0]) : type
                    }), toggleEvents.length && this._bind(showTarget, toggleEvents, function (event) {
                        (!!this.rendered && this.tooltip[0].offsetWidth > 0 ? hideMethod : showMethod).call(this, event)
                    })
                }
                this._bind(showTarget, showEvents, showMethod), this._bind(hideTarget, hideEvents, hideMethod)
            }, PROTOTYPE._assignInitialEvents = function (event) {
                function hoverIntent(event) {
                    if (this.disabled || this.destroyed) return FALSE;
                    this.cache.event = cloneEvent(event), this.cache.target = event ? $(event.target) : [undefined], clearTimeout(this.timers.show), this.timers.show = delay.call(this, function () {
                        this.render("object" == typeof event || options.show.ready)
                    }, options.show.delay)
                }

                var options = this.options, showTarget = options.show.target, hideTarget = options.hide.target,
                    showEvents = options.show.event ? $.trim("" + options.show.event).split(" ") : [],
                    hideEvents = options.hide.event ? $.trim("" + options.hide.event).split(" ") : [];
                /mouse(over|enter)/i.test(options.show.event) && !/mouse(out|leave)/i.test(options.hide.event) && hideEvents.push("mouseleave"), this._bind(showTarget, "mousemove", function (event) {
                    this._storeMouse(event), this.cache.onTarget = TRUE
                }), this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, hoverIntent, function () {
                    clearTimeout(this.timers.show)
                }), (options.show.ready || options.prerender) && hoverIntent.call(this, event)
            }, PROTOTYPE._assignEvents = function () {
                var self = this, options = this.options, posOptions = options.position, tooltip = this.tooltip,
                    showTarget = options.show.target, hideTarget = options.hide.target,
                    containerTarget = posOptions.container, viewportTarget = posOptions.viewport,
                    documentTarget = $(document), windowTarget = ($(document.body), $(window)),
                    showEvents = options.show.event ? $.trim("" + options.show.event).split(" ") : [],
                    hideEvents = options.hide.event ? $.trim("" + options.hide.event).split(" ") : [];
                $.each(options.events, function (name, callback) {
                    self._bind(tooltip, "toggle" === name ? ["tooltipshow", "tooltiphide"] : ["tooltip" + name], callback, null, tooltip)
                }), /mouse(out|leave)/i.test(options.hide.event) && "window" === options.hide.leave && this._bind(documentTarget, ["mouseout", "blur"], function (event) {
                    /select|option/.test(event.target.nodeName) || event.relatedTarget || this.hide(event)
                }), options.hide.fixed ? hideTarget = hideTarget.add(tooltip.addClass(CLASS_FIXED)) : /mouse(over|enter)/i.test(options.show.event) && this._bind(hideTarget, "mouseleave", function () {
                    clearTimeout(this.timers.show)
                }), ("" + options.hide.event).indexOf("unfocus") > -1 && this._bind(containerTarget.closest("html"), ["mousedown", "touchstart"], function (event) {
                    var elem = $(event.target),
                        enabled = this.rendered && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0,
                        isAncestor = elem.parents(SELECTOR).filter(this.tooltip[0]).length > 0;
                    elem[0] === this.target[0] || elem[0] === this.tooltip[0] || isAncestor || this.target.has(elem[0]).length || !enabled || this.hide(event)
                }), "number" == typeof options.hide.inactive && (this._bind(showTarget, "qtip-" + this.id + "-inactive", inactiveMethod), this._bind(hideTarget.add(tooltip), QTIP.inactiveEvents, inactiveMethod, "-inactive")), this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, showMethod, hideMethod), this._bind(showTarget.add(tooltip), "mousemove", function (event) {
                    if ("number" == typeof options.hide.distance) {
                        var origin = this.cache.origin || {}, limit = this.options.hide.distance, abs = Math.abs;
                        (abs(event.pageX - origin.pageX) >= limit || abs(event.pageY - origin.pageY) >= limit) && this.hide(event)
                    }
                    this._storeMouse(event)
                }), "mouse" === posOptions.target && posOptions.adjust.mouse && (options.hide.event && this._bind(showTarget, ["mouseenter", "mouseleave"], function (event) {
                    this.cache.onTarget = "mouseenter" === event.type
                }), this._bind(documentTarget, "mousemove", function (event) {
                    this.rendered && this.cache.onTarget && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0 && this.reposition(event)
                })), (posOptions.adjust.resize || viewportTarget.length) && this._bind($.event.special.resize ? viewportTarget : windowTarget, "resize", repositionMethod), posOptions.adjust.scroll && this._bind(windowTarget.add(posOptions.container), "scroll", repositionMethod)
            }, PROTOTYPE._unassignEvents = function () {
                var targets = [this.options.show.target[0], this.options.hide.target[0], this.rendered && this.tooltip[0], this.options.position.container[0], this.options.position.viewport[0], this.options.position.container.closest("html")[0], window, document];
                this._unbind($([]).pushStack($.grep(targets, function (i) {
                    return "object" == typeof i
                })))
            }, QTIP = $.fn.qtip = function (options, notation, newValue) {
                var command = ("" + options).toLowerCase(), returned = NULL, args = $.makeArray(arguments).slice(1),
                    event = args[args.length - 1], opts = this[0] ? $.data(this[0], NAMESPACE) : NULL;
                return !arguments.length && opts || "api" === command ? opts : "string" == typeof options ? (this.each(function () {
                    var api = $.data(this, NAMESPACE);
                    if (!api) return TRUE;
                    if (event && event.timeStamp && (api.cache.event = event), !notation || "option" !== command && "options" !== command) api[command] && api[command].apply(api, args); else {
                        if (newValue === undefined && !$.isPlainObject(notation)) return returned = api.get(notation), FALSE;
                        api.set(notation, newValue)
                    }
                }), returned !== NULL ? returned : this) : "object" != typeof options && arguments.length ? void 0 : (opts = sanitizeOptions($.extend(TRUE, {}, options)), this.each(function (i) {
                    var api, id;
                    if (id = $.isArray(opts.id) ? opts.id[i] : opts.id, id = !id || id === FALSE || id.length < 1 || QTIP.api[id] ? QTIP.nextid++ : id, (api = init($(this), id, opts)) === FALSE) return TRUE;
                    QTIP.api[id] = api, $.each(PLUGINS, function () {
                        "initialize" === this.initialize && this(api)
                    }), api._assignInitialEvents(event)
                }))
            }, $.qtip = QTip, QTIP.api = {}, $.each({
                attr: function (attr, val) {
                    if (this.length) {
                        var self = this[0], api = $.data(self, "qtip");
                        if ("title" === attr && api && "object" == typeof api && api.options.suppress) return arguments.length < 2 ? $.attr(self, oldtitle) : (api && "title" === api.options.content.attr && api.cache.attr && api.set("content.text", val), this.attr(oldtitle, val))
                    }
                    return $.fn.attr_replacedByqTip.apply(this, arguments)
                }, clone: function (keepData) {
                    var elems = ($([]), $.fn.clone_replacedByqTip.apply(this, arguments));
                    return keepData || elems.filter("[" + oldtitle + "]").attr("title", function () {
                        return $.attr(this, oldtitle)
                    }).removeAttr(oldtitle), elems
                }
            }, function (name, func) {
                if (!func || $.fn[name + "_replacedByqTip"]) return TRUE;
                var old = $.fn[name + "_replacedByqTip"] = $.fn[name];
                $.fn[name] = function () {
                    return func.apply(this, arguments) || old.apply(this, arguments)
                }
            }), $.ui || ($.cleanData_replacedByqTip = $.cleanData, $.cleanData = function (elems) {
                for (var elem, i = 0; (elem = $(elems[i])).length; i++) if (elem.attr(ATTR_HAS)) try {
                    elem.triggerHandler("removeqtip")
                } catch (e) {
                }
                $.cleanData_replacedByqTip.apply(this, arguments)
            }), QTIP.version = "@@VERSION", QTIP.nextid = 0, QTIP.inactiveEvents = INACTIVE_EVENTS, QTIP.zindex = 15e3, QTIP.defaults = {
                prerender: FALSE,
                id: FALSE,
                overwrite: TRUE,
                suppress: TRUE,
                content: {text: TRUE, attr: "title", title: FALSE, button: FALSE},
                position: {
                    my: "top left",
                    at: "bottom right",
                    target: FALSE,
                    container: FALSE,
                    viewport: FALSE,
                    adjust: {x: 0, y: 0, mouse: TRUE, scroll: TRUE, resize: TRUE, method: "flipinvert flipinvert"},
                    effect: function (api, pos, viewport) {
                        $(this).animate(pos, {duration: 200, queue: FALSE})
                    }
                },
                show: {
                    target: FALSE,
                    event: "mouseenter",
                    effect: TRUE,
                    delay: 90,
                    solo: FALSE,
                    ready: FALSE,
                    autofocus: FALSE
                },
                hide: {
                    target: FALSE,
                    event: "mouseleave",
                    effect: TRUE,
                    delay: 0,
                    fixed: FALSE,
                    inactive: FALSE,
                    leave: "window",
                    distance: FALSE
                },
                style: {classes: "", widget: FALSE, width: FALSE, height: FALSE, def: TRUE},
                events: {
                    render: NULL,
                    move: NULL,
                    show: NULL,
                    hide: NULL,
                    toggle: NULL,
                    visible: NULL,
                    hidden: NULL,
                    focus: NULL,
                    blur: NULL
                }
            };
            var TIP, MARGIN = "margin", BG_COLOR = "background-color",
                HASCANVAS = !!document.createElement("canvas").getContext,
                INVALID = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i, cssProps = {},
                cssPrefixes = ["Webkit", "O", "Moz", "ms"];
            if (HASCANVAS) var PIXEL_RATIO = window.devicePixelRatio || 1, BACKING_STORE_RATIO = function () {
                var context = document.createElement("canvas").getContext("2d");
                return context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || 1
            }(), SCALE = PIXEL_RATIO / BACKING_STORE_RATIO; else var createVML = function (tag, props, style) {
                return "<qtipvml:" + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (props || "") + ' style="behavior: url(#default#VML); ' + (style || "") + '" />'
            };
            $.extend(Tip.prototype, {
                init: function (qtip) {
                    var context, tip;
                    tip = this.element = qtip.elements.tip = $("<div />", {class: NAMESPACE + "-tip"}).prependTo(qtip.tooltip), HASCANVAS ? (context = $("<canvas />").appendTo(this.element)[0].getContext("2d"), context.lineJoin = "miter", context.miterLimit = 1e5, context.save()) : (context = createVML("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(context + context), qtip._bind($("*", tip).add(tip), ["click", "mousedown"], function (event) {
                        event.stopPropagation()
                    }, this._ns)), qtip._bind(qtip.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
                }, _swapDimensions: function () {
                    this.size[0] = this.options.height, this.size[1] = this.options.width
                }, _resetDimensions: function () {
                    this.size[0] = this.options.width, this.size[1] = this.options.height
                }, _useTitle: function (corner) {
                    var titlebar = this.qtip.elements.titlebar;
                    return titlebar && (corner.y === TOP || corner.y === CENTER && this.element.position().top + this.size[1] / 2 + this.options.offset < titlebar.outerHeight(TRUE))
                }, _parseCorner: function (corner) {
                    var my = this.qtip.options.position.my;
                    return corner === FALSE || my === FALSE ? corner = FALSE : corner === TRUE ? corner = new CORNER(my.string()) : corner.string || (corner = new CORNER(corner), corner.fixed = TRUE), corner
                }, _parseWidth: function (corner, side, use) {
                    var elements = this.qtip.elements, prop = "border" + camel(side) + "Width";
                    return (use ? intCss(use, prop) : intCss(elements.content, prop) || intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) || intCss(elements.tooltip, prop)) || 0
                }, _parseRadius: function (corner) {
                    var elements = this.qtip.elements, prop = "border" + camel(corner.y) + camel(corner.x) + "Radius";
                    return BROWSER.ie < 9 ? 0 : intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) || intCss(elements.tooltip, prop) || 0
                }, _invalidColour: function (elem, prop, compare) {
                    var val = elem.css(prop);
                    return !val || compare && val === elem.css(compare) || INVALID.test(val) ? FALSE : val
                }, _parseColours: function (corner) {
                    var elements = this.qtip.elements, tip = this.element.css("cssText", ""),
                        borderSide = "border" + camel(corner[corner.precedance]) + camel("color"),
                        colorElem = this._useTitle(corner) && elements.titlebar || elements.content,
                        css = this._invalidColour, color = [];
                    return color[0] = css(tip, BG_COLOR) || css(colorElem, BG_COLOR) || css(elements.content, BG_COLOR) || css(elements.tooltip, BG_COLOR) || tip.css(BG_COLOR), color[1] = css(tip, borderSide, "color") || css(colorElem, borderSide, "color") || css(elements.content, borderSide, "color") || css(elements.tooltip, borderSide, "color") || elements.tooltip.css(borderSide), $("*", tip).add(tip).css("cssText", BG_COLOR + ":transparent !important;border:0 !important;"), color
                }, _calculateSize: function (corner) {
                    var bigHyp, ratio, result, y = corner.precedance === Y, width = this.options.width,
                        height = this.options.height, isCenter = "c" === corner.abbrev(),
                        base = (y ? width : height) * (isCenter ? .5 : 1), pow = Math.pow, round = Math.round,
                        smallHyp = Math.sqrt(pow(base, 2) + pow(height, 2)),
                        hyp = [this.border / base * smallHyp, this.border / height * smallHyp];
                    return hyp[2] = Math.sqrt(pow(hyp[0], 2) - pow(this.border, 2)), hyp[3] = Math.sqrt(pow(hyp[1], 2) - pow(this.border, 2)), bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]), ratio = bigHyp / smallHyp, result = [round(ratio * width), round(ratio * height)], y ? result : result.reverse()
                }, _calculateTip: function (corner, size, scale) {
                    scale = scale || 1, size = size || this.size;
                    var width = size[0] * scale, height = size[1] * scale, width2 = Math.ceil(width / 2),
                        height2 = Math.ceil(height / 2), tips = {
                            br: [0, 0, width, height, width, 0],
                            bl: [0, 0, width, 0, 0, height],
                            tr: [0, height, width, 0, width, height],
                            tl: [0, 0, 0, height, width, height],
                            tc: [0, height, width2, 0, width, height],
                            bc: [0, 0, width, 0, width2, height],
                            rc: [0, 0, width, height2, 0, height],
                            lc: [width, 0, width, height, 0, height2]
                        };
                    return tips.lt = tips.br, tips.rt = tips.bl, tips.lb = tips.tr, tips.rb = tips.tl, tips[corner.abbrev()]
                }, _drawCoords: function (context, coords) {
                    context.beginPath(), context.moveTo(coords[0], coords[1]), context.lineTo(coords[2], coords[3]), context.lineTo(coords[4], coords[5]), context.closePath()
                }, create: function () {
                    var c = this.corner = (HASCANVAS || BROWSER.ie) && this._parseCorner(this.options.corner);
                    return (this.enabled = !!this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = c.clone(), this.update()), this.element.toggle(this.enabled), this.corner
                }, update: function (corner, position) {
                    if (!this.enabled) return this;
                    var color, precedance, context, coords, bigCoords, translate, newSize, border,
                        elements = this.qtip.elements, tip = this.element, inner = tip.children(),
                        options = this.options, curSize = this.size, mimic = options.mimic, round = Math.round;
                    corner || (corner = this.qtip.cache.corner || this.corner), mimic === FALSE ? mimic = corner : (mimic = new CORNER(mimic), mimic.precedance = corner.precedance, "inherit" === mimic.x ? mimic.x = corner.x : "inherit" === mimic.y ? mimic.y = corner.y : mimic.x === mimic.y && (mimic[corner.precedance] = corner[corner.precedance])), precedance = mimic.precedance, corner.precedance === X ? this._swapDimensions() : this._resetDimensions(), color = this.color = this._parseColours(corner), "transparent" !== color[1] ? (border = this.border = this._parseWidth(corner, corner[corner.precedance]), options.border && border < 1 && !INVALID.test(color[1]) && (color[0] = color[1]), this.border = border = options.border !== TRUE ? options.border : border) : this.border = border = 0, newSize = this.size = this._calculateSize(corner), tip.css({
                        width: newSize[0],
                        height: newSize[1],
                        lineHeight: newSize[1] + "px"
                    }), translate = corner.precedance === Y ? [round(mimic.x === LEFT ? border : mimic.x === RIGHT ? newSize[0] - curSize[0] - border : (newSize[0] - curSize[0]) / 2), round(mimic.y === TOP ? newSize[1] - curSize[1] : 0)] : [round(mimic.x === LEFT ? newSize[0] - curSize[0] : 0), round(mimic.y === TOP ? border : "bottom" === mimic.y ? newSize[1] - curSize[1] - border : (newSize[1] - curSize[1]) / 2)], HASCANVAS ? (context = inner[0].getContext("2d"), context.restore(), context.save(), context.clearRect(0, 0, 6e3, 6e3), coords = this._calculateTip(mimic, curSize, SCALE), bigCoords = this._calculateTip(mimic, this.size, SCALE), inner.attr(WIDTH, newSize[0] * SCALE).attr("height", newSize[1] * SCALE), inner.css(WIDTH, newSize[0]).css("height", newSize[1]), this._drawCoords(context, bigCoords), context.fillStyle = color[1], context.fill(), context.translate(translate[0] * SCALE, translate[1] * SCALE), this._drawCoords(context, coords), context.fillStyle = color[0], context.fill()) : (coords = this._calculateTip(mimic), coords = "m" + coords[0] + "," + coords[1] + " l" + coords[2] + "," + coords[3] + " " + coords[4] + "," + coords[5] + " xe", translate[2] = border && /^(r|b)/i.test(corner.string()) ? 8 === BROWSER.ie ? 2 : 1 : 0, inner.css({
                        coordsize: newSize[0] + border + " " + (newSize[1] + border),
                        antialias: "" + (mimic.string().indexOf(CENTER) > -1),
                        left: translate[0] - translate[2] * Number(precedance === X),
                        top: translate[1] - translate[2] * Number(precedance === Y),
                        width: newSize[0] + border,
                        height: newSize[1] + border
                    }).each(function (i) {
                        var $this = $(this);
                        $this[$this.prop ? "prop" : "attr"]({
                            coordsize: newSize[0] + border + " " + (newSize[1] + border),
                            path: coords,
                            fillcolor: color[0],
                            filled: !!i,
                            stroked: !i
                        }).toggle(!(!border && !i)), !i && $this.html(createVML("stroke", 'weight="' + 2 * border + 'px" color="' + color[1] + '" miterlimit="1000" joinstyle="miter"'))
                    })), window.opera && setTimeout(function () {
                        elements.tip.css({display: "inline-block", visibility: "visible"})
                    }, 1), position !== FALSE && this.calculate(corner, newSize)
                }, calculate: function (corner, size) {
                    if (!this.enabled) return FALSE;
                    var precedance, corners, self = this, elements = this.qtip.elements, tip = this.element,
                        userOffset = this.options.offset, position = (elements.tooltip.hasClass("ui-widget"), {});
                    return corner = corner || this.corner, precedance = corner.precedance, size = size || this._calculateSize(corner), corners = [corner.x, corner.y], precedance === X && corners.reverse(), $.each(corners, function (i, side) {
                        var b, bc, br;
                        side === CENTER ? (b = precedance === Y ? LEFT : TOP, position[b] = "50%", position[MARGIN + "-" + b] = -Math.round(size[precedance === Y ? 0 : 1] / 2) + userOffset) : (b = self._parseWidth(corner, side, elements.tooltip), bc = self._parseWidth(corner, side, elements.content), br = self._parseRadius(corner), position[side] = Math.max(-self.border, i ? bc : userOffset + (br > b ? br : -b)))
                    }), position[corner[precedance]] -= size[precedance === X ? 0 : 1], tip.css({
                        margin: "",
                        top: "",
                        bottom: "",
                        left: "",
                        right: ""
                    }).css(position), position
                }, reposition: function (event, api, pos, viewport) {
                    function shiftflip(direction, precedance, popposite, side, opposite) {
                        direction === SHIFT && newCorner.precedance === precedance && adjust[side] && newCorner[popposite] !== CENTER ? newCorner.precedance = newCorner.precedance === X ? Y : X : direction !== SHIFT && adjust[side] && (newCorner[precedance] = newCorner[precedance] === CENTER ? adjust[side] > 0 ? side : opposite : newCorner[precedance] === side ? opposite : side)
                    }

                    function shiftonly(xy, side, opposite) {
                        newCorner[xy] === CENTER ? css[MARGIN + "-" + side] = shift[xy] = offset[MARGIN + "-" + side] - adjust[side] : (props = offset[opposite] !== undefined ? [adjust[side], -offset[side]] : [-adjust[side], offset[side]], (shift[xy] = Math.max(props[0], props[1])) > props[0] && (pos[side] -= adjust[side], shift[side] = FALSE), css[offset[opposite] !== undefined ? opposite : side] = shift[xy])
                    }

                    if (this.enabled) {
                        var offset, props, cache = api.cache, newCorner = this.corner.clone(), adjust = pos.adjusted,
                            method = api.options.position.adjust.method.split(" "), horizontal = method[0],
                            vertical = method[1] || method[0], shift = {left: FALSE, top: FALSE, x: 0, y: 0}, css = {};
                        this.corner.fixed !== TRUE && (shiftflip(horizontal, X, Y, LEFT, RIGHT), shiftflip(vertical, Y, X, TOP, "bottom"), newCorner.string() === cache.corner.string() || cache.cornerTop === adjust.top && cache.cornerLeft === adjust.left || this.update(newCorner, FALSE)), offset = this.calculate(newCorner), offset.right !== undefined && (offset.left = -offset.right), offset.bottom !== undefined && (offset.top = -offset.bottom), offset.user = this.offset, (shift.left = horizontal === SHIFT && !!adjust.left) && shiftonly(X, LEFT, RIGHT), (shift.top = vertical === SHIFT && !!adjust.top) && shiftonly(Y, TOP, "bottom"), this.element.css(css).toggle(!(shift.x && shift.y || newCorner.x === CENTER && shift.y || newCorner.y === CENTER && shift.x)), pos.left -= offset.left.charAt ? offset.user : horizontal !== SHIFT || shift.top || !shift.left && !shift.top ? offset.left + this.border : 0, pos.top -= offset.top.charAt ? offset.user : vertical !== SHIFT || shift.left || !shift.left && !shift.top ? offset.top + this.border : 0, cache.cornerLeft = adjust.left, cache.cornerTop = adjust.top, cache.corner = newCorner.clone()
                    }
                }, destroy: function () {
                    this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
                }
            }), TIP = PLUGINS.tip = function (api) {
                return new Tip(api, api.options.style.tip)
            }, TIP.initialize = "render", TIP.sanitize = function (options) {
                if (options.style && "tip" in options.style) {
                    var opts = options.style.tip;
                    "object" != typeof opts && (opts = options.style.tip = {corner: opts}), /string|boolean/i.test(typeof opts.corner) || (opts.corner = TRUE)
                }
            }, CHECKS.tip = {
                "^position.my|style.tip.(corner|mimic|border)$": function () {
                    this.create(), this.qtip.reposition()
                }, "^style.tip.(height|width)$": function (obj) {
                    this.size = [obj.width, obj.height], this.update(), this.qtip.reposition()
                }, "^content.title|style.(classes|widget)$": function () {
                    this.update()
                }
            }, $.extend(TRUE, QTIP.defaults, {
                style: {
                    tip: {
                        corner: TRUE,
                        mimic: FALSE,
                        width: 6,
                        height: 6,
                        border: TRUE,
                        offset: 0
                    }
                }
            });
            var MODAL, OVERLAY;
            OVERLAY = function () {
                function focusable(element) {
                    if ($.expr[":"].focusable) return $.expr[":"].focusable;
                    var map, mapName, img, isTabIndexNotNaN = !isNaN($.attr(element, "tabindex")),
                        nodeName = element.nodeName && element.nodeName.toLowerCase();
                    return "area" === nodeName ? (map = element.parentNode, mapName = map.name, !(!element.href || !mapName || "map" !== map.nodeName.toLowerCase()) && (!!(img = $("img[usemap=#" + mapName + "]")[0]) && img.is(":visible"))) : /input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN
                }

                function focusInputs(blurElems) {
                    focusableElems.length < 1 && blurElems.length ? blurElems.not("body").blur() : focusableElems.first().focus()
                }

                function stealFocus(event) {
                    if (elem.is(":visible")) {
                        var targetOnTop, target = $(event.target), tooltip = current.tooltip,
                            container = target.closest(SELECTOR);
                        targetOnTop = container.length < 1 ? FALSE : parseInt(container[0].style.zIndex, 10) > parseInt(tooltip[0].style.zIndex, 10), targetOnTop || target.closest(SELECTOR)[0] === tooltip[0] || focusInputs(target), onLast = event.target === focusableElems[focusableElems.length - 1]
                    }
                }

                var current, onLast, prevState, elem, self = this, focusableElems = {};
                $.extend(self, {
                    init: function () {
                        return elem = self.elem = $("<div />", {
                            id: "qtip-overlay",
                            html: "<div></div>",
                            mousedown: function () {
                                return FALSE
                            }
                        }).hide(), $(document.body).bind("focusin.qtip-modal", stealFocus), $(document).bind("keydown.qtip-modal", function (event) {
                            current && current.options.show.modal.escape && 27 === event.keyCode && current.hide(event)
                        }), elem.bind("click.qtip-modal", function (event) {
                            current && current.options.show.modal.blur && current.hide(event)
                        }), self
                    }, update: function (api) {
                        current = api, focusableElems = api.options.show.modal.stealfocus !== FALSE ? api.tooltip.find("*").filter(function () {
                            return focusable(this)
                        }) : []
                    }, toggle: function (api, state, duration) {
                        var tooltip = ($(document.body), api.tooltip), options = api.options.show.modal,
                            effect = options.effect, type = state ? "show" : "hide", visible = elem.is(":visible"),
                            visibleModals = $(".qtip-modal").filter(":visible:not(:animated)").not(tooltip);
                        return self.update(api), state && options.stealfocus !== FALSE && focusInputs($(":focus")), elem.toggleClass("blurs", options.blur), state && elem.appendTo(document.body), elem.is(":animated") && visible === state && prevState !== FALSE || !state && visibleModals.length ? self : (elem.stop(TRUE, FALSE), $.isFunction(effect) ? effect.call(elem, state) : effect === FALSE ? elem[type]() : elem.fadeTo(parseInt(duration, 10) || 90, state ? 1 : 0, function () {
                            state || elem.hide()
                        }), state || elem.queue(function (next) {
                            elem.css({left: "", top: ""}), $(".qtip-modal").length || elem.detach(), next()
                        }), prevState = state, current.destroyed && (current = NULL), self)
                    }
                }), self.init()
            }, OVERLAY = new OVERLAY, $.extend(Modal.prototype, {
                init: function (qtip) {
                    var tooltip = qtip.tooltip;
                    if (!this.options.on) return this;
                    qtip.elements.overlay = OVERLAY.elem, tooltip.addClass("qtip-modal").css("z-index", QTIP.modal_zindex + $(".qtip-modal").length), qtip._bind(tooltip, ["tooltipshow", "tooltiphide"], function (event, api, duration) {
                        var oEvent = event.originalEvent;
                        if (event.target === tooltip[0]) if (oEvent && "tooltiphide" === event.type && /mouse(leave|enter)/.test(oEvent.type) && $(oEvent.relatedTarget).closest(OVERLAY.elem[0]).length) try {
                            event.preventDefault()
                        } catch (e) {
                        } else (!oEvent || oEvent && "tooltipsolo" !== oEvent.type) && this.toggle(event, "tooltipshow" === event.type, duration)
                    }, this._ns, this), qtip._bind(tooltip, "tooltipfocus", function (event, api) {
                        if (!event.isDefaultPrevented() && event.target === tooltip[0]) {
                            var qtips = $(".qtip-modal"), newIndex = QTIP.modal_zindex + qtips.length,
                                curIndex = parseInt(tooltip[0].style.zIndex, 10);
                            OVERLAY.elem[0].style.zIndex = newIndex - 1, qtips.each(function () {
                                this.style.zIndex > curIndex && (this.style.zIndex -= 1)
                            }), qtips.filter("." + CLASS_FOCUS).qtip("blur", event.originalEvent), tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex, OVERLAY.update(api);
                            try {
                                event.preventDefault()
                            } catch (e) {
                            }
                        }
                    }, this._ns, this), qtip._bind(tooltip, "tooltiphide", function (event) {
                        event.target === tooltip[0] && $(".qtip-modal").filter(":visible").not(tooltip).last().qtip("focus", event)
                    }, this._ns, this)
                }, toggle: function (event, state, duration) {
                    if (event && event.isDefaultPrevented()) return this;
                    OVERLAY.toggle(this.qtip, !!state, duration)
                }, destroy: function () {
                    this.qtip.tooltip.removeClass("qtip-modal"), this.qtip._unbind(this.qtip.tooltip, this._ns), OVERLAY.toggle(this.qtip, FALSE), delete this.qtip.elements.overlay
                }
            }), MODAL = PLUGINS.modal = function (api) {
                return new Modal(api, api.options.show.modal)
            }, MODAL.sanitize = function (opts) {
                opts.show && ("object" != typeof opts.show.modal ? opts.show.modal = {on: !!opts.show.modal} : void 0 === opts.show.modal.on && (opts.show.modal.on = TRUE))
            }, QTIP.modal_zindex = QTIP.zindex - 200, MODAL.initialize = "render", CHECKS.modal = {
                "^show.modal.(on|blur)$": function () {
                    this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
                }
            }, $.extend(TRUE, QTIP.defaults, {
                show: {
                    modal: {
                        on: FALSE,
                        effect: TRUE,
                        blur: TRUE,
                        stealfocus: TRUE,
                        escape: TRUE
                    }
                }
            }), PLUGINS.viewport = function (api, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight) {
                function calculate(side, otherSide, type, adjust, side1, side2, lengthName, targetLength, elemLength) {
                    var initialPos = position[side1], mySide = my[side], atSide = at[side], isShift = type === SHIFT,
                        myLength = mySide === side1 ? elemLength : mySide === side2 ? -elemLength : -elemLength / 2,
                        atLength = atSide === side1 ? targetLength : atSide === side2 ? -targetLength : -targetLength / 2,
                        sideOffset = viewportScroll[side1] + viewportOffset[side1] - (containerStatic ? 0 : containerOffset[side1]),
                        overflow1 = sideOffset - initialPos,
                        overflow2 = initialPos + elemLength - (lengthName === WIDTH ? viewportWidth : viewportHeight) - sideOffset,
                        offset = myLength - (my.precedance === side || mySide === my[otherSide] ? atLength : 0) - (atSide === CENTER ? targetLength / 2 : 0);
                    return isShift ? (offset = (mySide === side1 ? 1 : -1) * myLength, position[side1] += overflow1 > 0 ? overflow1 : overflow2 > 0 ? -overflow2 : 0, position[side1] = Math.max(-containerOffset[side1] + viewportOffset[side1], initialPos - offset, Math.min(Math.max(-containerOffset[side1] + viewportOffset[side1] + (lengthName === WIDTH ? viewportWidth : viewportHeight), initialPos + offset), position[side1], "center" === mySide ? initialPos - myLength : 1e9))) : (adjust *= type === FLIPINVERT ? 2 : 0, overflow1 > 0 && (mySide !== side1 || overflow2 > 0) ? (position[side1] -= offset + adjust, newMy.invert(side, side1)) : overflow2 > 0 && (mySide !== side2 || overflow1 > 0) && (position[side1] -= (mySide === CENTER ? -offset : offset) + adjust, newMy.invert(side, side2)), position[side1] < viewportScroll && -position[side1] > overflow2 && (position[side1] = initialPos, newMy = my.clone())), position[side1] - initialPos
                }

                var fixed, newMy, newClass, containerOffset, containerStatic, viewportWidth, viewportHeight,
                    viewportScroll, viewportOffset, target = posOptions.target, tooltip = api.elements.tooltip,
                    my = posOptions.my, at = posOptions.at, adjust = posOptions.adjust,
                    method = adjust.method.split(" "), methodX = method[0], methodY = method[1] || method[0],
                    viewport = posOptions.viewport, container = posOptions.container, cache = api.cache,
                    adjusted = {left: 0, top: 0};
                return viewport.jquery && target[0] !== window && target[0] !== document.body && "none" !== adjust.method ? (containerOffset = container.offset() || adjusted, containerStatic = "static" === container.css("position"), fixed = "fixed" === tooltip.css("position"), viewportWidth = viewport[0] === window ? viewport.width() : viewport.outerWidth(FALSE), viewportHeight = viewport[0] === window ? viewport.height() : viewport.outerHeight(FALSE), viewportScroll = {
                    left: fixed ? 0 : viewport.scrollLeft(),
                    top: fixed ? 0 : viewport.scrollTop()
                }, viewportOffset = viewport.offset() || adjusted, "shift" === methodX && "shift" === methodY || (newMy = my.clone()), adjusted = {
                    left: "none" !== methodX ? calculate(X, Y, methodX, adjust.x, LEFT, RIGHT, WIDTH, targetWidth, elemWidth) : 0,
                    top: "none" !== methodY ? calculate(Y, X, methodY, adjust.y, TOP, "bottom", "height", targetHeight, elemHeight) : 0
                }, newMy && cache.lastClass !== (newClass = NAMESPACE + "-pos-" + newMy.abbrev()) && tooltip.removeClass(api.cache.lastClass).addClass(api.cache.lastClass = newClass), adjusted) : adjusted
            }, PLUGINS.polys = {
                polygon: function (baseCoords, corner) {
                    var next, newWidth, newHeight, result = {
                        width: 0,
                        height: 0,
                        position: {top: 1e10, right: 0, bottom: 0, left: 1e10},
                        adjustable: FALSE
                    }, i = 0, coords = [], compareX = 1, compareY = 1, realX = 0, realY = 0;
                    for (i = baseCoords.length; i--;) next = [parseInt(baseCoords[--i], 10), parseInt(baseCoords[i + 1], 10)], next[0] > result.position.right && (result.position.right = next[0]), next[0] < result.position.left && (result.position.left = next[0]), next[1] > result.position.bottom && (result.position.bottom = next[1]), next[1] < result.position.top && (result.position.top = next[1]), coords.push(next);
                    if (newWidth = result.width = Math.abs(result.position.right - result.position.left), newHeight = result.height = Math.abs(result.position.bottom - result.position.top), "c" === corner.abbrev()) result.position = {
                        left: result.position.left + result.width / 2,
                        top: result.position.top + result.height / 2
                    }; else {
                        for (; newWidth > 0 && newHeight > 0 && compareX > 0 && compareY > 0;) for (newWidth = Math.floor(newWidth / 2), newHeight = Math.floor(newHeight / 2), corner.x === LEFT ? compareX = newWidth : corner.x === RIGHT ? compareX = result.width - newWidth : compareX += Math.floor(newWidth / 2), corner.y === TOP ? compareY = newHeight : "bottom" === corner.y ? compareY = result.height - newHeight : compareY += Math.floor(newHeight / 2), i = coords.length; i-- && !(coords.length < 2);) realX = coords[i][0] - result.position.left, realY = coords[i][1] - result.position.top, (corner.x === LEFT && realX >= compareX || corner.x === RIGHT && realX <= compareX || corner.x === CENTER && (realX < compareX || realX > result.width - compareX) || corner.y === TOP && realY >= compareY || "bottom" === corner.y && realY <= compareY || corner.y === CENTER && (realY < compareY || realY > result.height - compareY)) && coords.splice(i, 1);
                        result.position = {left: coords[0][0], top: coords[0][1]}
                    }
                    return result
                },
                rect: function (ax, ay, bx, by) {
                    return {
                        width: Math.abs(bx - ax),
                        height: Math.abs(by - ay),
                        position: {left: Math.min(ax, bx), top: Math.min(ay, by)}
                    }
                },
                _angles: {tc: 1.5, tr: 7 / 4, tl: 5 / 4, bc: .5, br: .25, bl: .75, rc: 2, lc: 1, c: 0},
                ellipse: function (cx, cy, rx, ry, corner) {
                    var c = PLUGINS.polys._angles[corner.abbrev()], rxc = 0 === c ? 0 : rx * Math.cos(c * Math.PI),
                        rys = ry * Math.sin(c * Math.PI);
                    return {
                        width: 2 * rx - Math.abs(rxc),
                        height: 2 * ry - Math.abs(rys),
                        position: {left: cx + rxc, top: cy + rys},
                        adjustable: FALSE
                    }
                },
                circle: function (cx, cy, r, corner) {
                    return PLUGINS.polys.ellipse(cx, cy, r, r, corner)
                }
            }, PLUGINS.svg = function (api, svg, corner) {
                for (var rootWidth, rootHeight, mtx, transformed, viewBox, len, next, i, points, result, position, doc = $(document), elem = svg[0], root = $(elem.ownerSVGElement), xScale = 1, yScale = 1, complex = !0; !elem.getBBox;) elem = elem.parentNode;
                if (!elem.getBBox || !elem.parentNode) return FALSE;
                rootWidth = root.attr("width") || root.width() || parseInt(root.css("width"), 10), rootHeight = root.attr("height") || root.height() || parseInt(root.css("height"), 10);
                var strokeWidth2 = (parseInt(svg.css("stroke-width"), 10) || 0) / 2;
                switch (strokeWidth2 && (xScale += strokeWidth2 / rootWidth, yScale += strokeWidth2 / rootHeight), elem.nodeName) {
                    case"ellipse":
                    case"circle":
                        result = PLUGINS.polys.ellipse(elem.cx.baseVal.value, elem.cy.baseVal.value, (elem.rx || elem.r).baseVal.value + strokeWidth2, (elem.ry || elem.r).baseVal.value + strokeWidth2, corner);
                        break;
                    case"line":
                    case"polygon":
                    case"polyline":
                        for (points = elem.points || [{
                            x: elem.x1.baseVal.value,
                            y: elem.y1.baseVal.value
                        }, {
                            x: elem.x2.baseVal.value,
                            y: elem.y2.baseVal.value
                        }], result = [], i = -1, len = points.numberOfItems || points.length; ++i < len;) next = points.getItem ? points.getItem(i) : points[i], result.push.apply(result, [next.x, next.y]);
                        result = PLUGINS.polys.polygon(result, corner);
                        break;
                    default:
                        result = elem.getBoundingClientRect(), result = {
                            width: result.width,
                            height: result.height,
                            position: {left: result.left, top: result.top}
                        }, complex = !1
                }
                return position = result.position, root = root[0], complex && (root.createSVGPoint && (mtx = elem.getScreenCTM(), points = root.createSVGPoint(), points.x = position.left, points.y = position.top, transformed = points.matrixTransform(mtx), position.left = transformed.x, position.top = transformed.y), root.viewBox && (viewBox = root.viewBox.baseVal) && viewBox.width && viewBox.height && (xScale *= rootWidth / viewBox.width, yScale *= rootHeight / viewBox.height)), position.left += doc.scrollLeft(), position.top += doc.scrollTop(), result
            }, PLUGINS.imagemap = function (api, area, corner, adjustMethod) {
                area.jquery || (area = $(area));
                var imageOffset, coords, i, result, len,
                    shape = area.attr("shape").toLowerCase().replace("poly", "polygon"),
                    image = $('img[usemap="#' + area.parent("map").attr("name") + '"]'),
                    coordsString = $.trim(area.attr("coords")), coordsArray = coordsString.replace(/,$/, "").split(",");
                if (!image.length) return FALSE;
                if ("polygon" === shape) result = PLUGINS.polys.polygon(coordsArray, corner); else {
                    if (!PLUGINS.polys[shape]) return FALSE;
                    for (i = -1, len = coordsArray.length, coords = []; ++i < len;) coords.push(parseInt(coordsArray[i], 10));
                    result = PLUGINS.polys[shape].apply(this, coords.concat(corner))
                }
                return imageOffset = image.offset(), imageOffset.left += Math.ceil((image.outerWidth(FALSE) - image.width()) / 2), imageOffset.top += Math.ceil((image.outerHeight(FALSE) - image.height()) / 2), result.position.left += imageOffset.left, result.position.top += imageOffset.top, result
            };
            var IE6;
            $.extend(Ie6.prototype, {
                _scroll: function () {
                    var overlay = this.qtip.elements.overlay;
                    overlay && (overlay[0].style.top = $(window).scrollTop() + "px")
                }, init: function (qtip) {
                    var tooltip = qtip.tooltip;
                    $("select, object").length < 1 && (this.bgiframe = qtip.elements.bgiframe = $('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>').appendTo(tooltip), qtip._bind(tooltip, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = $("<div/>", {id: NAMESPACE + "-rcontainer"}).appendTo(document.body), qtip.elements.overlay && qtip.elements.overlay.addClass("qtipmodal-ie6fix") && (qtip._bind(window, ["scroll", "resize"], this._scroll, this._ns, this), qtip._bind(tooltip, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw()
                }, adjustBGIFrame: function () {
                    var tipAdjust, offset, tooltip = this.qtip.tooltip,
                        dimensions = {height: tooltip.outerHeight(FALSE), width: tooltip.outerWidth(FALSE)},
                        plugin = this.qtip.plugins.tip, tip = this.qtip.elements.tip;
                    offset = parseInt(tooltip.css("borderLeftWidth"), 10) || 0, offset = {
                        left: -offset,
                        top: -offset
                    }, plugin && tip && (tipAdjust = "x" === plugin.corner.precedance ? [WIDTH, LEFT] : ["height", TOP], offset[tipAdjust[1]] -= tip[tipAdjust[0]]()), this.bgiframe.css(offset).css(dimensions)
                }, redraw: function () {
                    if (this.qtip.rendered < 1 || this.drawing) return this;
                    var perc, width, max, min, tooltip = this.qtip.tooltip, style = this.qtip.options.style,
                        container = this.qtip.options.position.container;
                    return this.qtip.drawing = 1, style.height && tooltip.css("height", style.height), style.width ? tooltip.css(WIDTH, style.width) : (tooltip.css(WIDTH, "").appendTo(this.redrawContainer), width = tooltip.width(), width % 2 < 1 && (width += 1), max = tooltip.css("maxWidth") || "", min = tooltip.css("minWidth") || "", perc = (max + min).indexOf("%") > -1 ? container.width() / 100 : 0, max = (max.indexOf("%") > -1 ? perc : 1) * parseInt(max, 10) || width, min = (min.indexOf("%") > -1 ? perc : 1) * parseInt(min, 10) || 0, width = max + min ? Math.min(Math.max(width, min), max) : width, tooltip.css(WIDTH, Math.round(width)).appendTo(container)), this.drawing = 0, this
                }, destroy: function () {
                    this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([window, this.qtip.tooltip], this._ns)
                }
            }), IE6 = PLUGINS.ie6 = function (api) {
                return 6 === BROWSER.ie ? new Ie6(api) : FALSE
            }, IE6.initialize = "render", CHECKS.ie6 = {
                "^content|style$": function () {
                    this.redraw()
                }
            }
        })
    }(window, document)
}, function (module, exports) {
    jQuery(function () {
        dialogHelper__.init(), dialogHelper__.initDialogs(), dialogHelper__.initCustDialogs()
    });
    var dialogHelper__ = {};
    dialogHelper__.initDialogs = function () {
        jQuery.extend({
            Dialog: {
                alert: function (content, fn, icon) {
                    fn && !jQuery.isFunction(fn) && (icon = fn), "error" == icon && (icon = 2), "ask" == icon && (icon = 3), "ok" == icon && (icon = 1), "smiley" == icon && (icon = 1);
                    var conf = {skin: "layer-ext-moon", closeBtn: 0};
                    icon && (conf.icon = icon), conf.title = "提示信息", top.layer.alert(content, conf, function (index) {
                        fn && jQuery.isFunction(fn) && fn(), top && top.layer && top.layer.close(index), layer.close(index)
                    })
                }, error: function (content, fn) {
                    this.alert(content, fn, 2)
                }, success: function (content, fn) {
                    this.alert(content, fn, 6)
                }, warning: function (content, fn) {
                    this.alert(content, fn, 7)
                }, confirm: function (title, content, yesFn, cancelFn, conf) {
                    conf || (conf = {btn: ["确定", "取消"], icon: 3});
                    var tempfn = function (a) {
                        yesFn(a), layer.closeAll("dialog")
                    };
                    title && (conf.title = title), layer.confirm(content, conf, tempfn, cancelFn)
                }, open: function (conf) {
                    !0 === conf.btn && (conf.btn = ["确定", "取消"], conf.ok || alert("确定btn 没有回调？"));
                    var iframeId, height = conf.height, width = conf.width, title = conf.title, url = conf.url,
                        openWindow = conf.topOpen ? top : window;
                    if (url) {
                        url = dialogHelper__.getProjectUrl(url), conf.type = 1, iframeId = "dialogId_" + Math.random(1e3);
                        var iframeHeight = conf.height > 360 ? "98%" : "97%",
                            iframe = '<iframe  src="' + url + '" id="' + iframeId + '" name="' + iframeId + '" style="height:' + iframeHeight + ';width:100%;border:none;"></iframe>';
                        conf.content = iframe
                    }
                    if (!conf.type) return jQuery.Dialog.msg("请设置访问地址!或者指定对话框类型"), !1;
                    height || (height = jQuery(openWindow).height(), width = jQuery(openWindow).width()), height || (height = 500), width || (width = 600), delete conf.url, delete conf.height, delete conf.width, height += "", width += "", -1 == height.indexOf("%") && (height += "px"), -1 == width.indexOf("%") && (width += "px");
                    var dialogConf = {
                        title: title,
                        maxmin: !1,
                        closeBtn: 1,
                        shadeClose: !1,
                        anim: -1,
                        area: [width, height],
                        content: url
                    };
                    conf.ok && (conf.yes = function (index, layero) {
                        iframeId ? conf.ok(index, openWindow.document.getElementById(iframeId).contentWindow) : conf.ok(index, layero)
                    }, conf.btn || (conf.btn = ["确定", "取消"])), jQuery.extend(dialogConf, conf);
                    var index = openWindow.layer.open(dialogConf);
                    if (openWindow.layerIndexRecord || (openWindow.layerIndexRecord = []), openWindow.layerIndexRecord.push(index), iframeId) {
                        var contentWindow = openWindow.document.getElementById(iframeId).contentWindow;
                        contentWindow.opener = window, conf.passData && (contentWindow.passData = conf.passData)
                    }
                }, close: function (obj) {
                    var openner = parent;
                    obj && "object" == typeof obj && (openner = obj.parent);
                    var openner = openner.layerIndexRecord ? openner : top, index = openner.layerIndexRecord.pop();
                    openner !== top && (openner.layerIndexRecord = null);
                    openner.layer.close(index)
                }, msg: function (content) {
                    top.layer.msg(content)
                }
            }, Toast: {
                warning: function (content, title, openner) {
                    openner || (openner = top.toastr ? top : window), openner.toastr.warning(content, title)
                }, success: function (content, title, openner) {
                    openner || (openner = top.toastr ? top : window), openner.toastr.success(content, title)
                }, error: function (content, title, openner) {
                    title || (title = "错误提示！"), openner || (openner = top.toastr ? top : window), openner.toastr.error(content, title)
                }
            }, Tips: function (content, target) {
                layer.tips(content, target)
            }, Tab: function (tab, fullTab) {
                top.addTab(tab, fullTab)
            }
        })
    }, dialogHelper__.init = function () {
        jQuery("body").delegate("[openDialog]", "click", function () {
            var me = jQuery(this), url = dialogHelper__.getUrl(me), conf = {}, dialogConf = me.attr("dialogConf");
            dialogConf ? (-1 == dialogConf.indexOf("{") && (dialogConf = "{" + dialogConf + "}"), dialogConf = eval("(" + dialogConf + ")"), conf.height = dialogConf.height, conf.width = dialogConf.width) : conf.height = 0;
            var text = me.attr("openDialog") || me.text();
            conf.url = url, conf.title = text, conf.topOpen = me.attr("top"), jQuery.Dialog.open(conf)
        })
    }, dialogHelper__.getUrl = function (obj) {
        var url = obj.attr("url");
        return url ? ("http://" != url.substr(0, 7) && -1 == url.indexOf("html") && (url += ".html"), -1 != url.indexOf("?") && (url = url.format(jQuery.getParams())), url) : ""
    }, dialogHelper__.initCustDialogs = function () {
        window.CustUtil = {
            openCustDialog: function (key, param, callBack, initData, dialogSetting, closeDialog) {
                jQuery.isFunction(param) && (dialogSetting = initData, initData = callBack, callBack = param, param = {}), callBack || (callBack = function (data, innerwin) {
                    jQuery.Dialog.alert(JSON.stringify(data), function () {
                        jQuery.Dialog.close(innerwin)
                    }, 6)
                });
                var conf = {
                    height: 600,
                    width: 800,
                    url: "/form/formCustDialog/formCustDialogShowList.html?key=" + key,
                    title: "",
                    topOpen: !0,
                    btn: !0,
                    closeBtn: 1
                };
                jQuery.post(__ctx + "/form/formCustDialog/getObject?key=" + key, {}, function (result) {
                    var dialogConf = result.data;
                    if (!dialogConf) return void jQuery.Dialog.error("对话框查找不到" + key);
                    conf.height = dialogConf.height, conf.width = dialogConf.width, conf.title = dialogConf.name, window.CustUtil.handleParam(dialogConf, param);
                    var passData = {params: param, initData: initData, dialogSetting: dialogSetting};
                    conf.passData = passData, "tree" === dialogConf.style && (conf.url = "/form/formCustDialog/formCustDialogShowTree.html?key=" + key), jQuery.Dialog.open(conf)
                }, "json"), conf.ok = function (index, innerWindow) {
                    callBack(innerWindow.getData(), innerWindow), closeDialog && jQuery.Dialog.close(innerWindow)
                }
            }, doCustQuery: function (key, param, callBack, dialogSetting) {
                jQuery.isFunction(param) && (dialogSetting = callBack, callBack = param, param = {}), param || (param = {}), callBack || (callBack = function (data) {
                    jQuery.Dialog.alert(JSON.stringify(data))
                }), jQuery.post(__ctx + "/form/formCustDialog/getObject?key=" + key, {}, function (result) {
                    var dialogConf = result.data;
                    dialogConf = jQuery.extend(dialogConf, dialogSetting), window.CustUtil.handleParam(dialogConf, param), jQuery.post(__ctx + "/form/formCustDialog/listData_" + key, param, function (rlt) {
                        var datas = [];
                        jQuery.each(rlt.rows, function (index, row) {
                            var data = {};
                            jQuery.each(dialogConf.returnFields, function (i, field) {
                                data[field.returnName] = row[field.columnName]
                            }), datas.push(data)
                        }), callBack(datas)
                    }, "json")
                }, "json")
            }, handleParam: function (dialog, param) {
                param && jQuery.each(dialog.conditionFields, function (index, field) {
                    jQuery.each(param, function (key, val) {
                        if (key === field.columnName) {
                            var id = field.columnName + "^";
                            "varchar" === field.dbType && (id += "V"), "number" === field.dbType && (id += "N"), "date" === field.dbType && (id += "D"), id += field.condition, param[id] = val
                        }
                    })
                })
            }
        }
    }, dialogHelper__.getProjectUrl = function (url) {
        if (url && -1 == url.indexOf("http://") && "/" === url.substring(0, 1)) {
            var pathname = window.document.location.pathname,
                projectPath = pathname.substring(0, pathname.substr(1).indexOf("/") + 1);
            return "" === projectPath || -1 != "/bus,/bpm,/sys,/org,/form,/flow-editor,/bpmplugin".indexOf(projectPath) ? url : url.startWith(projectPath) ? url : projectPath + url
        }
        return url
    }
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    (function (global) {
        module.exports = global.toastr = __webpack_require__(24)
    }).call(exports, __webpack_require__(1))
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function (e) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function (e) {
            return function () {
                function t(e, t, n) {
                    return f({
                        type: O.error,
                        iconClass: g().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }

                function n(t, n) {
                    return t || (t = g()), v = e("#" + t.containerId), v.length ? v : (n && (v = c(t)), v)
                }

                function i(e, t, n) {
                    return f({type: O.info, iconClass: g().iconClasses.info, message: e, optionsOverride: n, title: t})
                }

                function o(e) {
                    w = e
                }

                function s(e, t, n) {
                    return f({
                        type: O.success,
                        iconClass: g().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }

                function a(e, t, n) {
                    return f({
                        type: O.warning,
                        iconClass: g().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }

                function r(e) {
                    var t = g();
                    v || n(t), l(e, t) || u(t)
                }

                function d(t) {
                    var i = g();
                    return v || n(i), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove())
                }

                function u(t) {
                    for (var n = v.children(), i = n.length - 1; i >= 0; i--) l(e(n[i]), t)
                }

                function l(t, n) {
                    return !(!t || 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function () {
                            h(t)
                        }
                    }), !0)
                }

                function c(t) {
                    return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(e(t.target)), v
                }

                function p() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function m(e) {
                    w && w(e)
                }

                function f(t) {
                    function i(t) {
                        return !e(":focus", l).length || t ? (clearTimeout(O.intervalId), l[r.hideMethod]({
                            duration: r.hideDuration,
                            easing: r.hideEasing,
                            complete: function () {
                                h(l), r.onHidden && "hidden" !== b.state && r.onHidden(), b.state = "hidden", b.endTime = new Date, m(b)
                            }
                        })) : void 0
                    }

                    function o() {
                        (r.timeOut > 0 || r.extendedTimeOut > 0) && (u = setTimeout(i, r.extendedTimeOut), O.maxHideTime = parseFloat(r.extendedTimeOut), O.hideEta = (new Date).getTime() + O.maxHideTime)
                    }

                    function s() {
                        clearTimeout(u), O.hideEta = 0, l.stop(!0, !0)[r.showMethod]({
                            duration: r.showDuration,
                            easing: r.showEasing
                        })
                    }

                    function a() {
                        var e = (O.hideEta - (new Date).getTime()) / O.maxHideTime * 100;
                        f.width(e + "%")
                    }

                    var r = g(), d = t.iconClass || r.iconClass;
                    if (void 0 !== t.optionsOverride && (r = e.extend(r, t.optionsOverride), d = t.optionsOverride.iconClass || d), r.preventDuplicates) {
                        if (t.message === C) return;
                        C = t.message
                    }
                    T++, v = n(r, !0);
                    var u = null, l = e("<div/>"), c = e("<div/>"), p = e("<div/>"), f = e("<div/>"),
                        w = e(r.closeHtml), O = {intervalId: null, hideEta: null, maxHideTime: null},
                        b = {toastId: T, state: "visible", startTime: new Date, options: r, map: t};
                    return t.iconClass && l.addClass(r.toastClass).addClass(d), t.title && (c.append(t.title).addClass(r.titleClass), l.append(c)), t.message && (p.append(t.message).addClass(r.messageClass), l.append(p)), r.closeButton && (w.addClass("toast-close-button").attr("role", "button"), l.prepend(w)), r.progressBar && (f.addClass("toast-progress"), l.prepend(f)), l.hide(), r.newestOnTop ? v.prepend(l) : v.append(l), l[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing,
                        complete: r.onShown
                    }), r.timeOut > 0 && (u = setTimeout(i, r.timeOut), O.maxHideTime = parseFloat(r.timeOut), O.hideEta = (new Date).getTime() + O.maxHideTime, r.progressBar && (O.intervalId = setInterval(a, 10))), l.hover(s, o), !r.onclick && r.tapToDismiss && l.click(i), r.closeButton && w && w.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), i(!0)
                    }), r.onclick && l.click(function () {
                        r.onclick(), i()
                    }), m(b), r.debug && console && console.log(b), l
                }

                function g() {
                    return e.extend({}, p(), b.options)
                }

                function h(e) {
                    v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), C = void 0))
                }

                var v, w, C, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"}, b = {
                    clear: r,
                    remove: d,
                    error: t,
                    getContainer: n,
                    info: i,
                    options: {},
                    subscribe: o,
                    success: s,
                    version: "2.1.0",
                    warning: a
                };
                return b
            }()
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(__webpack_require__(25))
}, function (module, exports) {
    module.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    !function (a, b) {
        "use strict";
        var c, d, e = {
            getPath: function () {
                var a = document.scripts, b = a[a.length - 1], c = b.src;
                if (!b.getAttribute("merge")) return c.substring(0, c.lastIndexOf("/") + 1)
            }(),
            enter: function (a) {
                13 === a.keyCode && a.preventDefault()
            },
            config: {},
            end: {},
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            type: ["dialog", "page", "iframe", "loading", "tips"]
        }, f = {
            v: "2.1", ie6: !!a.ActiveXObject && !a.XMLHttpRequest, index: 0, path: e.getPath, config: function (a, b) {
                var d = 0;
                return a = a || {}, f.cache = e.config = c.extend(e.config, a), f.path = e.config.path || f.path, "string" == typeof a.extend && (a.extend = [a.extend]), f.use("skin/layer.css", a.extend && a.extend.length > 0 ? function g() {
                    var c = a.extend;
                    f.use(c[c[d] ? d : d - 1], d < c.length ? function () {
                        return ++d, g
                    }() : b)
                }() : b), this
            }, use: function (a, b, d) {
                var e = c("head")[0], a = a.replace(/\s/g, ""), g = /\.css$/.test(a),
                    h = document.createElement(g ? "link" : "script"), i = "layui_layer_" + a.replace(/\.|\//g, "");
                return f.path ? (g && (h.rel = "stylesheet"), h[g ? "href" : "src"] = /^http:\/\//.test(a) ? a : f.path + a, h.id = i, c("#" + i)[0] || e.appendChild(h), function j() {
                    (g ? 1989 === parseInt(c("#" + i).css("width")) : f[d || i]) ? function () {
                        b && b();
                        try {
                            g || e.removeChild(h)
                        } catch (a) {
                        }
                    }() : setTimeout(j, 100)
                }(), this) : void 0
            }, ready: function (a, b) {
                var d = "function" == typeof a;
                return d && (b = a), f.config(c.extend(e.config, function () {
                    return d ? {} : {path: a}
                }()), b), this
            }, alert: function (a, b, d) {
                var e = "function" == typeof b;
                return e && (d = b), f.open(c.extend({content: a, yes: d}, e ? {} : b))
            }, confirm: function (a, b, d, g) {
                var h = "function" == typeof b;
                return h && (g = d, d = b), f.open(c.extend({content: a, btn: e.btn, yes: d, cancel: g}, h ? {} : b))
            }, msg: function (a, d, g) {
                var i = "function" == typeof d, j = e.config.skin,
                    k = (j ? j + " " + j + "-msg" : "") || "layui-layer-msg", l = h.anim.length - 1;
                return i && (g = d), f.open(c.extend({
                    content: a,
                    time: 3e3,
                    shade: !1,
                    skin: k,
                    title: !1,
                    closeBtn: !1,
                    btn: !1,
                    end: g
                }, i && !e.config.skin ? {skin: k + " layui-layer-hui", shift: l} : function () {
                    return d = d || {}, (-1 === d.icon || void 0 === d.icon && !e.config.skin) && (d.skin = k + " " + (d.skin || "layui-layer-hui")), d
                }()))
            }, load: function (a, b) {
                return f.open(c.extend({type: 3, icon: a || 0, shade: .01}, b))
            }, tips: function (a, b, d) {
                return f.open(c.extend({type: 4, content: [a, b], closeBtn: !1, time: 3e3, maxWidth: 210}, d))
            }
        }, g = function (a) {
            var b = this;
            b.index = ++f.index, b.config = c.extend({}, b.config, e.config, a), b.creat()
        };
        g.pt = g.prototype;
        var h = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
        h.anim = ["layui-anim", "layui-anim-01", "layui-anim-02", "layui-anim-03", "layui-anim-04", "layui-anim-05", "layui-anim-06"], g.pt.config = {
            type: 0,
            shade: .3,
            fix: !0,
            move: h[1],
            title: "&#x4FE1;&#x606F;",
            offset: "auto",
            area: "auto",
            closeBtn: 1,
            time: 0,
            zIndex: 19891014,
            maxWidth: 360,
            shift: 0,
            icon: -1,
            scrollbar: !0,
            tips: 2
        }, g.pt.vessel = function (a, b) {
            var c = this, d = c.index, f = c.config, g = f.zIndex + d, i = "object" == typeof f.title,
                j = f.maxmin && (1 === f.type || 2 === f.type),
                k = f.title ? '<div class="layui-layer-title" style="' + (i ? f.title[1] : "") + '">' + (i ? f.title[0] : f.title) + "</div>" : "";
            return f.zIndex = g, b([f.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + d + '" times="' + d + '" style="z-index:' + (g - 1) + "; background-color:" + (f.shade[1] || "#000") + "; opacity:" + (f.shade[0] || f.shade) + "; filter:alpha(opacity=" + (100 * f.shade[0] || 100 * f.shade) + ');"></div>' : "", '<div class="' + h[0] + " " + (h.anim[f.shift] || "") + " layui-layer-" + e.type[f.type] + (0 != f.type && 2 != f.type || f.shade ? "" : " layui-layer-border") + " " + (f.skin || "") + '" id="' + h[0] + d + '" type="' + e.type[f.type] + '" times="' + d + '" showtime="' + f.time + '" conType="' + (a ? "object" : "string") + '" style="z-index: ' + g + "; width:" + f.area[0] + ";height:" + f.area[1] + (f.fix ? "" : ";position:absolute;") + '">' + (a && 2 != f.type ? "" : k) + '<div class="layui-layer-content' + (0 == f.type && -1 !== f.icon ? " layui-layer-padding" : "") + (3 == f.type ? " layui-layer-loading" + f.icon : "") + '">' + (0 == f.type && -1 !== f.icon ? '<i class="layui-layer-ico layui-layer-ico' + f.icon + '"></i>' : "") + (1 == f.type && a ? "" : f.content || "") + '</div><span class="layui-layer-setwin">' + function () {
                var a = j ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
                return f.closeBtn && (a += '<a class="layui-layer-ico ' + h[7] + " " + h[7] + (f.title ? f.closeBtn : 4 == f.type ? "1" : "2") + '" href="javascript:;"></a>'), a
            }() + "</span>" + (f.btn ? function () {
                var a = "";
                "string" == typeof f.btn && (f.btn = [f.btn]);
                for (var b = 0, c = f.btn.length; c > b; b++) a += '<a class="' + h[6] + b + '">' + f.btn[b] + "</a>";
                return '<div class="' + h[6] + '">' + a + "</div>"
            }() : "") + "</div>"], k), c
        }, g.pt.creat = function () {
            var a = this, b = a.config, g = a.index, i = b.content, j = "object" == typeof i;
            switch ("string" == typeof b.area && (b.area = "auto" === b.area ? ["", ""] : [b.area, ""]), b.type) {
                case 0:
                    b.btn = "btn" in b ? b.btn : e.btn[0], f.closeAll("dialog");
                    break;
                case 2:
                    var i = b.content = j ? b.content : [b.content || "http://layer.layui.com", "auto"];
                    b.content = '<iframe scrolling="' + (b.content[1] || "auto") + '" allowtransparency="true" id="' + h[4] + g + '" name="' + h[4] + g + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + b.content[0] + '"></iframe>';
                    break;
                case 3:
                    b.title = !1, b.closeBtn = !1, -1 === b.icon && b.icon, f.closeAll("loading");
                    break;
                case 4:
                    j || (b.content = [b.content, "body"]), b.follow = b.content[1], b.content = b.content[0] + '<i class="layui-layer-TipsG"></i>', b.title = !1, b.shade = !1, b.fix = !1, b.tips = "object" == typeof b.tips ? b.tips : [b.tips, !0], b.tipsMore || f.closeAll("tips")
            }
            a.vessel(j, function (d, e) {
                c("body").append(d[0]), j ? function () {
                    2 == b.type || 4 == b.type ? function () {
                        c("body").append(d[1])
                    }() : function () {
                        i.parents("." + h[0])[0] || (i.show().addClass("layui-layer-wrap").wrap(d[1]), c("#" + h[0] + g).find("." + h[5]).before(e))
                    }()
                }() : c("body").append(d[1]), a.layero = c("#" + h[0] + g), b.scrollbar || h.html.css("overflow", "hidden").attr("layer-full", g)
            }).auto(g), 2 == b.type && f.ie6 && a.layero.find("iframe").attr("src", i[0]), c(document).off("keydown", e.enter).on("keydown", e.enter), a.layero.on("keydown", function (a) {
                c(document).off("keydown", e.enter)
            }), 4 == b.type ? a.tips() : a.offset(), b.fix && d.on("resize", function () {
                a.offset(), (/^\d+%$/.test(b.area[0]) || /^\d+%$/.test(b.area[1])) && a.auto(g), 4 == b.type && a.tips()
            }), b.time <= 0 || setTimeout(function () {
                f.close(a.index)
            }, b.time), a.move().callback()
        }, g.pt.auto = function (a) {
            function b(a) {
                a = g.find(a), a.height(i[1] - j - k - 2 * (0 | parseFloat(a.css("padding"))))
            }

            var e = this, f = e.config, g = c("#" + h[0] + a);
            "" === f.area[0] && f.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && f.btn && g.width(g.innerWidth()), g.outerWidth() > f.maxWidth && g.width(f.maxWidth));
            var i = [g.innerWidth(), g.innerHeight()], j = g.find(h[1]).outerHeight() || 0,
                k = g.find("." + h[6]).outerHeight() || 0;
            switch (f.type) {
                case 2:
                    b("iframe");
                    break;
                default:
                    "" === f.area[1] ? f.fix && i[1] >= d.height() && (i[1] = d.height(), b("." + h[5])) : b("." + h[5])
            }
            return e
        }, g.pt.offset = function () {
            var a = this, b = a.config, c = a.layero, e = [c.outerWidth(), c.outerHeight()],
                f = "object" == typeof b.offset;
            a.offsetTop = (d.height() - e[1]) / 2, a.offsetLeft = (d.width() - e[0]) / 2, f ? (a.offsetTop = b.offset[0], a.offsetLeft = b.offset[1] || a.offsetLeft) : "auto" !== b.offset && (a.offsetTop = b.offset, "rb" === b.offset && (a.offsetTop = d.height() - e[1], a.offsetLeft = d.width() - e[0])), b.fix || (a.offsetTop = /%$/.test(a.offsetTop) ? d.height() * parseFloat(a.offsetTop) / 100 : parseFloat(a.offsetTop), a.offsetLeft = /%$/.test(a.offsetLeft) ? d.width() * parseFloat(a.offsetLeft) / 100 : parseFloat(a.offsetLeft), a.offsetTop += d.scrollTop(), a.offsetLeft += d.scrollLeft()), c.css({
                top: a.offsetTop,
                left: a.offsetLeft
            })
        }, g.pt.tips = function () {
            var a = this, b = a.config, e = a.layero, f = [e.outerWidth(), e.outerHeight()], g = c(b.follow);
            g[0] || (g = c("body"));
            var i = {width: g.outerWidth(), height: g.outerHeight(), top: g.offset().top, left: g.offset().left},
                j = e.find(".layui-layer-TipsG"), k = b.tips[0];
            b.tips[1] || j.remove(), i.autoLeft = function () {
                i.left + f[0] - d.width() > 0 ? (i.tipLeft = i.left + i.width - f[0], j.css({
                    right: 12,
                    left: "auto"
                })) : i.tipLeft = i.left
            }, i.where = [function () {
                i.autoLeft(), i.tipTop = i.top - f[1] - 10, j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", b.tips[1])
            }, function () {
                i.tipLeft = i.left + i.width + 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", b.tips[1])
            }, function () {
                i.autoLeft(), i.tipTop = i.top + i.height + 10, j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", b.tips[1])
            }, function () {
                i.tipLeft = i.left - f[0] - 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", b.tips[1])
            }], i.where[k - 1](), 1 === k ? i.top - (d.scrollTop() + f[1] + 16) < 0 && i.where[2]() : 2 === k ? d.width() - (i.left + i.width + f[0] + 16) > 0 || i.where[3]() : 3 === k ? i.top - d.scrollTop() + i.height + f[1] + 16 - d.height() > 0 && i.where[0]() : 4 === k && f[0] + 16 - i.left > 0 && i.where[1](), e.find("." + h[5]).css({
                "background-color": b.tips[1],
                "padding-right": b.closeBtn ? "30px" : ""
            }), e.css({left: i.tipLeft, top: i.tipTop})
        }, g.pt.move = function () {
            var a = this, b = a.config, e = {
                setY: 0, moveLayer: function () {
                    var a = e.layero, b = parseInt(a.css("margin-left")), c = parseInt(e.move.css("left"));
                    0 === b || (c -= b), "fixed" !== a.css("position") && (c -= a.parent().offset().left, e.setY = 0), a.css({
                        left: c,
                        top: parseInt(e.move.css("top")) - e.setY
                    })
                }
            }, f = a.layero.find(b.move);
            return b.move && f.attr("move", "ok"), f.css({cursor: b.move ? "move" : "auto"}), c(b.move).on("mousedown", function (a) {
                if (a.preventDefault(), "ok" === c(this).attr("move")) {
                    e.ismove = !0, e.layero = c(this).parents("." + h[0]);
                    var f = e.layero.offset().left, g = e.layero.offset().top, i = e.layero.outerWidth() - 6,
                        j = e.layero.outerHeight() - 6;
                    c("#layui-layer-moves")[0] || c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + f + "px; top:" + g + "px; width:" + i + "px; height:" + j + 'px; z-index:2147483584"></div>'), e.move = c("#layui-layer-moves"), b.moveType && e.move.css({visibility: "hidden"}), e.moveX = a.pageX - e.move.position().left, e.moveY = a.pageY - e.move.position().top, "fixed" !== e.layero.css("position") || (e.setY = d.scrollTop())
                }
            }), c(document).mousemove(function (a) {
                if (e.ismove) {
                    var c = a.pageX - e.moveX, f = a.pageY - e.moveY;
                    if (a.preventDefault(), !b.moveOut) {
                        e.setY = d.scrollTop();
                        var g = d.width() - e.move.outerWidth(), h = e.setY;
                        0 > c && (c = 0), c > g && (c = g), h > f && (f = h), f > d.height() - e.move.outerHeight() + e.setY && (f = d.height() - e.move.outerHeight() + e.setY)
                    }
                    e.move.css({left: c, top: f}), b.moveType && e.moveLayer(), c = f = g = h = null
                }
            }).mouseup(function () {
                try {
                    e.ismove && (e.moveLayer(), e.move.remove(), b.moveEnd && b.moveEnd()), e.ismove = !1
                } catch (a) {
                    e.ismove = !1
                }
            }), a
        }, g.pt.callback = function () {
            function a() {
                !1 === (g.cancel && g.cancel(b.index)) || f.close(b.index)
            }

            var b = this, d = b.layero, g = b.config;
            b.openLayer(), g.success && (2 == g.type ? d.find("iframe").on("load", function () {
                g.success(d, b.index)
            }) : g.success(d, b.index)), f.ie6 && b.IE6(d), d.find("." + h[6]).children("a").on("click", function () {
                var e = c(this).index();
                g["btn" + (e + 1)] && g["btn" + (e + 1)](b.index, d), 0 === e ? g.yes ? g.yes(b.index, d) : f.close(b.index) : 1 === e ? a() : g["btn" + (e + 1)] || f.close(b.index)
            }), d.find("." + h[7]).on("click", a), g.shadeClose && c("#layui-layer-shade" + b.index).on("click", function () {
                f.close(b.index)
            }), d.find(".layui-layer-min").on("click", function () {
                f.min(b.index, g), g.min && g.min(d)
            }), d.find(".layui-layer-max").on("click", function () {
                c(this).hasClass("layui-layer-maxmin") ? (f.restore(b.index), g.restore && g.restore(d)) : (f.full(b.index, g), g.full && g.full(d))
            }), g.end && (e.end[b.index] = g.end)
        }, e.reselect = function () {
            c.each(c("select"), function (a, b) {
                var d = c(this);
                d.parents("." + h[0])[0] || 1 == d.attr("layer") && c("." + h[0]).length < 1 && d.removeAttr("layer").show(), d = null
            })
        }, g.pt.IE6 = function (a) {
            function b() {
                a.css({top: f + (e.config.fix ? d.scrollTop() : 0)})
            }

            var e = this, f = a.offset().top;
            b(), d.scroll(b), c("select").each(function (a, b) {
                var d = c(this);
                d.parents("." + h[0])[0] || "none" === d.css("display") || d.attr({layer: "1"}).hide(), d = null
            })
        }, g.pt.openLayer = function () {
            var a = this;
            f.zIndex = a.config.zIndex, f.setTop = function (a) {
                var b = function () {
                    f.zIndex++, a.css("z-index", f.zIndex + 1)
                };
                return f.zIndex = parseInt(a[0].style.zIndex), a.on("mousedown", b), f.zIndex
            }
        }, e.record = function (a) {
            var b = [a.outerWidth(), a.outerHeight(), a.position().top, a.position().left + parseFloat(a.css("margin-left"))];
            a.find(".layui-layer-max").addClass("layui-layer-maxmin"), a.attr({area: b})
        }, e.rescollbar = function (a) {
            h.html.attr("layer-full") == a && (h.html[0].style.removeProperty ? h.html[0].style.removeProperty("overflow") : h.html[0].style.removeAttribute("overflow"), h.html.removeAttr("layer-full"))
        }, a.layer = f, f.getChildFrame = function (a, b) {
            return b = b || c("." + h[4]).attr("times"), c("#" + h[0] + b).find("iframe").contents().find(a)
        }, f.getFrameIndex = function (a) {
            return c("#" + a).parents("." + h[4]).attr("times")
        }, f.iframeAuto = function (a) {
            if (a) {
                var b = f.getChildFrame("html", a).outerHeight(), d = c("#" + h[0] + a),
                    e = d.find(h[1]).outerHeight() || 0, g = d.find("." + h[6]).outerHeight() || 0;
                d.css({height: b + e + g}), d.find("iframe").css({height: b})
            }
        }, f.iframeSrc = function (a, b) {
            c("#" + h[0] + a).find("iframe").attr("src", b)
        }, f.style = function (a, b) {
            var d = c("#" + h[0] + a), f = d.attr("type"), g = d.find(h[1]).outerHeight() || 0,
                i = d.find("." + h[6]).outerHeight() || 0;
            (f === e.type[1] || f === e.type[2]) && (d.css(b), f === e.type[2] && d.find("iframe").css({height: parseFloat(b.height) - g - i}))
        }, f.min = function (a, b) {
            var d = c("#" + h[0] + a), g = d.find(h[1]).outerHeight() || 0;
            e.record(d), f.style(a, {
                width: 180,
                height: g,
                overflow: "hidden"
            }), d.find(".layui-layer-min").hide(), "page" === d.attr("type") && d.find(h[4]).hide(), e.rescollbar(a)
        }, f.restore = function (a) {
            var b = c("#" + h[0] + a), d = b.attr("area").split(",");
            b.attr("type"), f.style(a, {
                width: parseFloat(d[0]),
                height: parseFloat(d[1]),
                top: parseFloat(d[2]),
                left: parseFloat(d[3]),
                overflow: "visible"
            }), b.find(".layui-layer-max").removeClass("layui-layer-maxmin"), b.find(".layui-layer-min").show(), "page" === b.attr("type") && b.find(h[4]).show(), e.rescollbar(a)
        }, f.full = function (a) {
            var b, g = c("#" + h[0] + a);
            e.record(g), h.html.attr("layer-full") || h.html.css("overflow", "hidden").attr("layer-full", a), clearTimeout(b), b = setTimeout(function () {
                var b = "fixed" === g.css("position");
                f.style(a, {
                    top: b ? 0 : d.scrollTop(),
                    left: b ? 0 : d.scrollLeft(),
                    width: d.width(),
                    height: d.height()
                }), g.find(".layui-layer-min").hide()
            }, 100)
        }, f.title = function (a, b) {
            c("#" + h[0] + (b || f.index)).find(h[1]).html(a)
        }, f.close = function (a) {
            var b = c("#" + h[0] + a), d = b.attr("type");
            if (b[0]) {
                if (d === e.type[1] && "object" === b.attr("conType")) {
                    b.children(":not(." + h[5] + ")").remove();
                    for (var g = 0; 2 > g; g++) b.find(".layui-layer-wrap").unwrap().hide()
                } else {
                    if (d === e.type[2]) try {
                        var i = c("#" + h[4] + a)[0];
                        i.contentWindow.document.write(""), i.contentWindow.close(), b.find("." + h[5])[0].removeChild(i)
                    } catch (j) {
                    }
                    b[0].innerHTML = "", b.remove()
                }
                c("#layui-layer-moves, #layui-layer-shade" + a).remove(), f.ie6 && e.reselect(), e.rescollbar(a), c(document).off("keydown", e.enter), "function" == typeof e.end[a] && e.end[a](), delete e.end[a]
            }
        }, f.closeAll = function (a) {
            c.each(c("." + h[0]), function () {
                var b = c(this), d = a ? b.attr("type") === a : 1;
                d && f.close(b.attr("times")), d = null
            })
        }, e.run = function () {
            c = jQuery, d = c(a), h.html = c("html"), f.open = function (a) {
                return new g(a).index
            }
        }, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return e.run(), f
        }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window)
}, function (module, exports) {
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    !function () {
        "use strict";
        var isLayui = window.layui && layui.define, ready = {
                getPath: function () {
                    var jsPath = document.currentScript ? document.currentScript.src : function () {
                        for (var src, js = document.scripts, last = js.length - 1, i = last; i > 0; i--) if ("interactive" === js[i].readyState) {
                            src = js[i].src;
                            break
                        }
                        return src || js[last].src
                    }();
                    return jsPath.substring(0, jsPath.lastIndexOf("/") + 1)
                }(), getStyle: function (node, name) {
                    var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
                    return style[style.getPropertyValue ? "getPropertyValue" : "getAttribute"](name)
                }, link: function (href, fn, cssname) {
                    if ("function" == typeof fn) return void fn();
                    if (laydate.path) {
                        var head = document.getElementsByTagName("head")[0], link = document.createElement("link");
                        "string" == typeof fn && (cssname = fn);
                        var app = (cssname || href).replace(/\.|\//g, ""), id = "layuicss-" + app, timeout = 0;
                        link.rel = "stylesheet", link.href = laydate.path + href, link.id = id, document.getElementById(id) || head.appendChild(link), "function" == typeof fn && function poll() {
                            if (++timeout > 80) return window.console && console.error("laydate.css: Invalid");
                            1989 === parseInt(ready.getStyle(document.getElementById(id), "width")) ? fn() : setTimeout(poll, 100)
                        }()
                    }
                }
            }, laydate = {
                v: "5.0.9",
                config: {},
                index: window.laydate && window.laydate.v ? 1e5 : 0,
                path: ready.getPath,
                set: function (options) {
                    var that = this;
                    return that.config = lay.extend({}, that.config, options), that
                },
                ready: function (fn) {
                    var path = (isLayui ? "modules/laydate/" : "theme/") + "default/laydate.css?v=" + laydate.v;
                    return isLayui ? layui.addcss(path, fn, "laydate") : ready.link(path, fn, "laydate"), this
                }
            }, thisDate = function () {
                var that = this;
                return {
                    hint: function (content) {
                        that.hint.call(that, content)
                    }, config: that.config
                }
            }, THIS = "layui-this", DISABLED = "laydate-disabled", TIPS_OUT = "开始日期超出了结束日期<br>建议重新选择",
            LIMIT_YEAR = [100, 2e5], ELEM_LIST = "layui-laydate-list", ELEM_HINT = "layui-laydate-hint",
            ELEM_CONFIRM = ".laydate-btns-confirm", Class = function (options) {
                var that = this;
                that.index = ++laydate.index, that.config = lay.extend({}, that.config, laydate.config, options), laydate.ready(function () {
                    that.init()
                })
            }, lay = function (selector) {
                return new LAY(selector)
            }, LAY = function (selector) {
                for (var index = 0, nativeDOM = "object" == typeof selector ? [selector] : (this.selector = selector, document.querySelectorAll(selector || null)); index < nativeDOM.length; index++) this.push(nativeDOM[index])
            };
        LAY.prototype = [], LAY.prototype.constructor = LAY, lay.extend = function () {
            var ai = 1, args = arguments, clone = function (target, obj) {
                target = target || (obj.constructor === Array ? [] : {});
                for (var i in obj) target[i] = obj[i] && obj[i].constructor === Object ? clone(target[i], obj[i]) : obj[i];
                return target
            };
            for (args[0] = "object" == typeof args[0] ? args[0] : {}; ai < args.length; ai++) "object" == typeof args[ai] && clone(args[0], args[ai]);
            return args[0]
        }, lay.ie = function () {
            var agent = navigator.userAgent.toLowerCase();
            return !!(window.ActiveXObject || "ActiveXObject" in window) && ((agent.match(/msie\s(\d+)/) || [])[1] || "11")
        }(), lay.stope = function (e) {
            e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }, lay.each = function (obj, fn) {
            var key, that = this;
            if ("function" != typeof fn) return that;
            if (obj = obj || [], obj.constructor === Object) {
                for (key in obj) if (fn.call(obj[key], key, obj[key])) break
            } else for (key = 0; key < obj.length && !fn.call(obj[key], key, obj[key]); key++) ;
            return that
        }, lay.digit = function (num, length, end) {
            var str = "";
            num = String(num), length = length || 2;
            for (var i = num.length; i < length; i++) str += "0";
            return num < Math.pow(10, length) ? str + (0 | num) : num
        }, lay.elem = function (elemName, attr) {
            var elem = document.createElement(elemName);
            return lay.each(attr || {}, function (key, value) {
                elem.setAttribute(key, value)
            }), elem
        }, LAY.addStr = function (str, new_str) {
            return str = str.replace(/\s+/, " "), new_str = new_str.replace(/\s+/, " ").split(" "), lay.each(new_str, function (ii, item) {
                new RegExp("\\b" + item + "\\b").test(str) || (str = str + " " + item)
            }), str.replace(/^\s|\s$/, "")
        }, LAY.removeStr = function (str, new_str) {
            return str = str.replace(/\s+/, " "), new_str = new_str.replace(/\s+/, " ").split(" "), lay.each(new_str, function (ii, item) {
                var exp = new RegExp("\\b" + item + "\\b");
                exp.test(str) && (str = str.replace(exp, ""))
            }), str.replace(/\s+/, " ").replace(/^\s|\s$/, "")
        }, LAY.prototype.find = function (selector) {
            var that = this, index = 0, arr = [], isObject = "object" == typeof selector;
            return this.each(function (i, item) {
                for (var nativeDOM = isObject ? [selector] : item.querySelectorAll(selector || null); index < nativeDOM.length; index++) arr.push(nativeDOM[index]);
                that.shift()
            }), isObject || (that.selector = (that.selector ? that.selector + " " : "") + selector), lay.each(arr, function (i, item) {
                that.push(item)
            }), that
        }, LAY.prototype.each = function (fn) {
            return lay.each.call(this, this, fn)
        }, LAY.prototype.addClass = function (className, type) {
            return this.each(function (index, item) {
                item.className = LAY[type ? "removeStr" : "addStr"](item.className, className)
            })
        }, LAY.prototype.removeClass = function (className) {
            return this.addClass(className, !0)
        }, LAY.prototype.hasClass = function (className) {
            var has = !1;
            return this.each(function (index, item) {
                new RegExp("\\b" + className + "\\b").test(item.className) && (has = !0)
            }), has
        }, LAY.prototype.attr = function (key, value) {
            var that = this;
            return void 0 === value ? function () {
                if (that.length > 0) return that[0].getAttribute(key)
            }() : that.each(function (index, item) {
                item.setAttribute(key, value)
            })
        }, LAY.prototype.removeAttr = function (key) {
            return this.each(function (index, item) {
                item.removeAttribute(key)
            })
        }, LAY.prototype.html = function (html) {
            return this.each(function (index, item) {
                item.innerHTML = html
            })
        }, LAY.prototype.val = function (value) {
            return this.each(function (index, item) {
                item.value = value
            })
        }, LAY.prototype.append = function (elem) {
            return this.each(function (index, item) {
                "object" == typeof elem ? item.appendChild(elem) : item.innerHTML = item.innerHTML + elem
            })
        }, LAY.prototype.remove = function (elem) {
            return this.each(function (index, item) {
                elem ? item.removeChild(elem) : item.parentNode.removeChild(item)
            })
        }, LAY.prototype.on = function (eventName, fn) {
            return this.each(function (index, item) {
                item.attachEvent ? item.attachEvent("on" + eventName, function (e) {
                    e.target = e.srcElement, fn.call(item, e)
                }) : item.addEventListener(eventName, fn, !1)
            })
        }, LAY.prototype.off = function (eventName, fn) {
            return this.each(function (index, item) {
                item.detachEvent ? item.detachEvent("on" + eventName, fn) : item.removeEventListener(eventName, fn, !1)
            })
        }, Class.isLeapYear = function (year) {
            return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
        }, Class.prototype.config = {
            type: "date",
            range: !1,
            format: "yyyy-MM-dd",
            value: null,
            min: "1900-1-1",
            max: "2099-12-31",
            trigger: "focus",
            show: !1,
            showBottom: !0,
            btns: ["clear", "now", "confirm"],
            lang: "cn",
            theme: "default",
            position: null,
            calendar: !1,
            mark: {},
            zIndex: null,
            done: null,
            change: null
        }, Class.prototype.lang = function () {
            var that = this, options = that.config, text = {
                cn: {
                    weeks: ["日", "一", "二", "三", "四", "五", "六"],
                    time: ["时", "分", "秒"],
                    timeTips: "选择时间",
                    startTime: "开始时间",
                    endTime: "结束时间",
                    dateTips: "返回日期",
                    month: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                    tools: {confirm: "确定", clear: "清空", now: "现在"}
                },
                en: {
                    weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    time: ["Hours", "Minutes", "Seconds"],
                    timeTips: "Select Time",
                    startTime: "Start Time",
                    endTime: "End Time",
                    dateTips: "Select Date",
                    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    tools: {confirm: "Confirm", clear: "Clear", now: "Now"}
                }
            };
            return text[options.lang] || text.cn
        }, Class.prototype.init = function () {
            var that = this, options = that.config, dateType = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s",
                isStatic = "static" === options.position, format = {
                    year: "yyyy",
                    month: "yyyy-MM",
                    date: "yyyy-MM-dd",
                    time: "HH:mm:ss",
                    datetime: "yyyy-MM-dd HH:mm:ss"
                };
            options.elem = lay(options.elem), options.eventElem = lay(options.eventElem), options.elem[0] && (!0 === options.range && (options.range = "-"), options.format === format.date && (options.format = format[options.type]), that.format = options.format.match(new RegExp(dateType + "|.", "g")) || [], that.EXP_IF = "", that.EXP_SPLIT = "", lay.each(that.format, function (i, item) {
                var EXP = new RegExp(dateType).test(item) ? "\\d{" + function () {
                    return new RegExp(dateType).test(that.format[0 === i ? i + 1 : i - 1] || "") ? /^yyyy|y$/.test(item) ? 4 : item.length : /^yyyy$/.test(item) ? "1,4" : /^y$/.test(item) ? "1,308" : "1,2"
                }() + "}" : "\\" + item;
                that.EXP_IF = that.EXP_IF + EXP, that.EXP_SPLIT = that.EXP_SPLIT + "(" + EXP + ")"
            }), that.EXP_IF = new RegExp("^" + (options.range ? that.EXP_IF + "\\s\\" + options.range + "\\s" + that.EXP_IF : that.EXP_IF) + "$"), that.EXP_SPLIT = new RegExp("^" + that.EXP_SPLIT + "$", ""), that.isInput(options.elem[0]) || "focus" === options.trigger && (options.trigger = "click"), options.elem.attr("lay-key") || (options.elem.attr("lay-key", that.index), options.eventElem.attr("lay-key", that.index)), options.mark = lay.extend({}, options.calendar && "cn" === options.lang ? {
                "0-1-1": "元旦",
                "0-2-14": "情人",
                "0-3-8": "妇女",
                "0-3-12": "植树",
                "0-4-1": "愚人",
                "0-5-1": "劳动",
                "0-5-4": "青年",
                "0-6-1": "儿童",
                "0-9-10": "教师",
                "0-9-18": "国耻",
                "0-10-1": "国庆",
                "0-12-25": "圣诞"
            } : {}, options.mark), lay.each(["min", "max"], function (i, item) {
                var ymd = [], hms = [];
                if ("number" == typeof options[item]) {
                    var day = options[item], time = (new Date).getTime(),
                        thisDate = new Date(day ? day < 864e5 ? time + 864e5 * day : day : time);
                    ymd = [thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate()], day < 864e5 || (hms = [thisDate.getHours(), thisDate.getMinutes(), thisDate.getSeconds()])
                } else ymd = (options[item].match(/\d+-\d+-\d+/) || [""])[0].split("-"), hms = (options[item].match(/\d+:\d+:\d+/) || [""])[0].split(":");
                options[item] = {
                    year: 0 | ymd[0] || (new Date).getFullYear(),
                    month: ymd[1] ? (0 | ymd[1]) - 1 : (new Date).getMonth(),
                    date: 0 | ymd[2] || (new Date).getDate(),
                    hours: 0 | hms[0],
                    minutes: 0 | hms[1],
                    seconds: 0 | hms[2]
                }
            }), that.elemID = "layui-laydate" + options.elem.attr("lay-key"), (options.show || isStatic) && that.render(), isStatic || that.events(), options.value && (options.value.constructor === Date ? that.setValue(that.parse(0, that.systemDate(options.value))) : that.setValue(options.value)))
        }, Class.prototype.render = function () {
            var that = this, options = that.config, lang = that.lang(), isStatic = "static" === options.position,
                elem = that.elem = lay.elem("div", {
                    id: that.elemID,
                    class: ["layui-laydate", options.range ? " layui-laydate-range" : "", isStatic ? " layui-laydate-static" : "", options.theme && "default" !== options.theme && !/^#/.test(options.theme) ? " laydate-theme-" + options.theme : ""].join("")
                }), elemMain = that.elemMain = [], elemHeader = that.elemHeader = [], elemCont = that.elemCont = [],
                elemTable = that.table = [], divFooter = that.footer = lay.elem("div", {class: "layui-laydate-footer"});
            if (options.zIndex && (elem.style.zIndex = options.zIndex), lay.each(new Array(2), function (i) {
                if (!options.range && i > 0) return !0;
                var divHeader = lay.elem("div", {class: "layui-laydate-header"}), headerChild = [function () {
                        var elem = lay.elem("i", {class: "layui-icon laydate-icon laydate-prev-y"});
                        return elem.innerHTML = "&#xe65a;", elem
                    }(), function () {
                        var elem = lay.elem("i", {class: "layui-icon laydate-icon laydate-prev-m"});
                        return elem.innerHTML = "&#xe603;", elem
                    }(), function () {
                        var elem = lay.elem("div", {class: "laydate-set-ym"}), spanY = lay.elem("span"),
                            spanM = lay.elem("span");
                        return elem.appendChild(spanY), elem.appendChild(spanM), elem
                    }(), function () {
                        var elem = lay.elem("i", {class: "layui-icon laydate-icon laydate-next-m"});
                        return elem.innerHTML = "&#xe602;", elem
                    }(), function () {
                        var elem = lay.elem("i", {class: "layui-icon laydate-icon laydate-next-y"});
                        return elem.innerHTML = "&#xe65b;", elem
                    }()], divContent = lay.elem("div", {class: "layui-laydate-content"}), table = lay.elem("table"),
                    thead = lay.elem("thead"), theadTr = lay.elem("tr");
                lay.each(headerChild, function (i, item) {
                    divHeader.appendChild(item)
                }), thead.appendChild(theadTr), lay.each(new Array(6), function (i) {
                    var tr = table.insertRow(0);
                    lay.each(new Array(7), function (j) {
                        if (0 === i) {
                            var th = lay.elem("th");
                            th.innerHTML = lang.weeks[j], theadTr.appendChild(th)
                        }
                        tr.insertCell(j)
                    })
                }), table.insertBefore(thead, table.children[0]), divContent.appendChild(table), elemMain[i] = lay.elem("div", {class: "layui-laydate-main laydate-main-list-" + i}), elemMain[i].appendChild(divHeader), elemMain[i].appendChild(divContent), elemHeader.push(headerChild), elemCont.push(divContent), elemTable.push(table)
            }), lay(divFooter).html(function () {
                var html = [], btns = [];
                return "datetime" === options.type && html.push('<span lay-type="datetime" class="laydate-btns-time">' + lang.timeTips + "</span>"), lay.each(options.btns, function (i, item) {
                    var title = lang.tools[item] || "btn";
                    options.range && "now" === item || (isStatic && "clear" === item && (title = "cn" === options.lang ? "重置" : "Reset"), btns.push('<span lay-type="' + item + '" class="laydate-btns-' + item + '">' + title + "</span>"))
                }), html.push('<div class="laydate-footer-btns">' + btns.join("") + "</div>"), html.join("")
            }()), lay.each(elemMain, function (i, main) {
                elem.appendChild(main)
            }), options.showBottom && elem.appendChild(divFooter), /^#/.test(options.theme)) {
                var style = lay.elem("style"),
                    styleText = ["#{{id}} .layui-laydate-header{background-color:{{theme}};}", "#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, that.elemID).replace(/{{theme}}/g, options.theme);
                "styleSheet" in style ? (style.setAttribute("type", "text/css"), style.styleSheet.cssText = styleText) : style.innerHTML = styleText, lay(elem).addClass("laydate-theme-molv"), elem.appendChild(style)
            }
            that.remove(Class.thisElemDate), isStatic ? options.elem.append(elem) : (document.body.appendChild(elem), that.position()), that.checkDate().calendar(), that.changeEvent(), Class.thisElemDate = that.elemID, "function" == typeof options.ready && options.ready(lay.extend({}, options.dateTime, {month: options.dateTime.month + 1}))
        }, Class.prototype.remove = function (prev) {
            var that = this, elem = (that.config, lay("#" + (prev || that.elemID)));
            return elem.hasClass("layui-laydate-static") || that.checkDate(function () {
                elem.remove()
            }), that
        }, Class.prototype.position = function () {
            var that = this, options = that.config, elem = that.bindElem || options.elem[0],
                rect = elem.getBoundingClientRect(), elemWidth = that.elem.offsetWidth,
                elemHeight = that.elem.offsetHeight, scrollArea = function (type) {
                    return type = type ? "scrollLeft" : "scrollTop", document.body[type] | document.documentElement[type]
                }, winArea = function (type) {
                    return document.documentElement[type ? "clientWidth" : "clientHeight"]
                }, left = rect.left, top = rect.bottom;
            left + elemWidth + 5 > winArea("width") && (left = winArea("width") - elemWidth - 5), top + elemHeight + 5 > winArea() && (top = rect.top > elemHeight ? rect.top - elemHeight : winArea() - elemHeight, top -= 10), options.position && (that.elem.style.position = options.position), that.elem.style.left = left + ("fixed" === options.position ? 0 : scrollArea(1)) + "px", that.elem.style.top = top + ("fixed" === options.position ? 0 : scrollArea()) + "px"
        }, Class.prototype.hint = function (content) {
            var that = this, div = (that.config, lay.elem("div", {class: ELEM_HINT}));
            div.innerHTML = content || "", lay(that.elem).find("." + ELEM_HINT).remove(), that.elem.appendChild(div), clearTimeout(that.hinTimer), that.hinTimer = setTimeout(function () {
                lay(that.elem).find("." + ELEM_HINT).remove()
            }, 3e3)
        }, Class.prototype.getAsYM = function (Y, M, type) {
            return type ? M-- : M++, M < 0 && (M = 11, Y--), M > 11 && (M = 0, Y++), [Y, M]
        }, Class.prototype.systemDate = function (newDate) {
            var thisDate = newDate || new Date;
            return {
                year: thisDate.getFullYear(),
                month: thisDate.getMonth(),
                date: thisDate.getDate(),
                hours: newDate ? newDate.getHours() : 0,
                minutes: newDate ? newDate.getMinutes() : 0,
                seconds: newDate ? newDate.getSeconds() : 0
            }
        }, Class.prototype.checkDate = function (fn) {
            var thisMaxDate, error, that = this, options = (new Date, that.config),
                dateTime = options.dateTime = options.dateTime || that.systemDate(),
                elem = that.bindElem || options.elem[0],
                value = (that.isInput(elem), that.isInput(elem) ? elem.value : "static" === options.position ? "" : elem.innerHTML),
                checkValid = function (dateTime) {
                    dateTime.year > LIMIT_YEAR[1] && (dateTime.year = LIMIT_YEAR[1], error = !0), dateTime.month > 11 && (dateTime.month = 11, error = !0), dateTime.hours > 23 && (dateTime.hours = 0, error = !0), dateTime.minutes > 59 && (dateTime.minutes = 0, dateTime.hours++, error = !0), dateTime.seconds > 59 && (dateTime.seconds = 0, dateTime.minutes++, error = !0), thisMaxDate = laydate.getEndDate(dateTime.month + 1, dateTime.year), dateTime.date > thisMaxDate && (dateTime.date = thisMaxDate, error = !0)
                }, initDate = function (dateTime, value, index) {
                    var startEnd = ["startTime", "endTime"];
                    value = (value.match(that.EXP_SPLIT) || []).slice(1), index = index || 0, options.range && (that[startEnd[index]] = that[startEnd[index]] || {}), lay.each(that.format, function (i, item) {
                        var thisv = parseFloat(value[i]);
                        value[i].length < item.length && (error = !0), /yyyy|y/.test(item) ? (thisv < LIMIT_YEAR[0] && (thisv = LIMIT_YEAR[0], error = !0), dateTime.year = thisv) : /MM|M/.test(item) ? (thisv < 1 && (thisv = 1, error = !0), dateTime.month = thisv - 1) : /dd|d/.test(item) ? (thisv < 1 && (thisv = 1, error = !0), dateTime.date = thisv) : /HH|H/.test(item) ? (thisv < 1 && (thisv = 0, error = !0), dateTime.hours = thisv, options.range && (that[startEnd[index]].hours = thisv)) : /mm|m/.test(item) ? (thisv < 1 && (thisv = 0, error = !0), dateTime.minutes = thisv, options.range && (that[startEnd[index]].minutes = thisv)) : /ss|s/.test(item) && (thisv < 1 && (thisv = 0, error = !0), dateTime.seconds = thisv, options.range && (that[startEnd[index]].seconds = thisv))
                    }), checkValid(dateTime)
                };
            return "limit" === fn ? (checkValid(dateTime), that) : (value = value || options.value, "string" == typeof value && (value = value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")), that.startState && !that.endState && (delete that.startState, that.endState = !0), "string" == typeof value && value ? that.EXP_IF.test(value) ? options.range ? (value = value.split(" " + options.range + " "), that.startDate = that.startDate || that.systemDate(), that.endDate = that.endDate || that.systemDate(), options.dateTime = lay.extend({}, that.startDate), lay.each([that.startDate, that.endDate], function (i, item) {
                initDate(item, value[i], i)
            })) : initDate(dateTime, value) : (that.hint("日期格式不合法<br>必须遵循下述格式：<br>" + (options.range ? options.format + " " + options.range + " " + options.format : options.format) + "<br>已为你重置"), error = !0) : value && value.constructor === Date ? options.dateTime = that.systemDate(value) : (options.dateTime = that.systemDate(), delete that.startState, delete that.endState, delete that.startDate, delete that.endDate, delete that.startTime, delete that.endTime), checkValid(dateTime), error && value && that.setValue(options.range ? that.endDate ? that.parse() : "" : that.parse()), fn && fn(), that)
        }, Class.prototype.mark = function (td, YMD) {
            var mark, that = this, options = that.config;
            return lay.each(options.mark, function (key, title) {
                var keys = key.split("-");
                keys[0] != YMD[0] && 0 != keys[0] || keys[1] != YMD[1] && 0 != keys[1] || keys[2] != YMD[2] || (mark = title || YMD[2])
            }), mark && td.html('<span class="laydate-day-mark">' + mark + "</span>"), that
        }, Class.prototype.limit = function (elem, date, index, time) {
            var isOut, that = this, options = that.config, timestrap = {},
                dateTime = options[index > 41 ? "endDate" : "dateTime"],
                thisDateTime = lay.extend({}, dateTime, date || {});
            return lay.each({now: thisDateTime, min: options.min, max: options.max}, function (key, item) {
                timestrap[key] = that.newDate(lay.extend({
                    year: item.year,
                    month: item.month,
                    date: item.date
                }, function () {
                    var hms = {};
                    return lay.each(time, function (i, keys) {
                        hms[keys] = item[keys]
                    }), hms
                }())).getTime()
            }), isOut = timestrap.now < timestrap.min || timestrap.now > timestrap.max, elem && elem[isOut ? "addClass" : "removeClass"](DISABLED), isOut
        }, Class.prototype.calendar = function (value) {
            var startWeek, prevMaxDate, thisMaxDate, that = this, options = that.config,
                dateTime = value || options.dateTime, thisDate = new Date, lang = that.lang(),
                isAlone = "date" !== options.type && "datetime" !== options.type, index = value ? 1 : 0,
                tds = lay(that.table[index]).find("td"), elemYM = lay(that.elemHeader[index][2]).find("span");
            if (dateTime.year < LIMIT_YEAR[0] && (dateTime.year = LIMIT_YEAR[0], that.hint("最低只能支持到公元" + LIMIT_YEAR[0] + "年")), dateTime.year > LIMIT_YEAR[1] && (dateTime.year = LIMIT_YEAR[1], that.hint("最高只能支持到公元" + LIMIT_YEAR[1] + "年")), that.firstDate || (that.firstDate = lay.extend({}, dateTime)), thisDate.setFullYear(dateTime.year, dateTime.month, 1), startWeek = thisDate.getDay(), prevMaxDate = laydate.getEndDate(dateTime.month || 12, dateTime.year), thisMaxDate = laydate.getEndDate(dateTime.month + 1, dateTime.year), lay.each(tds, function (index, item) {
                var YMD = [dateTime.year, dateTime.month], st = 0;
                item = lay(item), item.removeAttr("class"), index < startWeek ? (st = prevMaxDate - startWeek + index, item.addClass("laydate-day-prev"), YMD = that.getAsYM(dateTime.year, dateTime.month, "sub")) : index >= startWeek && index < thisMaxDate + startWeek ? (st = index - startWeek, options.range || st + 1 === dateTime.date && item.addClass(THIS)) : (st = index - thisMaxDate - startWeek, item.addClass("laydate-day-next"), YMD = that.getAsYM(dateTime.year, dateTime.month)), YMD[1]++, YMD[2] = st + 1, item.attr("lay-ymd", YMD.join("-")).html(YMD[2]), that.mark(item, YMD).limit(item, {
                    year: YMD[0],
                    month: YMD[1] - 1,
                    date: YMD[2]
                }, index)
            }), lay(elemYM[0]).attr("lay-ym", dateTime.year + "-" + (dateTime.month + 1)), lay(elemYM[1]).attr("lay-ym", dateTime.year + "-" + (dateTime.month + 1)), "cn" === options.lang ? (lay(elemYM[0]).attr("lay-type", "year").html(dateTime.year + "年"), lay(elemYM[1]).attr("lay-type", "month").html(dateTime.month + 1 + "月")) : (lay(elemYM[0]).attr("lay-type", "month").html(lang.month[dateTime.month]), lay(elemYM[1]).attr("lay-type", "year").html(dateTime.year)), isAlone && (options.range && (value ? that.endDate = that.endDate || {
                year: dateTime.year + ("year" === options.type ? 1 : 0),
                month: dateTime.month + ("month" === options.type ? 0 : -1)
            } : that.startDate = that.startDate || {
                year: dateTime.year,
                month: dateTime.month
            }, value && (that.listYM = [[that.startDate.year, that.startDate.month + 1], [that.endDate.year, that.endDate.month + 1]], that.list(options.type, 0).list(options.type, 1), "time" === options.type ? that.setBtnStatus("时间", lay.extend({}, that.systemDate(), that.startTime), lay.extend({}, that.systemDate(), that.endTime)) : that.setBtnStatus(!0))), options.range || (that.listYM = [[dateTime.year, dateTime.month + 1]], that.list(options.type, 0))), options.range && !value) {
                var EYM = that.getAsYM(dateTime.year, dateTime.month);
                that.calendar(lay.extend({}, dateTime, {year: EYM[0], month: EYM[1]}))
            }
            return options.range || that.limit(lay(that.footer).find(ELEM_CONFIRM), null, 0, ["hours", "minutes", "seconds"]), options.range && value && !isAlone && that.stampRange(), that
        }, Class.prototype.list = function (type, index) {
            var that = this, options = that.config, dateTime = options.dateTime, lang = that.lang(),
                isAlone = options.range && "date" !== options.type && "datetime" !== options.type, ul = lay.elem("ul", {
                    class: ELEM_LIST + " " + {
                        year: "laydate-year-list",
                        month: "laydate-month-list",
                        time: "laydate-time-list"
                    }[type]
                }), elemHeader = that.elemHeader[index], elemYM = lay(elemHeader[2]).find("span"),
                elemCont = that.elemCont[index || 0], haveList = lay(elemCont).find("." + ELEM_LIST)[0],
                isCN = "cn" === options.lang, text = isCN ? "年" : "", listYM = that.listYM[index] || {},
                hms = ["hours", "minutes", "seconds"], startEnd = ["startTime", "endTime"][index];
            if (listYM[0] < 1 && (listYM[0] = 1), "year" === type) {
                var yearNum, startY = yearNum = listYM[0] - 7;
                startY < 1 && (startY = yearNum = 1), lay.each(new Array(15), function (i) {
                    var li = lay.elem("li", {"lay-ym": yearNum}), ymd = {year: yearNum};
                    yearNum == listYM[0] && lay(li).addClass(THIS), li.innerHTML = yearNum + text, ul.appendChild(li), yearNum < that.firstDate.year ? (ymd.month = options.min.month, ymd.date = options.min.date) : yearNum >= that.firstDate.year && (ymd.month = options.max.month, ymd.date = options.max.date), that.limit(lay(li), ymd, index), yearNum++
                }), lay(elemYM[isCN ? 0 : 1]).attr("lay-ym", yearNum - 8 + "-" + listYM[1]).html(startY + text + " - " + (yearNum - 1 + text))
            } else if ("month" === type) lay.each(new Array(12), function (i) {
                var li = lay.elem("li", {"lay-ym": i}), ymd = {year: listYM[0], month: i};
                i + 1 == listYM[1] && lay(li).addClass(THIS), li.innerHTML = lang.month[i] + (isCN ? "月" : ""), ul.appendChild(li), listYM[0] < that.firstDate.year ? ymd.date = options.min.date : listYM[0] >= that.firstDate.year && (ymd.date = options.max.date), that.limit(lay(li), ymd, index)
            }), lay(elemYM[isCN ? 0 : 1]).attr("lay-ym", listYM[0] + "-" + listYM[1]).html(listYM[0] + text); else if ("time" === type) {
                var setTimeStatus = function () {
                    lay(ul).find("ol").each(function (i, ol) {
                        lay(ol).find("li").each(function (ii, li) {
                            that.limit(lay(li), [{hours: ii}, {
                                hours: that[startEnd].hours,
                                minutes: ii
                            }, {
                                hours: that[startEnd].hours,
                                minutes: that[startEnd].minutes,
                                seconds: ii
                            }][i], index, [["hours"], ["hours", "minutes"], ["hours", "minutes", "seconds"]][i])
                        })
                    }), options.range || that.limit(lay(that.footer).find(ELEM_CONFIRM), that[startEnd], 0, ["hours", "minutes", "seconds"])
                };
                options.range ? that[startEnd] || (that[startEnd] = {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }) : that[startEnd] = dateTime, lay.each([24, 60, 60], function (i, item) {
                    var li = lay.elem("li"), childUL = ["<p>" + lang.time[i] + "</p><ol>"];
                    lay.each(new Array(item), function (ii) {
                        childUL.push("<li" + (that[startEnd][hms[i]] === ii ? ' class="' + THIS + '"' : "") + ">" + lay.digit(ii, 2) + "</li>")
                    }), li.innerHTML = childUL.join("") + "</ol>", ul.appendChild(li)
                }), setTimeStatus()
            }
            if (haveList && elemCont.removeChild(haveList), elemCont.appendChild(ul), "year" === type || "month" === type) lay(that.elemMain[index]).addClass("laydate-ym-show"), lay(ul).find("li").on("click", function () {
                var ym = 0 | lay(this).attr("lay-ym");
                if (!lay(this).hasClass(DISABLED)) {
                    if (0 === index) dateTime[type] = ym, isAlone && (that.startDate[type] = ym), that.limit(lay(that.footer).find(ELEM_CONFIRM), null, 0); else if (isAlone) that.endDate[type] = ym; else {
                        var YM = "year" === type ? that.getAsYM(ym, listYM[1] - 1, "sub") : that.getAsYM(listYM[0], ym, "sub");
                        lay.extend(dateTime, {year: YM[0], month: YM[1]})
                    }
                    "year" === options.type || "month" === options.type ? (lay(ul).find("." + THIS).removeClass(THIS), lay(this).addClass(THIS), "month" === options.type && "year" === type && (that.listYM[index][0] = ym, isAlone && (that[["startDate", "endDate"][index]].year = ym), that.list("month", index))) : (that.checkDate("limit").calendar(), that.closeList()), that.setBtnStatus(), options.range || that.done(null, "change"), lay(that.footer).find(".laydate-btns-time").removeClass(DISABLED)
                }
            }); else {
                var span = lay.elem("span", {class: "laydate-time-text"}), scroll = function () {
                    lay(ul).find("ol").each(function (i) {
                        var ol = this, li = lay(ol).find("li");
                        ol.scrollTop = 30 * (that[startEnd][hms[i]] - 2), ol.scrollTop <= 0 && li.each(function (ii, item) {
                            if (!lay(this).hasClass(DISABLED)) return ol.scrollTop = 30 * (ii - 2), !0
                        })
                    })
                }, haveSpan = lay(elemHeader[2]).find(".laydate-time-text");
                scroll(), span.innerHTML = options.range ? [lang.startTime, lang.endTime][index] : lang.timeTips, lay(that.elemMain[index]).addClass("laydate-time-show"), haveSpan[0] && haveSpan.remove(), elemHeader[2].appendChild(span), lay(ul).find("ol").each(function (i) {
                    var ol = this;
                    lay(ol).find("li").on("click", function () {
                        var value = 0 | this.innerHTML;
                        lay(this).hasClass(DISABLED) || (options.range ? that[startEnd][hms[i]] = value : dateTime[hms[i]] = value, lay(ol).find("." + THIS).removeClass(THIS), lay(this).addClass(THIS), setTimeStatus(), scroll(), (that.endDate || "time" === options.type) && that.done(null, "change"), that.setBtnStatus())
                    })
                })
            }
            return that
        }, Class.prototype.listYM = [], Class.prototype.closeList = function () {
            var that = this;
            that.config;
            lay.each(that.elemCont, function (index, item) {
                lay(this).find("." + ELEM_LIST).remove(), lay(that.elemMain[index]).removeClass("laydate-ym-show laydate-time-show")
            }), lay(that.elem).find(".laydate-time-text").remove()
        }, Class.prototype.setBtnStatus = function (tips, start, end) {
            var isOut, that = this, options = that.config, elemBtn = lay(that.footer).find(ELEM_CONFIRM);
            options.range && "date" !== options.type && "time" !== options.type && (start = start || that.startDate, end = end || that.endDate, isOut = that.newDate(start).getTime() > that.newDate(end).getTime(), that.limit(null, start) || that.limit(null, end) ? elemBtn.addClass(DISABLED) : elemBtn[isOut ? "addClass" : "removeClass"](DISABLED), tips && isOut && that.hint("string" == typeof tips ? TIPS_OUT.replace(/日期/g, tips) : TIPS_OUT))
        }, Class.prototype.parse = function (state, date) {
            var that = this, options = that.config,
                dateTime = date || (state ? lay.extend({}, that.endDate, that.endTime) : options.range ? lay.extend({}, that.startDate, that.startTime) : options.dateTime),
                format = that.format.concat();
            return lay.each(format, function (i, item) {
                /yyyy|y/.test(item) ? format[i] = lay.digit(dateTime.year, item.length) : /MM|M/.test(item) ? format[i] = lay.digit(dateTime.month + 1, item.length) : /dd|d/.test(item) ? format[i] = lay.digit(dateTime.date, item.length) : /HH|H/.test(item) ? format[i] = lay.digit(dateTime.hours, item.length) : /mm|m/.test(item) ? format[i] = lay.digit(dateTime.minutes, item.length) : /ss|s/.test(item) && (format[i] = lay.digit(dateTime.seconds, item.length))
            }), options.range && !state ? format.join("") + " " + options.range + " " + that.parse(1) : format.join("")
        }, Class.prototype.newDate = function (dateTime) {
            return dateTime = dateTime || {}, new Date(dateTime.year || 1, dateTime.month || 0, dateTime.date || 1, dateTime.hours || 0, dateTime.minutes || 0, dateTime.seconds || 0)
        }, Class.prototype.setValue = function (value) {
            var that = this, options = that.config, elem = that.bindElem || options.elem[0],
                valType = that.isInput(elem) ? "val" : "html";
            return "static" === options.position || lay(elem)[valType](value || ""), this
        }, Class.prototype.stampRange = function () {
            var startTime, endTime, that = this, options = that.config, tds = lay(that.elem).find("td");
            if (options.range && !that.endDate && lay(that.footer).find(ELEM_CONFIRM).addClass(DISABLED), that.endDate) {
                if (startTime = that.newDate({
                    year: that.startDate.year,
                    month: that.startDate.month,
                    date: that.startDate.date
                }).getTime(), endTime = that.newDate({
                    year: that.endDate.year,
                    month: that.endDate.month,
                    date: that.endDate.date
                }).getTime(), startTime > endTime) return that.hint(TIPS_OUT);
                lay.each(tds, function (i, item) {
                    var ymd = lay(item).attr("lay-ymd").split("-"),
                        thisTime = that.newDate({year: ymd[0], month: ymd[1] - 1, date: ymd[2]}).getTime();
                    lay(item).removeClass("laydate-selected " + THIS), thisTime !== startTime && thisTime !== endTime || lay(item).addClass(lay(item).hasClass("laydate-day-prev") || lay(item).hasClass("laydate-day-next") ? "laydate-selected" : THIS), thisTime > startTime && thisTime < endTime && lay(item).addClass("laydate-selected")
                })
            }
        }, Class.prototype.done = function (param, type) {
            var that = this, options = that.config,
                start = lay.extend({}, that.startDate ? lay.extend(that.startDate, that.startTime) : options.dateTime),
                end = lay.extend({}, lay.extend(that.endDate, that.endTime));
            return lay.each([start, end], function (i, item) {
                "month" in item && lay.extend(item, {month: item.month + 1})
            }), param = param || [that.parse(), start, end], "function" == typeof options[type || "done"] && options[type || "done"].apply(options, param), that
        }, Class.prototype.choose = function (td) {
            var that = this, options = that.config, dateTime = options.dateTime, tds = lay(that.elem).find("td"),
                YMD = td.attr("lay-ymd").split("-"), setDateTime = function (one) {
                    new Date;
                    one && lay.extend(dateTime, YMD), options.range && (that.startDate ? lay.extend(that.startDate, YMD) : that.startDate = lay.extend({}, YMD, that.startTime), that.startYMD = YMD)
                };
            if (YMD = {
                year: 0 | YMD[0],
                month: (0 | YMD[1]) - 1,
                date: 0 | YMD[2]
            }, !td.hasClass(DISABLED)) if (options.range) {
                if (lay.each(["startTime", "endTime"], function (i, item) {
                    that[item] = that[item] || {hours: 0, minutes: 0, seconds: 0}
                }), that.endState) setDateTime(), delete that.endState, delete that.endDate, that.startState = !0, tds.removeClass(THIS + " laydate-selected"), td.addClass(THIS); else if (that.startState) {
                    if (td.addClass(THIS), that.endDate ? lay.extend(that.endDate, YMD) : that.endDate = lay.extend({}, YMD, that.endTime), that.newDate(YMD).getTime() < that.newDate(that.startYMD).getTime()) {
                        var startDate = lay.extend({}, that.endDate, {
                            hours: that.startDate.hours,
                            minutes: that.startDate.minutes,
                            seconds: that.startDate.seconds
                        });
                        lay.extend(that.endDate, that.startDate, {
                            hours: that.endDate.hours,
                            minutes: that.endDate.minutes,
                            seconds: that.endDate.seconds
                        }), that.startDate = startDate
                    }
                    options.showBottom || that.done(), that.stampRange(), that.endState = !0, that.done(null, "change")
                } else td.addClass(THIS), setDateTime(), that.startState = !0;
                lay(that.footer).find(ELEM_CONFIRM)[that.endDate ? "removeClass" : "addClass"](DISABLED)
            } else "static" === options.position ? (setDateTime(!0), that.calendar().done().done(null, "change")) : "date" === options.type ? (setDateTime(!0), that.setValue(that.parse()).remove().done()) : "datetime" === options.type && (setDateTime(!0), that.calendar().done(null, "change"))
        }, Class.prototype.tool = function (btn, type) {
            var that = this, options = that.config, dateTime = options.dateTime,
                isStatic = "static" === options.position, active = {
                    datetime: function () {
                        lay(btn).hasClass(DISABLED) || (that.list("time", 0), options.range && that.list("time", 1), lay(btn).attr("lay-type", "date").html(that.lang().dateTips))
                    }, date: function () {
                        that.closeList(), lay(btn).attr("lay-type", "datetime").html(that.lang().timeTips)
                    }, clear: function () {
                        that.setValue("").remove(), isStatic && (lay.extend(dateTime, that.firstDate), that.calendar()), options.range && (delete that.startState, delete that.endState, delete that.endDate, delete that.startTime, delete that.endTime), that.done(["", {}, {}])
                    }, now: function () {
                        var thisDate = new Date;
                        lay.extend(dateTime, that.systemDate(), {
                            hours: thisDate.getHours(),
                            minutes: thisDate.getMinutes(),
                            seconds: thisDate.getSeconds()
                        }), that.setValue(that.parse()).remove(), isStatic && that.calendar(), that.done()
                    }, confirm: function () {
                        if (options.range) {
                            if (!that.endDate) return that.hint("请先选择日期范围");
                            if (lay(btn).hasClass(DISABLED)) return that.hint("time" === options.type ? TIPS_OUT.replace(/日期/g, "时间") : TIPS_OUT)
                        } else if (lay(btn).hasClass(DISABLED)) return that.hint("不在有效日期或时间范围内");
                        that.done(), that.setValue(that.parse()).remove()
                    }
                };
            active[type] && active[type]()
        }, Class.prototype.change = function (index) {
            var that = this, options = that.config, dateTime = options.dateTime,
                isAlone = options.range && ("year" === options.type || "month" === options.type),
                elemCont = that.elemCont[index || 0], listYM = that.listYM[index], addSubYeay = function (type) {
                    var startEnd = ["startDate", "endDate"][index], isYear = lay(elemCont).find(".laydate-year-list")[0],
                        isMonth = lay(elemCont).find(".laydate-month-list")[0];
                    return isYear && (listYM[0] = type ? listYM[0] - 15 : listYM[0] + 15, that.list("year", index)), isMonth && (type ? listYM[0]-- : listYM[0]++, that.list("month", index)), (isYear || isMonth) && (lay.extend(dateTime, {year: listYM[0]}), isAlone && (that[startEnd].year = listYM[0]), options.range || that.done(null, "change"), that.setBtnStatus(), options.range || that.limit(lay(that.footer).find(ELEM_CONFIRM), {year: listYM[0]})), isYear || isMonth
                };
            return {
                prevYear: function () {
                    addSubYeay("sub") || (dateTime.year--, that.checkDate("limit").calendar(), options.range || that.done(null, "change"))
                }, prevMonth: function () {
                    var YM = that.getAsYM(dateTime.year, dateTime.month, "sub");
                    lay.extend(dateTime, {
                        year: YM[0],
                        month: YM[1]
                    }), that.checkDate("limit").calendar(), options.range || that.done(null, "change")
                }, nextMonth: function () {
                    var YM = that.getAsYM(dateTime.year, dateTime.month);
                    lay.extend(dateTime, {
                        year: YM[0],
                        month: YM[1]
                    }), that.checkDate("limit").calendar(), options.range || that.done(null, "change")
                }, nextYear: function () {
                    addSubYeay() || (dateTime.year++, that.checkDate("limit").calendar(), options.range || that.done(null, "change"))
                }
            }
        }, Class.prototype.changeEvent = function () {
            var that = this;
            that.config;
            lay(that.elem).on("click", function (e) {
                lay.stope(e)
            }), lay.each(that.elemHeader, function (i, header) {
                lay(header[0]).on("click", function (e) {
                    that.change(i).prevYear()
                }), lay(header[1]).on("click", function (e) {
                    that.change(i).prevMonth()
                }), lay(header[2]).find("span").on("click", function (e) {
                    var othis = lay(this), layYM = othis.attr("lay-ym"), layType = othis.attr("lay-type");
                    layYM && (layYM = layYM.split("-"), that.listYM[i] = [0 | layYM[0], 0 | layYM[1]], that.list(layType, i), lay(that.footer).find(".laydate-btns-time").addClass(DISABLED))
                }), lay(header[3]).on("click", function (e) {
                    that.change(i).nextMonth()
                }), lay(header[4]).on("click", function (e) {
                    that.change(i).nextYear()
                })
            }), lay.each(that.table, function (i, table) {
                lay(table).find("td").on("click", function () {
                    that.choose(lay(this))
                })
            }), lay(that.footer).find("span").on("click", function () {
                var type = lay(this).attr("lay-type");
                that.tool(this, type)
            })
        }, Class.prototype.isInput = function (elem) {
            return /input|textarea/.test(elem.tagName.toLocaleLowerCase())
        }, Class.prototype.events = function () {
            var that = this, options = that.config, showEvent = function (elem, bind) {
                elem.on(options.trigger, function () {
                    bind && (that.bindElem = this), that.render()
                })
            };
            options.elem[0] && !options.elem[0].eventHandler && (showEvent(options.elem, "bind"), showEvent(options.eventElem), lay(document).on("click", function (e) {
                e.target !== options.elem[0] && e.target !== options.eventElem[0] && e.target !== lay(options.closeStop)[0] && that.remove()
            }).on("keydown", function (e) {
                13 === e.keyCode && lay("#" + that.elemID)[0] && that.elemID === Class.thisElem && (e.preventDefault(), lay(that.footer).find(ELEM_CONFIRM)[0].click())
            }), lay(window).on("resize", function () {
                if (!that.elem || !lay(".layui-laydate")[0]) return !1;
                that.position()
            }), options.elem[0].eventHandler = !0)
        }, laydate.render = function (options) {
            var inst = new Class(options);
            return thisDate.call(inst)
        }, laydate.getEndDate = function (month, year) {
            var thisDate = new Date;
            return thisDate.setFullYear(year || thisDate.getFullYear(), month || thisDate.getMonth() + 1, 1), new Date(thisDate.getTime() - 864e5).getDate()
        }, window.lay = window.lay || lay, window.laydate = window.laydate || laydate, isLayui ? (laydate.ready(), layui.define(function (exports) {
            laydate.path = layui.cache.dir, exports("laydate", laydate)
        })) : void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return laydate
        }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }()
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
    !function ($) {
        var settings = {}, roots = {}, caches = {}, _consts = {
            className: {BUTTON: "button", LEVEL: "level", ICO_LOADING: "ico_loading", SWITCH: "switch"},
            event: {
                NODECREATED: "ztree_nodeCreated",
                CLICK: "ztree_click",
                EXPAND: "ztree_expand",
                COLLAPSE: "ztree_collapse",
                ASYNC_SUCCESS: "ztree_async_success",
                ASYNC_ERROR: "ztree_async_error",
                REMOVE: "ztree_remove"
            },
            id: {A: "_a", ICON: "_ico", SPAN: "_span", SWITCH: "_switch", UL: "_ul"},
            line: {ROOT: "root", ROOTS: "roots", CENTER: "center", BOTTOM: "bottom", NOLINE: "noline", LINE: "line"},
            folder: {OPEN: "open", CLOSE: "close", DOCU: "docu"},
            node: {CURSELECTED: "curSelectedNode", SELECTLI: "SELECT_LI"}
        }, _setting = {
            treeId: "",
            treeObj: null,
            view: {
                addDiyDom: null,
                autoCancelSelected: !0,
                dblClickExpand: !0,
                expandSpeed: "fast",
                fontCss: {},
                nameIsHTML: !1,
                selectedMulti: !0,
                showIcon: !0,
                showLine: !0,
                showTitle: !0,
                txtSelectedEnable: !1
            },
            data: {
                key: {children: "children", name: "name", title: "", url: "url"},
                simpleData: {enable: !1, idKey: "id", pIdKey: "pId", rootPId: null},
                keep: {parent: !1, leaf: !1}
            },
            async: {
                enable: !1,
                contentType: "application/x-www-form-urlencoded",
                type: "post",
                dataType: "text",
                url: "",
                autoParam: [],
                otherParam: [],
                dataFilter: null
            },
            callback: {
                beforeAsync: null,
                beforeClick: null,
                beforeDblClick: null,
                beforeRightClick: null,
                beforeMouseDown: null,
                beforeMouseUp: null,
                beforeExpand: null,
                beforeCollapse: null,
                beforeRemove: null,
                onAsyncError: null,
                onAsyncSuccess: null,
                onNodeCreated: null,
                onClick: null,
                onDblClick: null,
                onRightClick: null,
                onMouseDown: null,
                onMouseUp: null,
                onExpand: null,
                onCollapse: null,
                onRemove: null
            }
        }, _initRoot = function (setting) {
            var r = data.getRoot(setting);
            r || (r = {}, data.setRoot(setting, r)), r[setting.data.key.children] = [], r.expandTriggerFlag = !1, r.curSelectedList = [], r.noSelection = !0, r.createdNodes = [], r.zId = 0, r._ver = (new Date).getTime()
        }, _initCache = function (setting) {
            var c = data.getCache(setting);
            c || (c = {}, data.setCache(setting, c)), c.nodes = [], c.doms = []
        }, _bindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.bind(c.NODECREATED, function (event, treeId, node) {
                tools.apply(setting.callback.onNodeCreated, [event, treeId, node])
            }), o.bind(c.CLICK, function (event, srcEvent, treeId, node, clickFlag) {
                tools.apply(setting.callback.onClick, [srcEvent, treeId, node, clickFlag])
            }), o.bind(c.EXPAND, function (event, treeId, node) {
                tools.apply(setting.callback.onExpand, [event, treeId, node])
            }), o.bind(c.COLLAPSE, function (event, treeId, node) {
                tools.apply(setting.callback.onCollapse, [event, treeId, node])
            }), o.bind(c.ASYNC_SUCCESS, function (event, treeId, node, msg) {
                tools.apply(setting.callback.onAsyncSuccess, [event, treeId, node, msg])
            }), o.bind(c.ASYNC_ERROR, function (event, treeId, node, XMLHttpRequest, textStatus, errorThrown) {
                tools.apply(setting.callback.onAsyncError, [event, treeId, node, XMLHttpRequest, textStatus, errorThrown])
            }), o.bind(c.REMOVE, function (event, treeId, treeNode) {
                tools.apply(setting.callback.onRemove, [event, treeId, treeNode])
            })
        }, _unbindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.unbind(c.NODECREATED).unbind(c.CLICK).unbind(c.EXPAND).unbind(c.COLLAPSE).unbind(c.ASYNC_SUCCESS).unbind(c.ASYNC_ERROR).unbind(c.REMOVE)
        }, _eventProxy = function (event) {
            var target = event.target, setting = data.getSetting(event.data.treeId), tId = "", node = null,
                nodeEventType = "", treeEventType = "", nodeEventCallback = null, treeEventCallback = null, tmp = null;
            if (tools.eqs(event.type, "mousedown") ? treeEventType = "mousedown" : tools.eqs(event.type, "mouseup") ? treeEventType = "mouseup" : tools.eqs(event.type, "contextmenu") ? treeEventType = "contextmenu" : tools.eqs(event.type, "click") ? tools.eqs(target.tagName, "span") && null !== target.getAttribute("treeNode" + consts.id.SWITCH) ? (tId = tools.getNodeMainDom(target).id, nodeEventType = "switchNode") : (tmp = tools.getMDom(setting, target, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) && (tId = tools.getNodeMainDom(tmp).id, nodeEventType = "clickNode") : tools.eqs(event.type, "dblclick") && (treeEventType = "dblclick", (tmp = tools.getMDom(setting, target, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) && (tId = tools.getNodeMainDom(tmp).id, nodeEventType = "switchNode")), treeEventType.length > 0 && 0 == tId.length && (tmp = tools.getMDom(setting, target, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) && (tId = tools.getNodeMainDom(tmp).id), tId.length > 0) switch (node = data.getNodeCache(setting, tId), nodeEventType) {
                case"switchNode":
                    node.isParent && (tools.eqs(event.type, "click") || tools.eqs(event.type, "dblclick") && tools.apply(setting.view.dblClickExpand, [setting.treeId, node], setting.view.dblClickExpand)) ? nodeEventCallback = handler.onSwitchNode : nodeEventType = "";
                    break;
                case"clickNode":
                    nodeEventCallback = handler.onClickNode
            }
            switch (treeEventType) {
                case"mousedown":
                    treeEventCallback = handler.onZTreeMousedown;
                    break;
                case"mouseup":
                    treeEventCallback = handler.onZTreeMouseup;
                    break;
                case"dblclick":
                    treeEventCallback = handler.onZTreeDblclick;
                    break;
                case"contextmenu":
                    treeEventCallback = handler.onZTreeContextmenu
            }
            return {
                stop: !1,
                node: node,
                nodeEventType: nodeEventType,
                nodeEventCallback: nodeEventCallback,
                treeEventType: treeEventType,
                treeEventCallback: treeEventCallback
            }
        }, _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
            if (n) {
                var r = data.getRoot(setting), childKey = setting.data.key.children;
                n.level = level, n.tId = setting.treeId + "_" + ++r.zId, n.parentTId = parentNode ? parentNode.tId : null, n.open = "string" == typeof n.open ? tools.eqs(n.open, "true") : !!n.open, n[childKey] && n[childKey].length > 0 ? (n.isParent = !0, n.zAsync = !0) : (n.isParent = "string" == typeof n.isParent ? tools.eqs(n.isParent, "true") : !!n.isParent, n.open = !(!n.isParent || setting.async.enable) && n.open, n.zAsync = !n.isParent), n.isFirstNode = isFirstNode, n.isLastNode = isLastNode, n.getParentNode = function () {
                    return data.getNodeCache(setting, n.parentTId)
                }, n.getPreNode = function () {
                    return data.getPreNode(setting, n)
                }, n.getNextNode = function () {
                    return data.getNextNode(setting, n)
                }, n.isAjaxing = !1, data.fixPIdKeyValue(setting, n)
            }
        }, _init = {
            bind: [_bindEvent],
            unbind: [_unbindEvent],
            caches: [_initCache],
            nodes: [_initNode],
            proxys: [_eventProxy],
            roots: [_initRoot],
            beforeA: [],
            afterA: [],
            innerBeforeA: [],
            innerAfterA: [],
            zTreeTools: []
        }, data = {
            addNodeCache: function (setting, node) {
                data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = node
            }, getNodeCacheId: function (tId) {
                return tId.substring(tId.lastIndexOf("_") + 1)
            }, addAfterA: function (afterA) {
                _init.afterA.push(afterA)
            }, addBeforeA: function (beforeA) {
                _init.beforeA.push(beforeA)
            }, addInnerAfterA: function (innerAfterA) {
                _init.innerAfterA.push(innerAfterA)
            }, addInnerBeforeA: function (innerBeforeA) {
                _init.innerBeforeA.push(innerBeforeA)
            }, addInitBind: function (bindEvent) {
                _init.bind.push(bindEvent)
            }, addInitUnBind: function (unbindEvent) {
                _init.unbind.push(unbindEvent)
            }, addInitCache: function (initCache) {
                _init.caches.push(initCache)
            }, addInitNode: function (initNode) {
                _init.nodes.push(initNode)
            }, addInitProxy: function (initProxy, isFirst) {
                isFirst ? _init.proxys.splice(0, 0, initProxy) : _init.proxys.push(initProxy)
            }, addInitRoot: function (initRoot) {
                _init.roots.push(initRoot)
            }, addNodesData: function (setting, parentNode, nodes) {
                var childKey = setting.data.key.children;
                parentNode[childKey] || (parentNode[childKey] = []), parentNode[childKey].length > 0 && (parentNode[childKey][parentNode[childKey].length - 1].isLastNode = !1, view.setNodeLineIcos(setting, parentNode[childKey][parentNode[childKey].length - 1])), parentNode.isParent = !0, parentNode[childKey] = parentNode[childKey].concat(nodes)
            }, addSelectedNode: function (setting, node) {
                var root = data.getRoot(setting);
                data.isSelectedNode(setting, node) || root.curSelectedList.push(node)
            }, addCreatedNode: function (setting, node) {
                if (setting.callback.onNodeCreated || setting.view.addDiyDom) {
                    data.getRoot(setting).createdNodes.push(node)
                }
            }, addZTreeTools: function (zTreeTools) {
                _init.zTreeTools.push(zTreeTools)
            }, exSetting: function (s) {
                $.extend(!0, _setting, s)
            }, fixPIdKeyValue: function (setting, node) {
                setting.data.simpleData.enable && (node[setting.data.simpleData.pIdKey] = node.parentTId ? node.getParentNode()[setting.data.simpleData.idKey] : setting.data.simpleData.rootPId)
            }, getAfterA: function (setting, node, array) {
                for (var i = 0, j = _init.afterA.length; i < j; i++) _init.afterA[i].apply(this, arguments)
            }, getBeforeA: function (setting, node, array) {
                for (var i = 0, j = _init.beforeA.length; i < j; i++) _init.beforeA[i].apply(this, arguments)
            }, getInnerAfterA: function (setting, node, array) {
                for (var i = 0, j = _init.innerAfterA.length; i < j; i++) _init.innerAfterA[i].apply(this, arguments)
            }, getInnerBeforeA: function (setting, node, array) {
                for (var i = 0, j = _init.innerBeforeA.length; i < j; i++) _init.innerBeforeA[i].apply(this, arguments)
            }, getCache: function (setting) {
                return caches[setting.treeId]
            }, getNextNode: function (setting, node) {
                if (!node) return null;
                for (var childKey = setting.data.key.children, p = node.parentTId ? node.getParentNode() : data.getRoot(setting), i = 0, l = p[childKey].length - 1; i <= l; i++) if (p[childKey][i] === node) return i == l ? null : p[childKey][i + 1];
                return null
            }, getNodeByParam: function (setting, nodes, key, value) {
                if (!nodes || !key) return null;
                for (var childKey = setting.data.key.children, i = 0, l = nodes.length; i < l; i++) {
                    if (nodes[i][key] == value) return nodes[i];
                    var tmp = data.getNodeByParam(setting, nodes[i][childKey], key, value);
                    if (tmp) return tmp
                }
                return null
            }, getNodeCache: function (setting, tId) {
                if (!tId) return null;
                var n = caches[setting.treeId].nodes[data.getNodeCacheId(tId)];
                return n || null
            }, getNodeName: function (setting, node) {
                return "" + node[setting.data.key.name]
            }, getNodeTitle: function (setting, node) {
                return "" + node["" === setting.data.key.title ? setting.data.key.name : setting.data.key.title]
            }, getNodes: function (setting) {
                return data.getRoot(setting)[setting.data.key.children]
            }, getNodesByParam: function (setting, nodes, key, value) {
                if (!nodes || !key) return [];
                for (var childKey = setting.data.key.children, result = [], i = 0, l = nodes.length; i < l; i++) nodes[i][key] == value && result.push(nodes[i]), result = result.concat(data.getNodesByParam(setting, nodes[i][childKey], key, value));
                return result
            }, getNodesByParamFuzzy: function (setting, nodes, key, value) {
                if (!nodes || !key) return [];
                var childKey = setting.data.key.children, result = [];
                value = value.toLowerCase();
                for (var i = 0, l = nodes.length; i < l; i++) "string" == typeof nodes[i][key] && nodes[i][key].toLowerCase().indexOf(value) > -1 && result.push(nodes[i]), result = result.concat(data.getNodesByParamFuzzy(setting, nodes[i][childKey], key, value));
                return result
            }, getNodesByFilter: function (setting, nodes, filter, isSingle, invokeParam) {
                if (!nodes) return isSingle ? null : [];
                for (var childKey = setting.data.key.children, result = isSingle ? null : [], i = 0, l = nodes.length; i < l; i++) {
                    if (tools.apply(filter, [nodes[i], invokeParam], !1)) {
                        if (isSingle) return nodes[i];
                        result.push(nodes[i])
                    }
                    var tmpResult = data.getNodesByFilter(setting, nodes[i][childKey], filter, isSingle, invokeParam);
                    if (isSingle && tmpResult) return tmpResult;
                    result = isSingle ? tmpResult : result.concat(tmpResult)
                }
                return result
            }, getPreNode: function (setting, node) {
                if (!node) return null;
                for (var childKey = setting.data.key.children, p = node.parentTId ? node.getParentNode() : data.getRoot(setting), i = 0, l = p[childKey].length; i < l; i++) if (p[childKey][i] === node) return 0 == i ? null : p[childKey][i - 1];
                return null
            }, getRoot: function (setting) {
                return setting ? roots[setting.treeId] : null
            }, getRoots: function () {
                return roots
            }, getSetting: function (treeId) {
                return settings[treeId]
            }, getSettings: function () {
                return settings
            }, getZTreeTools: function (treeId) {
                var r = this.getRoot(this.getSetting(treeId));
                return r ? r.treeTools : null
            }, initCache: function (setting) {
                for (var i = 0, j = _init.caches.length; i < j; i++) _init.caches[i].apply(this, arguments)
            }, initNode: function (setting, level, node, parentNode, preNode, nextNode) {
                for (var i = 0, j = _init.nodes.length; i < j; i++) _init.nodes[i].apply(this, arguments)
            }, initRoot: function (setting) {
                for (var i = 0, j = _init.roots.length; i < j; i++) _init.roots[i].apply(this, arguments)
            }, isSelectedNode: function (setting, node) {
                for (var root = data.getRoot(setting), i = 0, j = root.curSelectedList.length; i < j; i++) if (node === root.curSelectedList[i]) return !0;
                return !1
            }, removeNodeCache: function (setting, node) {
                var childKey = setting.data.key.children;
                if (node[childKey]) for (var i = 0, l = node[childKey].length; i < l; i++) arguments.callee(setting, node[childKey][i]);
                data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = null
            }, removeSelectedNode: function (setting, node) {
                for (var root = data.getRoot(setting), i = 0, j = root.curSelectedList.length; i < j; i++) node !== root.curSelectedList[i] && data.getNodeCache(setting, root.curSelectedList[i].tId) || (root.curSelectedList.splice(i, 1), i--, j--)
            }, setCache: function (setting, cache) {
                caches[setting.treeId] = cache
            }, setRoot: function (setting, root) {
                roots[setting.treeId] = root
            }, setZTreeTools: function (setting, zTreeTools) {
                for (var i = 0, j = _init.zTreeTools.length; i < j; i++) _init.zTreeTools[i].apply(this, arguments)
            }, transformToArrayFormat: function (setting, nodes) {
                if (!nodes) return [];
                var childKey = setting.data.key.children, r = [];
                if (tools.isArray(nodes)) for (var i = 0, l = nodes.length; i < l; i++) r.push(nodes[i]), nodes[i][childKey] && (r = r.concat(data.transformToArrayFormat(setting, nodes[i][childKey]))); else r.push(nodes), nodes[childKey] && (r = r.concat(data.transformToArrayFormat(setting, nodes[childKey])));
                return r
            }, transformTozTreeFormat: function (setting, sNodes) {
                var i, l, key = setting.data.simpleData.idKey, parentKey = setting.data.simpleData.pIdKey,
                    childKey = setting.data.key.children;
                if (!key || "" == key || !sNodes) return [];
                if (tools.isArray(sNodes)) {
                    var r = [], tmpMap = [];
                    for (i = 0, l = sNodes.length; i < l; i++) tmpMap[sNodes[i][key]] = sNodes[i];
                    for (i = 0, l = sNodes.length; i < l; i++) tmpMap[sNodes[i][parentKey]] && sNodes[i][key] != sNodes[i][parentKey] ? (tmpMap[sNodes[i][parentKey]][childKey] || (tmpMap[sNodes[i][parentKey]][childKey] = []), tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i])) : r.push(sNodes[i]);
                    return r
                }
                return [sNodes]
            }
        }, event = {
            bindEvent: function (setting) {
                for (var i = 0, j = _init.bind.length; i < j; i++) _init.bind[i].apply(this, arguments)
            }, unbindEvent: function (setting) {
                for (var i = 0, j = _init.unbind.length; i < j; i++) _init.unbind[i].apply(this, arguments)
            }, bindTree: function (setting) {
                var eventParam = {treeId: setting.treeId}, o = setting.treeObj;
                setting.view.txtSelectedEnable || o.bind("selectstart", function (e) {
                    var n = e.originalEvent.srcElement.nodeName.toLowerCase();
                    return "input" === n || "textarea" === n
                }).css({"-moz-user-select": "-moz-none"}), o.bind("click", eventParam, event.proxy), o.bind("dblclick", eventParam, event.proxy), o.bind("mouseover", eventParam, event.proxy), o.bind("mouseout", eventParam, event.proxy), o.bind("mousedown", eventParam, event.proxy), o.bind("mouseup", eventParam, event.proxy), o.bind("contextmenu", eventParam, event.proxy)
            }, unbindTree: function (setting) {
                setting.treeObj.unbind("click", event.proxy).unbind("dblclick", event.proxy).unbind("mouseover", event.proxy).unbind("mouseout", event.proxy).unbind("mousedown", event.proxy).unbind("mouseup", event.proxy).unbind("contextmenu", event.proxy)
            }, doProxy: function (e) {
                for (var results = [], i = 0, j = _init.proxys.length; i < j; i++) {
                    var proxyResult = _init.proxys[i].apply(this, arguments);
                    if (results.push(proxyResult), proxyResult.stop) break
                }
                return results
            }, proxy: function (e) {
                var setting = data.getSetting(e.data.treeId);
                if (!tools.uCanDo(setting, e)) return !0;
                for (var results = event.doProxy(e), r = !0, i = 0, l = results.length; i < l; i++) {
                    var proxyResult = results[i];
                    proxyResult.nodeEventCallback && (!0, r = proxyResult.nodeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r), proxyResult.treeEventCallback && (!0, r = proxyResult.treeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r)
                }
                return r
            }
        }, handler = {
            onSwitchNode: function (event, node) {
                var setting = data.getSetting(event.data.treeId);
                if (node.open) {
                    if (0 == tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], !0)) return !0;
                    data.getRoot(setting).expandTriggerFlag = !0, view.switchNode(setting, node)
                } else {
                    if (0 == tools.apply(setting.callback.beforeExpand, [setting.treeId, node], !0)) return !0;
                    data.getRoot(setting).expandTriggerFlag = !0, view.switchNode(setting, node)
                }
                return !0
            }, onClickNode: function (event, node) {
                var setting = data.getSetting(event.data.treeId),
                    clickFlag = setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey) && data.isSelectedNode(setting, node) ? 0 : setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey) && setting.view.selectedMulti ? 2 : 1;
                return 0 == tools.apply(setting.callback.beforeClick, [setting.treeId, node, clickFlag], !0) || (0 === clickFlag ? view.cancelPreSelectedNode(setting, node) : view.selectNode(setting, node, 2 === clickFlag), setting.treeObj.trigger(consts.event.CLICK, [event, setting.treeId, node, clickFlag]), !0)
            }, onZTreeMousedown: function (event, node) {
                var setting = data.getSetting(event.data.treeId);
                return tools.apply(setting.callback.beforeMouseDown, [setting.treeId, node], !0) && tools.apply(setting.callback.onMouseDown, [event, setting.treeId, node]), !0
            }, onZTreeMouseup: function (event, node) {
                var setting = data.getSetting(event.data.treeId);
                return tools.apply(setting.callback.beforeMouseUp, [setting.treeId, node], !0) && tools.apply(setting.callback.onMouseUp, [event, setting.treeId, node]), !0
            }, onZTreeDblclick: function (event, node) {
                var setting = data.getSetting(event.data.treeId);
                return tools.apply(setting.callback.beforeDblClick, [setting.treeId, node], !0) && tools.apply(setting.callback.onDblClick, [event, setting.treeId, node]), !0
            }, onZTreeContextmenu: function (event, node) {
                var setting = data.getSetting(event.data.treeId);
                return tools.apply(setting.callback.beforeRightClick, [setting.treeId, node], !0) && tools.apply(setting.callback.onRightClick, [event, setting.treeId, node]), "function" != typeof setting.callback.onRightClick
            }
        }, tools = {
            apply: function (fun, param, defaultValue) {
                return "function" == typeof fun ? fun.apply(zt, param || []) : defaultValue
            }, canAsync: function (setting, node) {
                var childKey = setting.data.key.children;
                return setting.async.enable && node && node.isParent && !(node.zAsync || node[childKey] && node[childKey].length > 0)
            }, clone: function (obj) {
                if (null === obj) return null;
                var o = tools.isArray(obj) ? [] : {};
                for (var i in obj) o[i] = obj[i] instanceof Date ? new Date(obj[i].getTime()) : "object" == typeof obj[i] ? arguments.callee(obj[i]) : obj[i];
                return o
            }, eqs: function (str1, str2) {
                return str1.toLowerCase() === str2.toLowerCase()
            }, isArray: function (arr) {
                return "[object Array]" === Object.prototype.toString.apply(arr)
            }, $: function (node, exp, setting) {
                return exp && "string" != typeof exp && (setting = exp, exp = ""), "string" == typeof node ? $(node, setting ? setting.treeObj.get(0).ownerDocument : null) : $("#" + node.tId + exp, setting ? setting.treeObj : null)
            }, getMDom: function (setting, curDom, targetExpr) {
                if (!curDom) return null;
                for (; curDom && curDom.id !== setting.treeId;) {
                    for (var i = 0, l = targetExpr.length; curDom.tagName && i < l; i++) if (tools.eqs(curDom.tagName, targetExpr[i].tagName) && null !== curDom.getAttribute(targetExpr[i].attrName)) return curDom;
                    curDom = curDom.parentNode
                }
                return null
            }, getNodeMainDom: function (target) {
                return $(target).parent("li").get(0) || $(target).parentsUntil("li").parent().get(0)
            }, isChildOrSelf: function (dom, parentId) {
                return $(dom).closest("#" + parentId).length > 0
            }, uCanDo: function (setting, e) {
                return !0
            }
        }, view = {
            addNodes: function (setting, parentNode, newNodes, isSilent) {
                if (!setting.data.keep.leaf || !parentNode || parentNode.isParent) if (tools.isArray(newNodes) || (newNodes = [newNodes]), setting.data.simpleData.enable && (newNodes = data.transformTozTreeFormat(setting, newNodes)), parentNode) {
                    var target_switchObj = $$(parentNode, consts.id.SWITCH, setting),
                        target_icoObj = $$(parentNode, consts.id.ICON, setting),
                        target_ulObj = $$(parentNode, consts.id.UL, setting);
                    parentNode.open || (view.replaceSwitchClass(parentNode, target_switchObj, consts.folder.CLOSE), view.replaceIcoClass(parentNode, target_icoObj, consts.folder.CLOSE), parentNode.open = !1, target_ulObj.css({display: "none"})), data.addNodesData(setting, parentNode, newNodes), view.createNodes(setting, parentNode.level + 1, newNodes, parentNode), isSilent || view.expandCollapseParentNode(setting, parentNode, !0)
                } else data.addNodesData(setting, data.getRoot(setting), newNodes), view.createNodes(setting, 0, newNodes, null)
            }, appendNodes: function (setting, level, nodes, parentNode, initFlag, openFlag) {
                if (!nodes) return [];
                for (var html = [], childKey = setting.data.key.children, i = 0, l = nodes.length; i < l; i++) {
                    var node = nodes[i];
                    if (initFlag) {
                        var tmpPNode = parentNode || data.getRoot(setting), tmpPChild = tmpPNode[childKey],
                            isFirstNode = tmpPChild.length == nodes.length && 0 == i,
                            isLastNode = i == nodes.length - 1;
                        data.initNode(setting, level, node, parentNode, isFirstNode, isLastNode, openFlag), data.addNodeCache(setting, node)
                    }
                    var childHtml = [];
                    node[childKey] && node[childKey].length > 0 && (childHtml = view.appendNodes(setting, level + 1, node[childKey], node, initFlag, openFlag && node.open)), openFlag && (view.makeDOMNodeMainBefore(html, setting, node), view.makeDOMNodeLine(html, setting, node), data.getBeforeA(setting, node, html), view.makeDOMNodeNameBefore(html, setting, node), data.getInnerBeforeA(setting, node, html), view.makeDOMNodeIcon(html, setting, node), data.getInnerAfterA(setting, node, html), view.makeDOMNodeNameAfter(html, setting, node), data.getAfterA(setting, node, html), node.isParent && node.open && view.makeUlHtml(setting, node, html, childHtml.join("")), view.makeDOMNodeMainAfter(html, setting, node), data.addCreatedNode(setting, node))
                }
                return html
            }, appendParentULDom: function (setting, node) {
                var html = [], nObj = $$(node, setting);
                !nObj.get(0) && node.parentTId && (view.appendParentULDom(setting, node.getParentNode()), nObj = $$(node, setting));
                var ulObj = $$(node, consts.id.UL, setting);
                ulObj.get(0) && ulObj.remove();
                var childKey = setting.data.key.children,
                    childHtml = view.appendNodes(setting, node.level + 1, node[childKey], node, !1, !0);
                view.makeUlHtml(setting, node, html, childHtml.join("")), nObj.append(html.join(""))
            }, asyncNode: function (setting, node, isSilent, callback) {
                var i, l;
                if (node && !node.isParent) return tools.apply(callback), !1;
                if (node && node.isAjaxing) return !1;
                if (0 == tools.apply(setting.callback.beforeAsync, [setting.treeId, node], !0)) return tools.apply(callback), !1;
                if (node) {
                    node.isAjaxing = !0;
                    var icoObj = $$(node, consts.id.ICON, setting);
                    icoObj.attr({style: "", class: consts.className.BUTTON + " " + consts.className.ICO_LOADING})
                }
                var tmpParam = {};
                for (i = 0, l = setting.async.autoParam.length; node && i < l; i++) {
                    var pKey = setting.async.autoParam[i].split("="), spKey = pKey;
                    pKey.length > 1 && (spKey = pKey[1], pKey = pKey[0]), tmpParam[spKey] = node[pKey]
                }
                if (tools.isArray(setting.async.otherParam)) for (i = 0, l = setting.async.otherParam.length; i < l; i += 2) tmpParam[setting.async.otherParam[i]] = setting.async.otherParam[i + 1]; else for (var p in setting.async.otherParam) tmpParam[p] = setting.async.otherParam[p];
                var _tmpV = data.getRoot(setting)._ver;
                return $.ajax({
                    contentType: setting.async.contentType,
                    type: setting.async.type,
                    url: tools.apply(setting.async.url, [setting.treeId, node], setting.async.url),
                    data: tmpParam,
                    dataType: setting.async.dataType,
                    success: function (msg) {
                        if (_tmpV == data.getRoot(setting)._ver) {
                            var newNodes = [];
                            try {
                                newNodes = msg && 0 != msg.length ? "string" == typeof msg ? eval("(" + msg + ")") : msg : []
                            } catch (err) {
                                newNodes = msg
                            }
                            node && (node.isAjaxing = null, node.zAsync = !0), view.setNodeLineIcos(setting, node), newNodes && "" !== newNodes ? (newNodes = tools.apply(setting.async.dataFilter, [setting.treeId, node, newNodes], newNodes), view.addNodes(setting, node, newNodes ? tools.clone(newNodes) : [], !!isSilent)) : view.addNodes(setting, node, [], !!isSilent), setting.treeObj.trigger(consts.event.ASYNC_SUCCESS, [setting.treeId, node, msg]), tools.apply(callback)
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        _tmpV == data.getRoot(setting)._ver && (node && (node.isAjaxing = null), view.setNodeLineIcos(setting, node), setting.treeObj.trigger(consts.event.ASYNC_ERROR, [setting.treeId, node, XMLHttpRequest, textStatus, errorThrown]))
                    }
                }), !0
            }, cancelPreSelectedNode: function (setting, node) {
                for (var list = data.getRoot(setting).curSelectedList, j = list.length - 1; j >= 0; j--) if ((!node || node === list[j]) && ($$(list[j], consts.id.A, setting).removeClass(consts.node.CURSELECTED), node)) {
                    data.removeSelectedNode(setting, node);
                    break
                }
                node || (data.getRoot(setting).curSelectedList = [])
            }, createNodeCallback: function (setting) {
                if (setting.callback.onNodeCreated || setting.view.addDiyDom) for (var root = data.getRoot(setting); root.createdNodes.length > 0;) {
                    var node = root.createdNodes.shift();
                    tools.apply(setting.view.addDiyDom, [setting.treeId, node]), setting.callback.onNodeCreated && setting.treeObj.trigger(consts.event.NODECREATED, [setting.treeId, node])
                }
            }, createNodes: function (setting, level, nodes, parentNode) {
                if (nodes && 0 != nodes.length) {
                    var root = data.getRoot(setting), childKey = setting.data.key.children,
                        openFlag = !parentNode || parentNode.open || !!$$(parentNode[childKey][0], setting).get(0);
                    root.createdNodes = [];
                    var zTreeHtml = view.appendNodes(setting, level, nodes, parentNode, !0, openFlag);
                    if (parentNode) {
                        var ulObj = $$(parentNode, consts.id.UL, setting);
                        ulObj.get(0) && ulObj.append(zTreeHtml.join(""))
                    } else setting.treeObj.append(zTreeHtml.join(""));
                    view.createNodeCallback(setting)
                }
            }, destroy: function (setting) {
                setting && (data.initCache(setting), data.initRoot(setting), event.unbindTree(setting), event.unbindEvent(setting), setting.treeObj.empty(), delete settings[setting.treeId])
            }, expandCollapseNode: function (setting, node, expandFlag, animateFlag, callback) {
                var root = data.getRoot(setting), childKey = setting.data.key.children;
                if (!node) return void tools.apply(callback, []);
                if (root.expandTriggerFlag) {
                    var _callback = callback;
                    callback = function () {
                        _callback && _callback(), node.open ? setting.treeObj.trigger(consts.event.EXPAND, [setting.treeId, node]) : setting.treeObj.trigger(consts.event.COLLAPSE, [setting.treeId, node])
                    }, root.expandTriggerFlag = !1
                }
                if (!node.open && node.isParent && (!$$(node, consts.id.UL, setting).get(0) || node[childKey] && node[childKey].length > 0 && !$$(node[childKey][0], setting).get(0)) && (view.appendParentULDom(setting, node), view.createNodeCallback(setting)), node.open == expandFlag) return void tools.apply(callback, []);
                var ulObj = $$(node, consts.id.UL, setting), switchObj = $$(node, consts.id.SWITCH, setting),
                    icoObj = $$(node, consts.id.ICON, setting);
                node.isParent ? (node.open = !node.open, node.iconOpen && node.iconClose && icoObj.attr("style", view.makeNodeIcoStyle(setting, node)), node.open ? (view.replaceSwitchClass(node, switchObj, consts.folder.OPEN), view.replaceIcoClass(node, icoObj, consts.folder.OPEN), 0 == animateFlag || "" == setting.view.expandSpeed ? (ulObj.show(), tools.apply(callback, [])) : node[childKey] && node[childKey].length > 0 ? ulObj.slideDown(setting.view.expandSpeed, callback) : (ulObj.show(), tools.apply(callback, []))) : (switchObj.hasClass("center_open") && (switchObj.css("margin", "12px 0 -2px 1px"), window.setTimeout(function () {
                    switchObj.removeAttr("style")
                }, 100)), view.replaceSwitchClass(node, switchObj, consts.folder.CLOSE), view.replaceIcoClass(node, icoObj, consts.folder.CLOSE), 0 != animateFlag && "" != setting.view.expandSpeed && node[childKey] && node[childKey].length > 0 ? ulObj.slideUp(setting.view.expandSpeed, callback) : (ulObj.hide(), tools.apply(callback, [])))) : tools.apply(callback, [])
            }, expandCollapseParentNode: function (setting, node, expandFlag, animateFlag, callback) {
                if (node) {
                    if (!node.parentTId) return void view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback);
                    view.expandCollapseNode(setting, node, expandFlag, animateFlag), node.parentTId && view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, animateFlag, callback)
                }
            }, expandCollapseSonNode: function (setting, node, expandFlag, animateFlag, callback) {
                var root = data.getRoot(setting), childKey = setting.data.key.children,
                    treeNodes = node ? node[childKey] : root[childKey], selfAnimateSign = !node && animateFlag,
                    expandTriggerFlag = data.getRoot(setting).expandTriggerFlag;
                if (data.getRoot(setting).expandTriggerFlag = !1, treeNodes) for (var i = 0, l = treeNodes.length; i < l; i++) treeNodes[i] && view.expandCollapseSonNode(setting, treeNodes[i], expandFlag, selfAnimateSign);
                data.getRoot(setting).expandTriggerFlag = expandTriggerFlag, view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback)
            }, makeDOMNodeIcon: function (html, setting, node) {
                var nameStr = data.getNodeName(setting, node),
                    name = setting.view.nameIsHTML ? nameStr : nameStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                html.push("<span id='", node.tId, consts.id.ICON, "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(setting, node), "' style='", view.makeNodeIcoStyle(setting, node), "'></span><span id='", node.tId, consts.id.SPAN, "'>", name, "</span>")
            }, makeDOMNodeLine: function (html, setting, node) {
                html.push("<span id='", node.tId, consts.id.SWITCH, "' title='' class='", view.makeNodeLineClass(setting, node), "' treeNode", consts.id.SWITCH, "></span>")
            }, makeDOMNodeMainAfter: function (html, setting, node) {
                html.push("</li>")
            }, makeDOMNodeMainBefore: function (html, setting, node) {
                html.push("<li id='", node.tId, "' class='", consts.className.LEVEL, node.level, "' tabindex='0' hidefocus='true' treenode>")
            }, makeDOMNodeNameAfter: function (html, setting, node) {
                html.push("</a>")
            }, makeDOMNodeNameBefore: function (html, setting, node) {
                var title = data.getNodeTitle(setting, node), url = view.makeNodeUrl(setting, node),
                    fontcss = view.makeNodeFontCss(setting, node), fontStyle = [];
                for (var f in fontcss) fontStyle.push(f, ":", fontcss[f], ";");
                html.push("<a id='", node.tId, consts.id.A, "' class='", consts.className.LEVEL, node.level, "' treeNode", consts.id.A, ' onclick="', node.click || "", '" ', null != url && url.length > 0 ? "href='" + url + "'" : "", " target='", view.makeNodeTarget(node), "' style='", fontStyle.join(""), "'"), tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle) && title && html.push("title='", title.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'"), html.push(">")
            }, makeNodeFontCss: function (setting, node) {
                var fontCss = tools.apply(setting.view.fontCss, [setting.treeId, node], setting.view.fontCss);
                return fontCss && "function" != typeof fontCss ? fontCss : {}
            }, makeNodeIcoClass: function (setting, node) {
                var icoCss = ["ico"], iconFont = [], iconJustify = "", showIconFont = !!setting.view.showIconFont;
                if (!node.isAjaxing) if (iconJustify = node.isParent ? node.open ? consts.folder.OPEN : consts.folder.CLOSE : consts.folder.DOCU, showIconFont) {
                    icoCss = [];
                    var icon = node.isParent && node.iconOpen && node.iconClose ? node.open ? node.iconOpen : node.iconClose : node.icon;
                    icon ? iconFont.push(icon) : iconFont[0] = (node.iconSkin ? node.iconSkin + "_" : "ico_") + iconJustify, iconFont.push("fa_justify_" + iconJustify), 0 != setting.view.showIcon && tools.apply(setting.view.showIcon, [setting.treeId, node], !0) || (iconFont = [])
                } else icoCss[0] = (node.iconSkin ? node.iconSkin + "_" : "") + icoCss[0], icoCss.push(iconJustify);
                return consts.className.BUTTON + " " + icoCss.join("_") + " " + iconFont.join(" ")
            }, makeNodeIcoStyle: function (setting, node) {
                var icoStyle = [], showIconFont = !!setting.view.showIconFont;
                if (!node.isAjaxing) {
                    var icon = node.isParent && node.iconOpen && node.iconClose ? node.open ? node.iconOpen : node.iconClose : node.icon;
                    icon && !showIconFont && icoStyle.push("background:url(", icon, ") 0 0 no-repeat;"), 0 != setting.view.showIcon && tools.apply(setting.view.showIcon, [setting.treeId, node], !0) || icoStyle.push("width:0px;height:0px;")
                }
                return icoStyle.join("")
            }, makeNodeLineClass: function (setting, node) {
                var lineClass = [];
                return setting.view.showLine ? 0 == node.level && node.isFirstNode && node.isLastNode ? lineClass.push(consts.line.ROOT) : 0 == node.level && node.isFirstNode ? lineClass.push(consts.line.ROOTS) : node.isLastNode ? lineClass.push(consts.line.BOTTOM) : lineClass.push(consts.line.CENTER) : lineClass.push(consts.line.NOLINE), node.isParent ? lineClass.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE) : lineClass.push(consts.folder.DOCU), view.makeNodeLineClassEx(node) + lineClass.join("_")
            }, makeNodeLineClassEx: function (node) {
                return consts.className.BUTTON + " " + consts.className.LEVEL + node.level + " " + consts.className.SWITCH + " "
            }, makeNodeTarget: function (node) {
                return node.target || "_blank"
            }, makeNodeUrl: function (setting, node) {
                var urlKey = setting.data.key.url;
                return node[urlKey] ? node[urlKey] : null
            }, makeUlHtml: function (setting, node, html, content) {
                html.push("<ul id='", node.tId, consts.id.UL, "' class='", consts.className.LEVEL, node.level, " ", view.makeUlLineClass(setting, node), "' style='display:", node.open ? "block" : "none", "'>"), html.push(content), html.push("</ul>")
            }, makeUlLineClass: function (setting, node) {
                return setting.view.showLine && !node.isLastNode ? consts.line.LINE : ""
            }, removeChildNodes: function (setting, node) {
                if (node) {
                    var childKey = setting.data.key.children, nodes = node[childKey];
                    if (nodes) {
                        for (var i = 0, l = nodes.length; i < l; i++) data.removeNodeCache(setting, nodes[i]);
                        if (data.removeSelectedNode(setting), delete node[childKey], setting.data.keep.parent) $$(node, consts.id.UL, setting).empty(); else {
                            node.isParent = !1, node.open = !1;
                            var tmp_switchObj = $$(node, consts.id.SWITCH, setting),
                                tmp_icoObj = $$(node, consts.id.ICON, setting);
                            view.replaceSwitchClass(node, tmp_switchObj, consts.folder.DOCU), view.replaceIcoClass(node, tmp_icoObj, consts.folder.DOCU), $$(node, consts.id.UL, setting).remove()
                        }
                    }
                }
            }, setFirstNode: function (setting, parentNode) {
                var childKey = setting.data.key.children;
                parentNode[childKey].length > 0 && (parentNode[childKey][0].isFirstNode = !0)
            }, setLastNode: function (setting, parentNode) {
                var childKey = setting.data.key.children, childLength = parentNode[childKey].length;
                childLength > 0 && (parentNode[childKey][childLength - 1].isLastNode = !0)
            }, removeNode: function (setting, node) {
                var root = data.getRoot(setting), childKey = setting.data.key.children,
                    parentNode = node.parentTId ? node.getParentNode() : root;
                if (node.isFirstNode = !1, node.isLastNode = !1, node.getPreNode = function () {
                    return null
                }, node.getNextNode = function () {
                    return null
                }, data.getNodeCache(setting, node.tId)) {
                    $$(node, setting).remove(), data.removeNodeCache(setting, node), data.removeSelectedNode(setting, node);
                    for (var i = 0, l = parentNode[childKey].length; i < l; i++) if (parentNode[childKey][i].tId == node.tId) {
                        parentNode[childKey].splice(i, 1);
                        break
                    }
                    view.setFirstNode(setting, parentNode), view.setLastNode(setting, parentNode);
                    var tmp_ulObj, tmp_switchObj, tmp_icoObj, childLength = parentNode[childKey].length;
                    if (setting.data.keep.parent || 0 != childLength) {
                        if (setting.view.showLine && childLength > 0) {
                            var newLast = parentNode[childKey][childLength - 1];
                            if (tmp_ulObj = $$(newLast, consts.id.UL, setting), tmp_switchObj = $$(newLast, consts.id.SWITCH, setting), tmp_icoObj = $$(newLast, consts.id.ICON, setting), parentNode == root) if (1 == parentNode[childKey].length) view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.ROOT); else {
                                var tmp_first_switchObj = $$(parentNode[childKey][0], consts.id.SWITCH, setting);
                                view.replaceSwitchClass(parentNode[childKey][0], tmp_first_switchObj, consts.line.ROOTS), view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM)
                            } else view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM);
                            tmp_ulObj.removeClass(consts.line.LINE)
                        }
                    } else parentNode.isParent = !1, parentNode.open = !1, tmp_ulObj = $$(parentNode, consts.id.UL, setting), tmp_switchObj = $$(parentNode, consts.id.SWITCH, setting), tmp_icoObj = $$(parentNode, consts.id.ICON, setting), view.replaceSwitchClass(parentNode, tmp_switchObj, consts.folder.DOCU), view.replaceIcoClass(parentNode, tmp_icoObj, consts.folder.DOCU), tmp_ulObj.css("display", "none")
                }
            }, replaceIcoClass: function (node, obj, newName) {
                if (obj && !node.isAjaxing) {
                    var tmpName = obj.attr("class");
                    if (void 0 != tmpName) {
                        var tmpList = tmpName.split("_");
                        switch (newName) {
                            case consts.folder.OPEN:
                            case consts.folder.CLOSE:
                            case consts.folder.DOCU:
                                tmpList[tmpList.length - 1] = newName
                        }
                        obj.attr("class", tmpList.join("_"))
                    }
                }
            }, replaceSwitchClass: function (node, obj, newName) {
                if (obj) {
                    var tmpName = obj.attr("class");
                    if (void 0 != tmpName) {
                        var tmpList = tmpName.split("_");
                        switch (newName) {
                            case consts.line.ROOT:
                            case consts.line.ROOTS:
                            case consts.line.CENTER:
                            case consts.line.BOTTOM:
                            case consts.line.NOLINE:
                                tmpList[0] = view.makeNodeLineClassEx(node) + newName;
                                break;
                            case consts.folder.OPEN:
                            case consts.folder.CLOSE:
                            case consts.folder.DOCU:
                                tmpList[1] = newName
                        }
                        obj.attr("class", tmpList.join("_")), newName !== consts.folder.DOCU ? obj.removeAttr("disabled") : obj.attr("disabled", "disabled")
                    }
                }
            }, selectNode: function (setting, node, addFlag) {
                addFlag || view.cancelPreSelectedNode(setting);
                var currentSelectA = $$(node, consts.id.A, setting);
                currentSelectA.addClass(consts.node.CURSELECTED), currentSelectA.prev("span").hasClass("center_close") && ($("." + consts.node.SELECTLI).removeClass(consts.node.SELECTLI), currentSelectA.parent().addClass(consts.node.SELECTLI)), data.addSelectedNode(setting, node)
            }, setNodeFontCss: function (setting, treeNode) {
                var aObj = $$(treeNode, consts.id.A, setting), fontCss = view.makeNodeFontCss(setting, treeNode);
                fontCss && aObj.css(fontCss)
            }, setNodeLineIcos: function (setting, node) {
                if (node) {
                    var switchObj = $$(node, consts.id.SWITCH, setting), ulObj = $$(node, consts.id.UL, setting),
                        icoObj = $$(node, consts.id.ICON, setting), ulLine = view.makeUlLineClass(setting, node);
                    0 == ulLine.length ? ulObj.removeClass(consts.line.LINE) : ulObj.addClass(ulLine), switchObj.attr("class", view.makeNodeLineClass(setting, node)), node.isParent ? switchObj.removeAttr("disabled") : switchObj.attr("disabled", "disabled"), icoObj.removeAttr("style"), icoObj.attr("style", view.makeNodeIcoStyle(setting, node)), icoObj.attr("class", view.makeNodeIcoClass(setting, node))
                }
            }, setNodeName: function (setting, node) {
                var title = data.getNodeTitle(setting, node), nObj = $$(node, consts.id.SPAN, setting);
                if (nObj.empty(), setting.view.nameIsHTML ? nObj.html(data.getNodeName(setting, node)) : nObj.text(data.getNodeName(setting, node)), tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle)) {
                    $$(node, consts.id.A, setting).attr("title", title || "")
                }
            }, setNodeTarget: function (setting, node) {
                $$(node, consts.id.A, setting).attr("target", view.makeNodeTarget(node))
            }, setNodeUrl: function (setting, node) {
                var aObj = $$(node, consts.id.A, setting), url = view.makeNodeUrl(setting, node);
                null == url || 0 == url.length ? aObj.removeAttr("href") : aObj.attr("href", url)
            }, switchNode: function (setting, node) {
                if (node.open || !tools.canAsync(setting, node)) view.expandCollapseNode(setting, node, !node.open); else if (setting.async.enable) {
                    if (!view.asyncNode(setting, node)) return void view.expandCollapseNode(setting, node, !node.open)
                } else node && view.expandCollapseNode(setting, node, !node.open)
            }
        };
        $.fn.zTree = {
            consts: _consts, _z: {tools: tools, view: view, event: event, data: data}, getZTreeObj: function (treeId) {
                var o = data.getZTreeTools(treeId);
                return o || null
            }, destroy: function (treeId) {
                if (treeId && treeId.length > 0) view.destroy(data.getSetting(treeId)); else for (var s in settings) view.destroy(settings[s])
            }, init: function (obj, zSetting, zNodes) {
                var setting = tools.clone(_setting);
                $.extend(!0, setting, zSetting), setting.treeId = obj.attr("id"), setting.treeObj = obj, setting.treeObj.empty(), settings[setting.treeId] = setting, void 0 === document.body.style.maxHeight && (setting.view.expandSpeed = ""), data.initRoot(setting);
                var root = data.getRoot(setting), childKey = setting.data.key.children;
                zNodes = zNodes ? tools.clone(tools.isArray(zNodes) ? zNodes : [zNodes]) : [], setting.data.simpleData.enable ? root[childKey] = data.transformTozTreeFormat(setting, zNodes) : root[childKey] = zNodes, data.initCache(setting), event.unbindTree(setting), event.bindTree(setting), event.unbindEvent(setting), event.bindEvent(setting);
                var zTreeTools = {
                    setting: setting, addNodes: function (parentNode, newNodes, isSilent) {
                        function addCallback() {
                            view.addNodes(setting, parentNode, xNewNodes, 1 == isSilent)
                        }

                        if (!newNodes) return null;
                        if (parentNode || (parentNode = null), parentNode && !parentNode.isParent && setting.data.keep.leaf) return null;
                        var xNewNodes = tools.clone(tools.isArray(newNodes) ? newNodes : [newNodes]);
                        return tools.canAsync(setting, parentNode) ? view.asyncNode(setting, parentNode, isSilent, addCallback) : addCallback(), xNewNodes
                    }, cancelSelectedNode: function (node) {
                        view.cancelPreSelectedNode(setting, node)
                    }, destroy: function () {
                        view.destroy(setting)
                    }, expandAll: function (expandFlag) {
                        return expandFlag = !!expandFlag, view.expandCollapseSonNode(setting, null, expandFlag, !0), expandFlag
                    }, expandNode: function (node, expandFlag, sonSign, focus, callbackFlag) {
                        if (!node || !node.isParent) return null;
                        if (!0 !== expandFlag && !1 !== expandFlag && (expandFlag = !node.open), (callbackFlag = !!callbackFlag) && expandFlag && 0 == tools.apply(setting.callback.beforeExpand, [setting.treeId, node], !0)) return null;
                        if (callbackFlag && !expandFlag && 0 == tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], !0)) return null;
                        if (expandFlag && node.parentTId && view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, !1), expandFlag === node.open && !sonSign) return null;
                        if (data.getRoot(setting).expandTriggerFlag = callbackFlag, !tools.canAsync(setting, node) && sonSign) view.expandCollapseSonNode(setting, node, expandFlag, !0, function () {
                            if (!1 !== focus) try {
                                $$(node, setting).focus().blur()
                            } catch (e) {
                            }
                        }); else if (node.open = !expandFlag, view.switchNode(this.setting, node), !1 !== focus) try {
                            $$(node, setting).focus().blur()
                        } catch (e) {
                        }
                        return expandFlag
                    }, getNodes: function () {
                        return data.getNodes(setting)
                    }, getNodeByParam: function (key, value, parentNode) {
                        return key ? data.getNodeByParam(setting, parentNode ? parentNode[setting.data.key.children] : data.getNodes(setting), key, value) : null
                    }, getNodeByTId: function (tId) {
                        return data.getNodeCache(setting, tId)
                    }, getNodesByParam: function (key, value, parentNode) {
                        return key ? data.getNodesByParam(setting, parentNode ? parentNode[setting.data.key.children] : data.getNodes(setting), key, value) : null
                    }, getNodesByParamFuzzy: function (key, value, parentNode) {
                        return key ? data.getNodesByParamFuzzy(setting, parentNode ? parentNode[setting.data.key.children] : data.getNodes(setting), key, value) : null
                    }, getNodesByFilter: function (filter, isSingle, parentNode, invokeParam) {
                        return isSingle = !!isSingle, filter && "function" == typeof filter ? data.getNodesByFilter(setting, parentNode ? parentNode[setting.data.key.children] : data.getNodes(setting), filter, isSingle, invokeParam) : isSingle ? null : []
                    }, getNodeIndex: function (node) {
                        if (!node) return null;
                        for (var childKey = setting.data.key.children, parentNode = node.parentTId ? node.getParentNode() : data.getRoot(setting), i = 0, l = parentNode[childKey].length; i < l; i++) if (parentNode[childKey][i] == node) return i;
                        return -1
                    }, getSelectedNodes: function () {
                        for (var r = [], list = data.getRoot(setting).curSelectedList, i = 0, l = list.length; i < l; i++) r.push(list[i]);
                        return r
                    }, isSelectedNode: function (node) {
                        return data.isSelectedNode(setting, node)
                    }, reAsyncChildNodes: function (parentNode, reloadType, isSilent) {
                        if (this.setting.async.enable) {
                            var isRoot = !parentNode;
                            if (isRoot && (parentNode = data.getRoot(setting)), "refresh" == reloadType) {
                                for (var childKey = this.setting.data.key.children, i = 0, l = parentNode[childKey] ? parentNode[childKey].length : 0; i < l; i++) data.removeNodeCache(setting, parentNode[childKey][i]);
                                if (data.removeSelectedNode(setting), parentNode[childKey] = [], isRoot) this.setting.treeObj.empty(); else {
                                    $$(parentNode, consts.id.UL, setting).empty()
                                }
                            }
                            view.asyncNode(this.setting, isRoot ? null : parentNode, !!isSilent)
                        }
                    }, refresh: function () {
                        this.setting.treeObj.empty();
                        var root = data.getRoot(setting), nodes = root[setting.data.key.children];
                        data.initRoot(setting), root[setting.data.key.children] = nodes, data.initCache(setting), view.createNodes(setting, 0, root[setting.data.key.children])
                    }, removeChildNodes: function (node) {
                        if (!node) return null;
                        var childKey = setting.data.key.children, nodes = node[childKey];
                        return view.removeChildNodes(setting, node), nodes || null
                    }, removeNode: function (node, callbackFlag) {
                        node && ((callbackFlag = !!callbackFlag) && 0 == tools.apply(setting.callback.beforeRemove, [setting.treeId, node], !0) || (view.removeNode(setting, node), callbackFlag && this.setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node])))
                    }, selectNode: function (node, addFlag) {
                        if (node && tools.uCanDo(setting)) {
                            if (addFlag = setting.view.selectedMulti && addFlag, node.parentTId) view.expandCollapseParentNode(setting, node.getParentNode(), !0, !1, function () {
                                try {
                                    $$(node, setting).focus().blur()
                                } catch (e) {
                                }
                            }); else try {
                                $$(node, setting).focus().blur()
                            } catch (e) {
                            }
                            view.selectNode(setting, node, addFlag)
                        }
                    }, transformTozTreeNodes: function (simpleNodes) {
                        return data.transformTozTreeFormat(setting, simpleNodes)
                    }, transformToArray: function (nodes) {
                        return data.transformToArrayFormat(setting, nodes)
                    }, updateNode: function (node, checkTypeFlag) {
                        if (node) {
                            $$(node, setting).get(0) && tools.uCanDo(setting) && (view.setNodeName(setting, node), view.setNodeTarget(setting, node), view.setNodeUrl(setting, node), view.setNodeLineIcos(setting, node), view.setNodeFontCss(setting, node))
                        }
                    }
                };
                return root.treeTools = zTreeTools, data.setZTreeTools(setting, zTreeTools), root[childKey] && root[childKey].length > 0 ? view.createNodes(setting, 0, root[childKey]) : setting.async.enable && setting.async.url && "" !== setting.async.url && view.asyncNode(setting), zTreeTools
            }
        };
        var zt = $.fn.zTree, $$ = tools.$, consts = zt.consts
    }(jQuery), function ($) {
        var _consts = {
            event: {CHECK: "ztree_check"},
            id: {CHECK: "_check"},
            checkbox: {
                STYLE: "checkbox",
                DEFAULT: "chk",
                DISABLED: "disable",
                FALSE: "false",
                TRUE: "true",
                FULL: "full",
                PART: "part",
                FOCUS: "focus"
            },
            radio: {STYLE: "radio", TYPE_ALL: "all", TYPE_LEVEL: "level"}
        }, _setting = {
            check: {
                enable: !1,
                autoCheckTrigger: !1,
                chkStyle: _consts.checkbox.STYLE,
                nocheckInherit: !1,
                chkDisabledInherit: !1,
                radioType: _consts.radio.TYPE_LEVEL,
                chkboxType: {Y: "ps", N: "ps"}
            }, data: {key: {checked: "checked"}}, callback: {beforeCheck: null, onCheck: null}
        }, _initRoot = function (setting) {
            data.getRoot(setting).radioCheckedList = []
        }, _initCache = function (treeId) {
        }, _bindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.bind(c.CHECK, function (event, srcEvent, treeId, node) {
                event.srcEvent = srcEvent, tools.apply(setting.callback.onCheck, [event, treeId, node])
            })
        }, _unbindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.unbind(c.CHECK)
        }, _eventProxy = function (e) {
            var target = e.target, setting = data.getSetting(e.data.treeId), tId = "", node = null, nodeEventType = "",
                nodeEventCallback = null;
            if (tools.eqs(e.type, "mouseover") ? setting.check.enable && tools.eqs(target.tagName, "span") && null !== target.getAttribute("treeNode" + consts.id.CHECK) && (tId = tools.getNodeMainDom(target).id, nodeEventType = "mouseoverCheck") : tools.eqs(e.type, "mouseout") ? setting.check.enable && tools.eqs(target.tagName, "span") && null !== target.getAttribute("treeNode" + consts.id.CHECK) && (tId = tools.getNodeMainDom(target).id, nodeEventType = "mouseoutCheck") : tools.eqs(e.type, "click") && setting.check.enable && tools.eqs(target.tagName, "span") && null !== target.getAttribute("treeNode" + consts.id.CHECK) && (tId = tools.getNodeMainDom(target).id, nodeEventType = "checkNode"), tId.length > 0) switch (node = data.getNodeCache(setting, tId), nodeEventType) {
                case"checkNode":
                    nodeEventCallback = _handler.onCheckNode;
                    break;
                case"mouseoverCheck":
                    nodeEventCallback = _handler.onMouseoverCheck;
                    break;
                case"mouseoutCheck":
                    nodeEventCallback = _handler.onMouseoutCheck
            }
            return {
                stop: "checkNode" === nodeEventType,
                node: node,
                nodeEventType: nodeEventType,
                nodeEventCallback: nodeEventCallback,
                treeEventType: "",
                treeEventCallback: null
            }
        }, _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
            if (n) {
                var checkedKey = setting.data.key.checked;
                if ("string" == typeof n[checkedKey] && (n[checkedKey] = tools.eqs(n[checkedKey], "true")), n[checkedKey] = !!n[checkedKey], n.checkedOld = n[checkedKey], "string" == typeof n.nocheck && (n.nocheck = tools.eqs(n.nocheck, "true")), n.nocheck = !!n.nocheck || setting.check.nocheckInherit && parentNode && !!parentNode.nocheck, "string" == typeof n.chkDisabled && (n.chkDisabled = tools.eqs(n.chkDisabled, "true")), n.chkDisabled = !!n.chkDisabled || setting.check.chkDisabledInherit && parentNode && !!parentNode.chkDisabled, "string" == typeof n.halfCheck && (n.halfCheck = tools.eqs(n.halfCheck, "true")), n.halfCheck = !!n.halfCheck, n.check_Child_State = -1, n.check_Focus = !1, n.getCheckStatus = function () {
                    return data.getCheckStatus(setting, n)
                }, setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL && n[checkedKey]) {
                    data.getRoot(setting).radioCheckedList.push(n)
                }
            }
        }, _beforeA = function (setting, node, html) {
            setting.data.key.checked;
            setting.check.enable && (data.makeChkFlag(setting, node), html.push("<span ID='", node.tId, consts.id.CHECK, "' class='", view.makeChkClass(setting, node), "' treeNode", consts.id.CHECK, !0 === node.nocheck ? " style='display:none;'" : "", "></span>"))
        }, _zTreeTools = function (setting, zTreeTools) {
            zTreeTools.checkNode = function (node, checked, checkTypeFlag, callbackFlag) {
                var checkedKey = this.setting.data.key.checked;
                if (!0 !== node.chkDisabled && (!0 !== checked && !1 !== checked && (checked = !node[checkedKey]), callbackFlag = !!callbackFlag, (node[checkedKey] !== checked || checkTypeFlag) && (!callbackFlag || 0 != tools.apply(this.setting.callback.beforeCheck, [this.setting.treeId, node], !0)) && tools.uCanDo(this.setting) && this.setting.check.enable && !0 !== node.nocheck)) {
                    node[checkedKey] = checked;
                    var checkObj = $$(node, consts.id.CHECK, this.setting);
                    (checkTypeFlag || this.setting.check.chkStyle === consts.radio.STYLE) && view.checkNodeRelation(this.setting, node), view.setChkClass(this.setting, checkObj, node), view.repairParentChkClassWithSelf(this.setting, node), callbackFlag && this.setting.treeObj.trigger(consts.event.CHECK, [null, this.setting.treeId, node])
                }
            }, zTreeTools.checkAllNodes = function (checked) {
                view.repairAllChk(this.setting, !!checked)
            }, zTreeTools.getCheckedNodes = function (checked) {
                var childKey = this.setting.data.key.children;
                return checked = !1 !== checked, data.getTreeCheckedNodes(this.setting, data.getRoot(this.setting)[childKey], checked)
            }, zTreeTools.getChangeCheckedNodes = function () {
                var childKey = this.setting.data.key.children;
                return data.getTreeChangeCheckedNodes(this.setting, data.getRoot(this.setting)[childKey])
            }, zTreeTools.setChkDisabled = function (node, disabled, inheritParent, inheritChildren) {
                disabled = !!disabled, inheritParent = !!inheritParent, inheritChildren = !!inheritChildren, view.repairSonChkDisabled(this.setting, node, disabled, inheritChildren), view.repairParentChkDisabled(this.setting, node.getParentNode(), disabled, inheritParent)
            };
            var _updateNode = zTreeTools.updateNode;
            zTreeTools.updateNode = function (node, checkTypeFlag) {
                if (_updateNode && _updateNode.apply(zTreeTools, arguments), node && this.setting.check.enable) {
                    if ($$(node, this.setting).get(0) && tools.uCanDo(this.setting)) {
                        var checkObj = $$(node, consts.id.CHECK, this.setting);
                        1 != checkTypeFlag && this.setting.check.chkStyle !== consts.radio.STYLE || view.checkNodeRelation(this.setting, node), view.setChkClass(this.setting, checkObj, node), view.repairParentChkClassWithSelf(this.setting, node)
                    }
                }
            }
        }, _data = {
            getRadioCheckedList: function (setting) {
                for (var checkedList = data.getRoot(setting).radioCheckedList, i = 0, j = checkedList.length; i < j; i++) data.getNodeCache(setting, checkedList[i].tId) || (checkedList.splice(i, 1), i--, j--);
                return checkedList
            }, getCheckStatus: function (setting, node) {
                if (!setting.check.enable || node.nocheck || node.chkDisabled) return null;
                var checkedKey = setting.data.key.checked;
                return {
                    checked: node[checkedKey],
                    half: node.halfCheck ? node.halfCheck : setting.check.chkStyle == consts.radio.STYLE ? 2 === node.check_Child_State : node[checkedKey] ? node.check_Child_State > -1 && node.check_Child_State < 2 : node.check_Child_State > 0
                }
            }, getTreeCheckedNodes: function (setting, nodes, checked, results) {
                if (!nodes) return [];
                var childKey = setting.data.key.children, checkedKey = setting.data.key.checked,
                    onlyOne = checked && setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL;
                results = results || [];
                for (var i = 0, l = nodes.length; i < l && (!0 === nodes[i].nocheck || !0 === nodes[i].chkDisabled || nodes[i][checkedKey] != checked || (results.push(nodes[i]), !onlyOne)) && (data.getTreeCheckedNodes(setting, nodes[i][childKey], checked, results), !(onlyOne && results.length > 0)); i++) ;
                return results
            }, getTreeChangeCheckedNodes: function (setting, nodes, results) {
                if (!nodes) return [];
                var childKey = setting.data.key.children, checkedKey = setting.data.key.checked;
                results = results || [];
                for (var i = 0, l = nodes.length; i < l; i++) !0 !== nodes[i].nocheck && !0 !== nodes[i].chkDisabled && nodes[i][checkedKey] != nodes[i].checkedOld && results.push(nodes[i]), data.getTreeChangeCheckedNodes(setting, nodes[i][childKey], results);
                return results
            }, makeChkFlag: function (setting, node) {
                if (node) {
                    var childKey = setting.data.key.children, checkedKey = setting.data.key.checked, chkFlag = -1;
                    if (node[childKey]) for (var i = 0, l = node[childKey].length; i < l; i++) {
                        var cNode = node[childKey][i], tmp = -1;
                        if (setting.check.chkStyle == consts.radio.STYLE) {
                            if (2 == (tmp = !0 === cNode.nocheck || !0 === cNode.chkDisabled ? cNode.check_Child_State : !0 === cNode.halfCheck ? 2 : cNode[checkedKey] ? 2 : cNode.check_Child_State > 0 ? 2 : 0)) {
                                chkFlag = 2;
                                break
                            }
                            0 == tmp && (chkFlag = 0)
                        } else if (setting.check.chkStyle == consts.checkbox.STYLE) {
                            if (1 === (tmp = !0 === cNode.nocheck || !0 === cNode.chkDisabled ? cNode.check_Child_State : !0 === cNode.halfCheck ? 1 : cNode[checkedKey] ? -1 === cNode.check_Child_State || 2 === cNode.check_Child_State ? 2 : 1 : cNode.check_Child_State > 0 ? 1 : 0)) {
                                chkFlag = 1;
                                break
                            }
                            if (2 === tmp && chkFlag > -1 && i > 0 && tmp !== chkFlag) {
                                chkFlag = 1;
                                break
                            }
                            if (2 === chkFlag && tmp > -1 && tmp < 2) {
                                chkFlag = 1;
                                break
                            }
                            tmp > -1 && (chkFlag = tmp)
                        }
                    }
                    node.check_Child_State = chkFlag
                }
            }
        }, _event = {}, _handler = {
            onCheckNode: function (event, node) {
                if (!0 === node.chkDisabled) return !1;
                var setting = data.getSetting(event.data.treeId), checkedKey = setting.data.key.checked;
                if (0 == tools.apply(setting.callback.beforeCheck, [setting.treeId, node], !0)) return !0;
                node[checkedKey] = !node[checkedKey], view.checkNodeRelation(setting, node);
                var checkObj = $$(node, consts.id.CHECK, setting);
                return view.setChkClass(setting, checkObj, node), view.repairParentChkClassWithSelf(setting, node), setting.treeObj.trigger(consts.event.CHECK, [event, setting.treeId, node]), !0
            }, onMouseoverCheck: function (event, node) {
                if (!0 === node.chkDisabled) return !1;
                var setting = data.getSetting(event.data.treeId), checkObj = $$(node, consts.id.CHECK, setting);
                return node.check_Focus = !0, view.setChkClass(setting, checkObj, node), !0
            }, onMouseoutCheck: function (event, node) {
                if (!0 === node.chkDisabled) return !1;
                var setting = data.getSetting(event.data.treeId), checkObj = $$(node, consts.id.CHECK, setting);
                return node.check_Focus = !1, view.setChkClass(setting, checkObj, node), !0
            }
        }, _tools = {}, _view = {
            checkNodeRelation: function (setting, node) {
                var pNode, i, l, childKey = setting.data.key.children, checkedKey = setting.data.key.checked,
                    r = consts.radio;
                if (setting.check.chkStyle == r.STYLE) {
                    var checkedList = data.getRadioCheckedList(setting);
                    if (node[checkedKey]) if (setting.check.radioType == r.TYPE_ALL) {
                        for (i = checkedList.length - 1; i >= 0; i--) pNode = checkedList[i], pNode[checkedKey] && pNode != node && (pNode[checkedKey] = !1, checkedList.splice(i, 1), view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode), pNode.parentTId != node.parentTId && view.repairParentChkClassWithSelf(setting, pNode));
                        checkedList.push(node)
                    } else {
                        var parentNode = node.parentTId ? node.getParentNode() : data.getRoot(setting);
                        for (i = 0, l = parentNode[childKey].length; i < l; i++) pNode = parentNode[childKey][i], pNode[checkedKey] && pNode != node && (pNode[checkedKey] = !1, view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode))
                    } else if (setting.check.radioType == r.TYPE_ALL) for (i = 0, l = checkedList.length; i < l; i++) if (node == checkedList[i]) {
                        checkedList.splice(i, 1);
                        break
                    }
                } else node[checkedKey] && (!node[childKey] || 0 == node[childKey].length || setting.check.chkboxType.Y.indexOf("s") > -1) && view.setSonNodeCheckBox(setting, node, !0), node[checkedKey] || node[childKey] && 0 != node[childKey].length && !(setting.check.chkboxType.N.indexOf("s") > -1) || view.setSonNodeCheckBox(setting, node, !1), node[checkedKey] && setting.check.chkboxType.Y.indexOf("p") > -1 && view.setParentNodeCheckBox(setting, node, !0), !node[checkedKey] && setting.check.chkboxType.N.indexOf("p") > -1 && view.setParentNodeCheckBox(setting, node, !1)
            }, makeChkClass: function (setting, node) {
                var checkedKey = setting.data.key.checked, c = consts.checkbox, r = consts.radio, fullStyle = "";
                fullStyle = !0 === node.chkDisabled ? c.DISABLED : node.halfCheck ? c.PART : setting.check.chkStyle == r.STYLE ? node.check_Child_State < 1 ? c.FULL : c.PART : node[checkedKey] ? 2 === node.check_Child_State || -1 === node.check_Child_State ? c.FULL : c.PART : node.check_Child_State < 1 ? c.FULL : c.PART;
                var chkName = setting.check.chkStyle + "_" + (node[checkedKey] ? c.TRUE : c.FALSE) + "_" + fullStyle;
                return chkName = node.check_Focus && !0 !== node.chkDisabled ? chkName + "_" + c.FOCUS : chkName, consts.className.BUTTON + " " + c.DEFAULT + " " + chkName
            }, repairAllChk: function (setting, checked) {
                if (setting.check.enable && setting.check.chkStyle === consts.checkbox.STYLE) for (var checkedKey = setting.data.key.checked, childKey = setting.data.key.children, root = data.getRoot(setting), i = 0, l = root[childKey].length; i < l; i++) {
                    var node = root[childKey][i];
                    !0 !== node.nocheck && !0 !== node.chkDisabled && (node[checkedKey] = checked), view.setSonNodeCheckBox(setting, node, checked)
                }
            }, repairChkClass: function (setting, node) {
                if (node && (data.makeChkFlag(setting, node), !0 !== node.nocheck)) {
                    var checkObj = $$(node, consts.id.CHECK, setting);
                    view.setChkClass(setting, checkObj, node)
                }
            }, repairParentChkClass: function (setting, node) {
                if (node && node.parentTId) {
                    var pNode = node.getParentNode();
                    view.repairChkClass(setting, pNode), view.repairParentChkClass(setting, pNode)
                }
            }, repairParentChkClassWithSelf: function (setting, node) {
                if (node) {
                    var childKey = setting.data.key.children;
                    node[childKey] && node[childKey].length > 0 ? view.repairParentChkClass(setting, node[childKey][0]) : view.repairParentChkClass(setting, node)
                }
            }, repairSonChkDisabled: function (setting, node, chkDisabled, inherit) {
                if (node) {
                    var childKey = setting.data.key.children;
                    if (node.chkDisabled != chkDisabled && (node.chkDisabled = chkDisabled), view.repairChkClass(setting, node), node[childKey] && inherit) for (var i = 0, l = node[childKey].length; i < l; i++) {
                        var sNode = node[childKey][i];
                        view.repairSonChkDisabled(setting, sNode, chkDisabled, inherit)
                    }
                }
            }, repairParentChkDisabled: function (setting, node, chkDisabled, inherit) {
                node && (node.chkDisabled != chkDisabled && inherit && (node.chkDisabled = chkDisabled), view.repairChkClass(setting, node), view.repairParentChkDisabled(setting, node.getParentNode(), chkDisabled, inherit))
            }, setChkClass: function (setting, obj, node) {
                obj && (!0 === node.nocheck ? obj.hide() : obj.show(), obj.attr("class", view.makeChkClass(setting, node)))
            }, setParentNodeCheckBox: function (setting, node, value, srcNode) {
                var childKey = setting.data.key.children, checkedKey = setting.data.key.checked,
                    checkObj = $$(node, consts.id.CHECK, setting);
                if (srcNode || (srcNode = node), data.makeChkFlag(setting, node), !0 !== node.nocheck && !0 !== node.chkDisabled && (node[checkedKey] = value, view.setChkClass(setting, checkObj, node), setting.check.autoCheckTrigger && node != srcNode && setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node])), node.parentTId) {
                    var pSign = !0;
                    if (!value) for (var pNodes = node.getParentNode()[childKey], i = 0, l = pNodes.length; i < l; i++) if (!0 !== pNodes[i].nocheck && !0 !== pNodes[i].chkDisabled && pNodes[i][checkedKey] || (!0 === pNodes[i].nocheck || !0 === pNodes[i].chkDisabled) && pNodes[i].check_Child_State > 0) {
                        pSign = !1;
                        break
                    }
                    pSign && view.setParentNodeCheckBox(setting, node.getParentNode(), value, srcNode)
                }
            }, setSonNodeCheckBox: function (setting, node, value, srcNode) {
                if (node) {
                    var childKey = setting.data.key.children, checkedKey = setting.data.key.checked,
                        checkObj = $$(node, consts.id.CHECK, setting);
                    srcNode || (srcNode = node);
                    var hasDisable = !1;
                    if (node[childKey]) for (var i = 0, l = node[childKey].length; i < l && !0 !== node.chkDisabled; i++) {
                        var sNode = node[childKey][i];
                        view.setSonNodeCheckBox(setting, sNode, value, srcNode), !0 === sNode.chkDisabled && (hasDisable = !0)
                    }
                    node != data.getRoot(setting) && !0 !== node.chkDisabled && (hasDisable && !0 !== node.nocheck && data.makeChkFlag(setting, node), !0 !== node.nocheck && !0 !== node.chkDisabled ? (node[checkedKey] = value, hasDisable || (node.check_Child_State = node[childKey] && node[childKey].length > 0 ? value ? 2 : 0 : -1)) : node.check_Child_State = -1, view.setChkClass(setting, checkObj, node), setting.check.autoCheckTrigger && node != srcNode && !0 !== node.nocheck && !0 !== node.chkDisabled && setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node]))
                }
            }
        }, _z = {tools: _tools, view: _view, event: _event, data: _data};
        $.extend(!0, $.fn.zTree.consts, _consts), $.extend(!0, $.fn.zTree._z, _z);
        var zt = $.fn.zTree, tools = zt._z.tools, consts = zt.consts, view = zt._z.view, data = zt._z.data,
            $$ = (zt._z.event, tools.$);
        data.exSetting(_setting), data.addInitBind(_bindEvent), data.addInitUnBind(_unbindEvent), data.addInitCache(_initCache), data.addInitNode(_initNode), data.addInitProxy(_eventProxy, !0), data.addInitRoot(_initRoot), data.addBeforeA(_beforeA), data.addZTreeTools(_zTreeTools);
        var _createNodes = view.createNodes;
        view.createNodes = function (setting, level, nodes, parentNode) {
            _createNodes && _createNodes.apply(view, arguments), nodes && view.repairParentChkClassWithSelf(setting, parentNode)
        };
        var _removeNode = view.removeNode;
        view.removeNode = function (setting, node) {
            var parentNode = node.getParentNode();
            _removeNode && _removeNode.apply(view, arguments), node && parentNode && (view.repairChkClass(setting, parentNode), view.repairParentChkClass(setting, parentNode))
        };
        var _appendNodes = view.appendNodes;
        view.appendNodes = function (setting, level, nodes, parentNode, initFlag, openFlag) {
            var html = "";
            return _appendNodes && (html = _appendNodes.apply(view, arguments)), parentNode && data.makeChkFlag(setting, parentNode), html
        }
    }(jQuery), function ($) {
        var _consts = {
            event: {
                DRAG: "ztree_drag",
                DROP: "ztree_drop",
                RENAME: "ztree_rename",
                DRAGMOVE: "ztree_dragmove"
            },
            id: {EDIT: "_edit", INPUT: "_input", REMOVE: "_remove"},
            move: {TYPE_INNER: "inner", TYPE_PREV: "prev", TYPE_NEXT: "next"},
            node: {
                CURSELECTED_EDIT: "curSelectedNode_Edit",
                TMPTARGET_TREE: "tmpTargetzTree",
                TMPTARGET_NODE: "tmpTargetNode"
            }
        }, _setting = {
            edit: {
                enable: !1,
                editNameSelectAll: !1,
                showRemoveBtn: !0,
                showRenameBtn: !0,
                removeTitle: "remove",
                renameTitle: "rename",
                drag: {
                    autoExpandTrigger: !1,
                    isCopy: !0,
                    isMove: !0,
                    prev: !0,
                    next: !0,
                    inner: !0,
                    minMoveSize: 5,
                    borderMax: 10,
                    borderMin: -5,
                    maxShowNodeNum: 5,
                    autoOpenTime: 500
                }
            },
            view: {addHoverDom: null, removeHoverDom: null},
            callback: {
                beforeDrag: null,
                beforeDragOpen: null,
                beforeDrop: null,
                beforeEditName: null,
                beforeRename: null,
                onDrag: null,
                onDragMove: null,
                onDrop: null,
                onRename: null
            }
        }, _initRoot = function (setting) {
            var r = data.getRoot(setting), rs = data.getRoots();
            r.curEditNode = null, r.curEditInput = null, r.curHoverNode = null, r.dragFlag = 0, r.dragNodeShowBefore = [], r.dragMaskList = new Array, rs.showHoverDom = !0
        }, _initCache = function (treeId) {
        }, _bindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.bind(c.RENAME, function (event, treeId, treeNode, isCancel) {
                tools.apply(setting.callback.onRename, [event, treeId, treeNode, isCancel])
            }), o.bind(c.DRAG, function (event, srcEvent, treeId, treeNodes) {
                tools.apply(setting.callback.onDrag, [srcEvent, treeId, treeNodes])
            }), o.bind(c.DRAGMOVE, function (event, srcEvent, treeId, treeNodes) {
                tools.apply(setting.callback.onDragMove, [srcEvent, treeId, treeNodes])
            }), o.bind(c.DROP, function (event, srcEvent, treeId, treeNodes, targetNode, moveType, isCopy) {
                tools.apply(setting.callback.onDrop, [srcEvent, treeId, treeNodes, targetNode, moveType, isCopy])
            })
        }, _unbindEvent = function (setting) {
            var o = setting.treeObj, c = consts.event;
            o.unbind(c.RENAME), o.unbind(c.DRAG), o.unbind(c.DRAGMOVE), o.unbind(c.DROP)
        }, _eventProxy = function (e) {
            var target = e.target, setting = data.getSetting(e.data.treeId), relatedTarget = e.relatedTarget, tId = "",
                node = null, nodeEventType = "", nodeEventCallback = null, tmp = null;
            if (tools.eqs(e.type, "mouseover") ? (tmp = tools.getMDom(setting, target, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) && (tId = tools.getNodeMainDom(tmp).id, nodeEventType = "hoverOverNode") : tools.eqs(e.type, "mouseout") ? (tmp = tools.getMDom(setting, relatedTarget, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) || (tId = "remove", nodeEventType = "hoverOutNode") : tools.eqs(e.type, "mousedown") && (tmp = tools.getMDom(setting, target, [{
                tagName: "a",
                attrName: "treeNode" + consts.id.A
            }])) && (tId = tools.getNodeMainDom(tmp).id, nodeEventType = "mousedownNode"), tId.length > 0) switch (node = data.getNodeCache(setting, tId), nodeEventType) {
                case"mousedownNode":
                    nodeEventCallback = _handler.onMousedownNode;
                    break;
                case"hoverOverNode":
                    nodeEventCallback = _handler.onHoverOverNode;
                    break;
                case"hoverOutNode":
                    nodeEventCallback = _handler.onHoverOutNode
            }
            return {
                stop: !1,
                node: node,
                nodeEventType: nodeEventType,
                nodeEventCallback: nodeEventCallback,
                treeEventType: "",
                treeEventCallback: null
            }
        }, _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
            n && (n.isHover = !1, n.editNameFlag = !1)
        }, _zTreeTools = function (setting, zTreeTools) {
            zTreeTools.cancelEditName = function (newName) {
                data.getRoot(this.setting).curEditNode && view.cancelCurEditNode(this.setting, newName || null, !0)
            }, zTreeTools.copyNode = function (targetNode, node, moveType, isSilent) {
                function copyCallback() {
                    view.addNodes(_this.setting, targetNode, [newNode], isSilent)
                }

                if (!node) return null;
                if (targetNode && !targetNode.isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) return null;
                var _this = this, newNode = tools.clone(node);
                return targetNode || (targetNode = null, moveType = consts.move.TYPE_INNER), moveType == consts.move.TYPE_INNER ? tools.canAsync(this.setting, targetNode) ? view.asyncNode(this.setting, targetNode, isSilent, copyCallback) : copyCallback() : (view.addNodes(this.setting, targetNode.parentNode, [newNode], isSilent), view.moveNode(this.setting, targetNode, newNode, moveType, !1, isSilent)), newNode
            }, zTreeTools.editName = function (node) {
                node && node.tId && node === data.getNodeCache(this.setting, node.tId) && (node.parentTId && view.expandCollapseParentNode(this.setting, node.getParentNode(), !0), view.editNode(this.setting, node))
            }, zTreeTools.moveNode = function (targetNode, node, moveType, isSilent) {
                function moveCallback() {
                    view.moveNode(_this.setting, targetNode, node, moveType, !1, isSilent)
                }

                if (!node) return node;
                if (targetNode && !targetNode.isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) return null;
                if (targetNode && (node.parentTId == targetNode.tId && moveType == consts.move.TYPE_INNER || $$(node, this.setting).find("#" + targetNode.tId).length > 0)) return null;
                targetNode || (targetNode = null);
                var _this = this;
                return tools.canAsync(this.setting, targetNode) && moveType === consts.move.TYPE_INNER ? view.asyncNode(this.setting, targetNode, isSilent, moveCallback) : moveCallback(), node
            }, zTreeTools.setEditable = function (editable) {
                return this.setting.edit.enable = editable, this.refresh()
            }
        }, _data = {
            setSonNodeLevel: function (setting, parentNode, node) {
                if (node) {
                    var childKey = setting.data.key.children;
                    if (node.level = parentNode ? parentNode.level + 1 : 0, node[childKey]) for (var i = 0, l = node[childKey].length; i < l; i++) node[childKey][i] && data.setSonNodeLevel(setting, node, node[childKey][i])
                }
            }
        }, _event = {}, _handler = {
            onHoverOverNode: function (event, node) {
                var setting = data.getSetting(event.data.treeId), root = data.getRoot(setting);
                root.curHoverNode != node && _handler.onHoverOutNode(event), root.curHoverNode = node, view.addHoverDom(setting, node)
            }, onHoverOutNode: function (event, node) {
                var setting = data.getSetting(event.data.treeId), root = data.getRoot(setting);
                root.curHoverNode && !data.isSelectedNode(setting, root.curHoverNode) && (view.removeTreeDom(setting, root.curHoverNode), root.curHoverNode = null)
            }, onMousedownNode: function (eventMouseDown, _node) {
                function _docMouseMove(event) {
                    if (0 == root.dragFlag && Math.abs(mouseDownX - event.clientX) < setting.edit.drag.minMoveSize && Math.abs(mouseDownY - event.clientY) < setting.edit.drag.minMoveSize) return !0;
                    var i, l, tmpNode, tmpDom, tmpNodes, childKey = setting.data.key.children;
                    if (body.css("cursor", "pointer"), 0 == root.dragFlag) {
                        if (0 == tools.apply(setting.callback.beforeDrag, [setting.treeId, nodes], !0)) return _docMouseUp(event), !0;
                        for (i = 0, l = nodes.length; i < l; i++) 0 == i && (root.dragNodeShowBefore = []), tmpNode = nodes[i], tmpNode.isParent && tmpNode.open ? (view.expandCollapseNode(setting, tmpNode, !tmpNode.open), root.dragNodeShowBefore[tmpNode.tId] = !0) : root.dragNodeShowBefore[tmpNode.tId] = !1;
                        root.dragFlag = 1, roots.showHoverDom = !1, tools.showIfameMask(setting, !0);
                        var isOrder = !0, lastIndex = -1;
                        if (nodes.length > 1) {
                            var pNodes = nodes[0].parentTId ? nodes[0].getParentNode()[childKey] : data.getNodes(setting);
                            for (tmpNodes = [], i = 0, l = pNodes.length; i < l; i++) if (void 0 !== root.dragNodeShowBefore[pNodes[i].tId] && (isOrder && lastIndex > -1 && lastIndex + 1 !== i && (isOrder = !1), tmpNodes.push(pNodes[i]), lastIndex = i), nodes.length === tmpNodes.length) {
                                nodes = tmpNodes;
                                break
                            }
                        }
                        for (isOrder && (preNode = nodes[0].getPreNode(), nextNode = nodes[nodes.length - 1].getNextNode()), curNode = $$("<ul class='zTreeDragUL'></ul>", setting), i = 0, l = nodes.length; i < l; i++) tmpNode = nodes[i], tmpNode.editNameFlag = !1, view.selectNode(setting, tmpNode, i > 0), view.removeTreeDom(setting, tmpNode), i > setting.edit.drag.maxShowNodeNum - 1 || (tmpDom = $$("<li id='" + tmpNode.tId + "_tmp'></li>", setting), tmpDom.append($$(tmpNode, consts.id.A, setting).clone()), tmpDom.css("padding", "0"), tmpDom.children("#" + tmpNode.tId + consts.id.A).removeClass(consts.node.CURSELECTED), curNode.append(tmpDom), i == setting.edit.drag.maxShowNodeNum - 1 && (tmpDom = $$("<li id='" + tmpNode.tId + "_moretmp'><a>  ...  </a></li>", setting), curNode.append(tmpDom)));
                        curNode.attr("id", nodes[0].tId + consts.id.UL + "_tmp"), curNode.addClass(setting.treeObj.attr("class")), curNode.appendTo(body), tmpArrow = $$("<span class='tmpzTreeMove_arrow'></span>", setting), tmpArrow.attr("id", "zTreeMove_arrow_tmp"), tmpArrow.appendTo(body), setting.treeObj.trigger(consts.event.DRAG, [event, setting.treeId, nodes])
                    }
                    if (1 == root.dragFlag) {
                        if (tmpTarget && tmpArrow.attr("id") == event.target.id && tmpTargetNodeId && event.clientX + doc.scrollLeft() + 2 > $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).offset().left) {
                            var xT = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget);
                            event.target = xT.length > 0 ? xT.get(0) : event.target
                        } else tmpTarget && (tmpTarget.removeClass(consts.node.TMPTARGET_TREE), tmpTargetNodeId && $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER));
                        tmpTarget = null, tmpTargetNodeId = null, isOtherTree = !1, targetSetting = setting;
                        var settings = data.getSettings();
                        for (var s in settings) settings[s].treeId && settings[s].edit.enable && settings[s].treeId != setting.treeId && (event.target.id == settings[s].treeId || $(event.target).parents("#" + settings[s].treeId).length > 0) && (isOtherTree = !0, targetSetting = settings[s]);
                        var docScrollTop = doc.scrollTop(), docScrollLeft = doc.scrollLeft(),
                            treeOffset = targetSetting.treeObj.offset(),
                            scrollHeight = targetSetting.treeObj.get(0).scrollHeight,
                            scrollWidth = targetSetting.treeObj.get(0).scrollWidth,
                            dTop = event.clientY + docScrollTop - treeOffset.top,
                            dBottom = targetSetting.treeObj.height() + treeOffset.top - event.clientY - docScrollTop,
                            dLeft = event.clientX + docScrollLeft - treeOffset.left,
                            dRight = targetSetting.treeObj.width() + treeOffset.left - event.clientX - docScrollLeft,
                            isTop = dTop < setting.edit.drag.borderMax && dTop > setting.edit.drag.borderMin,
                            isBottom = dBottom < setting.edit.drag.borderMax && dBottom > setting.edit.drag.borderMin,
                            isLeft = dLeft < setting.edit.drag.borderMax && dLeft > setting.edit.drag.borderMin,
                            isRight = dRight < setting.edit.drag.borderMax && dRight > setting.edit.drag.borderMin,
                            isTreeInner = dTop > setting.edit.drag.borderMin && dBottom > setting.edit.drag.borderMin && dLeft > setting.edit.drag.borderMin && dRight > setting.edit.drag.borderMin,
                            isTreeTop = isTop && targetSetting.treeObj.scrollTop() <= 0,
                            isTreeBottom = isBottom && targetSetting.treeObj.scrollTop() + targetSetting.treeObj.height() + 10 >= scrollHeight,
                            isTreeLeft = isLeft && targetSetting.treeObj.scrollLeft() <= 0,
                            isTreeRight = isRight && targetSetting.treeObj.scrollLeft() + targetSetting.treeObj.width() + 10 >= scrollWidth;
                        if (event.target && tools.isChildOrSelf(event.target, targetSetting.treeId)) {
                            for (var targetObj = event.target; targetObj && targetObj.tagName && !tools.eqs(targetObj.tagName, "li") && targetObj.id != targetSetting.treeId;) targetObj = targetObj.parentNode;
                            var canMove = !0;
                            for (i = 0, l = nodes.length; i < l; i++) {
                                if (tmpNode = nodes[i], targetObj.id === tmpNode.tId) {
                                    canMove = !1;
                                    break
                                }
                                if ($$(tmpNode, setting).find("#" + targetObj.id).length > 0) {
                                    canMove = !1;
                                    break
                                }
                            }
                            canMove && event.target && tools.isChildOrSelf(event.target, targetObj.id + consts.id.A) && (tmpTarget = $(targetObj), tmpTargetNodeId = targetObj.id)
                        }
                        tmpNode = nodes[0], isTreeInner && tools.isChildOrSelf(event.target, targetSetting.treeId) && (!tmpTarget && (event.target.id == targetSetting.treeId || isTreeTop || isTreeBottom || isTreeLeft || isTreeRight) && (isOtherTree || !isOtherTree && tmpNode.parentTId) && (tmpTarget = targetSetting.treeObj), isTop ? targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() - 10) : isBottom && targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() + 10), isLeft ? targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() - 10) : isRight && targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + 10), tmpTarget && tmpTarget != targetSetting.treeObj && tmpTarget.offset().left < targetSetting.treeObj.offset().left && targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + tmpTarget.offset().left - targetSetting.treeObj.offset().left)), curNode.css({
                            top: event.clientY + docScrollTop + 3 + "px",
                            left: event.clientX + docScrollLeft + 3 + "px"
                        });
                        var dX = 0, dY = 0;
                        if (tmpTarget && tmpTarget.attr("id") != targetSetting.treeId) {
                            var tmpTargetNode = null == tmpTargetNodeId ? null : data.getNodeCache(targetSetting, tmpTargetNodeId),
                                isCopy = (event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy || !setting.edit.drag.isMove && setting.edit.drag.isCopy,
                                isPrev = !(!preNode || tmpTargetNodeId !== preNode.tId),
                                isNext = !(!nextNode || tmpTargetNodeId !== nextNode.tId),
                                isInner = tmpNode.parentTId && tmpNode.parentTId == tmpTargetNodeId,
                                canPrev = (isCopy || !isNext) && tools.apply(targetSetting.edit.drag.prev, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.prev),
                                canNext = (isCopy || !isPrev) && tools.apply(targetSetting.edit.drag.next, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.next),
                                canInner = (isCopy || !isInner) && !(targetSetting.data.keep.leaf && !tmpTargetNode.isParent) && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.inner);
                            if (canPrev || canNext || canInner) {
                                var tmpTargetA = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget),
                                    tmpNextA = tmpTargetNode.isLastNode ? null : $("#" + tmpTargetNode.getNextNode().tId + consts.id.A, tmpTarget.next()),
                                    tmpTop = tmpTargetA.offset().top, tmpLeft = tmpTargetA.offset().left,
                                    prevPercent = canPrev ? canInner ? .25 : canNext ? .5 : 1 : -1,
                                    nextPercent = canNext ? canInner ? .75 : canPrev ? .5 : 0 : -1,
                                    dY_percent = (event.clientY + docScrollTop - tmpTop) / tmpTargetA.height();
                                if ((1 == prevPercent || dY_percent <= prevPercent && dY_percent >= -.2) && canPrev ? (dX = 1 - tmpArrow.width(), dY = tmpTop - tmpArrow.height() / 2, moveType = consts.move.TYPE_PREV) : (0 == nextPercent || dY_percent >= nextPercent && dY_percent <= 1.2) && canNext ? (dX = 1 - tmpArrow.width(), dY = null == tmpNextA || tmpTargetNode.isParent && tmpTargetNode.open ? tmpTop + tmpTargetA.height() - tmpArrow.height() / 2 : tmpNextA.offset().top - tmpArrow.height() / 2, moveType = consts.move.TYPE_NEXT) : (dX = 5 - tmpArrow.width(), dY = tmpTop, moveType = consts.move.TYPE_INNER), tmpArrow.css({
                                    display: "block",
                                    top: dY + "px",
                                    left: tmpLeft + dX + "px"
                                }), tmpTargetA.addClass(consts.node.TMPTARGET_NODE + "_" + moveType), preTmpTargetNodeId == tmpTargetNodeId && preTmpMoveType == moveType || (startTime = (new Date).getTime()), tmpTargetNode && tmpTargetNode.isParent && moveType == consts.move.TYPE_INNER) {
                                    var startTimer = !0;
                                    window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== tmpTargetNode.tId ? (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null) : window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === tmpTargetNode.tId && (startTimer = !1), startTimer && (window.zTreeMoveTimer = setTimeout(function () {
                                        moveType == consts.move.TYPE_INNER && tmpTargetNode && tmpTargetNode.isParent && !tmpTargetNode.open && (new Date).getTime() - startTime > targetSetting.edit.drag.autoOpenTime && tools.apply(targetSetting.callback.beforeDragOpen, [targetSetting.treeId, tmpTargetNode], !0) && (view.switchNode(targetSetting, tmpTargetNode), targetSetting.edit.drag.autoExpandTrigger && targetSetting.treeObj.trigger(consts.event.EXPAND, [targetSetting.treeId, tmpTargetNode]))
                                    }, targetSetting.edit.drag.autoOpenTime + 50), window.zTreeMoveTargetNodeTId = tmpTargetNode.tId)
                                }
                            } else tmpTarget = null, tmpTargetNodeId = "", moveType = consts.move.TYPE_INNER, tmpArrow.css({display: "none"}), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null)
                        } else moveType = consts.move.TYPE_INNER, tmpTarget && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, null], !!targetSetting.edit.drag.inner) ? tmpTarget.addClass(consts.node.TMPTARGET_TREE) : tmpTarget = null, tmpArrow.css({display: "none"}), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null);
                        preTmpTargetNodeId = tmpTargetNodeId, preTmpMoveType = moveType, setting.treeObj.trigger(consts.event.DRAGMOVE, [event, setting.treeId, nodes])
                    }
                    return !1
                }

                function _docMouseUp(event) {
                    function dropCallback() {
                        if (isOtherTree) {
                            if (!isCopy) for (var i = 0, l = nodes.length; i < l; i++) view.removeNode(setting, nodes[i]);
                            if (moveType == consts.move.TYPE_INNER) view.addNodes(targetSetting, dragTargetNode, newNodes); else if (view.addNodes(targetSetting, dragTargetNode.getParentNode(), newNodes), moveType == consts.move.TYPE_PREV) for (i = 0, l = newNodes.length; i < l; i++) view.moveNode(targetSetting, dragTargetNode, newNodes[i], moveType, !1); else for (i = -1, l = newNodes.length - 1; i < l; l--) view.moveNode(targetSetting, dragTargetNode, newNodes[l], moveType, !1)
                        } else if (isCopy && moveType == consts.move.TYPE_INNER) view.addNodes(targetSetting, dragTargetNode, newNodes); else if (isCopy && view.addNodes(targetSetting, dragTargetNode.getParentNode(), newNodes), moveType != consts.move.TYPE_NEXT) for (i = 0, l = newNodes.length; i < l; i++) view.moveNode(targetSetting, dragTargetNode, newNodes[i], moveType, !1); else for (i = -1, l = newNodes.length - 1; i < l; l--) view.moveNode(targetSetting, dragTargetNode, newNodes[l], moveType, !1);
                        view.selectNodes(targetSetting, newNodes), $$(newNodes[0], setting).focus().blur(), setting.treeObj.trigger(consts.event.DROP, [event, targetSetting.treeId, newNodes, dragTargetNode, moveType, isCopy])
                    }

                    if (window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null), preTmpTargetNodeId = null, preTmpMoveType = null, doc.unbind("mousemove", _docMouseMove), doc.unbind("mouseup", _docMouseUp), doc.unbind("selectstart", _docSelect), body.css("cursor", "auto"), tmpTarget && (tmpTarget.removeClass(consts.node.TMPTARGET_TREE), tmpTargetNodeId && $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER)), tools.showIfameMask(setting, !1), roots.showHoverDom = !0, 0 != root.dragFlag) {
                        root.dragFlag = 0;
                        var i, l, tmpNode;
                        for (i = 0, l = nodes.length; i < l; i++) tmpNode = nodes[i], tmpNode.isParent && root.dragNodeShowBefore[tmpNode.tId] && !tmpNode.open && (view.expandCollapseNode(setting, tmpNode, !tmpNode.open), delete root.dragNodeShowBefore[tmpNode.tId]);
                        curNode && curNode.remove(), tmpArrow && tmpArrow.remove();
                        var isCopy = (event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy || !setting.edit.drag.isMove && setting.edit.drag.isCopy;
                        if (!isCopy && tmpTarget && tmpTargetNodeId && nodes[0].parentTId && tmpTargetNodeId == nodes[0].parentTId && moveType == consts.move.TYPE_INNER && (tmpTarget = null), tmpTarget) {
                            var dragTargetNode = null == tmpTargetNodeId ? null : data.getNodeCache(targetSetting, tmpTargetNodeId);
                            if (0 == tools.apply(setting.callback.beforeDrop, [targetSetting.treeId, nodes, dragTargetNode, moveType, isCopy], !0)) return void view.selectNodes(sourceSetting, nodes);
                            var newNodes = isCopy ? tools.clone(nodes) : nodes;
                            moveType == consts.move.TYPE_INNER && tools.canAsync(targetSetting, dragTargetNode) ? view.asyncNode(targetSetting, dragTargetNode, !1, dropCallback) : dropCallback()
                        } else view.selectNodes(sourceSetting, nodes), setting.treeObj.trigger(consts.event.DROP, [event, setting.treeId, nodes, null, null, null])
                    }
                }

                function _docSelect() {
                    return !1
                }

                var i, l, setting = data.getSetting(eventMouseDown.data.treeId), root = data.getRoot(setting),
                    roots = data.getRoots();
                if (2 == eventMouseDown.button || !setting.edit.enable || !setting.edit.drag.isCopy && !setting.edit.drag.isMove) return !0;
                var target = eventMouseDown.target, _nodes = data.getRoot(setting).curSelectedList, nodes = [];
                if (data.isSelectedNode(setting, _node)) for (i = 0, l = _nodes.length; i < l; i++) {
                    if (_nodes[i].editNameFlag && tools.eqs(target.tagName, "input") && null !== target.getAttribute("treeNode" + consts.id.INPUT)) return !0;
                    if (nodes.push(_nodes[i]), nodes[0].parentTId !== _nodes[i].parentTId) {
                        nodes = [_node];
                        break
                    }
                } else nodes = [_node];
                view.editNodeBlur = !0, view.cancelCurEditNode(setting);
                var curNode, tmpArrow, tmpTarget, preNode, nextNode, doc = $(setting.treeObj.get(0).ownerDocument),
                    body = $(setting.treeObj.get(0).ownerDocument.body), isOtherTree = !1, targetSetting = setting,
                    sourceSetting = setting, preTmpTargetNodeId = null, preTmpMoveType = null, tmpTargetNodeId = null,
                    moveType = consts.move.TYPE_INNER, mouseDownX = eventMouseDown.clientX,
                    mouseDownY = eventMouseDown.clientY, startTime = (new Date).getTime();
                return tools.uCanDo(setting) && doc.bind("mousemove", _docMouseMove), doc.bind("mouseup", _docMouseUp), doc.bind("selectstart", _docSelect), eventMouseDown.preventDefault && eventMouseDown.preventDefault(), !0
            }
        }, _tools = {
            getAbs: function (obj) {
                var oRect = obj.getBoundingClientRect(),
                    scrollTop = document.body.scrollTop + document.documentElement.scrollTop,
                    scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
                return [oRect.left + scrollLeft, oRect.top + scrollTop]
            }, inputFocus: function (inputObj) {
                inputObj.get(0) && (inputObj.focus(), tools.setCursorPosition(inputObj.get(0), inputObj.val().length))
            }, inputSelect: function (inputObj) {
                inputObj.get(0) && (inputObj.focus(), inputObj.select())
            }, setCursorPosition: function (obj, pos) {
                if (obj.setSelectionRange) obj.focus(), obj.setSelectionRange(pos, pos); else if (obj.createTextRange) {
                    var range = obj.createTextRange();
                    range.collapse(!0), range.moveEnd("character", pos), range.moveStart("character", pos), range.select()
                }
            }, showIfameMask: function (setting, showSign) {
                for (var root = data.getRoot(setting); root.dragMaskList.length > 0;) root.dragMaskList[0].remove(), root.dragMaskList.shift();
                if (showSign) for (var iframeList = $$("iframe", setting), i = 0, l = iframeList.length; i < l; i++) {
                    var obj = iframeList.get(i), r = tools.getAbs(obj),
                        dragMask = $$("<div id='zTreeMask_" + i + "' class='zTreeMask' style='top:" + r[1] + "px; left:" + r[0] + "px; width:" + obj.offsetWidth + "px; height:" + obj.offsetHeight + "px;'></div>", setting);
                    dragMask.appendTo($$("body", setting)), root.dragMaskList.push(dragMask)
                }
            }
        }, _view = {
            addEditBtn: function (setting, node) {
                if (!(node.editNameFlag || $$(node, consts.id.EDIT, setting).length > 0) && tools.apply(setting.edit.showRenameBtn, [setting.treeId, node], setting.edit.showRenameBtn)) {
                    var aObj = $$(node, consts.id.A, setting),
                        editStr = "<span class='" + consts.className.BUTTON + " edit' id='" + node.tId + consts.id.EDIT + "' title='" + tools.apply(setting.edit.renameTitle, [setting.treeId, node], setting.edit.renameTitle) + "' treeNode" + consts.id.EDIT + " style='display:none;'></span>";
                    aObj.append(editStr), $$(node, consts.id.EDIT, setting).bind("click", function () {
                        return !(!tools.uCanDo(setting) || 0 == tools.apply(setting.callback.beforeEditName, [setting.treeId, node], !0)) && (view.editNode(setting, node), !1)
                    }).show()
                }
            }, addRemoveBtn: function (setting, node) {
                if (!(node.editNameFlag || $$(node, consts.id.REMOVE, setting).length > 0) && tools.apply(setting.edit.showRemoveBtn, [setting.treeId, node], setting.edit.showRemoveBtn)) {
                    var aObj = $$(node, consts.id.A, setting),
                        removeStr = "<span class='" + consts.className.BUTTON + " remove' id='" + node.tId + consts.id.REMOVE + "' title='" + tools.apply(setting.edit.removeTitle, [setting.treeId, node], setting.edit.removeTitle) + "' treeNode" + consts.id.REMOVE + " style='display:none;'></span>";
                    aObj.append(removeStr), $$(node, consts.id.REMOVE, setting).bind("click", function () {
                        return !(!tools.uCanDo(setting) || 0 == tools.apply(setting.callback.beforeRemove, [setting.treeId, node], !0)) && (view.removeNode(setting, node), setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node]), !1)
                    }).bind("mousedown", function (eventMouseDown) {
                        return !0
                    }).show()
                }
            }, addHoverDom: function (setting, node) {
                data.getRoots().showHoverDom && (node.isHover = !0, setting.edit.enable && (view.addEditBtn(setting, node), view.addRemoveBtn(setting, node)), tools.apply(setting.view.addHoverDom, [setting.treeId, node]))
            }, cancelCurEditNode: function (setting, forceName, isCancel) {
                var root = data.getRoot(setting), nameKey = setting.data.key.name, node = root.curEditNode;
                if (node) {
                    var inputObj = root.curEditInput,
                        newName = forceName || (isCancel ? node[nameKey] : inputObj.val());
                    if (!1 === tools.apply(setting.callback.beforeRename, [setting.treeId, node, newName, isCancel], !0)) return !1;
                    node[nameKey] = newName, setting.treeObj.trigger(consts.event.RENAME, [setting.treeId, node, isCancel]);
                    $$(node, consts.id.A, setting).removeClass(consts.node.CURSELECTED_EDIT), inputObj.unbind(), view.setNodeName(setting, node), node.editNameFlag = !1, root.curEditNode = null, root.curEditInput = null, view.selectNode(setting, node, !1)
                }
                return root.noSelection = !0, !0
            }, editNode: function (setting, node) {
                var root = data.getRoot(setting);
                if (view.editNodeBlur = !1, data.isSelectedNode(setting, node) && root.curEditNode == node && node.editNameFlag) return void setTimeout(function () {
                    tools.inputFocus(root.curEditInput)
                }, 0);
                var nameKey = setting.data.key.name;
                node.editNameFlag = !0, view.removeTreeDom(setting, node), view.cancelCurEditNode(setting), view.selectNode(setting, node, !1), $$(node, consts.id.SPAN, setting).html("<input type=text class='rename' id='" + node.tId + consts.id.INPUT + "' treeNode" + consts.id.INPUT + " >");
                var inputObj = $$(node, consts.id.INPUT, setting);
                inputObj.attr("value", node[nameKey]), setting.edit.editNameSelectAll ? tools.inputSelect(inputObj) : tools.inputFocus(inputObj), inputObj.bind("blur", function (event) {
                    view.editNodeBlur || view.cancelCurEditNode(setting)
                }).bind("keydown", function (event) {
                    "13" == event.keyCode ? (view.editNodeBlur = !0, view.cancelCurEditNode(setting)) : "27" == event.keyCode && view.cancelCurEditNode(setting, null, !0)
                }).bind("click", function (event) {
                    return !1
                }).bind("dblclick", function (event) {
                    return !1
                }), $$(node, consts.id.A, setting).addClass(consts.node.CURSELECTED_EDIT), root.curEditInput = inputObj, root.noSelection = !1, root.curEditNode = node
            }, moveNode: function (setting, targetNode, node, moveType, animateFlag, isSilent) {
                var root = data.getRoot(setting), childKey = setting.data.key.children;
                if (targetNode != node && (!setting.data.keep.leaf || !targetNode || targetNode.isParent || moveType != consts.move.TYPE_INNER)) {
                    var oldParentNode = node.parentTId ? node.getParentNode() : root,
                        targetNodeIsRoot = null === targetNode || targetNode == root;
                    targetNodeIsRoot && null === targetNode && (targetNode = root), targetNodeIsRoot && (moveType = consts.move.TYPE_INNER);
                    var targetParentNode = targetNode.parentTId ? targetNode.getParentNode() : root;
                    moveType != consts.move.TYPE_PREV && moveType != consts.move.TYPE_NEXT && (moveType = consts.move.TYPE_INNER), moveType == consts.move.TYPE_INNER && (targetNodeIsRoot ? node.parentTId = null : (targetNode.isParent || (targetNode.isParent = !0, targetNode.open = !!targetNode.open, view.setNodeLineIcos(setting, targetNode)), node.parentTId = targetNode.tId));
                    var targetObj, target_ulObj;
                    if (targetNodeIsRoot) targetObj = setting.treeObj, target_ulObj = targetObj; else {
                        if (isSilent || moveType != consts.move.TYPE_INNER ? isSilent || view.expandCollapseNode(setting, targetNode.getParentNode(), !0, !1) : view.expandCollapseNode(setting, targetNode, !0, !1), targetObj = $$(targetNode, setting), target_ulObj = $$(targetNode, consts.id.UL, setting), targetObj.get(0) && !target_ulObj.get(0)) {
                            var ulstr = [];
                            view.makeUlHtml(setting, targetNode, ulstr, ""), targetObj.append(ulstr.join(""))
                        }
                        target_ulObj = $$(targetNode, consts.id.UL, setting)
                    }
                    var nodeDom = $$(node, setting);
                    nodeDom.get(0) ? targetObj.get(0) || nodeDom.remove() : nodeDom = view.appendNodes(setting, node.level, [node], null, !1, !0).join(""), target_ulObj.get(0) && moveType == consts.move.TYPE_INNER ? target_ulObj.append(nodeDom) : targetObj.get(0) && moveType == consts.move.TYPE_PREV ? targetObj.before(nodeDom) : targetObj.get(0) && moveType == consts.move.TYPE_NEXT && targetObj.after(nodeDom);
                    var i, l, tmpSrcIndex = -1, tmpTargetIndex = 0, oldNeighbor = null, newNeighbor = null,
                        oldLevel = node.level;
                    if (node.isFirstNode) tmpSrcIndex = 0, oldParentNode[childKey].length > 1 && (oldNeighbor = oldParentNode[childKey][1], oldNeighbor.isFirstNode = !0); else if (node.isLastNode) tmpSrcIndex = oldParentNode[childKey].length - 1, oldNeighbor = oldParentNode[childKey][tmpSrcIndex - 1], oldNeighbor.isLastNode = !0; else for (i = 0, l = oldParentNode[childKey].length; i < l; i++) if (oldParentNode[childKey][i].tId == node.tId) {
                        tmpSrcIndex = i;
                        break
                    }
                    if (tmpSrcIndex >= 0 && oldParentNode[childKey].splice(tmpSrcIndex, 1), moveType != consts.move.TYPE_INNER) for (i = 0, l = targetParentNode[childKey].length; i < l; i++) targetParentNode[childKey][i].tId == targetNode.tId && (tmpTargetIndex = i);
                    if (moveType == consts.move.TYPE_INNER ? (targetNode[childKey] || (targetNode[childKey] = new Array), targetNode[childKey].length > 0 && (newNeighbor = targetNode[childKey][targetNode[childKey].length - 1], newNeighbor.isLastNode = !1), targetNode[childKey].splice(targetNode[childKey].length, 0, node), node.isLastNode = !0, node.isFirstNode = 1 == targetNode[childKey].length) : targetNode.isFirstNode && moveType == consts.move.TYPE_PREV ? (targetParentNode[childKey].splice(tmpTargetIndex, 0, node), newNeighbor = targetNode, newNeighbor.isFirstNode = !1, node.parentTId = targetNode.parentTId, node.isFirstNode = !0, node.isLastNode = !1) : targetNode.isLastNode && moveType == consts.move.TYPE_NEXT ? (targetParentNode[childKey].splice(tmpTargetIndex + 1, 0, node), newNeighbor = targetNode, newNeighbor.isLastNode = !1, node.parentTId = targetNode.parentTId, node.isFirstNode = !1, node.isLastNode = !0) : (moveType == consts.move.TYPE_PREV ? targetParentNode[childKey].splice(tmpTargetIndex, 0, node) : targetParentNode[childKey].splice(tmpTargetIndex + 1, 0, node), node.parentTId = targetNode.parentTId, node.isFirstNode = !1, node.isLastNode = !1), data.fixPIdKeyValue(setting, node), data.setSonNodeLevel(setting, node.getParentNode(), node), view.setNodeLineIcos(setting, node), view.repairNodeLevelClass(setting, node, oldLevel), !setting.data.keep.parent && oldParentNode[childKey].length < 1) {
                        oldParentNode.isParent = !1, oldParentNode.open = !1;
                        var tmp_ulObj = $$(oldParentNode, consts.id.UL, setting),
                            tmp_switchObj = $$(oldParentNode, consts.id.SWITCH, setting),
                            tmp_icoObj = $$(oldParentNode, consts.id.ICON, setting);
                        view.replaceSwitchClass(oldParentNode, tmp_switchObj, consts.folder.DOCU), view.replaceIcoClass(oldParentNode, tmp_icoObj, consts.folder.DOCU), tmp_ulObj.css("display", "none")
                    } else oldNeighbor && view.setNodeLineIcos(setting, oldNeighbor);
                    newNeighbor && view.setNodeLineIcos(setting, newNeighbor), setting.check && setting.check.enable && view.repairChkClass && (view.repairChkClass(setting, oldParentNode), view.repairParentChkClassWithSelf(setting, oldParentNode), oldParentNode != node.parent && view.repairParentChkClassWithSelf(setting, node)), isSilent || view.expandCollapseParentNode(setting, node.getParentNode(), !0, animateFlag)
                }
            }, removeEditBtn: function (setting, node) {
                $$(node, consts.id.EDIT, setting).unbind().remove()
            }, removeRemoveBtn: function (setting, node) {
                $$(node, consts.id.REMOVE, setting).unbind().remove()
            }, removeTreeDom: function (setting, node) {
                node.isHover = !1, view.removeEditBtn(setting, node), view.removeRemoveBtn(setting, node), tools.apply(setting.view.removeHoverDom, [setting.treeId, node])
            }, repairNodeLevelClass: function (setting, node, oldLevel) {
                if (oldLevel !== node.level) {
                    var liObj = $$(node, setting), aObj = $$(node, consts.id.A, setting),
                        ulObj = $$(node, consts.id.UL, setting), oldClass = consts.className.LEVEL + oldLevel,
                        newClass = consts.className.LEVEL + node.level;
                    liObj.removeClass(oldClass), liObj.addClass(newClass), aObj.removeClass(oldClass), aObj.addClass(newClass), ulObj.removeClass(oldClass), ulObj.addClass(newClass)
                }
            }, selectNodes: function (setting, nodes) {
                for (var i = 0, l = nodes.length; i < l; i++) view.selectNode(setting, nodes[i], i > 0)
            }
        }, _z = {tools: _tools, view: _view, event: _event, data: _data};
        $.extend(!0, $.fn.zTree.consts, _consts), $.extend(!0, $.fn.zTree._z, _z);
        var zt = $.fn.zTree, tools = zt._z.tools, consts = zt.consts, view = zt._z.view, data = zt._z.data,
            $$ = (zt._z.event, tools.$);
        data.exSetting(_setting), data.addInitBind(_bindEvent), data.addInitUnBind(_unbindEvent), data.addInitCache(_initCache), data.addInitNode(_initNode), data.addInitProxy(_eventProxy), data.addInitRoot(_initRoot), data.addZTreeTools(_zTreeTools);
        var _cancelPreSelectedNode = view.cancelPreSelectedNode;
        view.cancelPreSelectedNode = function (setting, node) {
            for (var list = data.getRoot(setting).curSelectedList, i = 0, j = list.length; i < j && (node && node !== list[i] || (view.removeTreeDom(setting, list[i]), !node)); i++) ;
            _cancelPreSelectedNode && _cancelPreSelectedNode.apply(view, arguments)
        };
        var _createNodes = view.createNodes;
        view.createNodes = function (setting, level, nodes, parentNode) {
            _createNodes && _createNodes.apply(view, arguments), nodes && view.repairParentChkClassWithSelf && view.repairParentChkClassWithSelf(setting, parentNode)
        };
        var _makeNodeUrl = view.makeNodeUrl;
        view.makeNodeUrl = function (setting, node) {
            return setting.edit.enable ? null : _makeNodeUrl.apply(view, arguments)
        };
        var _removeNode = view.removeNode;
        view.removeNode = function (setting, node) {
            var root = data.getRoot(setting);
            root.curEditNode === node && (root.curEditNode = null), _removeNode && _removeNode.apply(view, arguments)
        };
        var _selectNode = view.selectNode;
        view.selectNode = function (setting, node, addFlag) {
            var root = data.getRoot(setting);
            return (!data.isSelectedNode(setting, node) || root.curEditNode != node || !node.editNameFlag) && (_selectNode && _selectNode.apply(view, arguments), view.addHoverDom(setting, node), !0)
        };
        var _uCanDo = tools.uCanDo;
        tools.uCanDo = function (setting, e) {
            var root = data.getRoot(setting);
            return !(!e || !(tools.eqs(e.type, "mouseover") || tools.eqs(e.type, "mouseout") || tools.eqs(e.type, "mousedown") || tools.eqs(e.type, "mouseup"))) || (root.curEditNode && (view.editNodeBlur = !1, root.curEditInput.focus()), !root.curEditNode && (!_uCanDo || _uCanDo.apply(view, arguments)))
        }
    }(jQuery)
}, function (module, exports) {
    window.ZtreeCreator = function (treeId, url, initJson) {
        function pushJsonToBuildTree(json, level, callBack) {
            if (_treeObj = jQuery.fn.zTree.init(jQuery("#" + treeId), _setting, json), level ? (_treeObj.expandAll(!1), expandTree(_treeObj, _treeObj.getNodes(), level)) : _treeObj.expandAll(!0), jQuery.isFunction(callBack) && callBack(_treeObj, treeId), outLookStyle) {
                try {
                    var curMenu = _treeObj.getNodes()[0].children[0].children[0]
                } catch (e) {
                }
                _treeObj.selectNode(curMenu)
            }
        }

        function expandTree(treeObj, nodes, level) {
            for (var thelevel = level - 1, i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                treeObj.expandNode(node, !0, !1, !1), thelevel > 0 && node.children && node.children.length > 0 && expandTree(treeObj, node.children, thelevel)
            }
        }

        treeId || alert("构造Ztree必须提供 treeId"), this.treeId = treeId;
        var _treeObj, outLookStyle = !1;
        this.initZtree = function (param, level, callBack) {
            return url || _setting.async.url || alert("构造Ztree必须提供 请求地址！"), jQuery.isFunction(param) && (callBack = param, param = {}), jQuery.isFunction(level) && (callBack = level, level = !1), param || (param = {}), initJson ? (pushJsonToBuildTree(initJson, level, callBack), this) : _setting.async.url ? (_treeObj = jQuery.fn.zTree.init(jQuery("#" + treeId), _setting), this) : (jQuery.post(url, param, function (result) {
                "[object String]" === Object.prototype.toString.call(result) && (result = eval("(" + result + ")")), result && result.code && (result = result.data), pushJsonToBuildTree(result, level, callBack)
            }), this)
        }, this.getTreeObj = function () {
            return _treeObj || alert(treeId + "尚未初始化"), _treeObj
        }, this.setDataKey = function (keys) {
            return keys ? (keys.idKey && (_setting.data.simpleData.idKey = keys.idKey), keys.pIdKey && (_setting.data.simpleData.pIdKey = keys.pIdKey), keys.name && (_setting.data.key.name = keys.name), keys.title && (_setting.data.key.title = keys.title), keys.rootPId && (_setting.data.simpleData.rootPId = keys.rootPId), this) : this
        }, this.setChildKey = function (key) {
            return key || (key = "children"), _setting.data.simpleData.enable = !1, _setting.data.key.children = key, this
        }, this.setCheckboxType = function (type) {
            return _setting.check.enable = !0, type instanceof Object && (_setting.check.chkboxType = type), this
        }, this.setCallback = function (callBack) {
            if (callBack instanceof Object) for (call in callBack) jQuery.isFunction(callBack[call]) || alert(call + " :is not a function"), _setting.callback[call] = callBack[call];
            return this
        }, this.setAsync = function (conf) {
            return _setting.async = conf, this
        }, this.setShowIcon = function (call) {
            return _setting.view.showIcon = call, this
        }, this.setSetingParam = function (param) {
            if (param instanceof Object) for (p in param) _setting[p] = param[p];
            return this
        }, this.setOutLookStyle = function () {
            return this.setSetingParam({
                view: {
                    showLine: !1,
                    showIcon: !0,
                    selectedMulti: !1,
                    dblClickExpand: !1,
                    addDiyDom: function (treeId, treeNode) {
                        var switchObj = jQuery("#" + treeNode.tId + "_switch"),
                            icoObj = jQuery("#" + treeNode.tId + "_ico");
                        if (switchObj.remove(), treeNode.children && 0 != treeNode.children.length || switchObj.removeClass("switch"), icoObj.before(switchObj), treeNode.level > 0) {
                            var spaceStr = "<span style='display: inline-block;width:" + 15 * treeNode.level + "px'></span>";
                            switchObj.before(spaceStr)
                        }
                    }
                }
            }), jQuery("#" + treeId).addClass("showIcon"), outLookStyle = !0, this
        };
        var _isShowIn, _menuContent;
        this.makeCombTree = function (isShowIn, width, height) {
            height = height || 300, width = width || jQuery("#" + isShowIn).outerWidth() || 163, _menuContent = treeId + "MenuContent", _isShowIn = isShowIn;
            var menuContent = '<div id="' + _menuContent + '" style="width:' + width + "px; height:" + height + 'px;overflow-y:scroll; position:absolute;z-index: 9999;display:none;background-color:#F5F5F5"><ul id="' + treeId + '" class="ztree" ></ul></div>';
            return jQuery("#" + isShowIn).after(menuContent), jQuery("#" + isShowIn).bind("click", this.showMenu), this
        }, this.showMenu = function (target) {
            target && !target.currentTarget || (target = jQuery(this));
            var btnOffset = target.offset();
            btnOffset.top = btnOffset.top + target.outerHeight(), jQuery("#" + _menuContent).css({
                left: btnOffset.left + "px",
                top: btnOffset.top + target.outerHeight() + "px"
            }).slideDown("fast"), jQuery("#" + _menuContent).offset(btnOffset), jQuery("body").bind("mousedown", onBodyDown)
        }, this.hideMenu = function () {
            hideMenu()
        };
        var onBodyDown = function (event) {
            event.target.id == _isShowIn || event.target.id == _menuContent || jQuery(event.target).parents("#" + _menuContent).length > 0 || hideMenu()
        }, hideMenu = function () {
            jQuery("#" + _menuContent).fadeOut("fast"), jQuery("body").unbind("mousedown", onBodyDown)
        }, _setting = {
            data: {
                key: {name: "name", title: "name"},
                simpleData: {enable: !0, idKey: "id", pIdKey: "parentId", rootPId: 0}
            },
            async: {enable: !1},
            edit: {drag: {isCopy: !0}, enable: !0, showRemoveBtn: !1, showRenameBtn: !1},
            view: {nameIsHTML: !0, selectedMulti: !0, showIconFont: !0, showIcon: null},
            check: {enable: !1, chkboxType: {Y: "", N: ""}},
            callback: {beforeClick: null, onClick: null, onRightClick: null, beforeDrop: null, onDrop: null}
        }
    }
}, function (module, exports) {
}, function (module, exports) {
}, function (module, exports) {
    window.FastJson = {
        isArray: function (a) {
            return "object" == typeof a && "[object array]" == Object.prototype.toString.call(a).toLowerCase()
        }, isObject: function (a) {
            return "object" == typeof a && "[object object]" == Object.prototype.toString.call(a).toLowerCase()
        }, format: function (a) {
            return null == a ? null : ("string" == typeof a && (a = eval("(" + a + ")")), this._format(a, a, null, null, null))
        }, _randomId: function () {
            return "randomId_" + parseInt(1e9 * Math.random())
        }, _getJsonValue: function (a, c) {
            c = c.replace(/\\/g, "");
            var b, d = this._randomId();
            b = "function " + d + "(root){return root." + c + ";", b += "}", b += "";
            var e = document.createElement("script");
            return e.id = d, e.text = b, document.body.appendChild(e), d = window[d](a), e.parentNode.removeChild(e), d
        }, _format: function (a, c, d, b, e) {
            if (d || (d = ""), this.isObject(c)) {
                if (c.$ref) {
                    var g = c.$ref;
                    return void (0 == g.indexOf("$.") && (b[e] = this._getJsonValue(a, g.substring(2))))
                }
                for (var f in c) b = d, "" != b && (b += "."), g = c[f], b += f, this._format(a, g, b, c, f)
            } else if (this.isArray(c)) for (f in c) b = d, g = c[f], b = b + "[" + f + "]", this._format(a, g, b, c, f);
            return a
        }
    }
}]);