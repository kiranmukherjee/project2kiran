img = document.getElementsByClassName("enlargeimage"); 
    onclick="enlargeImg()";
    function enlargeImg() { 
    img.style.transform = "scale(1.5)"; 
    img.style.transition = "transform 0.25s ease"; 
    } 

img = document.getElementsByClassName("resetimage"); 
    onlick="resetImg()";
    function resetImg() { 
    img.style.transform = "scale(1)"; 
    img.style.transition = "transform 0.s25s ease"; 
    }



