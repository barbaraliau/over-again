/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem
  //code here for sayHi
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the favNum function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/


  //Code Here for first

var first = function(array, callback){
  callback(array[0]);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var last = function(array, callback){
  callback(array[array.length - 1]);
};


  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var multiply = function(num1, num2, callback){
  callback(num1 * num2);
};

//or//

var multiply2 = function(num1, num2, callback){
  var total = num1 * num2;
  callback(total);
}



  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var contains = function(array, nameToFind, callback){
  if(array.indexOf(nameToFind) !== -1){
    var flag = true;
  }
  return callback(flag);
};

///alternate with for loop//

var contains2 = function(array, nameToFind, callback){
  for(var i = 0; i < array.length; i++){
    if(nameToFind === array[i]){
      return callback(true);
      break;
    }
  }
}


  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var uniq = function(array, callback){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(newArray.indexOf(array[i]) === -1){
      newArray.push(array[i]);
    }
  }
  return callback(newArray);
};


var uniq2 = function(array, callback){
  var newArray = [];
  array = array.sort();
  console.log(array);
  for(var i = 0; i < array.length; i++){
    if(array[i] !== array[i+1]){
      newArray.push(array[i]);
      console.log(newArray);
    }
  }
  return callback(newArray);
};

var uniq3 = function(array, callback){
  var tracker = {};
  for(var i = 0; i < array.length; i++){
    if(tracker[array[i]] === undefined){
      tracker[array[i]] = 0;
    } else {
      array.splice(i, 1);
      i--;
    }
  }
  return cb(array);
};

    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan', 'Tyler', 'Tyler'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var each = function (array, callback) {
  for (var i = 0; i < array.length; i++) { // loop through an array
    callback(array[i], i); //at every loop, call the callback function with these parameters
  }
};


    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
var getUserById = function (array, idToFind, callback) {
 for (var i = 0; i < array.length; i++) {
    if (array[i].id === idToFind) {
      callback(array[i]);
      break;
    }
  }
};

//technically this is not good practice because you are passing in an array, not an object
// var getUserById2 = function(obj, idToFind, callback){
//   for(var key in obj){
//     if(obj[key].id === idToFind){
//       return cb(obj[key])
//     }
//   }
//   return false;
// }

 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});