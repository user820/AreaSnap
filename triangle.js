let output
document.getElementById("submit").onclick = function(){
    base = document.getElementById("base").value;
    height = document.getElementById("height").value;
    if (base < 0 || height < 0) {
        document.getElementById("output").textContent = `how is that even a triangle bro`;      
    } else {
        document.getElementById("output").textContent = `Output: ${base*height/2}`;      
    }
}