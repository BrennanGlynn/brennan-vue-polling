<template>
  <div style="display: inline-block">
    <el-card class="box-card">
      <div slot="header" class="header clearfix">
        <span>{{poll.name}}</span>
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-delete icon" @click="deletePoll(poll)"></i>-->
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-edit icon" @click="editPoll(poll)"></i>-->
      </div>
      <div class="body">
        <el-form :model="form" :rules="rules">
          <el-form-item>
            <el-radio-group v-model="form.choice">
              <el-radio v-for="(option, index) in poll.options" :key="index" :label="option.option"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click.native="saveForm" size="small">Submit</el-button>
        <h3>Poll by {{poll.author}}</h3>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    props: ['poll', 'hasVoted', 'form', 'rules', 'saveForm']
  }
</script>
<style></style>
