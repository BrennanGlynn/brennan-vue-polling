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
      <el-card class="box-card" v-for="poll in polls" :key="poll._id">
        <div slot="header" class="clearfix">
          <span>{{poll.name}}</span>
          <i class="el-icon-delete icon" @click="deletePoll(poll)"></i>
          <i class="el-icon-edit icon" @click="editPoll(poll)"></i>
        </div>
        <p>
          {{poll.author}}
        </p>
      </el-card>
    </div>
    <el-dialog :title="form._id ? $t('poll.edit.update') : $t('poll.edit.create')" v-model="formVisible">
      <el-form :model="form" :rules="rules" ref="poll">
        <el-form-item :label="$t('poll.model.name')" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('poll.model.description')">
          <el-input v-model="form.info"></el-input>
        </el-form-item>
        <!--TODO: Add the rest of the poll option inputs-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="cancelForm">{{$t('confirm.cancel')}}</el-button>
        <el-button type="primary" @click.native="saveForm">{{$t('confirm.ok')}}</el-button>
      </span>
    </el-dialog>
  </content-module>
</template>
<script>
  import { poll as pollRes } from 'resources'
  import locales from 'locales/polls'
  export default {
    locales,
    data () {
      return {
        formVisible: false,
        form: {
          _id: '',
          name: '',
          author: 'N/A',
          options: []
        },
        rules: {
          name: [{ required: true, message: this.$t('thing.rules.name'), trigger: 'blur' }]
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
      createThing () {
        this.formVisible = true
      },
      cancelForm () {
        this.form._id = ''
        this.form.name = ''
        this.form.info = ''
        this.formVisible = false
      },
      saveForm () {
        this.$refs.thing.validate(valid => {
          if (valid) {
            let promise
            if (this.form._id) {
              promise = thingRes.update({ _id: this.form._id }, this.form)
            } else {
              promise = thingRes.save({}, {
                name: this.form.name,
                info: this.form.info
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
      editThing (thing) {
        Object.assign(this.form, thing)
        this.formVisible = true
      },
      deleteThing (thing) {
        this.$confirm(`This action will remove the selected thing: ${thing.name} forever, still going on?`, this.$t('confirm.title'), {
          type: 'warning'
        }).then(() => {
          thingRes.delete({ _id: thing._id }).then(() => {
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
  .box-card
    display inline-block
    width 20rem
    height 15rem
    margin .5rem
    .icon
      float right
      margin-left .5rem
      color $color-silver
      cursor pointer
      &:hover
        color $color-primary
</style>
