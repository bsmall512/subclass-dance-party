var CircleDancer = function (top, left, timeBetweenSteps) { 

  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="circledancer"></span>');
  this.setPosition(top,left)
  this.track = 0
  this.lft = left
  this.tp = top
};

CircleDancer.prototype = Object.create(Dancer.prototype);

CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function (){
  // debugger;
  // setInterval(this.$node.toggle, timeBetweenSteps);
  Dancer.prototype.step.call(this);

  var that = this
  that.track+=60
  that.track = that.track % 360
  var coordinates = {}

  var calc = function() {
    var radius = 100
    var rads = that.track*Math.PI/180
    coordinates.x = that.lft + radius * Math.cos(rads)
    coordinates.y = that.tp + radius * Math.sin(rads)
  //  return coordinates
  }()

  this.$node.animate({'left':coordinates.x+"px",'top':coordinates.y+"px"},1);
 }
