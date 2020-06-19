// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    return privateCounter += val;
  }
  return {
    increment: function() {
     return changeBy(1);
    },
    decrement: function() {
     return changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value();//0
counter.increment();//1
counter.increment();//2
counter.value();//2
counter.decrement();//1
counter.value();//1
