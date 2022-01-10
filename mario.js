const coloredStyles = {
    width: "25px",
    height: "25px",
    margin: "3px",
    backgroundColor: "brown",
    display: "inline-block",
}

const blankStyles = { ...coloredStyles, backgroundColor: "lightblue" };

function setStyles(element, styles) {
    for (const [key, value] of Object.entries(styles))
        element.style[key] = value;
}

function createStyledNode(nodeType, styles) {
    const node = document.createElement(nodeType);
    setStyles(node, styles);
    return node;
}

function generatePyramidLine(row, height) {
    const divElement = document.createElement("div");

    for (var i = 1; i <= height - row; ++i){
        const tmp = createStyledNode("div", blankStyles)
        tmp.className = "brickunvisible";
        divElement.appendChild(tmp);
    }
    for (; i <= height + 1; ++i){
        const tmp = createStyledNode("div", coloredStyles)
        tmp.className = "brickvisible";
        divElement.appendChild(tmp);
    }
       

    return divElement;
}

function printPyramid(element, height) {
    element.innerHTML = "";
    for (let i = 1; i <= height; ++i) {
        element.appendChild(generatePyramidLine(i, height));
    }
}

printPyramid(document.getElementById("construction"), 15);

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  const brick = document.querySelectorAll('.brickvisible');
  brick.forEach(elem => {elem.style.backgroundColor = rndCol})
}