<template>
  <content-module name="polls">
    <el-breadcrumb separator="/" style="margin-bottom:.5rem">
      <el-breadcrumb-item to="/dashboard">{{$t('poll.breadcrumb.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$t('poll.breadcrumb.current')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-bottom:.5rem">
      <el-button type="primary" icon="plus" @click.native="createPoll">{{$t('operation.create')}}</el-button>
    </div>
    <div>
      <el-card :class="{ownPoll: isOwner(poll)}" class="box-card" v-for="poll in polls" :key="poll._id">
        <div slot="header" class="clearfix">
          <span>{{poll.name}}</span>
          <i class="el-icon-delete icon" @click="deletePoll(poll)"></i>
          <i class="el-icon-edit icon" @click="editPoll(poll)"></i>
        </div>
        <p>
          Poll by {{poll.author}}
        </p>
        <div v-for="option in poll.options" class="item">
          {{ option.option }} {{ option.votes }}
        </div>
      </el-card>
    </div>
    <el-dialog :title="form._id ? $t('poll.edit.update') : $t('poll.edit.create')" v-model="formVisible">
      <el-form :model="form" :rules="rules" ref="poll">
        <el-form-item :label="$t('poll.model.name')" prop="name">
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
        <el-button @click.native="addOption">{{$t('poll.edit.addOption')}}</el-button>
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
  export default {
    components: {
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
          options: [{ option: '' }, { option: '' }]
        },
        rules: {
          name: [{ required: true, message: this.$t('poll.rules.name'), trigger: 'blur' }],
          author: [{ required: true, message: this.$t('poll.rules.author'), trigger: 'blur' }],
          options: [{ type: 'array', required: true, message: this.$t('poll.rules.options'), trigger: 'change' }]
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
      addOption () {
        this.form.options.push({ 'option': '' })
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
    .icon
      float right
      margin-left .5rem
      color $color-silver
      cursor pointer
      &:hover
        color $color-primary
  .ownPoll
    background-color: green
</style>
