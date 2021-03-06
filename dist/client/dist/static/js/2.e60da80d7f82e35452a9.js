"use strict";

webpackJsonp([2], { 333: function _(e, t, o) {
    o(386);var n = o(21)(o(365), o(402), "data-v-0b353a4a", null);e.exports = n.exports;
  }, 339: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { polls: { breadcrumb: { home: "Home", current: "Polls" }, model: { name: "Title" }, rules: { name: "Please input a name for your poll", author: "Please input a name for yourself", options: "Please select an option" }, edit: { create: "Add Poll", update: "Change Poll", addOption: "add an option" } } };
  }, 340: function _(e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = o(339),
        l = n(s),
        r = o(341),
        a = n(r);t.default = { "zh-CN": a.default, en: l.default };
  }, 341: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { thing: { breadcrumb: { home: "首页", current: "事件管理" }, model: { name: "名字", description: "描述" }, rules: { name: "请输入名称" }, edit: { create: "新增事件", update: "编辑事件" } } };
  }, 342: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(29),
        s = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(n),
        l = o(41);t.default = { computed: (0, s.default)({}, (0, l.mapGetters)(["username", "userRole", "loggedIn"])), data: function data() {
        return { hasVoted: !1 };
      }, methods: { isOwner: function isOwner(e) {
          return e.author === this.username;
        }, hasVotedFor: function hasVotedFor(e) {
          if (e.votes.indexOf(this.username) > -1 && this.loggedIn) return this.hasVoted = !0, !0;
        }, percentage: function percentage(e, t) {
          if (t.totalVotes) {
            var o = e.votes.length / t.totalVotes * 100;return Number(o.toFixed(0));
          }return 0;
        } }, props: ["poll", "editPoll", "deletePoll", "addOption"] };
  }, 343: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, ".item[data-v-4939157b]{padding:5px 0}.box-card[data-v-4939157b]{min-height:27em;margin:1rem}.box-card .icon[data-v-4939157b]{float:right;margin-left:.5rem;cursor:pointer;font-size:16px;color:#0cb4e8}.box-card .icon[data-v-4939157b]:hover{color:#20a0ff}.box-card .header[data-v-4939157b]{color:#0cb4e8;float:left}.ownPoll[data-v-4939157b]{border:2px solid #13ce66}.bottom-button[data-v-4939157b]{margin:1rem}", "", { version: 3, sources: ["C:/Users/brenn/WebstormProjects/brennan-vue/client/src/components/PollResults.vue"], names: [], mappings: "AACA,uBACE,aAAe,CAChB,AACD,2BACE,gBAAiB,AACjB,WAAa,CACd,AACD,iCACE,YAAa,AACb,kBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,aAAe,CAChB,AACD,uCACE,aAAe,CAChB,AACD,mCACE,cAAe,AACf,UAAY,CACb,AACD,0BACE,wBAA0B,CAC3B,AACD,gCACE,WAAa,CACd", file: "PollResults.vue", sourcesContent: ["\n.item[data-v-4939157b] {\n  padding: 5px 0;\n}\n.box-card[data-v-4939157b] {\n  min-height: 27em;\n  margin: 1rem;\n}\n.box-card .icon[data-v-4939157b] {\n  float: right;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  font-size: 16px;\n  color: #0cb4e8;\n}\n.box-card .icon[data-v-4939157b]:hover {\n  color: #20a0ff;\n}\n.box-card .header[data-v-4939157b] {\n  color: #0cb4e8;\n  float: left;\n}\n.ownPoll[data-v-4939157b] {\n  border: 2px solid #13ce66;\n}\n.bottom-button[data-v-4939157b] {\n  margin: 1rem;\n}"], sourceRoot: "" }]);
  }, 344: function _(e, t, o) {
    var n = o(343);"string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);o(330)("78e242b2", n, !0);
  }, 345: function _(e, t, o) {
    o(344);var n = o(21)(o(342), o(346), "data-v-4939157b", null);e.exports = n.exports;
  }, 346: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("div", [o("el-row", [o("el-col", { attrs: { xs: 24, sm: 24, md: { span: 12, offset: 6 }, lg: { span: 12, offset: 6 } } }, [o("el-card", { staticClass: "box-card", class: { ownPoll: e.isOwner(e.poll) } }, [o("div", { staticClass: "clearfix", slot: "header" }, [o("el-row", [o("el-col", { attrs: { span: 22, offset: 1 } }, [o("el-button", { staticClass: "header", attrs: { type: "text" }, on: { click: function click(t) {
              e.$router.push("/polls/" + e.poll._id);
            } } }, [e._v(e._s(e.poll.name))]), e._v(" "), void 0 !== e.deletePoll && e.isOwner(e.poll) || "admin" === e.userRole ? o("i", { staticClass: "el-icon-delete icon", on: { click: function click(t) {
              e.deletePoll(e.poll);
            } } }) : e._e(), e._v(" "), void 0 !== e.editPoll && e.isOwner(e.poll) || "admin" === e.userRole ? o("i", { staticClass: "el-icon-edit icon", on: { click: function click(t) {
              e.editPoll(e.poll);
            } } }) : e._e()], 1)], 1)], 1), e._v(" "), o("div", { staticClass: "body" }, [e._l(e.poll.options, function (t) {
          return o("div", { staticClass: "options" }, [o("el-row", [o("el-col", { attrs: { span: 22, offset: 1 } }, [e._v("\n                " + e._s(t.option) + " - " + e._s(t.votes.length) + " Votes "), e.hasVotedFor(t) ? o("i", { staticClass: "el-icon-circle-check" }) : e._e()])], 1), e._v(" "), o("el-row", [o("el-col", { attrs: { span: 20, offset: 1 } }, [e.hasVotedFor(t) ? o("el-progress", { staticClass: "progress", attrs: { "show-text": !1, "stroke-width": 20, percentage: e.percentage(t, e.poll), status: "success" } }) : o("el-progress", { staticClass: "progress", attrs: { "show-text": !1, "stroke-width": 20, percentage: e.percentage(t, e.poll) } })], 1), e._v(" "), o("el-col", { attrs: { span: 1, offset: 1 } }, [e._v("\n                " + e._s(" " + e.percentage(t, e.poll) + "%") + "\n              ")])], 1)], 1);
        }), e._v(" "), o("el-row", [e.addOption ? o("el-col", { attrs: { span: 22, offset: 1 } }, [o("el-button", { staticClass: "bottom-button", attrs: { size: "small" }, on: { click: e.addOption } }, [e._v("Add an Option")])], 1) : e._e(), e._v(" "), o("el-col", { staticClass: "footer", attrs: { span: 22, offset: 1 } }, [e._v("\n              " + e._s(e.poll.totalVotes || 0) + " Total Votes\n              "), o("h3", [e._v("Poll by " + e._s(e.poll.author))])])], 1)], 2), e._v(" "), o("el-row", [o("el-col", { attrs: { span: 22, offset: 1 } }, [e._t("default", [e.hasVoted ? o("el-button", { attrs: { size: "small", type: "primary", disabled: "" } }, [e._v("Vote")]) : o("el-button", { attrs: { size: "small", type: "primary" }, on: { click: function click(t) {
              e.$router.push("/polls/" + e.poll._id);
            } } }, [e._v("Vote")])])], 2)], 1)], 1)], 1)], 1)], 1);
      }, staticRenderFns: [] };
  }, 365: function _(e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = o(112),
        l = n(s),
        r = o(29),
        a = n(r),
        i = o(41),
        c = o(111),
        u = o(340),
        d = n(u),
        p = o(345),
        f = n(p);t.default = { locales: d.default, data: function data() {
        return { polls: [], formVisible: !1, form: { name: "", options: [{ option: "", votes: [] }, { option: "", votes: [] }] }, rules: { name: [{ required: !0, message: this.$t("polls.rules.name"), trigger: "blur" }], options: [{ type: "array", required: !0, message: this.$t("polls.rules.options"), trigger: "change" }] } };
      }, components: { PollResults: f.default }, computed: (0, a.default)({}, (0, i.mapGetters)(["username"])), methods: { fetch: function fetch() {
          var e = this;c.poll.query({}, [this.username]).then(function (t) {
            t.json().then(function (t) {
              e.polls = t.results.filter(function (t) {
                return t.author === e.username;
              });
            });
          });
        }, editPoll: function editPoll(e) {
          (0, l.default)(this.form, e), this.formVisible = !0;
        }, deletePoll: function deletePoll(e) {
          var t = this;this.$confirm("This action will remove the selected poll: " + e.name + " Do you still want to continue?", this.$t("confirm.title"), { type: "warning" }).then(function () {
            c.poll.delete({ _id: e._id }).then(function () {
              t.$message({ type: "success", message: t.$t("message.removed") }), t.fetch();
            });
          }).catch(function () {});
        }, cancelForm: function cancelForm() {
          this.form._id = void 0, this.form.name = "", this.form.options = [{ option: "", votes: [] }, { option: "", votes: [] }], this.formVisible = !1;
        }, saveForm: function saveForm() {
          var e = this;this.$refs.poll.validate(function (t) {
            if (t) {
              var o = void 0;o = e.form._id ? c.poll.update({ _id: e.form._id }, e.form) : c.poll.save({}, { name: e.form.name, author: e.username, options: e.form.options }), o.then(function () {
                e.cancelForm(), e.$message({ type: "success", message: e.form._id ? e.$t("message.updated") : e.$t("message.created") }), e.fetch();
              }).catch(function () {});
            }
          });
        }, addOption: function addOption() {
          this.form.options.push({ option: "", votes: [] });
        }, removeOption: function removeOption(e) {
          var t = this.form.options.indexOf(e);-1 !== t && this.form.options.splice(t, 1);
        } }, created: function created() {
        this.fetch();
      } };
  }, 376: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, ".head[data-v-0b353a4a]{background-color:#20a0ff;border:1px solid #d1dbe5;border-radius:4px;color:#fff;font-size:40px;text-align:center;padding:10px}", "", { version: 3, sources: ["C:/Users/brenn/WebstormProjects/brennan-vue/client/src/view/MyPolls.vue"], names: [], mappings: "AACA,uBACE,yBAA0B,AAC1B,yBAA0B,AAC1B,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,YAAmB,CACpB", file: "MyPolls.vue", sourcesContent: ["\n.head[data-v-0b353a4a] {\n  background-color: #20a0ff;\n  border: 1px solid #d1dbe5;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 40px;\n  text-align: center;\n  padding: 10px 10px;\n}"], sourceRoot: "" }]);
  }, 386: function _(e, t, o) {
    var n = o(376);"string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);o(330)("46f61df6", n, !0);
  }, 402: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("content-module", { attrs: { name: "my-polls" } }, [o("div", { staticClass: "head" }, [o("el-row", [o("el-col", { attrs: { span: 24 } }, [e._v("\n        " + e._s(e.username) + "\n      ")])], 1)], 1), e._v(" "), o("div", e._l(this.polls, function (t, n) {
          return o("poll-results", { key: n, attrs: { poll: t, editPoll: e.editPoll, deletePoll: e.deletePoll } });
        })), e._v(" "), o("el-dialog", { attrs: { title: e.$t("polls.edit.update") }, model: { value: e.formVisible, callback: function callback(t) {
              e.formVisible = t;
            }, expression: "formVisible" } }, [o("el-form", { ref: "poll", attrs: { model: e.form, rules: e.rules } }, [o("el-form-item", { attrs: { label: e.$t("polls.model.name"), prop: "name" } }, [o("el-input", { model: { value: e.form.name, callback: function callback(t) {
              e.form.name = t;
            }, expression: "form.name" } })], 1), e._v(" "), e._l(e.form.options, function (t, n) {
          return o("el-form-item", { key: t._id, attrs: { rules: { required: !0, message: "Option cannot be null", trigger: "blur" } } }, [o("el-input", { model: { value: t.option, callback: function callback(e) {
                t.option = e;
              }, expression: "option.option" } }, [o("el-button", { attrs: { size: "mini", icon: "delete" }, on: { click: function click(o) {
                o.preventDefault(), e.removeOption(t);
              } }, slot: "append" })], 1)], 1);
        }), e._v(" "), o("el-button", { attrs: { size: "mini" }, nativeOn: { click: function click(t) {
              e.addOption(t);
            } } }, [e._v(e._s(e.$t("polls.edit.addOption")))])], 2), e._v(" "), o("span", { staticClass: "dialog-footer", slot: "footer" }, [o("el-button-group", [o("el-button", { attrs: { size: "mini" }, nativeOn: { click: function click(t) {
              e.cancelForm(t);
            } } }, [e._v(e._s(e.$t("confirm.cancel")))]), e._v(" "), o("el-button", { attrs: { size: "mini", type: "primary" }, nativeOn: { click: function click(t) {
              e.saveForm(t);
            } } }, [e._v(e._s(e.$t("confirm.ok")))])], 1)], 1)], 1)], 1);
      }, staticRenderFns: [] };
  } });
//# sourceMappingURL=2.e60da80d7f82e35452a9.js.map