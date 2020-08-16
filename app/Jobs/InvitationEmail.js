'use strict'

const Mail = use('Mail')

class InvitationEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'InvitationEmail-job'
  }

  // This is where the work is done.
  // User who is inviting
  // Team the person is being invited to
  // Person's email
  async handle ({ user, team, email }) {
    console.log('InvitationEmail-job started')
    await Mail.send(
      ['emails.invitation'], // template
      { team: team.name, user: user.name }, // Which user is inviting
      message => {
        message
          .to(email)
          .from('benicrazy@gmail.com', 'Benicrazy da Silva')
          .subject(`Convite para o time ${team.name}`)
      }
    )
  }
}

module.exports = InvitationEmail
