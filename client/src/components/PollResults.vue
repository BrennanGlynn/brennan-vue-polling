<template>
  <div style="display: inline-block">
    <el-card :class="{ownPoll: isOwner(poll)}" class="box-card">
      <div slot="header" class="header clearfix">
        <span>{{poll.name}}</span>
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-delete icon" @click="deletePoll(poll)"></i>-->
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-edit icon" @click="editPoll(poll)"></i>-->
      </div>
      <div class="body">
        <div v-for="option in poll.options">
          {{option.option}} - {{option.votes.length}} Votes
          <el-progress :text-inside="true" :stroke-width="20" :percentage="percentOfVotes(option.votes.length, poll.totalVotes)"></el-progress>
        </div>
        {{poll.totalVotes || 0}} Total Votes
        <h3>Poll by {{poll.author}}</h3>
      </div>
      <el-button size="small" @click="goTo('/polls/' + poll._id)" type="primary">Vote</el-button>
    </el-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'username',
        'userRole'
      ])
    },
    methods: {
      goTo (route) {
        this.$router.push(route)
      },
      isOwner (poll) {
        return poll.author === this.username
      },
      percentOfVotes (votes, total) {
        const percent = (votes / total) * 100
        if (!total) return 0
        if (percent % 1 === 0) return percent
        return Number(percent.toFixed(2))
      }
    },
    props: ['poll']
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/css/variable"
  .item
    padding: 5px 0
  .box-card
    min-height 27em
    width 20rem
    margin 1rem
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
    background-color #232323
    div
      color: white
</style>
