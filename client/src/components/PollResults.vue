<template>
  <div style="display: inline-block">
    <el-card :class="{ownPoll: isOwner(poll)}" class="box-card">
      <div slot="header" class="header clearfix">
        <span>{{poll.name}}</span>
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-delete icon" @click="deletePoll(poll)"></i>-->
        <!--<i v-if="isOwner(poll) || userRole === 'admin'" class="el-icon-edit icon" @click="editPoll(poll)"></i>-->
      </div>
      <div class="body">
        <div class="options" v-for="option in poll.options">
          <el-row>
            <el-col :span="24">
              {{option.option}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-progress class="progress" :show-text="false" :stroke-width="20" :percentage="percentOfVotes(option.votes.length, poll.totalVotes)"></el-progress>
            </el-col>
            <el-col :span="1" :offset="1">
              {{' ' + percentOfVotes(option.votes.length, poll.totalVotes) + '%'}}
            </el-col>
          </el-row>
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
  import ElCol from 'element-ui/packages/col/src/col'
  export default {
    components: { ElCol },
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
        return Number(percent.toFixed(0))
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
    width 30em
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
    .options h2
      font-size 16px
      font-weight normal

  .ownPoll
    background-color #232323
    div
      color: white
</style>
