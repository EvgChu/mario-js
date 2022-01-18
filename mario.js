
function jGeneratePyramidLine(row, height) { 
    const lineDiv = $("<div></div>")
    const rowClass = "r"+(height-row).toString()
    for (var i = 0; i < height - row; ++i){
        lineDiv.append($(`<div class="brick unvisible"></div>`).addClass("c"+i.toString()).addClass(rowClass) );
    }
    for (; i < height + 1; ++i){
        lineDiv.append($(`<div class="brick visible"></div>`).addClass("c"+i.toString() ).addClass(rowClass));
    }  
    return lineDiv;
}

function jPrintPyramid(element, height) {
    element.html("");
    for (let i = 0; i < height; ++i) {
        element.append(jGeneratePyramidLine(i, height));
    }
}
class Mario {
  constructor(field, height){
    this.x = 0;
    this.y = 1;
    this.h = height;
    this.class = "mario"
    console.log($(`.r${this.y}.c${this.x}`).addClass(this.class))
    setInterval( this.render, 20);

  }

    render(){
      
    }

  select(event){
    switch (event.key) {
      case "ArrowLeft":
          // Left pressed
          break;
      case "ArrowRight":
          // Right pressed
          this.right()
          break;
      case "ArrowUp":
          // Up pressed
          this.up()
          break;
      case "ArrowDown":
          // Down pressed
          break;
  }
  }

    up() {
    }

    right() {
    }


}

jPrintPyramid( $("#construction"), 15);
let mario = new Mario($("#construction"),15)
