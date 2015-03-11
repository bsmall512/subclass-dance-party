var WigglyDancer = function (top, left, timeBetweenSteps) { 

  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="wigglydancer"></span>');
  this.setPosition(top,left)
};

WigglyDancer.prototype = Object.create(Dancer.prototype);

WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function (){
  // debugger;
  // setInterval(this.$node.toggle, timeBetweenSteps);
  Dancer.prototype.step.call(this);
  this.$node.animate({'left':"-=10px"},1);
  this.$node.animate({'left':"+=10px"},1);
  this.$node.animate({'left':"-=10px"},1);
  this.$node.animate({'left':"+=10px"},1);
 }
