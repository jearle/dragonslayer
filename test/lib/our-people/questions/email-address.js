

import { expect } from 'chai';


import { validEmailAddress, invalidEmailAddress } from '../../../helpers/email';
import { validate, filter, invalidatedMessage } from 'our-people/questions/email-address';


describe('email question', () => {


  describe('validate', () => {


    function validated () {

      return validate(validEmailAddress);

    }


    function invalidated () {

      return validate(invalidEmailAddress);

    }


    it('should validate with a valid email address by returning true', () =>

      expect(validated()).to.be.true);


    it(`should invalidate with an invalid email address by returning the 
        string "${invalidatedMessage}"`, () =>

      expect(invalidated()).to.be.equal(invalidatedMessage));


  });


  describe('filter', () => {


    function filterOutput () {

      return filter(validEmailAddress);

    }


    it('should create create a valid url with a valid email address', () => 

      expect(filterOutput()).to.be.a('string'));


  });


});