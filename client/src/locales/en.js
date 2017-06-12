export default {
  title: 'Brennan Vue Polling',
  constant: {
    name: 'Name',
    desc: 'Description'
  },
  confirm: {
    title: 'Warning',
    ok: 'save',
    cancel: 'cancel',
    prevStep: 'Previous',
    nextStep: 'Next',
    remove: 'This will remove the selected {content} forever, continue?',
    confirmSelected: 'You have selected the following items. Please confirm your choices as this action can\'t be recovered'
  },
  label: {
    name: 'Name',
    enable: 'Enable'
  },
  status: {
    enabled: 'Enabled',
    disabled: 'Disabled'
  },
  operation: {
    add: 'Add',
    create: 'Create',
    edit: 'Edit',
    update: 'Update',
    remove: 'Remove',
    multiRemove: 'Multi remove',
    operation: 'Operation',
    search: 'Search',
    enable: 'Click to enable',
    disable: 'Click to disable'
  },
  message: {
    save: {
      ok: 'Saved!',
      err: 'Error occured when saving!'
    },
    error: 'Error',
    created: 'Create successful',
    createFailed: 'Create failed',
    updated: 'Update successful',
    updateFailed: 'Update failed',
    removed: 'Delete successful',
    removeFailed: 'Delete failed'
  },
  http: {
    error: {
      E401: 'Not authorized',
      E403: 'Permission not allowed',
      E404: 'Url not found',
      E500: 'Server error',
      others: 'Some error occurred, please try again'
    }
  }
}
