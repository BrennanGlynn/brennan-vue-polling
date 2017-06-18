<template>
  <content-module name="my-polls">
    <div class="head">
      <el-row>
        <el-col :span="24">
          {{username}}
        </el-col>
      </el-row>
    </div>
    <div>
      <poll-results v-for="(poll, index) in this.polls" :key="index" :poll="poll" :editPoll="editPoll" :deletePoll="deletePoll"></poll-results>
    </div>
    <!--Form to edit polls-->
    <el-dialog :title="$t('polls.edit.update')" v-model="formVisible">
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
          <el-input v-model="option.option">
            <el-button size="mini" icon="delete" slot="append" @click.prevent="removeOption(option)"></el-button>
          </el-input>
        </el-form-item>
        <el-button size="mini" @click.native="addOption">{{$t('polls.edit.addOption')}}</el-button>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button-group>
          <el-button size="mini" @click.native="cancelForm">{{$t('confirm.cancel')}}</el-button>
          <el-button size="mini" type="primary" @click.native="saveForm">{{$t('confirm.ok')}}</el-button>
        </el-button-group>
      </span>
    </el-dialog>
  </content-module>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { poll as pollRes } from 'resources'
  import locales from 'locales/polls'
  import PollResults from 'components/PollResults'
  export default {
    locales,
    data: function () {
      return {
        polls: [],
        formVisible: false,
        form: {
          name: '',
          options: [{ option: '', votes: [] }, { option: '', votes: [] }]
        },
        rules: {
          name: [{ required: true, message: this.$t('polls.rules.name'), trigger: 'blur' }],
          options: [{ type: 'array', required: true, message: this.$t('polls.rules.options'), trigger: 'change' }]
        }
      }
    },
    components: {
      PollResults
    },
    computed: {
      ...mapGetters(['username'])
    },
    methods: {
      fetch () {
        pollRes.query({}, [this.username]).then(response => {
          response.json().then(response => {
            this.polls = response.results.filter((poll) => {
              return poll.author === this.username
            })
          })
        })
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
        }).catch(() => {
        })
      },
      cancelForm () {
        this.form._id = undefined
        this.form.name = ''
        this.form.options = [{ option: '', votes: [] }, { option: '', votes: [] }]
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
            }).catch(() => {
            })
          }
        })
      },
      addOption () {
        this.form.options.push({ option: '', votes: [] })
      },
      removeOption (option) {
        const index = this.form.options.indexOf(option)
        if (index !== -1) {
          this.form.options.splice(index, 1)
        }
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/css/variable"
  .head
    background-color #20a0ff
    border 1px solid #d1dbe5
    border-radius 4px
    color white
    font-size 40px
    text-align center
    padding 10px 10px
</style>
