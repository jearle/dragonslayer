/**
 * Inrhythm Engineers Information
 *
 */

/*jslint node: true */

"use strict";

var fs = require('fs');
var inquirer = require("inquirer");
var MD5 = require("crypto-js/md5");

import emailAddressQuestion from './our-people/questions/email-address';

console.log(emailAddressQuestion);

console.log("Hi, welcome to InRhythm \n");

var start = [{
    type: "input",
    name: "name",
    message: "What is your Name ?"
}];

inquirer.prompt( start, function( answers ) {

    var outputFilename = 'engineers/' + answers.name.replace(/\s/gi, "_") + ".json";

    fs.exists(outputFilename, function(exists) {

        var questions = [
                            {
                                type: "input",
                                name: "gravatar",
                                message: "Please enter email address for gravatar link :-",
                                validate: function( value ) {
                                    var pass = value.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/);
                                    if (pass) {
                                        return true;
                                    } else {
                                        return "Please enter link";
                                    }
                                },
                                filter:function(val){
                                    return "https://s.gravatar.com/avatar/" + MD5(val.trim().toLowerCase());
                                }
                            },
                            {
                                type: "input",
                                name: "twitter",
                                message: "Please enter your twitter handle :-",
                                filter: function(val){
                                    return "https://twitter.com/" + val;
                                }
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "Please enter your github handle :-",
                                filter: function(val){
                                    return "https://github.com/" + val;
                                }

                            },
                            {
                                type: "input",
                                name: "linkedin",
                                message: "Please enter your linkedin profile link :-",
                                validate: function( value ) {
                                    var pass = value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
                                    if (pass) {
                                        return true;
                                    } else {
                                        return "Please enter link";
                                    }
                                }
                            }
                        ];
        // If Record exists Do something
        if (exists) {
            fs.readFile(outputFilename, 'utf8' ,function (err, data) {
                var temp = JSON.parse(data);
                // Prev Record data displayed in question
                questions.splice(0,0,{
                                        type: "input",
                                        name: "phone",
                                        message:  "What's your phone number (Existing : " + temp.phone + ") ?",
                                        validate: function( value ) {
                                            var pass;
                                            if(value){
                                                pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
                                                if (pass) {
                                                    return true;
                                                } else {
                                                    return "Please enter a valid phone number";
                                                }
                                            }
                                            else{
                                                pass = temp.phone.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
                                                if (pass) {
                                                    return true;
                                                } else {
                                                    return "Please enter a valid phone number";
                                                }
                                            }

                                        },
                                        filter:function(val){
                                            if(val){
                                                return val;
                                            }
                                            else return temp.phone;
                                        }
                                    }
                                );
                inquirer.prompt(questions,function(ans){
                    ans.name = answers.name;
                    fs.writeFile(outputFilename, JSON.stringify(ans, null, 4), function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("JSON saved to " + outputFilename);
                        }
                    });
                });
            });
        }
        //If Record does not exist do something
        else{
            // Adding the questions to array
            var prev_phone = 'w/e'
            questions.splice(0,0,
                {
                    type: "input",
                    name: "phone",
                    message:  "What's your phone number " + prev_phone + "?",
                    validate: function( value ) {
                        var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
                        if (pass) {
                            return true;
                        } else {
                            return "Please enter a valid phone number";
                        }
                    }
                });
            inquirer.prompt(questions,function(ans){
                ans.name = answers.name;
                fs.writeFile(outputFilename, JSON.stringify(ans, null, 4), function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("JSON saved to " + outputFilename);
                    }
                });
            });
        }
    });
});
