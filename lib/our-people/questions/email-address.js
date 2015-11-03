

import md5 from 'crypto-js/md5';


import emailValidator from '../validators/email';


const invalidatedMessage = 'Please enter a valid email address.';


export default {
  
  type : 'input',
  name : 'gravatar',
  message : 'Please enter email address for gravatar link :-',


  invalidatedMessage: invalidatedMessage,


  /**
   * Validates the input as a valid email address.
   */

  validate (email) {

    return emailValidator(email) || invalidatedMessage;

  },


  filter (email) {

    return 'https://s.gravatar.com/avatar/' + md5(email.trim().toLowerCase());

  }

};