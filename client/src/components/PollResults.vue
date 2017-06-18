<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}">
        <el-card :class="{ownPoll: isOwner(poll)}" class="box-card">
          <div slot="header" class="clearfix">
            <el-row>
              <el-col :span="22" :offset="1">
                <el-button class="header" type="text" @click="$router.push('/polls/' + poll._id)">{{poll.name}}</el-button>
                <i v-if="deletePoll !== undefined && isOwner(poll) || userRole === 'admin'" class="el-icon-delete icon" @click="deletePoll(poll)"></i>
                <i v-if="editPoll !== undefined && isOwner(poll) || userRole === 'admin'" class="el-icon-edit icon" @click="editPoll(poll)"></i>
              </el-col>
            </el-row>

          </div>
          <div class="body">
            <div class="options" v-for="option in poll.options">
              <el-row>
                <el-col :span=22 :offset=1>
                  {{option.option}} - {{option.votes.length}} Votes <i v-if="hasVotedFor(option)" class="el-icon-circle-check"></i>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span=20 :offset=1>
                  <el-progress v-if="hasVotedFor(option)" class="progress" :show-text="false" :stroke-width="20" :percentage="percentage(option, poll)" status="success"></el-progress>
                  <el-progress v-else class="progress" :show-text="false" :stroke-width="20" :percentage="percentage(option, poll)"></el-progress>
                </el-col>
                <el-col :span=1 :offset=1>
                  {{' ' + percentage(option, poll) + '%'}}
                </el-col>
              </el-row>
            </div>
            <el-row>
              <el-col class="footer" :span=22 :offset=1>
                {{poll.totalVotes || 0}} Total Votes
                <h3>Poll by {{poll.author}}</h3>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span=22 :offset=1>
              <slot>
                <el-button v-if="hasVoted" size="small" type="primary" disabled>Vote</el-button>
                <el-button v-else size="small" @click="$router.push('/polls/' + poll._id)" type="primary">Vote</el-button>
              </slot>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
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
    data: function () {
      return {
        hasVoted: false
      }
    },
    methods: {
      isOwner (poll) {
        return poll.author === this.username
      },
      hasVotedFor (option) {
        if (option.votes.indexOf(this.username) > -1) {
          this.hasVoted = true
          return true
        }
      },
      percentage (option, poll) {
        if (poll.totalVotes) {
          const percent = (option.votes.length / poll.totalVotes * 100)
          return Number(percent.toFixed(0))
        } else return 0
      }
    },
    props: ['poll', 'editPoll', 'deletePoll']
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/css/variable"
  .item
    padding: 5px 0
  .box-card
    min-height 27em
    margin 1rem
    .icon
      float right
      padding-top: 12px
      margin-left .5rem
      cursor pointer
      font-size 16px
      color #0cb4e8
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
    border 2px solid #13ce66
</style>
