$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });

  $('body:not(".topbar")').on('click',function(event) {
    //event.stopPropagation();
    $('.nearourclick').removeClass('nearourclick')
    //alert(event.screenX+', '+event.screenY)
    var clickX = event.screenX
    var clickY = event.screenY
    var nearestObj;
    var nearestDistance = 1000000000;

    for (var i = 0; i < window.dancers.length; i++) {
      var elemX = +window.dancers[i][0].style.left.slice(0,-2);
      var elemY = +window.dancers[i][0].style.top.slice(0,-2);

      var R = Math.pow((clickX - elemX), 2) + Math.pow((clickY - elemY), 2);
      R = Math.sqrt(R);

      if (R < nearestDistance){
        nearestDistance = R;
        nearestObj = window.dancers[i][0];
      }

  //     var that = this
  // that.track+=60
  // that.track = that.track % 360
  // var coordinates = {}

  // var calc = function() {
  //   var radius = 100
  //   var rads = that.track*Math.PI/180
  //   coordinates.x = that.lft + radius * Math.cos(rads)
  //   coordinates.y = that.tp + radius * Math.sin(rads)
  // //  return coordinates
  // }()

  // this.$node.animate({'left':coordinates.x+"px",'top':coordinates.y+"px"},1);
    }

    $(nearestObj).addClass('nearourclick')
  })
  
  $('body').on('click', 'span', function(event) {
    //alert("test")
    var xPos = event.screenX;
    var yPos = event.screenY;
    //alert('left is '+xPos+', top is '+yPos)
    var radius = 150;
    var radian;


    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i][0] === event.target) {
        continue
      }
      var elemX = +window.dancers[i][0].style.left.slice(0,-2);
      var elemY = +window.dancers[i][0].style.top.slice(0,-2);

      var R = Math.pow((xPos - elemX), 2) + Math.pow((yPos - elemY), 2);
      R = Math.sqrt(R);

      // var newElemX = (radius/R) * Math.abs(elemX - xPos);
      // var newElemY = (radius/R) * Math.abs(elemY - yPos);
      var newElemX = xPos + (radius/R)*(elemX-xPos);
      var newElemY = yPos + (radius/R)*(elemY-yPos);
      radian = window.dancers.length / Math.PI;

      $(window.dancers[i][0]).animate({'left': newElemX + radian, 'top': newElemY + radian}, 100);

    }
    
  })


});

