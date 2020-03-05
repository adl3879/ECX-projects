const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlainTextPassword = "not_bacon";
const someOther = "not_bacon";

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
    console.log(hash);
    bcrypt.compare(someOther, hash, (err, result) => {
      if (result) {
        console.log("password is correct");
      } else {
        console.log("wrong password");
      }
    });
  });
});

//how to export and how to import
//when you're done push ur code
//readme.md-->just a text file u can write anything u want there
