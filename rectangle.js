let length
let width
document.getElementById("submit").onclick = function(){
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    if (length < 0 || width < 0) {
        document.getElementById("output").textContent = `how is that even a rectangle bro`;      
    } else {
        document.getElementById("output").textContent = `Output: ${length*width}`;      
    }
}
