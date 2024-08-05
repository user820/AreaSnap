let output
document.getElementById("submit").onclick = function(){
    ubase = document.getElementById("ubase").value;
    lbase = document.getElementById("lbase").value;
    height = document.getElementById("height").value;
    //convert string to in
    ubase = parseInt(ubase)
    lbase = parseInt(lbase)
    height = parseInt(height)
    if (ubase < 0 || lbase < 0 || height < 0) {
        document.getElementById("output").textContent = `how is that even a trapezoid bro`;      
    } else {
        document.getElementById("output").textContent = `Output: ${((ubase+lbase)*height)/2}`;      
    }
}