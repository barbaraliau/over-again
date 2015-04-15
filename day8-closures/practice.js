//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

//Code Here

var inner = outer();

//Once you do that, invoke inner.

//Code Here

inner();



//Next problem



var callFriend = function() {
  var friend = 'Jake';

  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

//Code Here

var calling = callFriend();

//Next Problem

calling('435-215-9248');


/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var counter = 0;
  return function() {
    return counter++;
  };
};



//Code Here
var count = makeCounter();
count() // 1
count() // 2
count() // 3
count() // 4



//Next Problem

var test = function() {
  alert('blah blah');
};


var onlyOnce = function(otherFn) {
  var flag = true;
  return function() {
    if (flag) {
      otherFn();
    }
    flag = false;
  };
};

var tester = onlyOnce(test);


var onlyNTimes = function(otherFn, N) {
  return function() {
    if (N) {
      otherFn();
      N--;
    } else {
      console.log('STAHHP');
    }
  };
};

var tester = onlyOnce2(test, 2);


/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/



















var thing = function(otherFn) {
  var flag = true;
  return function() {
    otherFn();
  }
};

var alertThing = function() {
  alert("hello");
};


var thisThing = function(otherFn, N) {
  return function() {
    otherFn()
  }
}


var test = thisThing(alertThing)
test()
test()

var test2 = thisThing(alertThing, 5)
test2()
test2()
test2()
test2()
test2()

test2()

var writedFn = function(fn, n) {
  var count = 0;
  return function() {
    if (count < n) {
      count++;
      fn();
    } else {
      console.log("stahhp");
    }
  }
}
