

import { expect } from 'chai';


import { validEmailAddress, invalidEmailAddress } from '../../../helpers/email';
import emailValidator from 'our-people/validators/email';


describe('email validator', () => {

  
  function validatedEmail () {

    return emailValidator(validEmailAddress);

  }


  function invalidatedEmail () {

    return emailValidator(invalidEmailAddress);

  }


  it('should return true when a valid email is provided', () =>

    expect(validatedEmail()).to.be.true);


  it('should return false when an invalid email is provided', () => 

    expect(invalidatedEmail()).to.be.false);




});