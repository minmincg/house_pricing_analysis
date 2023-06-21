function collapsible(){
    if (d3.select(".content").style("width")=="0px"){
        console.log("expand")
        d3.select(".content").style("width","25%");
        d3.select(".content").style("marginLeft","20px");

    } else {
        console.log("collapse")
        d3.select(".content").style("width",0);
        d3.select(".content").style("marginLeft",0);
    }
}



// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }