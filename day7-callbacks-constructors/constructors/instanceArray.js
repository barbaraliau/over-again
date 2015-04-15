/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here

  var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here

  var tyler = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");

  var cahlan = new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags");

  var lenny = new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup")

users.push(tyler, cahlan, lenny)

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
  console.log(users[0]);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
  console.log(users[2]);


//Now create another instance of User using your own information and then add that to your users array.

  //code here

  var barbara = new User('Barbara', 'bj.liau@gmail.com', 'stuff');

  users.push(barbara);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here

  for(var i = 0; i < users.length; i++){
    console.log(users[i].name)
  }