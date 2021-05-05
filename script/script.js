function change(){
    const ss = document.getElementById("bigfont");
    if(ss.getAttribute("media") === "not all"){
        ss.setAttribute("media", "screen");
    } else {
        ss.setAttribute("media", "not all");
    }
}