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
      console.log(this.get('emailAddress'));
      console.log(this.get('isValidEmail'));
      console.log(this.get('messageText'));
      console.log(this.get('isValidText'));
      console.log(this.get('isDisabled'));

      alert(`Message \"${this.get('messageText')}\" sent to email \"${this.get('emailAddress')}\"`);
      this.set('responseMessage', `Thank you! We'll be in touch soon!`);
      this.set('emailAddress', '');
      this.set('messageText', '');
    }
  }

});
