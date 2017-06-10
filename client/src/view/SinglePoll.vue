<template>
  <content-module name="poll">
    <el-breadcrumb separator="/" style="margin-bottom:.5rem">
      <el-breadcrumb-item to="/dashboard">{{$t('poll.breadcrumb.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item to="/polls">{{$t('poll.breadcrumb.polls')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div>
      Created by: {{poll.author}}
      <h1>Title: {{poll.name}}</h1>
      <el-form :model="form">
        <el-form-item>
          <el-radio-group v-model="form.choice">
            <el-radio v-for="(option, index) in poll.options" :key="index" :label="option.option"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-button v-if="this.form.choice" type="primary" @click.native="saveForm" size="small">Send a vote for {{this.form.choice}}</el-button>
      <p v-for="(option, index) in poll.options" :key="index" >{{option.option}} {{option.votes}}</p>
    </div>
  </content-module>
</template>
<script>
  import { mapGetters } from 'vuex'
  import locales from 'locales/poll'
  import { poll as pollRes } from 'resources'
  import ElRadioGroup from '../../../node_modules/element-ui/packages/radio/src/radio-group'
  import ElRadioButton from '../../../node_modules/element-ui/packages/radio/src/radio-button'
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  export default {
    components: {
      ElFormItem,
      ElForm,
      ElRadioButton,
      ElRadioGroup
    },
    locales,
    data: function () {
      return {
        form: {
          choice: ''
        },
        poll: {}
      }
    },
    computed: {
      ...mapGetters([
        'username'
      ])
    },
    methods: {
      fetch () {
        pollRes.query({ _id: this.$route.params.id }, 'name author options').then(response => {
          response.json().then(response => {
            this.poll = response
          })
        })
      },
      saveForm () {
        console.log('|||TODO SEND THIS TO THE SERVER||| Choice: ' + this.form.choice + ' User: ' + this.username)
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style></style>
