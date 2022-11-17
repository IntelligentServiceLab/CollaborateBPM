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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 47)
}({
    47: function (module, exports, __webpack_require__) {
        __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51)
    }, 48: function (module, exports) {
        !function ($) {
            "use strict";
            var cachedWidth = null, sprintf = function (str) {
                var args = arguments, flag = !0, i = 1;
                return str = str.replace(/%s/g, function () {
                    var arg = args[i++];
                    return void 0 === arg ? (flag = !1, "") : arg
                }), flag ? str : ""
            }, getPropertyFromOther = function (list, from, to, value) {
                var result = "";
                return $.each(list, function (i, item) {
                    return item[from] !== value || (result = item[to], !1)
                }), result
            }, getFieldIndex = function (columns, field) {
                var index = -1;
                return $.each(columns, function (i, column) {
                    return column.field !== field || (index = i, !1)
                }), index
            }, setFieldIndex = function (columns) {
                var i, j, k, totalCol = 0, flag = [];
                for (i = 0; i < columns[0].length; i++) totalCol += columns[0][i].colspan || 1;
                for (i = 0; i < columns.length; i++) for (flag[i] = [], j = 0; j < totalCol; j++) flag[i][j] = !1;
                for (i = 0; i < columns.length; i++) for (j = 0; j < columns[i].length; j++) {
                    var r = columns[i][j], rowspan = r.rowspan || 1, colspan = r.colspan || 1,
                        index = $.inArray(!1, flag[i]);
                    for (1 === colspan && (r.fieldIndex = index, void 0 === r.field && (r.field = index)), k = 0; k < rowspan; k++) flag[i + k][index] = !0;
                    for (k = 0; k < colspan; k++) flag[i][index + k] = !0
                }
            }, getScrollBarWidth = function () {
                if (null === cachedWidth) {
                    var w1, w2, inner = $("<p/>").addClass("fixed-table-scroll-inner"),
                        outer = $("<div/>").addClass("fixed-table-scroll-outer");
                    outer.append(inner), $("body").append(outer), w1 = inner[0].offsetWidth, outer.css("overflow", "scroll"), w2 = inner[0].offsetWidth, w1 === w2 && (w2 = outer[0].clientWidth), outer.remove(), cachedWidth = w1 - w2
                }
                return cachedWidth
            }, calculateObjectValue = function (self, name, args, defaultValue) {
                var func = name;
                if ("string" == typeof name) {
                    var names = name.split(".");
                    names.length > 1 ? (func = window, $.each(names, function (i, f) {
                        func = func[f]
                    })) : func = window[name]
                }
                return "object" == typeof func ? func : "function" == typeof func ? func.apply(self, args) : !func && "string" == typeof name && sprintf.apply(this, [name].concat(args)) ? sprintf.apply(this, [name].concat(args)) : defaultValue
            }, compareObjects = function (objectA, objectB, compareLength) {
                var objectAProperties = Object.getOwnPropertyNames(objectA),
                    objectBProperties = Object.getOwnPropertyNames(objectB), propName = "";
                if (compareLength && objectAProperties.length !== objectBProperties.length) return !1;
                for (var i = 0; i < objectAProperties.length; i++) if (propName = objectAProperties[i], $.inArray(propName, objectBProperties) > -1 && objectA[propName] !== objectB[propName]) return !1;
                return !0
            }, escapeHTML = function (text) {
                return "string" == typeof text ? text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : text
            }, getRealHeight = function ($el) {
                var height = 0;
                return $el.children().each(function () {
                    height < $(this).outerHeight(!0) && (height = $(this).outerHeight(!0))
                }), height
            }, getRealDataAttr = function (dataAttr) {
                for (var attr in dataAttr) {
                    var auxAttr = attr.split(/(?=[A-Z])/).join("-").toLowerCase();
                    auxAttr !== attr && (dataAttr[auxAttr] = dataAttr[attr], delete dataAttr[attr])
                }
                return dataAttr
            }, getItemField = function (item, field, escape) {
                var value = item;
                if ("string" != typeof field || item.hasOwnProperty(field)) return escape ? escapeHTML(item[field]) : item[field];
                var props = field.split(".");
                for (var p in props) value = value && value[props[p]];
                return escape ? escapeHTML(value) : value
            }, isIEBrowser = function () {
                return !!(navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
            }, objectKeys = function () {
                Object.keys || (Object.keys = function () {
                    var hasOwnProperty = Object.prototype.hasOwnProperty,
                        hasDontEnumBug = !{toString: null}.propertyIsEnumerable("toString"),
                        dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        dontEnumsLength = dontEnums.length;
                    return function (obj) {
                        if ("object" != typeof obj && ("function" != typeof obj || null === obj)) throw new TypeError("Object.keys called on non-object");
                        var prop, i, result = [];
                        for (prop in obj) hasOwnProperty.call(obj, prop) && result.push(prop);
                        if (hasDontEnumBug) for (i = 0; i < dontEnumsLength; i++) hasOwnProperty.call(obj, dontEnums[i]) && result.push(dontEnums[i]);
                        return result
                    }
                }())
            }, BootstrapTable = function (el, options) {
                this.options = options, this.$el = $(el), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
            };
            BootstrapTable.DEFAULTS = {
                classes: "table table-hover",
                locale: void 0,
                height: void 0,
                undefinedText: "-",
                sortName: void 0,
                sortOrder: "asc",
                sortStable: !1,
                striped: !1,
                columns: [[]],
                data: [],
                dataField: "rows",
                method: "get",
                url: void 0,
                ajax: void 0,
                cache: !0,
                contentType: "application/json",
                dataType: "json",
                ajaxOptions: {},
                queryParams: function (params) {
                    return params
                },
                queryParamsType: "limit",
                responseHandler: function (res) {
                    return res
                },
                pagination: !1,
                onlyInfoPagination: !1,
                sidePagination: "client",
                totalRows: 0,
                pageNumber: 1,
                pageSize: 10,
                pageList: [10, 25, 50, 100],
                paginationHAlign: "right",
                paginationVAlign: "bottom",
                paginationDetailHAlign: "left",
                paginationPreText: "&lsaquo;",
                paginationNextText: "&rsaquo;",
                search: !1,
                searchOnEnterKey: !1,
                strictSearch: !1,
                searchAlign: "right",
                selectItemName: "btSelectItem",
                showHeader: !0,
                showFooter: !1,
                showColumns: !1,
                showPaginationSwitch: !1,
                showRefresh: !1,
                showToggle: !1,
                buttonsAlign: "right",
                smartDisplay: !0,
                escape: !1,
                minimumCountColumns: 1,
                idField: void 0,
                uniqueId: void 0,
                cardView: !1,
                detailView: !1,
                detailFormatter: function (index, row) {
                    return ""
                },
                trimOnSearch: !0,
                clickToSelect: !1,
                singleSelect: !1,
                toolbar: void 0,
                toolbarAlign: "left",
                checkboxHeader: !0,
                sortable: !0,
                silentSort: !0,
                maintainSelected: !1,
                searchTimeOut: 500,
                searchText: "",
                iconSize: void 0,
                buttonsClass: "default",
                iconsPrefix: "glyphicon",
                icons: {
                    paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
                    paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
                    refresh: "glyphicon-refresh icon-refresh",
                    toggle: "glyphicon-list-alt icon-list-alt",
                    columns: "glyphicon-th icon-th",
                    detailOpen: "glyphicon-plus icon-plus",
                    detailClose: "glyphicon-minus icon-minus"
                },
                customSearch: $.noop,
                customSort: $.noop,
                rowStyle: function (row, index) {
                    return {}
                },
                rowAttributes: function (row, index) {
                    return {}
                },
                footerStyle: function (row, index) {
                    return {}
                },
                onAll: function (name, args) {
                    return !1
                },
                onClickCell: function (field, value, row, $element) {
                    return !1
                },
                onDblClickCell: function (field, value, row, $element) {
                    return !1
                },
                onClickRow: function (item, $element) {
                    return !1
                },
                onDblClickRow: function (item, $element) {
                    return !1
                },
                onSort: function (name, order) {
                    return !1
                },
                onCheck: function (row) {
                    return !1
                },
                onUncheck: function (row) {
                    return !1
                },
                onCheckAll: function (rows) {
                    return !1
                },
                onUncheckAll: function (rows) {
                    return !1
                },
                onCheckSome: function (rows) {
                    return !1
                },
                onUncheckSome: function (rows) {
                    return !1
                },
                onLoadSuccess: function (data) {
                    return !1
                },
                onLoadError: function (status) {
                    return !1
                },
                onColumnSwitch: function (field, checked) {
                    return !1
                },
                onPageChange: function (number, size) {
                    return !1
                },
                onSearch: function (text) {
                    return !1
                },
                onToggle: function (cardView) {
                    return !1
                },
                onPreBody: function (data) {
                    return !1
                },
                onPostBody: function () {
                    return !1
                },
                onPostHeader: function () {
                    return !1
                },
                onExpandRow: function (index, row, $detail) {
                    return !1
                },
                onCollapseRow: function (index, row) {
                    return !1
                },
                onRefreshOptions: function (options) {
                    return !1
                },
                onRefresh: function (params) {
                    return !1
                },
                onResetView: function () {
                    return !1
                }
            }, BootstrapTable.LOCALES = {}, BootstrapTable.LOCALES["en-US"] = BootstrapTable.LOCALES.en = {
                formatLoadingMessage: function () {
                    return "Loading, please wait..."
                }, formatRecordsPerPage: function (pageNumber) {
                    return sprintf("%s rows per page", pageNumber)
                }, formatShowingRows: function (pageFrom, pageTo, totalRows) {
                    return sprintf("Showing %s to %s of %s rows", pageFrom, pageTo, totalRows)
                }, formatDetailPagination: function (totalRows) {
                    return sprintf("Showing %s rows", totalRows)
                }, formatSearch: function () {
                    return "Search"
                }, formatNoMatches: function () {
                    return "No matching records found"
                }, formatPaginationSwitch: function () {
                    return "Hide/Show pagination"
                }, formatRefresh: function () {
                    return "Refresh"
                }, formatToggle: function () {
                    return "Toggle"
                }, formatColumns: function () {
                    return "Columns"
                }, formatAllRows: function () {
                    return "All"
                }
            }, $.extend(BootstrapTable.DEFAULTS, BootstrapTable.LOCALES["en-US"]), BootstrapTable.COLUMN_DEFAULTS = {
                radio: !1,
                checkbox: !1,
                checkboxEnabled: !0,
                field: void 0,
                title: void 0,
                titleTooltip: void 0,
                class: void 0,
                align: void 0,
                halign: void 0,
                falign: void 0,
                valign: void 0,
                width: void 0,
                sortable: !1,
                order: "asc",
                visible: !0,
                switchable: !0,
                clickToSelect: !0,
                formatter: void 0,
                footerFormatter: void 0,
                events: void 0,
                sorter: void 0,
                sortName: void 0,
                cellStyle: void 0,
                searchable: !0,
                searchFormatter: !0,
                cardVisible: !0
            }, BootstrapTable.EVENTS = {
                "all.bs.table": "onAll",
                "click-cell.bs.table": "onClickCell",
                "dbl-click-cell.bs.table": "onDblClickCell",
                "click-row.bs.table": "onClickRow",
                "dbl-click-row.bs.table": "onDblClickRow",
                "sort.bs.table": "onSort",
                "check.bs.table": "onCheck",
                "uncheck.bs.table": "onUncheck",
                "check-all.bs.table": "onCheckAll",
                "uncheck-all.bs.table": "onUncheckAll",
                "check-some.bs.table": "onCheckSome",
                "uncheck-some.bs.table": "onUncheckSome",
                "load-success.bs.table": "onLoadSuccess",
                "load-error.bs.table": "onLoadError",
                "column-switch.bs.table": "onColumnSwitch",
                "page-change.bs.table": "onPageChange",
                "search.bs.table": "onSearch",
                "toggle.bs.table": "onToggle",
                "pre-body.bs.table": "onPreBody",
                "post-body.bs.table": "onPostBody",
                "post-header.bs.table": "onPostHeader",
                "expand-row.bs.table": "onExpandRow",
                "collapse-row.bs.table": "onCollapseRow",
                "refresh-options.bs.table": "onRefreshOptions",
                "reset-view.bs.table": "onResetView",
                "refresh.bs.table": "onRefresh"
            }, BootstrapTable.prototype.init = function () {
                this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initFooter(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
            }, BootstrapTable.prototype.initLocale = function () {
                if (this.options.locale) {
                    var parts = this.options.locale.split(/-|_/);
                    parts[0].toLowerCase(), parts[1] && parts[1].toUpperCase(), $.fn.bootstrapTable.locales[this.options.locale] ? $.extend(this.options, $.fn.bootstrapTable.locales[this.options.locale]) : $.fn.bootstrapTable.locales[parts.join("-")] ? $.extend(this.options, $.fn.bootstrapTable.locales[parts.join("-")]) : $.fn.bootstrapTable.locales[parts[0]] && $.extend(this.options, $.fn.bootstrapTable.locales[parts[0]])
                }
            }, BootstrapTable.prototype.initContainer = function () {
                this.$container = $(['<div class="bootstrap-table">', '<div class="fixed-table-toolbar"></div>', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination" style="clear: both;"></div>' : "", '<div class="fixed-table-container">', '<div class="fixed-table-header"><table></table></div>', '<div class="fixed-table-body">', '<div class="fixed-table-loading">', this.options.formatLoadingMessage(), "</div>", "</div>", '<div class="fixed-table-footer"><table><tr></tr></table></div>', "bottom" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination"></div>' : "", "</div>", "</div>"].join("")), this.$container.insertAfter(this.$el), this.$tableContainer = this.$container.find(".fixed-table-container"), this.$tableHeader = this.$container.find(".fixed-table-header"), this.$tableBody = this.$container.find(".fixed-table-body"), this.$tableLoading = this.$container.find(".fixed-table-loading"), this.$tableFooter = this.$container.find(".fixed-table-footer"), this.$toolbar = this.$container.find(".fixed-table-toolbar"), this.$pagination = this.$container.find(".fixed-table-pagination"), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.options.striped && this.$el.addClass("table-striped"), -1 !== $.inArray("table-no-bordered", this.options.classes.split(" ")) && this.$tableContainer.addClass("table-no-bordered")
            }, BootstrapTable.prototype.initTable = function () {
                var that = this, columns = [], data = [];
                if (this.$header = this.$el.find(">thead"), this.$header.length || (this.$header = $("<thead></thead>").appendTo(this.$el)), this.$header.find("tr").each(function () {
                    var column = [];
                    $(this).find("th").each(function () {
                        void 0 !== $(this).data("field") && $(this).data("field", $(this).data("field") + ""), column.push($.extend({}, {
                            title: $(this).html(),
                            html: $(this).html(),
                            class: $(this).attr("class"),
                            titleTooltip: $(this).attr("title"),
                            rowspan: $(this).attr("rowspan") ? +$(this).attr("rowspan") : void 0,
                            colspan: $(this).attr("colspan") ? +$(this).attr("colspan") : void 0
                        }, $(this).data()))
                    }), columns.push(column)
                }), $.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = $.extend(!0, [], columns, this.options.columns), this.columns = [], setFieldIndex(this.options.columns), $.each(this.options.columns, function (i, columns) {
                    $.each(columns, function (j, column) {
                        column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, column), void 0 !== column.fieldIndex && (that.columns[column.fieldIndex] = column), that.options.columns[i][j] = column
                    })
                }), !this.options.data.length) {
                    var m = [];
                    this.$el.find(">tbody>tr").each(function (y) {
                        var row = {};
                        row._id = $(this).attr("id"), row._class = $(this).attr("class"), row._data = getRealDataAttr($(this).data()), $(this).find(">td").each(function (x) {
                            for (var tx, ty, $this = $(this), cspan = +$this.attr("colspan") || 1, rspan = +$this.attr("rowspan") || 1; m[y] && m[y][x]; x++) ;
                            for (tx = x; tx < x + cspan; tx++) for (ty = y; ty < y + rspan; ty++) m[ty] || (m[ty] = []), m[ty][tx] = !0;
                            var field = that.columns[x].field;
                            row[field] = $(this).html(), row["_" + field + "_id"] = $(this).attr("id"), row["_" + field + "_class"] = $(this).attr("class"), row["_" + field + "_rowspan"] = $(this).attr("rowspan"), row["_" + field + "_colspan"] = $(this).attr("colspan"), row["_" + field + "_title"] = $(this).attr("title"), row["_" + field + "_data"] = getRealDataAttr($(this).data())
                        }), data.push(row)
                    }), this.options.data = data, data.length && (this.fromHtml = !0)
                }
            }, BootstrapTable.prototype.initHeader = function () {
                var that = this, visibleColumns = {}, html = [];
                this.header = {
                    fields: [],
                    styles: [],
                    classes: [],
                    formatters: [],
                    events: [],
                    sorters: [],
                    sortNames: [],
                    cellStyles: [],
                    searchables: []
                }, $.each(this.options.columns, function (i, columns) {
                    html.push("<tr>"), 0 === i && !that.options.cardView && that.options.detailView && html.push(sprintf('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', that.options.columns.length)), $.each(columns, function (j, column) {
                        var text = "", halign = "", align = "", style = "",
                            class_ = sprintf(' class="%s"', column.class),
                            unitWidth = (that.options.sortOrder || column.order, "px"), width = column.width;
                        if (void 0 === column.width || that.options.cardView || "string" == typeof column.width && -1 !== column.width.indexOf("%") && (unitWidth = "%"), column.width && "string" == typeof column.width && (width = column.width.replace("%", "").replace("px", "")), halign = sprintf("text-align: %s; ", column.halign ? column.halign : column.align), align = sprintf("text-align: %s; ", column.align), style = sprintf("vertical-align: %s; ", column.valign), style += sprintf("width: %s; ", !column.checkbox && !column.radio || width ? width ? width + unitWidth : void 0 : "36px"), void 0 !== column.fieldIndex) {
                            if (that.header.fields[column.fieldIndex] = column.field, that.header.styles[column.fieldIndex] = align + style, that.header.classes[column.fieldIndex] = class_, that.header.formatters[column.fieldIndex] = column.formatter, that.header.events[column.fieldIndex] = column.events, that.header.sorters[column.fieldIndex] = column.sorter, that.header.sortNames[column.fieldIndex] = column.sortName, that.header.cellStyles[column.fieldIndex] = column.cellStyle, that.header.searchables[column.fieldIndex] = column.searchable, !column.visible) return;
                            if (that.options.cardView && !column.cardVisible) return;
                            visibleColumns[column.field] = column
                        }
                        html.push("<th" + sprintf(' title="%s"', column.titleTooltip), column.checkbox || column.radio ? sprintf(' class="bs-checkbox %s"', column.class || "") : class_, sprintf(' style="%s"', halign + style), sprintf(' rowspan="%s"', column.rowspan), sprintf(' colspan="%s"', column.colspan), sprintf(' data-field="%s"', column.field), "tabindex='0'", ">"), html.push(sprintf('<div class="th-inner %s">', that.options.sortable && column.sortable ? "sortable both" : "")), text = column.title, column.checkbox && (!that.options.singleSelect && that.options.checkboxHeader && (text = '<input name="btSelectAll" type="checkbox" />'), that.header.stateField = column.field), column.radio && (text = "", that.header.stateField = column.field, that.options.singleSelect = !0), html.push(text), html.push("</div>"), html.push('<div class="fht-cell"></div>'), html.push("</div>"), html.push("</th>")
                    }), html.push("</tr>")
                }), this.$header.html(html.join("")), this.$header.find("th[data-field]").each(function (i) {
                    $(this).data(visibleColumns[$(this).data("field")])
                }), this.$container.off("click", ".th-inner").on("click", ".th-inner", function (event) {
                    var target = $(this);
                    if (that.options.detailView && target.closest(".bootstrap-table")[0] !== that.$container[0]) return !1;
                    that.options.sortable && target.parent().data().sortable && that.onSort(event)
                }), this.$header.children().children().off("keypress").on("keypress", function (event) {
                    if (that.options.sortable && $(this).data().sortable) {
                        13 == (event.keyCode || event.which) && that.onSort(event)
                    }
                }), $(window).off("resize.bootstrap-table"), !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), $(window).on("resize.bootstrap-table", $.proxy(this.resetWidth, this))), this.$selectAll = this.$header.find('[name="btSelectAll"]'), this.$selectAll.off("click").on("click", function () {
                    var checked = $(this).prop("checked");
                    that[checked ? "checkAll" : "uncheckAll"](), that.updateSelected()
                })
            }, BootstrapTable.prototype.initFooter = function () {
                !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
            }, BootstrapTable.prototype.initData = function (data, type) {
                this.data = "append" === type ? this.data.concat(data) : "prepend" === type ? [].concat(data).concat(this.data) : data || this.options.data, this.options.data = "append" === type ? this.options.data.concat(data) : "prepend" === type ? [].concat(data).concat(this.options.data) : this.data, "server" !== this.options.sidePagination && this.initSort()
            }, BootstrapTable.prototype.initSort = function () {
                var that = this, name = this.options.sortName, order = "desc" === this.options.sortOrder ? -1 : 1,
                    index = $.inArray(this.options.sortName, this.header.fields);
                if (this.options.customSort !== $.noop) return void this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]);
                -1 !== index && (this.options.sortStable && $.each(this.data, function (i, row) {
                    row.hasOwnProperty("_position") || (row._position = i)
                }), this.data.sort(function (a, b) {
                    that.header.sortNames[index] && (name = that.header.sortNames[index]);
                    var aa = getItemField(a, name, that.options.escape),
                        bb = getItemField(b, name, that.options.escape),
                        value = calculateObjectValue(that.header, that.header.sorters[index], [aa, bb]);
                    return void 0 !== value ? order * value : (void 0 !== aa && null !== aa || (aa = ""), void 0 !== bb && null !== bb || (bb = ""), that.options.sortStable && aa === bb && (aa = a._position, bb = b._position), $.isNumeric(aa) && $.isNumeric(bb) ? (aa = parseFloat(aa), bb = parseFloat(bb), aa < bb ? -1 * order : order) : aa === bb ? 0 : ("string" != typeof aa && (aa = aa.toString()), -1 === aa.localeCompare(bb) ? -1 * order : order))
                }))
            }, BootstrapTable.prototype.onSort = function (event) {
                var $this = "keypress" === event.type ? $(event.currentTarget) : $(event.currentTarget).parent(),
                    $this_ = this.$header.find("th").eq($this.index());
                this.$header.add(this.$header_).find("span.order").remove();
                var sortName = $this.data("field");
                if ($this.data("sort-name") && (sortName = $this.data("sort-name")), this.options.sortName === sortName ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = sortName, this.options.sortOrder = "asc" === $this.data("order") ? "desc" : "asc"), this.trigger("sort", this.options.sortName, this.options.sortOrder), $this.add($this_).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination) return void this.initServer(this.options.silentSort);
                this.initSort(), this.initBody()
            }, BootstrapTable.prototype.initToolbar = function () {
                var $keepOpen, $search, that = this, html = [], timeoutId = 0, switchableCount = 0;
                this.$toolbar.find(".bs-bars").children().length && $("body").append($(this.options.toolbar)), this.$toolbar.html(""), "string" != typeof this.options.toolbar && "object" != typeof this.options.toolbar || $(sprintf('<div class="bs-bars pull-%s"></div>', this.options.toolbarAlign)).appendTo(this.$toolbar).append($(this.options.toolbar)), html = [sprintf('<div class="columns columns-%s btn-group pull-%s">', this.options.buttonsAlign, this.options.buttonsAlign)], "string" == typeof this.options.icons && (this.options.icons = calculateObjectValue(null, this.options.icons)), this.options.showPaginationSwitch && html.push(sprintf('<button class="btn' + sprintf(" btn-%s", this.options.buttonsClass) + sprintf(" btn-%s", this.options.iconSize) + '" type="button" name="paginationSwitch" title="%s">', this.options.formatPaginationSwitch()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), "</button>"), this.options.showRefresh && html.push(sprintf('<button class="btn' + sprintf(" btn-%s", this.options.buttonsClass) + sprintf(" btn-%s", this.options.iconSize) + '" type="button" name="refresh" title="%s">', this.options.formatRefresh()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), "</button>"), this.options.showToggle && html.push(sprintf('<button class="btn' + sprintf(" btn-%s", this.options.buttonsClass) + sprintf(" btn-%s", this.options.iconSize) + '" type="button" name="toggle" title="%s">', this.options.formatToggle()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle), "</button>"), this.options.showColumns && (html.push(sprintf('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" class="btn' + sprintf(" btn-%s", this.options.buttonsClass) + sprintf(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'), $.each(this.columns, function (i, column) {
                    if (!column.radio && !column.checkbox && (!that.options.cardView || column.cardVisible)) {
                        var checked = column.visible ? ' checked="checked"' : "";
                        column.switchable && (html.push(sprintf('<li><label><input type="checkbox" data-field="%s" value="%s"%s> %s</label></li>', column.field, i, checked, column.title)), switchableCount++)
                    }
                }), html.push("</ul>", "</div>")), html.push("</div>"), (this.showToolbar || html.length > 2) && this.$toolbar.append(html.join("")), this.options.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", $.proxy(this.togglePagination, this)), this.options.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", $.proxy(this.refresh, this)), this.options.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click", function () {
                    that.toggleView()
                }), this.options.showColumns && ($keepOpen = this.$toolbar.find(".keep-open"), switchableCount <= this.options.minimumCountColumns && $keepOpen.find("input").prop("disabled", !0), $keepOpen.find("li").off("click").on("click", function (event) {
                    event.stopImmediatePropagation()
                }), $keepOpen.find("input").off("click").on("click", function () {
                    var $this = $(this);
                    that.toggleColumn($(this).val(), $this.prop("checked"), !1), that.trigger("column-switch", $(this).data("field"), $this.prop("checked"))
                })), this.options.search && (html = [], html.push('<div class="pull-' + this.options.searchAlign + ' search">', sprintf('<input class="form-control' + sprintf(" input-%s", this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), "</div>"), this.$toolbar.append(html.join("")), $search = this.$toolbar.find(".search input"), $search.off("keyup drop").on("keyup drop", function (event) {
                    that.options.searchOnEnterKey && 13 !== event.keyCode || $.inArray(event.keyCode, [37, 38, 39, 40]) > -1 || (clearTimeout(timeoutId), timeoutId = setTimeout(function () {
                        that.onSearch(event)
                    }, that.options.searchTimeOut))
                }), isIEBrowser() && $search.off("mouseup").on("mouseup", function (event) {
                    clearTimeout(timeoutId), timeoutId = setTimeout(function () {
                        that.onSearch(event)
                    }, that.options.searchTimeOut)
                }))
            }, BootstrapTable.prototype.onSearch = function (event) {
                var text = $.trim($(event.currentTarget).val());
                this.options.trimOnSearch && $(event.currentTarget).val() !== text && $(event.currentTarget).val(text), text !== this.searchText && (this.searchText = text, this.options.searchText = text, this.options.pageNumber = 1, this.initSearch(), this.updatePagination(), this.trigger("search", text))
            }, BootstrapTable.prototype.initSearch = function () {
                var that = this;
                if ("server" !== this.options.sidePagination) {
                    if (this.options.customSearch !== $.noop) return void this.options.customSearch.apply(this, [this.searchText]);
                    var s = this.searchText && (this.options.escape ? escapeHTML(this.searchText) : this.searchText).toLowerCase(),
                        f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
                    this.data = f ? $.grep(this.options.data, function (item, i) {
                        for (var key in f) if ($.isArray(f[key]) && -1 === $.inArray(item[key], f[key]) || item[key] !== f[key]) return !1;
                        return !0
                    }) : this.options.data, this.data = s ? $.grep(this.data, function (item, i) {
                        for (var j = 0; j < that.header.fields.length; j++) if (that.header.searchables[j]) {
                            var value,
                                key = $.isNumeric(that.header.fields[j]) ? parseInt(that.header.fields[j], 10) : that.header.fields[j],
                                column = that.columns[getFieldIndex(that.columns, key)];
                            if ("string" == typeof key) {
                                value = item;
                                for (var props = key.split("."), prop_index = 0; prop_index < props.length; prop_index++) value = value[props[prop_index]];
                                column && column.searchFormatter && (value = calculateObjectValue(column, that.header.formatters[j], [value, item, i], value))
                            } else value = item[key];
                            if ("string" == typeof value || "number" == typeof value) if (that.options.strictSearch) {
                                if ((value + "").toLowerCase() === s) return !0
                            } else if (-1 !== (value + "").toLowerCase().indexOf(s)) return !0
                        }
                        return !1
                    }) : this.data
                }
            }, BootstrapTable.prototype.initPagination = function () {
                if (!this.options.pagination) return void this.$pagination.hide();
                this.$pagination.show();
                var i, from, to, $pageList, $first, $pre, $next, $last, $number, that = this, html = [],
                    $allSelected = !1, data = this.getData(), pageList = this.options.pageList;
                if ("server" !== this.options.sidePagination && (this.options.totalRows = data.length), this.totalPages = 0, this.options.totalRows) {
                    if (this.options.pageSize === this.options.formatAllRows()) this.options.pageSize = this.options.totalRows, $allSelected = !0; else if (this.options.pageSize === this.options.totalRows) {
                        var pageLst = "string" == typeof this.options.pageList ? this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") : this.options.pageList;
                        $.inArray(this.options.formatAllRows().toLowerCase(), pageLst) > -1 && ($allSelected = !0)
                    }
                    this.totalPages = 1 + ~~((this.options.totalRows - 1) / this.options.pageSize), this.options.totalPages = this.totalPages
                }
                if (this.totalPages > 0 && this.options.pageNumber > this.totalPages && (this.options.pageNumber = this.totalPages), this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1, this.pageTo = this.options.pageNumber * this.options.pageSize, this.pageTo > this.options.totalRows && (this.pageTo = this.options.totalRows), html.push('<div class="pull-' + this.options.paginationDetailHAlign + ' pagination-detail">', '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), "</span>"), !this.options.onlyInfoPagination) {
                    html.push('<span class="page-list">');
                    var pageNumber = [sprintf('<span class="btn-group %s">', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? "dropdown" : "dropup"), '<button type="button" class="btn' + sprintf(" btn-%s", this.options.buttonsClass) + sprintf(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', $allSelected ? this.options.formatAllRows() : this.options.pageSize, "</span>", ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'];
                    if ("string" == typeof this.options.pageList) {
                        var list = this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(",");
                        pageList = [], $.each(list, function (i, value) {
                            pageList.push(value.toUpperCase() === that.options.formatAllRows().toUpperCase() ? that.options.formatAllRows() : +value)
                        })
                    }
                    for ($.each(pageList, function (i, page) {
                        if (!that.options.smartDisplay || 0 === i || pageList[i - 1] <= that.options.totalRows) {
                            var active;
                            active = $allSelected ? page === that.options.formatAllRows() ? ' class="active"' : "" : page === that.options.pageSize ? ' class="active"' : "", pageNumber.push(sprintf('<li%s><a href="javascript:void(0)">%s</a></li>', active, page))
                        }
                    }), pageNumber.push("</ul></span>"), html.push(this.options.formatRecordsPerPage(pageNumber.join(""))), html.push("</span>"), html.push("</div>", '<div class="pull-' + this.options.paginationHAlign + ' pagination">', '<ul class="pagination' + sprintf(" pagination-%s", this.options.iconSize) + '">', '<li class="page-pre"><a href="javascript:void(0)">' + this.options.paginationPreText + "</a></li>"), this.totalPages < 5 ? (from = 1, to = this.totalPages) : (from = this.options.pageNumber - 2, to = from + 4, from < 1 && (from = 1, to = 5), to > this.totalPages && (to = this.totalPages, from = to - 4)), this.totalPages >= 6 && (this.options.pageNumber >= 3 && (html.push('<li class="page-first' + (1 === this.options.pageNumber ? " active" : "") + '">', '<a href="javascript:void(0)">', 1, "</a>", "</li>"), from++), this.options.pageNumber >= 4 && (4 == this.options.pageNumber || 6 == this.totalPages || 7 == this.totalPages ? from-- : html.push('<li class="page-first-separator disabled">', '<a href="javascript:void(0)">...</a>', "</li>"), to--)), this.totalPages >= 7 && this.options.pageNumber >= this.totalPages - 2 && from--, 6 == this.totalPages ? this.options.pageNumber >= this.totalPages - 2 && to++ : this.totalPages >= 7 && (7 == this.totalPages || this.options.pageNumber >= this.totalPages - 3) && to++, i = from; i <= to; i++) html.push('<li class="page-number' + (i === this.options.pageNumber ? " active" : "") + '">', '<a href="javascript:void(0)">', i, "</a>", "</li>");
                    this.totalPages >= 8 && this.options.pageNumber <= this.totalPages - 4 && html.push('<li class="page-last-separator disabled">', '<a href="javascript:void(0)">...</a>', "</li>"), this.totalPages >= 6 && this.options.pageNumber <= this.totalPages - 3 && html.push('<li class="page-last' + (this.totalPages === this.options.pageNumber ? " active" : "") + '">', '<a href="javascript:void(0)">', this.totalPages, "</a>", "</li>"), html.push('<li class="page-next"><a href="javascript:void(0)">' + this.options.paginationNextText + "</a></li>", "</ul>", "</div>")
                }
                this.$pagination.html(html.join("")), this.options.onlyInfoPagination || ($pageList = this.$pagination.find(".page-list a"), $first = this.$pagination.find(".page-first"), $pre = this.$pagination.find(".page-pre"), $next = this.$pagination.find(".page-next"), $last = this.$pagination.find(".page-last"), $number = this.$pagination.find(".page-number"), this.options.smartDisplay && (this.totalPages <= 1 && this.$pagination.find("div.pagination").hide(), (pageList.length < 2 || this.options.totalRows <= pageList[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"]()), $allSelected && (this.options.pageSize = this.options.formatAllRows()), $pageList.off("click").on("click", $.proxy(this.onPageListChange, this)), $first.off("click").on("click", $.proxy(this.onPageFirst, this)), $pre.off("click").on("click", $.proxy(this.onPagePre, this)), $next.off("click").on("click", $.proxy(this.onPageNext, this)), $last.off("click").on("click", $.proxy(this.onPageLast, this)), $number.off("click").on("click", $.proxy(this.onPageNumber, this)))
            }, BootstrapTable.prototype.updatePagination = function (event) {
                event && $(event.currentTarget).hasClass("disabled") || (this.options.maintainSelected || this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
            }, BootstrapTable.prototype.onPageListChange = function (event) {
                var $this = $(event.currentTarget);
                $this.parent().addClass("active").siblings().removeClass("active"), this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(event)
            }, BootstrapTable.prototype.onPageFirst = function (event) {
                this.options.pageNumber = 1, this.updatePagination(event)
            }, BootstrapTable.prototype.onPagePre = function (event) {
                this.options.pageNumber - 1 == 0 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(event)
            }, BootstrapTable.prototype.onPageNext = function (event) {
                this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++, this.updatePagination(event)
            }, BootstrapTable.prototype.onPageLast = function (event) {
                this.options.pageNumber = this.totalPages, this.updatePagination(event)
            }, BootstrapTable.prototype.onPageNumber = function (event) {
                this.options.pageNumber !== +$(event.currentTarget).text() && (this.options.pageNumber = +$(event.currentTarget).text(), this.updatePagination(event))
            }, BootstrapTable.prototype.initBody = function (fixedScroll) {
                var that = this, html = [], data = this.getData();
                this.trigger("pre-body", data), this.$body = this.$el.find(">tbody"), this.$body.length || (this.$body = $("<tbody></tbody>").appendTo(this.$el)), this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = data.length);
                for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
                    var key, item = data[i], style = {}, csses = [], data_ = "", attributes = {}, htmlAttributes = [];
                    if ((style = calculateObjectValue(this.options, this.options.rowStyle, [item, i], style)) && style.css) for (key in style.css) csses.push(key + ": " + style.css[key]);
                    if (attributes = calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes)) for (key in attributes) htmlAttributes.push(sprintf('%s="%s"', key, escapeHTML(attributes[key])));
                    item._data && !$.isEmptyObject(item._data) && $.each(item._data, function (k, v) {
                        "index" !== k && (data_ += sprintf(' data-%s="%s"', k, v))
                    }), html.push("<tr", sprintf(" %s", htmlAttributes.join(" ")), sprintf(' id="%s"', $.isArray(item) ? void 0 : item._id), sprintf(' class="%s"', style.classes || ($.isArray(item) ? void 0 : item._class)), sprintf(' data-index="%s"', i), sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]), sprintf("%s", data_), ">"), this.options.cardView && html.push(sprintf('<td colspan="%s"><div class="card-views">', this.header.fields.length)), !this.options.cardView && this.options.detailView && html.push("<td>", '<a class="detail-icon" href="javascript:">', sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), "</a>", "</td>"), $.each(this.header.fields, function (j, field) {
                        var text = "", value = getItemField(item, field, that.options.escape), type = "",
                            cellStyle = {}, id_ = "", class_ = that.header.classes[j], data_ = "", rowspan_ = "",
                            colspan_ = "", title_ = "", column = that.columns[j];
                        if ((!that.fromHtml || void 0 !== value) && column.visible && (!that.options.cardView || column.cardVisible)) {
                            if (style = sprintf('style="%s"', csses.concat(that.header.styles[j]).join("; ")), item["_" + field + "_id"] && (id_ = sprintf(' id="%s"', item["_" + field + "_id"])), item["_" + field + "_class"] && (class_ = sprintf(' class="%s"', item["_" + field + "_class"])), item["_" + field + "_rowspan"] && (rowspan_ = sprintf(' rowspan="%s"', item["_" + field + "_rowspan"])), item["_" + field + "_colspan"] && (colspan_ = sprintf(' colspan="%s"', item["_" + field + "_colspan"])), item["_" + field + "_title"] && (title_ = sprintf(' title="%s"', item["_" + field + "_title"])), cellStyle = calculateObjectValue(that.header, that.header.cellStyles[j], [value, item, i, field], cellStyle), cellStyle.classes && (class_ = sprintf(' class="%s"', cellStyle.classes)), cellStyle.css) {
                                var csses_ = [];
                                for (var key in cellStyle.css) csses_.push(key + ": " + cellStyle.css[key]);
                                style = sprintf('style="%s"', csses_.concat(that.header.styles[j]).join("; "))
                            }
                            value = calculateObjectValue(column, that.header.formatters[j], [value, item, i], value), item["_" + field + "_data"] && !$.isEmptyObject(item["_" + field + "_data"]) && $.each(item["_" + field + "_data"], function (k, v) {
                                "index" !== k && (data_ += sprintf(' data-%s="%s"', k, v))
                            }), column.checkbox || column.radio ? (type = column.checkbox ? "checkbox" : type, type = column.radio ? "radio" : type, text = [sprintf(that.options.cardView ? '<div class="card-view %s">' : '<td class="bs-checkbox %s">', column.class || ""), "<input" + sprintf(' data-index="%s"', i) + sprintf(' name="%s"', that.options.selectItemName) + sprintf(' type="%s"', type) + sprintf(' value="%s"', item[that.options.idField]) + sprintf(' checked="%s"', !0 === value || value && value.checked ? "checked" : void 0) + sprintf(' disabled="%s"', !column.checkboxEnabled || value && value.disabled ? "disabled" : void 0) + " />", that.header.formatters[j] && "string" == typeof value ? value : "", that.options.cardView ? "</div>" : "</td>"].join(""), item[that.header.stateField] = !0 === value || value && value.checked) : (value = void 0 === value || null === value ? that.options.undefinedText : value, text = that.options.cardView ? ['<div class="card-view">', that.options.showHeader ? sprintf('<span class="title" %s>%s</span>', style, getPropertyFromOther(that.columns, "field", "title", field)) : "", sprintf('<span class="value">%s</span>', value), "</div>"].join("") : [sprintf("<td%s %s %s %s %s %s %s>", id_, class_, style, data_, rowspan_, colspan_, title_), value, "</td>"].join(""), that.options.cardView && that.options.smartDisplay && "" === value && (text = '<div class="card-view"></div>')), html.push(text)
                        }
                    }), this.options.cardView && html.push("</div></td>"), html.push("</tr>")
                }
                html.length || html.push('<tr class="no-records-found">', sprintf('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()), "</tr>"), this.$body.html(html.join("")), fixedScroll || this.scrollTo(0), this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick", function (e) {
                    var $td = $(this), $tr = $td.parent(), item = that.data[$tr.data("index")],
                        index = $td[0].cellIndex, fields = that.getVisibleFields(),
                        field = fields[that.options.detailView && !that.options.cardView ? index - 1 : index],
                        column = that.columns[getFieldIndex(that.columns, field)],
                        value = getItemField(item, field, that.options.escape);
                    if (!$td.find(".detail-icon").length && (that.trigger("click" === e.type ? "click-cell" : "dbl-click-cell", field, value, item, $td), that.trigger("click" === e.type ? "click-row" : "dbl-click-row", item, $tr, field), "click" === e.type && that.options.clickToSelect && column.clickToSelect)) {
                        var $selectItem = $tr.find(sprintf('[name="%s"]', that.options.selectItemName));
                        $selectItem.length && $selectItem[0].click()
                    }
                }), this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", function () {
                    var $this = $(this), $tr = $this.parent().parent(), index = $tr.data("index"), row = data[index];
                    if ($tr.next().is("tr.detail-view")) $this.find("i").attr("class", sprintf("%s %s", that.options.iconsPrefix, that.options.icons.detailOpen)), $tr.next().remove(), that.trigger("collapse-row", index, row); else {
                        $this.find("i").attr("class", sprintf("%s %s", that.options.iconsPrefix, that.options.icons.detailClose)), $tr.after(sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.find("td").length));
                        var $element = $tr.next().find("td"),
                            content = calculateObjectValue(that.options, that.options.detailFormatter, [index, row, $element], "");
                        1 === $element.length && $element.append(content), that.trigger("expand-row", index, row, $element)
                    }
                    that.resetView()
                }), this.$selectItem = this.$body.find(sprintf('[name="%s"]', this.options.selectItemName)), this.$selectItem.off("click").on("click", function (event) {
                    event.stopImmediatePropagation();
                    var $this = $(this), checked = $this.prop("checked"), row = that.data[$this.data("index")];
                    that.options.maintainSelected && $(this).is(":radio") && $.each(that.options.data, function (i, row) {
                        row[that.header.stateField] = !1
                    }), row[that.header.stateField] = checked, that.options.singleSelect && (that.$selectItem.not(this).each(function () {
                        that.data[$(this).data("index")][that.header.stateField] = !1
                    }), that.$selectItem.filter(":checked").not(this).prop("checked", !1)), that.updateSelected(), that.trigger(checked ? "check" : "uncheck", row, $this)
                }), $.each(this.header.events, function (i, events) {
                    if (events) {
                        "string" == typeof events && (events = calculateObjectValue(null, events));
                        var field = that.header.fields[i], fieldIndex = $.inArray(field, that.getVisibleFields());
                        that.options.detailView && !that.options.cardView && (fieldIndex += 1);
                        for (var key in events) that.$body.find(">tr:not(.no-records-found)").each(function () {
                            var $tr = $(this),
                                $td = $tr.find(that.options.cardView ? ".card-view" : "td").eq(fieldIndex),
                                index = key.indexOf(" "), name = key.substring(0, index), el = key.substring(index + 1),
                                func = events[key];
                            $td.find(el).off(name).on(name, function (e) {
                                var index = $tr.data("index"), row = that.data[index], value = row[field];
                                func.apply(this, [e, value, row, index])
                            })
                        })
                    }
                }), this.updateSelected(), this.resetView(), this.trigger("post-body", data)
            }, BootstrapTable.prototype.initServer = function (silent, query, url) {
                var request, that = this, data = {}, params = {
                    searchText: this.searchText,
                    sortName: this.options.sortName,
                    sortOrder: this.options.sortOrder
                };
                this.options.pagination && (params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, params.pageNumber = this.options.pageNumber), (url || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (params = {
                    search: params.searchText,
                    sort: params.sortName,
                    order: params.sortOrder
                }, this.options.pagination && (params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), params.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize)), $.isEmptyObject(this.filterColumnsPartial) || (params.filter = JSON.stringify(this.filterColumnsPartial, null)), data = calculateObjectValue(this.options, this.options.queryParams, [params], data), $.extend(data, query || {}), !1 !== data && (silent || this.$tableLoading.show(), request = $.extend({}, calculateObjectValue(null, this.options.ajaxOptions), {
                    type: this.options.method,
                    url: url || this.options.url,
                    data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(data) : data,
                    cache: this.options.cache,
                    contentType: this.options.contentType,
                    dataType: this.options.dataType,
                    success: function (res) {
                        res = calculateObjectValue(that.options, that.options.responseHandler, [res], res), that.load(res), that.trigger("load-success", res), silent || that.$tableLoading.hide()
                    },
                    error: function (res) {
                        that.trigger("load-error", res.status, res), silent || that.$tableLoading.hide()
                    }
                }), this.options.ajax ? calculateObjectValue(this, this.options.ajax, [request], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = $.ajax(request))))
            }, BootstrapTable.prototype.initSearchText = function () {
                if (this.options.search && "" !== this.options.searchText) {
                    var $search = this.$toolbar.find(".search input");
                    $search.val(this.options.searchText), this.onSearch({currentTarget: $search})
                }
            }, BootstrapTable.prototype.getCaret = function () {
                var that = this;
                $.each(this.$header.find("th"), function (i, th) {
                    $(th).find(".sortable").removeClass("desc asc").addClass($(th).data("field") === that.options.sortName ? that.options.sortOrder : "both")
                })
            }, BootstrapTable.prototype.updateSelected = function () {
                var checkAll = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
                this.$selectAll.add(this.$selectAll_).prop("checked", checkAll), this.$selectItem.each(function () {
                    $(this).closest("tr")[$(this).prop("checked") ? "addClass" : "removeClass"]("selected")
                })
            }, BootstrapTable.prototype.updateRows = function () {
                var that = this;
                this.$selectItem.each(function () {
                    that.data[$(this).data("index")][that.header.stateField] = $(this).prop("checked")
                })
            }, BootstrapTable.prototype.resetRows = function () {
                var that = this;
                $.each(this.data, function (i, row) {
                    that.$selectAll.prop("checked", !1), that.$selectItem.prop("checked", !1), that.header.stateField && (row[that.header.stateField] = !1)
                })
            }, BootstrapTable.prototype.trigger = function (name) {
                var args = Array.prototype.slice.call(arguments, 1);
                name += ".bs.table", this.options[BootstrapTable.EVENTS[name]].apply(this.options, args), this.$el.trigger($.Event(name), args), this.options.onAll(name, args), this.$el.trigger($.Event("all.bs.table"), [name, args])
            }, BootstrapTable.prototype.resetHeader = function () {
                clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(":hidden") ? 100 : 0)
            }, BootstrapTable.prototype.fitHeader = function () {
                var fixedBody, scrollWidth, focused, focusedTemp, that = this;
                if (that.$el.is(":hidden")) return void (that.timeoutId_ = setTimeout($.proxy(that.fitHeader, that), 100));
                if (fixedBody = this.$tableBody.get(0), scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? getScrollBarWidth() : 0, this.$el.css("margin-top", -this.$header.outerHeight()), focused = $(":focus"), focused.length > 0) {
                    var $th = focused.parents("th");
                    if ($th.length > 0) {
                        var dataField = $th.attr("data-field");
                        if (void 0 !== dataField) {
                            var $headerTh = this.$header.find("[data-field='" + dataField + "']");
                            $headerTh.length > 0 && $headerTh.find(":input").addClass("focus-temp")
                        }
                    }
                }
                this.$header_ = this.$header.clone(!0, !0), this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'), this.$tableHeader.css({"margin-right": scrollWidth}).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), focusedTemp = $(".focus-temp:visible:eq(0)"), focusedTemp.length > 0 && (focusedTemp.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")), this.$header.find("th[data-field]").each(function (i) {
                    that.$header_.find(sprintf('th[data-field="%s"]', $(this).data("field"))).data($(this).data())
                });
                var visibleFields = this.getVisibleFields(), $ths = this.$header_.find("th");
                this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function (i) {
                    var $this = $(this), index = i;
                    that.options.detailView && !that.options.cardView && (0 === i && that.$header_.find("th.detail").find(".fht-cell").width($this.innerWidth()), index = i - 1);
                    var $th = that.$header_.find(sprintf('th[data-field="%s"]', visibleFields[index]));
                    $th.length > 1 && ($th = $($ths[$this[0].cellIndex])), $th.find(".fht-cell").width($this.innerWidth())
                }), this.$tableBody.off("scroll").on("scroll", function () {
                    that.$tableHeader.scrollLeft($(this).scrollLeft()), that.options.showFooter && !that.options.cardView && that.$tableFooter.scrollLeft($(this).scrollLeft())
                }), that.trigger("post-header")
            }, BootstrapTable.prototype.resetFooter = function () {
                var that = this, data = that.getData(), html = [];
                this.options.showFooter && !this.options.cardView && (!this.options.cardView && this.options.detailView && html.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>'), $.each(this.columns, function (i, column) {
                    var key, falign = "", valign = "", csses = [], style = {},
                        class_ = sprintf(' class="%s"', column.class);
                    if (column.visible && (!that.options.cardView || column.cardVisible)) {
                        if (falign = sprintf("text-align: %s; ", column.falign ? column.falign : column.align), valign = sprintf("vertical-align: %s; ", column.valign), (style = calculateObjectValue(null, that.options.footerStyle)) && style.css) for (key in style.css) csses.push(key + ": " + style.css[key]);
                        html.push("<td", class_, sprintf(' style="%s"', falign + valign + csses.concat().join("; ")), ">"), html.push('<div class="th-inner">'), html.push(calculateObjectValue(column, column.footerFormatter, [data], "&nbsp;") || "&nbsp;"), html.push("</div>"), html.push('<div class="fht-cell"></div>'), html.push("</div>"), html.push("</td>")
                    }
                }), this.$tableFooter.find("tr").html(html.join("")), this.$tableFooter.show(), clearTimeout(this.timeoutFooter_), this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), this.$el.is(":hidden") ? 100 : 0))
            }, BootstrapTable.prototype.fitFooter = function () {
                var $footerTd, elWidth, scrollWidth;
                if (clearTimeout(this.timeoutFooter_), this.$el.is(":hidden")) return void (this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), 100));
                elWidth = this.$el.css("width"), scrollWidth = elWidth > this.$tableBody.width() ? getScrollBarWidth() : 0, this.$tableFooter.css({"margin-right": scrollWidth}).find("table").css("width", elWidth).attr("class", this.$el.attr("class")), $footerTd = this.$tableFooter.find("td"), this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function (i) {
                    var $this = $(this);
                    $footerTd.eq(i).find(".fht-cell").width($this.innerWidth())
                })
            }, BootstrapTable.prototype.toggleColumn = function (index, checked, needUpdate) {
                if (-1 !== index && (this.columns[index].visible = checked, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
                    var $items = this.$toolbar.find(".keep-open input").prop("disabled", !1);
                    needUpdate && $items.filter(sprintf('[value="%s"]', index)).prop("checked", checked), $items.filter(":checked").length <= this.options.minimumCountColumns && $items.filter(":checked").prop("disabled", !0)
                }
            }, BootstrapTable.prototype.toggleRow = function (index, uniqueId, visible) {
                -1 !== index && this.$body.find(void 0 !== index ? sprintf('tr[data-index="%s"]', index) : sprintf('tr[data-uniqueid="%s"]', uniqueId))[visible ? "show" : "hide"]()
            }, BootstrapTable.prototype.getVisibleFields = function () {
                var that = this, visibleFields = [];
                return $.each(this.header.fields, function (j, field) {
                    that.columns[getFieldIndex(that.columns, field)].visible && visibleFields.push(field)
                }), visibleFields
            }, BootstrapTable.prototype.resetView = function (params) {
                var padding = 0;
                if (params && params.height && (this.options.height = params.height), this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.options.height) {
                    var toolbarHeight = getRealHeight(this.$toolbar),
                        paginationHeight = getRealHeight(this.$pagination),
                        height = this.options.height - toolbarHeight - paginationHeight;
                    this.$tableContainer.css("height", height + "px")
                }
                if (this.options.cardView) return this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), void this.$tableFooter.hide();
                this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), padding += this.$header.outerHeight()) : (this.$tableHeader.hide(), this.trigger("post-header")), this.options.showFooter && (this.resetFooter(), this.options.height && (padding += this.$tableFooter.outerHeight() + 1)), this.getCaret(), this.$tableContainer.css("padding-bottom", padding + "px"), this.trigger("reset-view")
            }, BootstrapTable.prototype.getData = function (useCurrentPage) {
                return !this.searchText && $.isEmptyObject(this.filterColumns) && $.isEmptyObject(this.filterColumnsPartial) ? useCurrentPage ? this.options.data.slice(this.pageFrom - 1, this.pageTo) : this.options.data : useCurrentPage ? this.data.slice(this.pageFrom - 1, this.pageTo) : this.data
            }, BootstrapTable.prototype.load = function (data) {
                var fixedScroll = !1;
                "server" === this.options.sidePagination ? (this.options.totalRows = data.total, fixedScroll = data.fixedScroll, data = data[this.options.dataField]) : $.isArray(data) || (fixedScroll = data.fixedScroll, data = data.data), this.initData(data), this.initSearch(), this.initPagination(), this.initBody(fixedScroll)
            }, BootstrapTable.prototype.append = function (data) {
                this.initData(data, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
            }, BootstrapTable.prototype.prepend = function (data) {
                this.initData(data, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
            }, BootstrapTable.prototype.remove = function (params) {
                var i, row, len = this.options.data.length;
                if (params.hasOwnProperty("field") && params.hasOwnProperty("values")) {
                    for (i = len - 1; i >= 0; i--) row = this.options.data[i], row.hasOwnProperty(params.field) && -1 !== $.inArray(row[params.field], params.values) && this.options.data.splice(i, 1);
                    len !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
                }
            }, BootstrapTable.prototype.removeAll = function () {
                this.options.data.length > 0 && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
            }, BootstrapTable.prototype.getRowByUniqueId = function (id) {
                var i, row, rowUniqueId, uniqueId = this.options.uniqueId, len = this.options.data.length,
                    dataRow = null;
                for (i = len - 1; i >= 0; i--) {
                    if (row = this.options.data[i], row.hasOwnProperty(uniqueId)) rowUniqueId = row[uniqueId]; else {
                        if (!row._data.hasOwnProperty(uniqueId)) continue;
                        rowUniqueId = row._data[uniqueId]
                    }
                    if ("string" == typeof rowUniqueId ? id = id.toString() : "number" == typeof rowUniqueId && (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 == 0 ? id = parseInt(id) : rowUniqueId === Number(rowUniqueId) && 0 !== rowUniqueId && (id = parseFloat(id))), rowUniqueId === id) {
                        dataRow = row;
                        break
                    }
                }
                return dataRow
            }, BootstrapTable.prototype.removeByUniqueId = function (id) {
                var len = this.options.data.length, row = this.getRowByUniqueId(id);
                row && this.options.data.splice(this.options.data.indexOf(row), 1), len !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initBody(!0))
            }, BootstrapTable.prototype.updateByUniqueId = function (params) {
                var that = this, allParams = $.isArray(params) ? params : [params];
                $.each(allParams, function (i, params) {
                    var rowId;
                    params.hasOwnProperty("id") && params.hasOwnProperty("row") && -1 !== (rowId = $.inArray(that.getRowByUniqueId(params.id), that.options.data)) && $.extend(that.options.data[rowId], params.row)
                }), this.initSearch(), this.initSort(), this.initBody(!0)
            }, BootstrapTable.prototype.insertRow = function (params) {
                params.hasOwnProperty("index") && params.hasOwnProperty("row") && (this.data.splice(params.index, 0, params.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
            }, BootstrapTable.prototype.updateRow = function (params) {
                var that = this, allParams = $.isArray(params) ? params : [params];
                $.each(allParams, function (i, params) {
                    params.hasOwnProperty("index") && params.hasOwnProperty("row") && $.extend(that.options.data[params.index], params.row)
                }), this.initSearch(), this.initSort(), this.initBody(!0)
            }, BootstrapTable.prototype.showRow = function (params) {
                (params.hasOwnProperty("index") || params.hasOwnProperty("uniqueId")) && this.toggleRow(params.index, params.uniqueId, !0)
            }, BootstrapTable.prototype.hideRow = function (params) {
                (params.hasOwnProperty("index") || params.hasOwnProperty("uniqueId")) && this.toggleRow(params.index, params.uniqueId, !1)
            }, BootstrapTable.prototype.getRowsHidden = function (show) {
                var rows = $(this.$body[0]).children().filter(":hidden"), i = 0;
                if (show) for (; i < rows.length; i++) $(rows[i]).show();
                return rows
            }, BootstrapTable.prototype.mergeCells = function (options) {
                var i, j, $td, row = options.index, col = $.inArray(options.field, this.getVisibleFields()),
                    rowspan = options.rowspan || 1, colspan = options.colspan || 1, $tr = this.$body.find(">tr");
                if (this.options.detailView && !this.options.cardView && (col += 1), $td = $tr.eq(row).find(">td").eq(col), !(row < 0 || col < 0 || row >= this.data.length)) {
                    for (i = row; i < row + rowspan; i++) for (j = col; j < col + colspan; j++) $tr.eq(i).find(">td").eq(j).hide();
                    $td.attr("rowspan", rowspan).attr("colspan", colspan).show()
                }
            }, BootstrapTable.prototype.updateCell = function (params) {
                params.hasOwnProperty("index") && params.hasOwnProperty("field") && params.hasOwnProperty("value") && (this.data[params.index][params.field] = params.value, !1 !== params.reinit && (this.initSort(), this.initBody(!0)))
            }, BootstrapTable.prototype.getOptions = function () {
                return this.options
            }, BootstrapTable.prototype.getSelections = function () {
                var that = this;
                return $.grep(this.options.data, function (row) {
                    return row[that.header.stateField]
                })
            }, BootstrapTable.prototype.getAllSelections = function () {
                var that = this;
                return $.grep(this.options.data, function (row) {
                    return row[that.header.stateField]
                })
            }, BootstrapTable.prototype.checkAll = function () {
                this.checkAll_(!0)
            }, BootstrapTable.prototype.uncheckAll = function () {
                this.checkAll_(!1)
            }, BootstrapTable.prototype.checkInvert = function () {
                var that = this, rows = that.$selectItem.filter(":enabled"), checked = rows.filter(":checked");
                rows.each(function () {
                    $(this).prop("checked", !$(this).prop("checked"))
                }), that.updateRows(), that.updateSelected(), that.trigger("uncheck-some", checked), checked = that.getSelections(), that.trigger("check-some", checked)
            }, BootstrapTable.prototype.checkAll_ = function (checked) {
                var rows;
                checked || (rows = this.getSelections()), this.$selectAll.add(this.$selectAll_).prop("checked", checked), this.$selectItem.filter(":enabled").prop("checked", checked), this.updateRows(), checked && (rows = this.getSelections()), this.trigger(checked ? "check-all" : "uncheck-all", rows)
            }, BootstrapTable.prototype.check = function (index) {
                this.check_(!0, index)
            }, BootstrapTable.prototype.uncheck = function (index) {
                this.check_(!1, index)
            }, BootstrapTable.prototype.check_ = function (checked, index) {
                var $el = this.$selectItem.filter(sprintf('[data-index="%s"]', index)).prop("checked", checked);
                this.data[index][this.header.stateField] = checked, this.updateSelected(), this.trigger(checked ? "check" : "uncheck", this.data[index], $el)
            }, BootstrapTable.prototype.checkBy = function (obj) {
                this.checkBy_(!0, obj)
            }, BootstrapTable.prototype.uncheckBy = function (obj) {
                this.checkBy_(!1, obj)
            }, BootstrapTable.prototype.checkBy_ = function (checked, obj) {
                if (obj.hasOwnProperty("field") && obj.hasOwnProperty("values")) {
                    var that = this, rows = [];
                    $.each(this.options.data, function (index, row) {
                        if (!row.hasOwnProperty(obj.field)) return !1;
                        if (-1 !== $.inArray(row[obj.field], obj.values)) {
                            var $el = that.$selectItem.filter(":enabled").filter(sprintf('[data-index="%s"]', index)).prop("checked", checked);
                            row[that.header.stateField] = checked, rows.push(row), that.trigger(checked ? "check" : "uncheck", row, $el)
                        }
                    }), this.updateSelected(), this.trigger(checked ? "check-some" : "uncheck-some", rows)
                }
            }, BootstrapTable.prototype.destroy = function () {
                this.$el.insertBefore(this.$container), $(this.options.toolbar).insertBefore(this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
            }, BootstrapTable.prototype.showLoading = function () {
                this.$tableLoading.show()
            }, BootstrapTable.prototype.hideLoading = function () {
                this.$tableLoading.hide()
            }, BootstrapTable.prototype.togglePagination = function () {
                this.options.pagination = !this.options.pagination;
                var button = this.$toolbar.find('button[name="paginationSwitch"] i');
                this.options.pagination ? button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown) : button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp), this.updatePagination()
            }, BootstrapTable.prototype.refresh = function (params) {
                params && params.url && (this.options.pageNumber = 1), this.initServer(params && params.silent, params && params.query, params && params.url), this.trigger("refresh", params)
            }, BootstrapTable.prototype.resetWidth = function () {
                this.options.showHeader && this.options.height && this.fitHeader(), this.options.showFooter && this.fitFooter()
            }, BootstrapTable.prototype.showColumn = function (field) {
                this.toggleColumn(getFieldIndex(this.columns, field), !0, !0)
            }, BootstrapTable.prototype.hideColumn = function (field) {
                this.toggleColumn(getFieldIndex(this.columns, field), !1, !0)
            }, BootstrapTable.prototype.getHiddenColumns = function () {
                return $.grep(this.columns, function (column) {
                    return !column.visible
                })
            }, BootstrapTable.prototype.getVisibleColumns = function () {
                return $.grep(this.columns, function (column) {
                    return column.visible
                })
            }, BootstrapTable.prototype.toggleAllColumns = function (visible) {
                if ($.each(this.columns, function (i, column) {
                    this.columns[i].visible = visible
                }), this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
                    var $items = this.$toolbar.find(".keep-open input").prop("disabled", !1);
                    $items.filter(":checked").length <= this.options.minimumCountColumns && $items.filter(":checked").prop("disabled", !0)
                }
            }, BootstrapTable.prototype.showAllColumns = function () {
                this.toggleAllColumns(!0)
            }, BootstrapTable.prototype.hideAllColumns = function () {
                this.toggleAllColumns(!1)
            }, BootstrapTable.prototype.filterBy = function (columns) {
                this.filterColumns = $.isEmptyObject(columns) ? {} : columns, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
            }, BootstrapTable.prototype.scrollTo = function (value) {
                if ("string" == typeof value && (value = "bottom" === value ? this.$tableBody[0].scrollHeight : 0), "number" == typeof value && this.$tableBody.scrollTop(value), void 0 === value) return this.$tableBody.scrollTop()
            }, BootstrapTable.prototype.getScrollPosition = function () {
                return this.scrollTo()
            }, BootstrapTable.prototype.selectPage = function (page) {
                page > 0 && page <= this.options.totalPages && (this.options.pageNumber = page, this.updatePagination())
            }, BootstrapTable.prototype.prevPage = function () {
                this.options.pageNumber > 1 && (this.options.pageNumber--, this.updatePagination())
            }, BootstrapTable.prototype.nextPage = function () {
                this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
            }, BootstrapTable.prototype.toggleView = function () {
                this.options.cardView = !this.options.cardView, this.initHeader(), this.initBody(), this.trigger("toggle", this.options.cardView)
            }, BootstrapTable.prototype.refreshOptions = function (options) {
                compareObjects(this.options, options, !0) || (this.options = $.extend(this.options, options), this.trigger("refresh-options", this.options), this.destroy(), this.init())
            }, BootstrapTable.prototype.resetSearch = function (text) {
                var $search = this.$toolbar.find(".search input");
                $search.val(text || ""), this.onSearch({currentTarget: $search})
            }, BootstrapTable.prototype.expandRow_ = function (expand, index) {
                var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', index));
                $tr.next().is("tr.detail-view") === !expand && $tr.find("> td > .detail-icon").click()
            }, BootstrapTable.prototype.expandRow = function (index) {
                this.expandRow_(!0, index)
            }, BootstrapTable.prototype.collapseRow = function (index) {
                this.expandRow_(!1, index)
            }, BootstrapTable.prototype.expandAllRows = function (isSubTable) {
                if (isSubTable) {
                    var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', 0)), that = this, detailIcon = null,
                        executeInterval = !1, idInterval = -1;
                    if ($tr.next().is("tr.detail-view") ? $tr.next().next().is("tr.detail-view") || ($tr.next().find(".detail-icon").click(), executeInterval = !0) : ($tr.find("> td > .detail-icon").click(), executeInterval = !0), executeInterval) try {
                        idInterval = setInterval(function () {
                            detailIcon = that.$body.find("tr.detail-view").last().find(".detail-icon"), detailIcon.length > 0 ? detailIcon.click() : clearInterval(idInterval)
                        }, 1)
                    } catch (ex) {
                        clearInterval(idInterval)
                    }
                } else for (var trs = this.$body.children(), i = 0; i < trs.length; i++) this.expandRow_(!0, $(trs[i]).data("index"))
            }, BootstrapTable.prototype.collapseAllRows = function (isSubTable) {
                if (isSubTable) this.expandRow_(!1, 0); else for (var trs = this.$body.children(), i = 0; i < trs.length; i++) this.expandRow_(!1, $(trs[i]).data("index"))
            }, BootstrapTable.prototype.updateFormatText = function (name, text) {
                this.options[sprintf("format%s", name)] && ("string" == typeof text ? this.options[sprintf("format%s", name)] = function () {
                    return text
                } : "function" == typeof text && (this.options[sprintf("format%s", name)] = text)), this.initToolbar(), this.initPagination(), this.initBody()
            };
            var allowedMethods = ["getOptions", "getSelections", "getAllSelections", "getData", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "updateCell", "updateByUniqueId", "removeByUniqueId", "getRowByUniqueId", "showRow", "hideRow", "getRowsHidden", "mergeCells", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "resetView", "resetWidth", "destroy", "showLoading", "hideLoading", "showColumn", "hideColumn", "getHiddenColumns", "getVisibleColumns", "showAllColumns", "hideAllColumns", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "togglePagination", "toggleView", "refreshOptions", "resetSearch", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateFormatText"];
            $.fn.bootstrapTable = function (option) {
                var value, args = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var $this = $(this), data = $this.data("bootstrap.table"),
                        options = $.extend({}, BootstrapTable.DEFAULTS, $this.data(), "object" == typeof option && option);
                    if ("string" == typeof option) {
                        if ($.inArray(option, allowedMethods) < 0) throw new Error("Unknown method: " + option);
                        if (!data) return;
                        value = data[option].apply(data, args), "destroy" === option && $this.removeData("bootstrap.table")
                    }
                    data || $this.data("bootstrap.table", data = new BootstrapTable(this, options))
                }), void 0 === value ? this : value
            }, $.fn.bootstrapTable.Constructor = BootstrapTable, $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS, $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS, $.fn.bootstrapTable.locales = BootstrapTable.LOCALES, $.fn.bootstrapTable.methods = allowedMethods, $.fn.bootstrapTable.utils = {
                sprintf: sprintf,
                getFieldIndex: getFieldIndex,
                compareObjects: compareObjects,
                calculateObjectValue: calculateObjectValue,
                getItemField: getItemField,
                objectKeys: objectKeys,
                isIEBrowser: isIEBrowser
            }, $(function () {
                $('[data-toggle="table"]').bootstrapTable()
            })
        }(jQuery)
    }, 49: function (module, exports) {
        !function (a) {
            "use strict";
            a.fn.bootstrapTable.locales["zh-CN"] = {
                formatLoadingMessage: function () {
                    return "正在努力地加载数据中，请稍候……"
                }, formatRecordsPerPage: function (a) {
                    return "每页显示 " + a + " 条记录"
                }, formatShowingRows: function (a, b, c) {
                    return "显示第 " + a + " 到第 " + b + " 条记录，总共 " + c + " 条记录"
                }, formatSearch: function () {
                    return "搜索"
                }, formatNoMatches: function () {
                    return "没有找到匹配的记录"
                }, formatPaginationSwitch: function () {
                    return "隐藏/显示分页"
                }, formatRefresh: function () {
                    return "刷新"
                }, formatToggle: function () {
                    return "切换"
                }, formatColumns: function () {
                    return "列"
                }
            }, a.extend(a.fn.bootstrapTable.defaults, a.fn.bootstrapTable.locales["zh-CN"])
        }(jQuery)
    }, 50: function (module, exports) {
        function dataCheck(data) {
            !1 === data.isOk && "401" === data.code && jQuery.Toast.error("登录超时，请重新登录")
        }

        function initQtip() {
            $("body").delegate("[qtip]", "mouseover", function () {
                var qtipApi = $(this).qtip("api"), msg = $(this).attr("qtip");
                if (qtipApi) qtipApi.disabled && qtipApi.enable(); else {
                    var defaultSetting = {
                        show: {solo: !0},
                        style: {classes: "qtip-default  qtip qtip-bootstrap qtip-shadow"},
                        position: {my: "bottom center", at: "top center"},
                        content: msg
                    };
                    $(this).qtip(defaultSetting), qtipApi = $(this).qtip("api")
                }
                qtipApi.show()
            })
        }

        function initButtonPermission() {
            $("[ab-btn-rights]").each(function () {
                handelPermission(this)
            })
        }

        function handelPermission(target) {
            var btnRightsKey = $(target).attr("ab-btn-rights");
            if (window.localStorage) {
                var btnPermission = window.localStorage.getItem("buttonPermision");
                if (btnPermission = btnPermission ? JSON.parse(btnPermission) : {}, btnRightsKey && btnPermission[btnRightsKey]) return;
                console.info(btnRightsKey + " no rights"), $(target).hide()
            } else console.info("浏览器版本太低不支持按钮权限！")
        }

        function resizeGrid() {
            var pageSize = $.getPageSize();
            if (pageSize.height) {
                var searchHeith = $(".search-panel").height() + 10;
                $("[ab-grid]").bootstrapTable("resetView", {height: pageSize.height - searchHeith})
            }
        }

        !function ($) {
            $.init = function () {
                $.initGrid(), $.handlerSearch(), $.handlerReSetSearch(), $.handlerRemoveSelect(), $.handlerCollapseExpand()
            }, $.search = function (obj) {
                if (!$(obj).hasClass("disabled")) {
                    var param = {};
                    $("input,select", "#searchForm").each(function (item, i) {
                        $(this).val() && (param[$(this).attr("id")] = $(this).val())
                    }), $("[ab-grid]").bootstrapTable("refresh", {query: param})
                }
            }, $.clearSearch = function () {
                var inputs = $("input,select", "#searchForm");
                $(inputs).each(function (i, k) {
                    k.value = ""
                }), $.search()
            }, $.getDatagridCheckedId = function () {
                var arrays = $("[ab-grid]").bootstrapTable("getSelections"),
                    idName = $("[ab-grid]").bootstrapTable("getOptions").idField, ids = [];
                return arrays.forEach(function (item) {
                    ids.push(item[idName])
                }), ids
            }, $.getUrl = function (url, param) {
                return 0 == url.indexOf("http://") || 0 == url.indexOf(__ctx) ? url : __ctx + url
            }, $.handlerSearch = function () {
                var $obj = $("#searchForm .btn.fa-search");
                $obj.unbind("click"), $obj.click(function () {
                    $.search(this)
                })
            }, $.handlerReSetSearch = function () {
                var $obj = $("#searchForm .btn.fa-rotate-left");
                $obj.unbind("click"), $obj.click(function () {
                    $.clearSearch(this)
                })
            }, $.handlerRemoveSelect = function () {
                var $obj = $(".toolbar  a.btn.fa-remove");
                $obj.unbind("click"), $obj.bind("click", function () {
                    if ($(this).hasClass("disabled")) return !1;
                    var ids = $.getDatagridCheckedId(), url = $(this).attr("url"),
                        tips = $(this).attr("tips") || "删除选中的数据",
                        idField = $("[ab-grid]").bootstrapTable("getOptions").idField;
                    if (null == ids || ids.length < 1) return $.Dialog.msg("请选择记录!"), !1;
                    if (null == url || "" == url) return $.Dialog.msg("请配置删除 URL!"), !1;
                    url = $.getUrl(url);
                    var param = {};
                    param[idField] = ids.join(","), $.Dialog.confirm("温馨提示", "确认" + tips + "吗？", function () {
                        $.post(url, param, function (data) {
                            var result = eval("(" + data + ")");
                            result.isOk ? $.Toast.success("删除成功！", function () {
                                reloadGrid()
                            }) : $.Toast.error(result.msg)
                        })
                    })
                })
            }, $.handlerCollapseExpand = function () {
                var $obj = $("[toggle-collapse]");
                $obj.unbind("click"), $obj.bind("click", function () {
                    var me = $(this), el = $(me.attr("toggle-collapse"));
                    me.hasClass("expand") ? (me.attr("title", "收缩"), me.removeClass("expand").addClass("collapse"), me.removeClass("fa-angle-double-down").addClass("fa-angle-double-up"), el.slideDown(200)) : (me.attr("title", "展开"), me.removeClass("collapse").addClass("expand"), me.removeClass("fa-angle-double-up").addClass("fa-angle-double-down"), el.slideUp(200)), window.setTimeout(function () {
                        resizeGrid()
                    }, 300)
                }), $obj.attr("closed") && $obj.click()
            }, $.initGrid = function () {
                var url = $("[ab-grid]").attr("data-url");
                url = getCtxUrl(url, !0), $("[ab-grid]").bootstrapTable({
                    url: url,
                    method: "post",
                    contentType: "application/x-www-form-urlencoded",
                    toolbar: ".toolbar",
                    cache: !1,
                    pagination: !0,
                    sortable: !0,
                    sortOrder: "asc",
                    queryParams: $.getQueryParam,
                    sidePagination: "server",
                    pageNumber: 1,
                    pageSize: 10,
                    pageList: [10, 25, 50, 100],
                    search: !1,
                    strictSearch: !1,
                    showColumns: !0,
                    showRefresh: !0,
                    minimumCountColumns: 2,
                    clickToSelect: !0,
                    uniqueId: "id",
                    showToggle: !1,
                    cardView: !1,
                    detailView: !1,
                    striped: !0,
                    classes: "table table-hover",
                    searchAlign: "right",
                    onLoadSuccess: dataCheck
                })
            }, $.getQueryParam = function (params) {
                return $("input,select", "#searchForm").each(function (item, i) {
                    if (!$(this).val() && params[$(this).attr("id")]) return void delete params[$(this).attr("id")];
                    params[$(this).attr("id")] = $(this).val()
                }), params
            }
        }(jQuery), $(function () {
            $.init(), rowsManager.sendAction(), resizeGrid(), initQtip(), initButtonPermission()
        }), window.reloadGrid = function () {
            1 == $("[ab-grid]").length && $("[ab-grid]").bootstrapTable("refresh")
        }, window.labelFmt = function (arr, value) {
            for (var item, i = 0; item = arr[i++];) if (item.key == value) return '<span class="label label-' + item.css + '">' + item.val + "</span>";
            return ""
        };
        var rowsManager = {};
        rowsManager.getUrl = function (obj) {
            var url = obj.attr("url");
            return url ? ("/" == url.substr(0, 1) && "http://" != url.substr(0, 7) && (url = __ctx + url), url) : ""
        }, rowsManager.sendAction = function () {
            $("body").delegate("[sendAction]", "click", function () {
                var me = $(this), url = rowsManager.getUrl(me);
                url || alert("url不能为空！");
                var text = me.attr("sendAction") || me.text();
                $.Dialog.confirm("对话框", "确认" + text + "吗？", function (r) {
                    r && $.post(url, function (responseText) {
                        var result = eval("(" + responseText + ")");
                        result.isOk ? $.Toast.success(text + "成功！", function () {
                            reloadGrid()
                        }) : $.Toast.error(result.msg)
                    })
                })
            })
        }, window.dateTimeFormatter = function (value, row, index) {
            return null == value || "" == value ? "" : (-1 != value.indexOf("-") && (value = value.replaceAll("-", "/")), new Date(value).format("yyyy-MM-dd HH:mm:ss"))
        }, window.dateFormatter = function (value, row, index) {
            return null == value || "" == value ? "" : (-1 != value.indexOf("-") && (value = value.replaceAll("-", "/")), new Date(value).format("yyyy-MM-dd"))
        }, window.labelFormatter = function (value, row, index) {
            if (null === value || "" === value) return "";
            var lableStyle = "primary";
            if (this.valText) try {
                var valText = eval("(" + this.valText + ")"), labelText = valText[value];
                if (void 0 == labelText && (labelText = ""), this.valStyle) {
                    var valStyle = eval("(" + this.valStyle + ")");
                    valStyle[value] && (lableStyle = valStyle[value])
                }
                return '<span class="label label-' + lableStyle + '">' + labelText + "</span>"
            } catch (e) {
                if (console.error(e + "格式化异常！" + row), labelText) return labelText
            }
            if (this.valueStyle) {
                var patt = new RegExp("(?=" + value + "-).*?(?=,)", "g");
                try {
                    var result = patt.exec(this.valueStyle);
                    if (result && result[0]) {
                        var vs = result[0].split("-");
                        return 3 == vs.length && (lableStyle = vs[2]), '<span class="label label-' + lableStyle + '">' + vs[1] + "</span>"
                    }
                } catch (e) {
                    console.error(row), console.error("labelFormatter格式化异常:" + valueStyle, e)
                }
            }
            return value
        }, window.innerHtmlFormatter = function (value, row, index) {
            if (row.__ctx = __ctx, row && this.html) {
                for (var htmlStr = this.html.format(row), jqHtml = $("<div>" + htmlStr + "</div>"), ifEl = $("[if]", jqHtml), btnRightEl = $("[ab-btn-rights]", jqHtml), j_ = 0, btn_; btn_ = btnRightEl[j_++];) handelPermission(btn_);
                try {
                    for (var i_ = 0, item_; item_ = ifEl[i_++];) {
                        var fnStr = $(item_).attr("if");
                        eval(fnStr) || $(item_).remove()
                    }
                } catch (e) {
                    console.error(row), console.error("innerHtmlFormatter if 标签解析异常:" + fnStr, e)
                }
                return jqHtml[0].innerHTML
            }
            return ""
        }
    }, 51: function (module, exports) {
        window.SysTree = {}, $(function () {
            $("[sysTree]").each(function (index, item) {
                var id = $(item).attr("id"), treeKey = $(item).attr("treeKey"), nodeKey = $(item).attr("nodeKey");
                id || (id = "tree_" + GetRandomStr(6), $(item).attr("id", id));
                var callbackStr = $(item).attr("callBack"), callbackFun;
                callbackStr && (callbackFun = eval(callbackStr)), $(item).attr("class", "ztree"), SysTree.loadTree(id, treeKey, nodeKey, callbackFun)
            }), $("[sysTreeGroup]").each(function (index, item) {
                $(item).attr("class", "ztree");
                var id = $(item).attr("id"), treeKey = $(item).attr("treeKey"), nodeKey = $(item).attr("nodeKey"),
                    rootName = $(item).attr("rootName");
                id || (id = "tree_" + GetRandomStr(6), $(item).attr("id", id));
                var groupColumn = $(item).attr("groupColumn");
                groupColumn || (groupColumn = "group_id_");
                var callbackFun = function (event, treeId, treeNode) {
                    $("[ab-grid]").bootstrapTable("refreshOptions", {
                        queryParams: function (params) {
                            return "-1" == treeNode.id ? params[groupColumn + "$VEQ"] = "" : params[groupColumn + "$VEQ"] = treeNode.id, params
                        }
                    }), document.getElementById(groupColumn + "$VEQ") && (document.getElementById(groupColumn + "$VEQ").value = treeNode.id)
                };
                SysTree.loadTree(id, treeKey, nodeKey, callbackFun, rootName || "所有数据")
            })
        }), window.SysTree.loadTree = function (id, treeKey, nodeKey, callBack, rootName) {
            var params = {treeKey: treeKey};
            nodeKey && (params.nodeKey = nodeKey), rootName && (params.rootName = rootName);
            var url = __ctx + "/sys/sysTreeNode/getNodes", ztreeCreator = new ZtreeCreator(id, url);
            callBack && ztreeCreator.setCallback({onClick: callBack}), ztreeCreator.initZtree(params)
        }
    }
});