function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",Model_Loaded)
}

function Model_Loaded(){
  console.log("Model Loaded Successfully")
}

function draw(){
image(video,0,0,300,300)
classifier.classify(video,gotResults)
}

function gotResults(error,results){
  if (error){
    console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("object_name").innerHTML = results[0].label
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2)
  }
}






