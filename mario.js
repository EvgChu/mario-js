const coloredStyles = {
    width: "25px",
    height: "25px",
    margin: "3px",
    backgroundColor: "brown",
    display: "inline-block",
}

const blankStyles = { ...coloredStyles, backgroundColor: "lightblue" };


function jGeneratePyramidLine(row, height) { 
    let lineDiv = $("<div></div>");

    for (var i = 1; i <= height - row; ++i){
        $("<div></div>").css(blankStyles).addClass("brickunvisible").appendTo(lineDiv);
    }
    for (; i <= height + 1; ++i){
        $("<div></div>").css(coloredStyles).addClass("brickvisible").appendTo(lineDiv);
    }
       

    return lineDiv;
}

function printPyramid(element, height) {
    element.html("");
    for (let i = 1; i <= height; ++i) {
        element.append(jGeneratePyramidLine(i, height));
    }
}

printPyramid( $("#construction"), 15);

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

$( "button" ).on( "click" ,function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  $( '.brickvisible').css( "background-color", rndCol )
})