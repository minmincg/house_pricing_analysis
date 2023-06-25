function collapsible(section){
    let sections=["filters","graphs","predict"].filter(each=>{
        return each!=section;
    });
    console.log("Remaining sections",sections);
    if (d3.select(`#${section}`).style("width")=="0px"){
        sections.forEach(each=>{
            d3.select(`#${each}`).style("width",0);
            d3.select(`#${each}`).style("marginLeft",0);
        });
        d3.select(`#${section}`).style("width","450px");
        d3.select(`#${section}`).style("marginLeft","20px");

    } else {
        console.log(`collapse ${section}`)
        d3.select(`#${section}`).style("width",0);
        d3.select(`#${section}`).style("marginLeft",0);
    }
}