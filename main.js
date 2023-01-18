    // document.querySelector("button").onclick = function(){
    //     var h=400;
    //     var w=500; 
    //     document.querySelector("div").style.width=w+"px"
    //     document.querySelector("div").style.height = h+"px"

    // }











    var x = 0;
document.querySelector("button").onclick = function () {
  x = x + 1;
  if (x % 2 != 0) {
        var h=400;
        var w=500; 
        document.querySelector("div").style.width=w+"px"
        document.querySelector("div").style.height = h+"px"
  } else {

        document.querySelector("div").style.width="100px"
        document.querySelector("div").style.height ="50px"
  }
}