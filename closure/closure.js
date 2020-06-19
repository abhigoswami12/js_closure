//1.
function nonsense(string) {

    var blab = function () {
        alert(string);
    };
    return blab();
}
nonsense("hi");

//2
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
    return setTimeout(blab, 6000);
}
nonsense("hi");
// setTimeout(() => nonsense("hello"), 6000)

//3
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}
let blabLater = nonsense("hi");
let blabAgainLater = nonsense("hello");

//4
blabLater();
blabAgainLater();

//EXERCISE 2
//1
var lastNameTrier = function (firstName) {
    
    var innerFunction = function (lastName) {
        return firstName + " " + lastName ;
    };
    //maybe returns something here
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'

//EXERCISE 3
function storyWriter() {
    return {
        addWords: function (parameter) {
            return parameter
        },
        erase: function () {
            return "";
        }
    }
}
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''




