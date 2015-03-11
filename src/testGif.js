var testGif = function (top, left, timeBetweenSteps) { 
  var gifArray = ['bluesclues.gif', 'banana.gif', 'charliebrown.gif', 'jt.gif', 'kenny.gif', 'pumpgirl.gif', 'robotcat.gif'];
  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<img src="src/' + gifArray[Math.floor(Math.random() * gifArray.length)] + '" class="testGif"></img>');
  this.setPosition(top,left)
};

testGif.prototype = Object.create(Dancer.prototype);

testGif.prototype.constructor = testGif;

// WigglyDancer.prototype.step = function (){
//   // debugger;
//   // setInterval(this.$node.toggle, timeBetweenSteps);
//   Dancer.prototype.step.call(this);
//   this.$node.animate({'left':"-=10px"},50);
//   this.$node.animate({'left':"+=10px"},50);
//   this.$node.animate({'left':"-=10px"},50);
//   this.$node.animate({'left':"+=10px"},50);
//  }
