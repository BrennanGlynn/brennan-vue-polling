export default {
  header: {
    settings: 'User settings',
    password: 'Password',
    logout: 'Logout',
    langSetting: 'Lang',
    pageLimit: 'Data count limit per page',
    _password: {
      description: 'Change your password. It\'s strongly recommend that you pick a complex password.',
      old: 'Old password',
      _new: 'New password',
      newConfirm: 'Confirm new password',
      rules: {
        old: 'Please input old password',
        _new: 'Please input new password',
        newConfirm: 'Please input new password again',
        notMatch: 'The two new password do not match'
      },
      afterChange: 'Password has changed, system will logout automatically, please re-login with the new password.'
    }
  }
}
