<template>
  <content-module name="poll">
    <el-breadcrumb separator="/" style="margin-bottom:.5rem">
      <el-breadcrumb-item to="/dashboard">{{$t('poll.breadcrumb.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item to="/polls">{{$t('poll.breadcrumb.polls')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{poll.author}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{poll.name}}</el-breadcrumb-item>
    </el-breadcrumb>

    <poll-vote v-if="!hasVoted" :poll="poll" :form="form" :rules="rules" :saveForm="saveForm"></poll-vote>
    <poll-results v-else :poll="poll" :choice="choice">
      <el-tooltip class="item" effect="light" content="You've already voted on this poll" placement="top">
        <el-button size="small" @click="goTo('/dashboard')" type="primary">Return to dashboard</el-button>
      </el-tooltip>

    </poll-results>

  </content-module>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { poll as pollRes } from 'resources'
  import locales from 'locales/poll'
  import PollVote from 'components/PollVote'
  import PollResults from 'components/PollResults'
  import ElRadioGroup from '../../../node_modules/element-ui/packages/radio/src/radio-group'
  import ElRadioButton from '../../../node_modules/element-ui/packages/radio/src/radio-button'
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  export default {
    components: {
      ElFormItem,
      ElForm,
      ElRadioButton,
      ElRadioGroup,
      PollVote,
      PollResults
    },
    locales,
    data: function () {
      return {
        form: {
          choice: ''
        },
        rules: {
          choice: {
            required: true,
            message: 'Please choose an option!'
          }
        },
        poll: {},
        choice: '',
        hasVoted: false
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
            // check if user has already voted
            if (!this.hasVoted) {
              for (const option of this.poll.options) {
                if (option.votes.indexOf(this.username) > -1) {
                  this.choice = option.name
                  this.hasVoted = true
                  return
                }
              }
            }
          })
        })
      },
      goTo (route) {
        this.$router.push(route)
      },
      saveForm () {
        if (!this.hasVoted) {
          for (const option of this.poll.options) {
            if (option.option === this.form.choice) {
              option.votes.push(this.username)
              this.choice = option.name
              this.hasVoted = true
              this.poll.totalVotes += 1
            }
          }
          pollRes.update({ _id: this.poll._id }, this.poll).then(() => {
            this.cancelForm()
            this.$message({
              type: 'success',
              message: this.$t('message.created')
            })
            this.hasVoted = true
            this.fetch()
          }).catch((err) => {
            console.log(err)
          })
        } else {
          this.$notify({
            title: this.$t('message.error'),
            type: 'error',
            message: 'You\'ve already voted!'
          })
        }
      },
      cancelForm () {
        this.form.choice = ''
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style></style>
