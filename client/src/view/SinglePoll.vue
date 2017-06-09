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
      <p v-for="(option, index) in poll.options" :key="index" >{{option.option}} {{option.votes}}</p>
    </div>
  </content-module>
</template>
<script>
  import locales from 'locales/poll'
  import { poll as pollRes } from 'resources'
  export default {
    locales,
    data: function () {
      return {
        poll: {},
        choice: ''
      }
    },
    methods: {
      fetch () {
        pollRes.query({ _id: this.$route.params.id }, 'name author options').then(response => {
          response.json().then(response => {
            this.poll = response
          })
        })
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style></style>
