<template>
  <content-module name="polls">
    <el-breadcrumb separator="/" style="margin-bottom:.5rem">
      <el-breadcrumb-item to="/dashboard">{{$t('polls.breadcrumb.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$t('polls.breadcrumb.current')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-bottom:.5rem">
      <el-button type="primary" icon="plus" @click.native="createPoll">{{$t('operation.create')}}</el-button>
    </div>
    <div>
      <el-card :class="{ownPoll: isOwner(poll)}" class="box-card" v-for="(poll, index) in polls" :key="index">
        <div slot="header" class="header clearfix">
          <span>{{poll.name}}</span>
          <i class="el-icon-delete icon" @click="deletePoll(poll)"></i>
          <i class="el-icon-edit icon" @click="editPoll(poll)"></i>
        </div>
        <div class="body">
          <div v-for="option in poll.options">
            {{option.option}} - {{option.votes.length}} Votes
            <el-progress :text-inside="true" :stroke-width="18" :percentage="percentOfVotes(option.votes.length, poll.totalVotes)"></el-progress>
          </div>
          {{poll.totalVotes || 0}} Total Votes
          <h3>Poll by {{poll.author}}</h3>
        </div>
        <el-button size="small" @click="goTo('/polls/' + poll._id)" type="primary">Vote</el-button>
      </el-card>
    </div>
    <el-dialog :title="form._id ? $t('polls.edit.update') : $t('polls.edit.create')" v-model="formVisible">
      <el-form :model="form" :rules="rules" ref="poll">
        <el-form-item :label="$t('polls.model.name')" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(option, index) in form.options"
          :key="option._id"
          :rules="{
          	required: true, message: 'Option cannot be null', trigger: 'blur'
          }"
        >
          <el-input v-model="option.option"><el-button slot="append" @click.prevent="removeOption(option)">Delete</el-button></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="cancelForm">{{$t('confirm.cancel')}}</el-button>
        <el-button @click.native="addOption">{{$t('polls.edit.addOption')}}</el-button>
        <el-button type="primary" @click.native="saveForm">{{$t('confirm.ok')}}</el-button>
      </span>
    </el-dialog>
  </content-module>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { poll as pollRes } from 'resources'
  import locales from 'locales/polls'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  import ElInput from '../../../node_modules/element-ui/packages/input/src/input'
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElRadio from '../../../node_modules/element-ui/packages/radio/src/radio'
  import ElRadioGroup from '../../../node_modules/element-ui/packages/radio/src/radio-group'
  export default {
    components: {
      ElRadioGroup,
      ElRadio,
      ElForm,
      ElInput,
      ElFormItem,
      ElButton },
    locales,
    data () {
      return {
        formVisible: false,
        form: {
          _id: '',
          name: '',
          author: '',
          options: [{ option: '', votes: [] }, { option: '', votes: [] }]
        },
        rules: {
          name: [{ required: true, message: this.$t('polls.rules.name'), trigger: 'blur' }],
          author: [{ required: true, message: this.$t('polls.rules.author'), trigger: 'blur' }],
          options: [{ type: 'array', required: true, message: this.$t('polls.rules.options'), trigger: 'change' }]
        },
        polls: [],
        radio: ''
      }
    },
    computed: {
      ...mapGetters([
        'username'
      ])
    },
    methods: {
      fetch () {
        pollRes.query().then(data => data.json()).then(data => {
          this.polls = data.results
        }).catch(err => {
          console.error(err)
        })
      },
      goTo (route) {
        this.$router.push(route)
      },
      addOption () {
        this.form.options.push({ option: '', votes: [] })
      },
      removeOption (option) {
        const index = this.form.options.indexOf(option)
        if (index !== -1) {
          this.form.options.splice(index, 1)
        }
      },
      createPoll () {
        this.formVisible = true
      },
      cancelForm () {
        this.form._id = ''
        this.form.name = ''
        this.form.author = ''
        this.form.options = []
        this.formVisible = false
      },
      saveForm () {
        this.$refs.poll.validate(valid => {
          if (valid) {
            let promise
            if (this.form._id) {
              promise = pollRes.update({ _id: this.form._id }, this.form)
            } else {
              promise = pollRes.save({}, {
                name: this.form.name,
                author: this.username,
                options: this.form.options
              })
            }
            promise.then(() => {
              this.cancelForm()
              this.$message({
                type: 'success',
                message: this.form._id ? this.$t('message.updated') : this.$t('message.created')
              })
              this.fetch()
            }).catch(() => {})
          }
        })
      },
      isOwner (poll) {
        return poll.author === this.username
      },
      editPoll (poll) {
        Object.assign(this.form, poll)
        this.formVisible = true
      },
      deletePoll (poll) {
        this.$confirm(`This action will remove the selected poll: ${poll.name} Do you still want to continue?`, this.$t('confirm.title'), {
          type: 'warning'
        }).then(() => {
          pollRes.delete({ _id: poll._id }).then(() => {
            this.$message({
              type: 'success',
              message: this.$t('message.removed')
            })
            this.fetch()
          })
        }).catch(() => {})
      },
      percentOfVotes (votes, total) {
        if (!total) return 0
        return (votes / total) * 100
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/css/variable"
  .item
    padding: 5px 0
  .box-card
    display inline-block
    width 20rem
    height 25em
    margin 1rem
    h2
      16px
      font-weight normal
    .icon
      float right
      margin-left .5rem
      cursor pointer
      &:hover
        color $color-primary
    .header
      color #0cb4e8
      font-weight bold
      font-size 20px
  .ownPoll
    background-color mediumspringgreen
    color white
    .header
      color white
</style>
