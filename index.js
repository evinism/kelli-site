var imagesCount = 0;
var loadedCount = 0;

waitFor(document.images[0]);
waitFor(document.images[1]);
waitFor(document.images[2]);

function waitFor(image){
  imagesCount++;
  image.onload = function(){
    loadedCount++;
    if(loadedCount === imagesCount && !loadFired){
      onImagesLoad();
    }
  }
  if (image.complete) {
    image.onload();
  }
};

var loadFired = false;

function onImagesLoad(){
  if(!loadFired){
    loadFired = true;
    document.getElementById('content').style.display = "block";
    document.getElementById('loading').className = "hidden";
  }
}

// def going overboard on this.
var confettiContainer = document.getElementById('confetti-container');
var confettiShapes = [
  '<svg width="10" height="10" viewbox="0 0 10 10"><polygon points="0,0 5,5 8,9"/></svg>'
];
function makeAConfetti(){

}

// i don't care about duplicates
setTimeout(onImagesLoad, 3000);
