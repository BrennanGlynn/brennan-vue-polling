<template>
  <content-module name="dashboard">
    <div class="polls">
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
  import locales from 'locales/polls'
  import PollResults from 'components/PollResults'
  export default {
    locales,
    data: function () {
      return {
        formVisible: false,
        form: {
          _id: '',
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
    methods: {
      fetch () {
        pollRes.query().then(data => data.json()).then(data => {
          this.polls = data.results
        }).catch(err => {
          console.error(err)
        })
      },
      editPoll (poll) {
        Object.assign(this.form, poll)
        this.formVisible = true
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
  .polls
    display inline-block
</style>
