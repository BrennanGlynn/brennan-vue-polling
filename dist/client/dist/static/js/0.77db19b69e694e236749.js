"use strict";

webpackJsonp([0], { 335: function _(e, t, o) {
    o(393);var s = o(21)(o(367), o(410), null, null);e.exports = s.exports;
  }, 342: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = o(29),
        l = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(s),
        r = o(41);t.default = { computed: (0, l.default)({}, (0, r.mapGetters)(["username", "userRole"])), data: function data() {
        return { hasVoted: !1 };
      }, methods: { isOwner: function isOwner(e) {
          return e.author === this.username;
        }, hasVotedFor: function hasVotedFor(e) {
          if (e.votes.indexOf(this.username) > -1) return this.hasVoted = !0, !0;
        }, percentage: function percentage(e, t) {
          if (t.totalVotes) {
            var o = e.votes.length / t.totalVotes * 100;return Number(o.toFixed(0));
          }return 0;
        } }, props: ["poll", "editPoll", "deletePoll"] };
  }, 343: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, ".item[data-v-4939157b]{padding:5px 0}.box-card[data-v-4939157b]{min-height:27em;margin:1rem}.box-card .icon[data-v-4939157b]{float:right;padding-top:12px;margin-left:.5rem;cursor:pointer;font-size:16px;color:#0cb4e8}.box-card .icon[data-v-4939157b]:hover{color:#20a0ff}.box-card .header[data-v-4939157b]{color:#0cb4e8;font-weight:700;font-size:20px}.box-card .options h2[data-v-4939157b]{font-size:16px;font-weight:400}.ownPoll[data-v-4939157b]{border:2px solid #13ce66}", "", { version: 3, sources: ["C:/Users/brenn/WebstormProjects/brennan-vue/client/src/components/PollResults.vue"], names: [], mappings: "AACA,uBACE,aAAe,CAChB,AACD,2BACE,gBAAiB,AACjB,WAAa,CACd,AACD,iCACE,YAAa,AACb,iBAAkB,AAClB,kBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,aAAe,CAChB,AACD,uCACE,aAAe,CAChB,AACD,mCACE,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACjB,AACD,uCACE,eAAgB,AAChB,eAAoB,CACrB,AACD,0BACE,wBAA0B,CAC3B", file: "PollResults.vue", sourcesContent: ["\n.item[data-v-4939157b] {\n  padding: 5px 0;\n}\n.box-card[data-v-4939157b] {\n  min-height: 27em;\n  margin: 1rem;\n}\n.box-card .icon[data-v-4939157b] {\n  float: right;\n  padding-top: 12px;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  font-size: 16px;\n  color: #0cb4e8;\n}\n.box-card .icon[data-v-4939157b]:hover {\n  color: #20a0ff;\n}\n.box-card .header[data-v-4939157b] {\n  color: #0cb4e8;\n  font-weight: bold;\n  font-size: 20px;\n}\n.box-card .options h2[data-v-4939157b] {\n  font-size: 16px;\n  font-weight: normal;\n}\n.ownPoll[data-v-4939157b] {\n  border: 2px solid #13ce66;\n}"], sourceRoot: "" }]);
  }, 344: function _(e, t, o) {
    var s = o(343);"string" == typeof s && (s = [[e.i, s, ""]]), s.locals && (e.exports = s.locals);o(330)("78e242b2", s, !0);
  }, 345: function _(e, t, o) {
    o(344);var s = o(21)(o(342), o(346), "data-v-4939157b", null);e.exports = s.exports;
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
        }), e._v(" "), o("el-row", [o("el-col", { staticClass: "footer", attrs: { span: 22, offset: 1 } }, [e._v("\n              " + e._s(e.poll.totalVotes || 0) + " Total Votes\n              "), o("h3", [e._v("Poll by " + e._s(e.poll.author))])])], 1)], 2), e._v(" "), o("el-row", [o("el-col", { attrs: { span: 22, offset: 1 } }, [e._t("default", [e.hasVoted ? o("el-button", { attrs: { size: "small", type: "primary", disabled: "" } }, [e._v("Vote")]) : o("el-button", { attrs: { size: "small", type: "primary" }, on: { click: function click(t) {
              e.$router.push("/polls/" + e.poll._id);
            } } }, [e._v("Vote")])])], 2)], 1)], 1)], 1)], 1)], 1);
      }, staticRenderFns: [] };
  }, 353: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { poll: { breadcrumb: { home: "Home", polls: "Polls" } } };
  }, 354: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = o(353),
        l = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(s);t.default = { en: l.default };
  }, 363: function _(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: ["poll", "form", "rules", "saveForm"] };
  }, 367: function _(e, t, o) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = o(372),
        r = s(l),
        n = o(29),
        a = s(n),
        i = o(41),
        c = o(111),
        u = o(354),
        d = s(u),
        p = o(399),
        f = s(p),
        h = o(345),
        v = s(h);t.default = { components: { PollVote: f.default, PollResults: v.default }, locales: d.default, data: function data() {
        return { form: { choice: "" }, rules: { choice: { required: !0, message: "Please choose an option!" } }, poll: {}, choice: "", hasVoted: !1 };
      }, computed: (0, a.default)({}, (0, i.mapGetters)(["username", "loggedIn"])), methods: { fetch: function fetch() {
          var e = this;c.poll.query({ _id: this.$route.params.id }, "name author options").then(function (t) {
            t.json().then(function (t) {
              if (e.poll = t, !e.hasVoted) {
                var o = !0,
                    s = !1,
                    l = void 0;try {
                  for (var n, a = (0, r.default)(e.poll.options); !(o = (n = a.next()).done); o = !0) {
                    var i = n.value;if (i.votes.indexOf(e.username) > -1) return e.choice = i.name, void (e.hasVoted = !0);
                  }
                } catch (e) {
                  s = !0, l = e;
                } finally {
                  try {
                    !o && a.return && a.return();
                  } finally {
                    if (s) throw l;
                  }
                }
              }
            });
          });
        }, saveForm: function saveForm() {
          var e = this;if (this.hasVoted) this.$notify({ title: this.$t("message.error"), type: "error", message: "You've already voted!" });else {
            var t = !0,
                o = !1,
                s = void 0;try {
              for (var l, n = (0, r.default)(this.poll.options); !(t = (l = n.next()).done); t = !0) {
                var a = l.value;a.option === this.form.choice && (a.votes.push(this.username), this.choice = a.name, this.hasVoted = !0, this.poll.totalVotes += 1);
              }
            } catch (e) {
              o = !0, s = e;
            } finally {
              try {
                !t && n.return && n.return();
              } finally {
                if (o) throw s;
              }
            }c.poll.update({ _id: this.poll._id }, this.poll).then(function () {
              e.cancelForm(), e.$message({ type: "success", message: e.$t("message.created") }), e.hasVoted = !0, e.fetch();
            }).catch(function (e) {
              console.log(e);
            });
          }
        }, cancelForm: function cancelForm() {
          this.form.choice = "";
        } }, created: function created() {
        this.fetch();
      } };
  }, 372: function _(e, t, o) {
    e.exports = { default: o(373), __esModule: !0 };
  }, 373: function _(e, t, o) {
    o(114), o(71), e.exports = o(374);
  }, 374: function _(e, t, o) {
    var s = o(12),
        l = o(70);e.exports = o(7).getIterator = function (e) {
      var t = l(e);if ("function" != typeof t) throw TypeError(e + " is not iterable!");return s(t.call(e));
    };
  }, 379: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "PollVote.vue", sourceRoot: "" }]);
  }, 383: function _(e, t, o) {
    t = e.exports = o(329)(!0), t.push([e.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "SinglePoll.vue", sourceRoot: "" }]);
  }, 389: function _(e, t, o) {
    var s = o(379);"string" == typeof s && (s = [[e.i, s, ""]]), s.locals && (e.exports = s.locals);o(330)("e3fe2932", s, !0);
  }, 393: function _(e, t, o) {
    var s = o(383);"string" == typeof s && (s = [[e.i, s, ""]]), s.locals && (e.exports = s.locals);o(330)("333bf57f", s, !0);
  }, 399: function _(e, t, o) {
    o(389);var s = o(21)(o(363), o(405), null, null);e.exports = s.exports;
  }, 405: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("div", { staticStyle: { display: "inline-block" } }, [o("el-card", { staticClass: "box-card" }, [o("div", { staticClass: "header clearfix", slot: "header" }, [o("span", [e._v(e._s(e.poll.name))])]), e._v(" "), o("div", { staticClass: "body" }, [o("el-form", { attrs: { model: e.form, rules: e.rules } }, [o("el-form-item", [o("el-radio-group", { model: { value: e.form.choice, callback: function callback(t) {
              e.form.choice = t;
            }, expression: "form.choice" } }, e._l(e.poll.options, function (e, t) {
          return o("el-radio", { key: t, attrs: { label: e.option } });
        }))], 1)], 1), e._v(" "), o("el-button", { attrs: { type: "primary", size: "small" }, nativeOn: { click: function click(t) {
              e.saveForm(t);
            } } }, [e._v("Submit")]), e._v(" "), o("h3", [e._v("Poll by " + e._s(e.poll.author))])], 1)])], 1);
      }, staticRenderFns: [] };
  }, 410: function _(e, t) {
    e.exports = { render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;return o("content-module", { attrs: { name: "poll" } }, [o("el-breadcrumb", { staticStyle: { "margin-bottom": ".5rem" }, attrs: { separator: "/" } }, [o("el-breadcrumb-item", { attrs: { to: "/dashboard" } }, [e._v(e._s(e.$t("poll.breadcrumb.home")))]), e._v(" "), o("el-breadcrumb-item", { attrs: { to: "/polls" } }, [e._v(e._s(e.$t("poll.breadcrumb.polls")))]), e._v(" "), o("el-breadcrumb-item", [e._v(e._s(e.poll.author))]), e._v(" "), o("el-breadcrumb-item", [e._v(e._s(e.poll.name))])], 1), e._v(" "), !e.hasVoted && e.loggedIn ? o("poll-vote", { attrs: { poll: e.poll, form: e.form, rules: e.rules, saveForm: e.saveForm } }) : o("poll-results", { attrs: { poll: e.poll, choice: e.choice } }, [e.loggedIn ? o("div", [o("el-button", { attrs: { size: "small", type: "primary" }, on: { click: function click(t) {
              e.$router.push("/dashboard");
            } } }, [e._v("Return to dashboard")])], 1) : o("div", [o("el-tooltip", { attrs: { effect: "light", content: "Please login to vote", placement: "bottom" } }, [o("el-button", { attrs: { size: "small", type: "primary" }, on: { click: function click(t) {
              e.$router.push("/dashboard");
            } } }, [e._v("Return to dashboard")])], 1)], 1)])], 1);
      }, staticRenderFns: [] };
  } });
//# sourceMappingURL=0.77db19b69e694e236749.js.map