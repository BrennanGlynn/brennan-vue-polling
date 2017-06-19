"use strict";

webpackJsonp([6], { 334: function _(e, t, o) {
    o(385);var n = o(21)(o(366), o(401), "data-v-06ed2b0c", null);e.exports = n.exports;
  }, 339: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { polls: { breadcrumb: { home: "Home", current: "Polls" }, model: { name: "Title" }, rules: { name: "Please input a name for your poll", author: "Please input a name for yourself", options: "Please select an option" }, edit: { create: "Add Poll", update: "Change Poll", addOption: "add an option" } } };
  }, 340: function _(e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var r = o(339),
        i = n(r),
        a = o(341),
        l = n(a);t.default = { "zh-CN": l.default, en: i.default };
  }, 341: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { thing: { breadcrumb: { home: "首页", current: "事件管理" }, model: { name: "名字", description: "描述" }, rules: { name: "请输入名称" }, edit: { create: "新增事件", update: "编辑事件" } } };
  }, 366: function _(e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var r = o(112),
        i = n(r),
        a = o(29),
        l = n(a),
        s = o(41),
        c = o(111),
        d = o(340),
        u = n(d);t.default = { locales: u.default, data: function data() {
        return { formVisible: !1, form: { _id: "", name: "", options: [{ option: "", votes: [] }, { option: "", votes: [] }] }, rules: { name: [{ required: !0, message: this.$t("polls.rules.name"), trigger: "blur" }], options: [{ type: "array", required: !0, message: this.$t("polls.rules.options"), trigger: "change" }] }, polls: [], radio: "" };
      }, computed: (0, l.default)({}, (0, s.mapGetters)(["username", "userRole"])), methods: { fetch: function fetch() {
          var e = this;c.poll.query().then(function (e) {
            return e.json();
          }).then(function (t) {
            e.polls = t.results;
          }).catch(function (e) {
            console.error(e);
          });
        }, addOption: function addOption() {
          this.form.options.push({ option: "", votes: [] });
        }, removeOption: function removeOption(e) {
          var t = this.form.options.indexOf(e);-1 !== t && this.form.options.splice(t, 1);
        }, createPoll: function createPoll() {
          this.formVisible = !0;
        }, cancelForm: function cancelForm() {
          this.form._id = "", this.form.name = "", this.form.options = [], this.formVisible = !1;
        }, saveForm: function saveForm() {
          var e = this;this.$refs.poll.validate(function (t) {
            if (t) {
              var o = void 0;o = e.form._id ? c.poll.update({ _id: e.form._id }, e.form) : c.poll.save({}, { name: e.form.name, author: e.username, options: e.form.options }), o.then(function () {
                e.cancelForm(), e.$message({ type: "success", message: e.form._id ? e.$t("message.updated") : e.$t("message.created") }), e.fetch();
              }).catch(function () {});
            }
          });
        }, isOwner: function isOwner(e) {
          return e.author === this.username;
        }, editPoll: function editPoll(e) {
          (0, i.default)(this.form, e), this.formVisible = !0;
        }, deletePoll: function deletePoll(e) {
          var t = this;this.$confirm("This action will remove the selected poll: " + e.name + " Do you still want to continue?", this.$t("confirm.title"), { type: "warning" }).then(function () {
            c.poll.delete({ _id: e._id }).then(function () {
              t.$message({ type: "success", message: t.$t("message.removed") }), t.fetch();
            });
          }).catch(function () {});
        }, percentOfVotes: function percentOfVotes(e, t) {
          var o = e / t * 100;return t ? o % 1 == 0 ? o : Number(o.toFixed(2)) : 0;
        } }, created: function created() {
        this.fetch();
      } };
  }, 375: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, ".item[data-v-06ed2b0c]{padding:5px 0}.box-card[data-v-06ed2b0c]{display:inline-block;width:20rem;margin:1rem}.box-card h2[data-v-06ed2b0c]{font-weight:400}.box-card .icon[data-v-06ed2b0c]{float:right;margin-left:.5rem;cursor:pointer}.box-card .icon[data-v-06ed2b0c]:hover{color:#20a0ff}.box-card .header[data-v-06ed2b0c]{color:#0cb4e8;font-weight:700;font-size:20px}.ownPoll[data-v-06ed2b0c]{background-color:#232323}.ownPoll div[data-v-06ed2b0c]{color:#fff}", "", { version: 3, sources: ["C:/Users/brenn/WebstormProjects/brennan-vue/client/src/view/PollList.vue"], names: [], mappings: "AACA,uBACE,aAAe,CAChB,AACD,2BACE,qBAAsB,AACtB,YAAa,AACb,WAAa,CACd,AACD,8BACE,eAAoB,CACrB,AACD,iCACE,YAAa,AACb,kBAAoB,AACpB,cAAgB,CACjB,AACD,uCACE,aAAe,CAChB,AACD,mCACE,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACjB,AACD,0BACE,wBAA0B,CAC3B,AACD,8BACE,UAAY,CACb", file: "PollList.vue", sourcesContent: ["\n.item[data-v-06ed2b0c] {\n  padding: 5px 0;\n}\n.box-card[data-v-06ed2b0c] {\n  display: inline-block;\n  width: 20rem;\n  margin: 1rem;\n}\n.box-card h2[data-v-06ed2b0c] {\n  font-weight: normal;\n}\n.box-card .icon[data-v-06ed2b0c] {\n  float: right;\n  margin-left: 0.5rem;\n  cursor: pointer;\n}\n.box-card .icon[data-v-06ed2b0c]:hover {\n  color: #20a0ff;\n}\n.box-card .header[data-v-06ed2b0c] {\n  color: #0cb4e8;\n  font-weight: bold;\n  font-size: 20px;\n}\n.ownPoll[data-v-06ed2b0c] {\n  background-color: #232323;\n}\n.ownPoll div[data-v-06ed2b0c] {\n  color: #fff;\n}"], sourceRoot: "" }]);
  }, 385: function _(e, t, o) {
    var n = o(375);"string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);o(330)("0d043940", n, !0);
  }, 401: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("content-module", { attrs: { name: "polls" } }, [o("el-breadcrumb", { staticStyle: { "margin-bottom": ".5rem" }, attrs: { separator: "/" } }, [o("el-breadcrumb-item", { attrs: { to: "/dashboard" } }, [e._v(e._s(e.$t("polls.breadcrumb.home")))]), e._v(" "), o("el-breadcrumb-item", [e._v(e._s(e.$t("polls.breadcrumb.current")))])], 1), e._v(" "), o("div", { staticStyle: { "margin-bottom": ".5rem" } }, [o("el-button", { attrs: { type: "primary", icon: "plus" }, nativeOn: { click: function click(t) {
              e.createPoll(t);
            } } }, [e._v(e._s(e.$t("operation.create")))])], 1), e._v("\n  " + e._s(e.username) + "\n  "), o("div", e._l(e.polls, function (t, n) {
          return o("el-card", { key: n, staticClass: "box-card", class: { ownPoll: e.isOwner(t) } }, [o("div", { staticClass: "header clearfix", slot: "header" }, [o("span", [e._v(e._s(t.name))]), e._v(" "), e.isOwner(t) || "admin" === e.userRole ? o("i", { staticClass: "el-icon-delete icon", on: { click: function click(o) {
                e.deletePoll(t);
              } } }) : e._e(), e._v(" "), e.isOwner(t) || "admin" === e.userRole ? o("i", { staticClass: "el-icon-edit icon", on: { click: function click(o) {
                e.editPoll(t);
              } } }) : e._e()]), e._v(" "), o("div", { staticClass: "body" }, [e._l(t.options, function (n) {
            return o("div", [e._v("\n          " + e._s(n.option) + " - " + e._s(n.votes.length) + " Votes\n          "), o("el-progress", { attrs: { "text-inside": !0, "stroke-width": 18, percentage: e.percentOfVotes(n.votes.length, t.totalVotes) } })], 1);
          }), e._v("\n        " + e._s(t.totalVotes || 0) + " Total Votes\n        "), o("h3", [e._v("Poll by " + e._s(t.author))])], 2), e._v(" "), o("el-button", { attrs: { size: "small", type: "primary" }, on: { click: function click(o) {
                e.$router.push("/polls/" + t._id);
              } } }, [e._v("Vote")])], 1);
        })), e._v(" "), o("el-dialog", { attrs: { title: e.form._id ? e.$t("polls.edit.update") : e.$t("polls.edit.create") }, model: { value: e.formVisible, callback: function callback(t) {
              e.formVisible = t;
            }, expression: "formVisible" } }, [o("el-form", { ref: "poll", attrs: { model: e.form, rules: e.rules } }, [o("el-form-item", { attrs: { label: e.$t("polls.model.name"), prop: "name" } }, [o("el-input", { model: { value: e.form.name, callback: function callback(t) {
              e.form.name = t;
            }, expression: "form.name" } })], 1), e._v(" "), e._l(e.form.options, function (t, n) {
          return o("el-form-item", { key: t._id, attrs: { rules: { required: !0, message: "Option cannot be null", trigger: "blur" } } }, [o("el-input", { model: { value: t.option, callback: function callback(e) {
                t.option = e;
              }, expression: "option.option" } }, [o("el-button", { on: { click: function click(o) {
                o.preventDefault(), e.removeOption(t);
              } }, slot: "append" }, [e._v("Delete")])], 1)], 1);
        })], 2), e._v(" "), o("span", { staticClass: "dialog-footer", slot: "footer" }, [o("el-button", { nativeOn: { click: function click(t) {
              e.cancelForm(t);
            } } }, [e._v(e._s(e.$t("confirm.cancel")))]), e._v(" "), o("el-button", { nativeOn: { click: function click(t) {
              e.addOption(t);
            } } }, [e._v(e._s(e.$t("polls.edit.addOption")))]), e._v(" "), o("el-button", { attrs: { type: "primary" }, nativeOn: { click: function click(t) {
              e.saveForm(t);
            } } }, [e._v(e._s(e.$t("confirm.ok")))])], 1)], 1)], 1);
      }, staticRenderFns: [] };
  } });
//# sourceMappingURL=6.e1b286c079b87fe41da3.js.map