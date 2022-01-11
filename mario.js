
function jGeneratePyramidLine(row, height) { 
    const lineDiv = $("<div></div>");
    for (var i = 1; i <= height - row; ++i){
        lineDiv.append($("<div></div>").addClass("brick unvisible"));
    }
    for (; i <= height + 1; ++i){
        lineDiv.append($("<div></div>").addClass("brick visible"));
    }  
    return lineDiv;
}

function jPrintPyramid(element, height) {
    element.html("");
    for (let i = 1; i <= height; ++i) {
        element.append(jGeneratePyramidLine(i, height));
    }
}

jPrintPyramid( $("#construction"), 15);

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

$( "button" ).on( "click" ,function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  $( '.visible').css( "background-color", rndCol )
})