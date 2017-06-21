<template>
  <content-module name="poll">
    <el-breadcrumb separator="/" style="margin-bottom:.5rem">
      <el-breadcrumb-item to="/dashboard">{{$t('poll.breadcrumb.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{poll.author}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{poll.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <poll-vote v-if="!hasVoted" :poll="poll" :form="form" :rules="rules" :saveForm="saveForm"></poll-vote>
    <poll-results v-else :poll="poll" :choice="choice" :addOption="addOption">
      <div v-if="!loggedIn">
        <el-button size="small" @click="$router.push('/dashboard')" type="primary">Return to dashboard</el-button>
      </div>
      <div v-else>
        <el-button size="small" @click="$router.push('/dashboard')" type="primary">Return to dashboard</el-button>
      </div>
    </poll-results>
    <el-dialog title="add an option" v-model="formVisible">
      <el-form :model="form2" :rules="rules2">
        <el-form-item label="option" prop="option">
          <el-input v-model="form2.option.option"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="cancelForm2">{{$t('confirm.cancel')}}</el-button>
        <el-button type="primary" @click.native="saveForm2">{{$t('confirm.ok')}}</el-button>
      </span>
    </el-dialog>
  </content-module>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { poll as pollRes } from 'resources'
  import locales from 'locales/poll'
  import PollVote from 'components/PollVote'
  import PollResults from 'components/PollResults'
  export default {
    components: {
      PollVote,
      PollResults
    },
    locales,
    data: function () {
      return {
        form: {
          choice: ''
        },
        form2: {
          option: { option: '', votes: [] }
        },
        rules: {
          choice: {
            required: true,
            message: 'Please choose an option!'
          }
        },
        rules2: {
          option: {
            required: true,
            message: 'Please input an option'
          }
        },
        poll: {},
        choice: '',
        hasVoted: false,
        formVisible: false
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'loggedIn'
      ])
    },
    methods: {
      fetch () {
        pollRes.query({ _id: this.$route.params.id }, 'name author options').then(response => {
          response.json().then(response => {
            this.poll = response
            // check if user has already voted
            if (!this.hasVoted && this.loggedIn) {
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
      addOption () {
        this.formVisible = true
      },
      saveForm () {
        if (!this.hasVoted) {
          for (const option of this.poll.options) {
            if (option.option === this.form.choice) {
              option.votes.push(this.loggedIn ? this.username : 'GuestVote')
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
      saveForm2 () {
        this.poll.options.push(this.form2.option)
        pollRes.update({ _id: this.poll._id }, this.poll).then(() => {
          this.cancelForm2()
          this.$message({
            type: 'success',
            message: 'option added'
          })
          this.hasVoted = true
          this.fetch()
        }).catch((err) => {
          console.log(err)
        })
      },
      cancelForm () {
        this.form.choice = ''
      },
      cancelForm2 () {
        this.form.option = { option: '', votes: [] }
        this.formVisible = false
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style></style>
