<template>
  <content-module name="dashboard">
    <div v-if="loggedIn">
      <el-button icon="plus" @click="createPoll" type="info">Create a Poll!</el-button>
    </div>
    <div>
      <poll-results v-for="(poll, index) in this.polls" :key="index" :poll="poll"></poll-results>
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
            <el-button slot="append" @click.prevent="removeOption(option)">Delete</el-button>
          </el-input>
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
  import { poll as pollRes } from 'resources'
  import { mapGetters } from 'vuex'
  import locales from 'locales/polls'
  import PollResults from 'components/PollResults'
  export default {
    locales,
    data: function () {
      return {
        formVisible: false,
        form: {
          name: '',
          options: [{ option: '', votes: [] }, { option: '', votes: [] }]
        },
        rules: {
          name: [{ required: true, message: this.$t('polls.rules.name'), trigger: 'blur' }],
          options: [{ type: 'array', required: true, message: this.$t('polls.rules.options'), trigger: 'change' }]
        },
        polls: []
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'userRoll',
        'loggedIn'
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
        this.form.options.push({ option: '', votes: [] })
      },
      createPoll () {
        this.formVisible = true
      },
      cancelForm () {
        this.form._id = undefined
        this.form.name = ''
        this.form.options = [{ option: '', votes: [] }, { option: '', votes: [] }]
        this.formVisible = false
      },
      editPoll (poll) {
        Object.assign(this.form, poll)
        this.formVisible = true
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
      }
    },
    components: {
      PollResults
    },
    created () {
      this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/css/variable"
</style>
