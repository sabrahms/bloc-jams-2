var pointsArray = document.getElementsByClassName('point');

var animatePoints = function (point) {
                
                
    var revealPoint = function (i) {
        point[i].style.opacity = 1;
        point[i].style.transform = "scaleX(1) translateY(0)";
        point[i].style.msTransform = "scaleX(1) translateY(0)";
        point[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }                
    
    for (var i = 0; i < point.length; i++) {
        revealPoint(i);
    }
};

window.onload = function() {
    
    if (window.innerHeight > 950) {
        animatePoints(animatePoints);
    }
    
    window.addEventListener('scroll', function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
        }
        
    });
    
}