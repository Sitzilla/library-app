import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  messageText: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidText: Ember.computed.gte('messageText.length', 5),
  isDisabled: Ember.computed('isValidEmail', 'isValidText', function() {
    return !this.get('isValidEmail') || !this.get('isValidText');
  }),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');
      const message = this.get('messageText');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        alert(`Message \"${this.get('messageText')}\" sent to email \"${this.get('emailAddress')}\"`);
        this.set('responseMessage', `Thank you! We'll be in touch soon!`);
        this.set('emailAddress', '');
        this.set('messageText', '');
      });
    }
  }

});
