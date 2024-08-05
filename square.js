let output
document.getElementById("submit").onclick = function(){
    output = document.getElementById("input").value;

    if (output < 0) {
        document.getElementById("output").textContent = `how is that even a square bro`;      
    } else {
        document.getElementById("output").textContent = `Output: ${output**2}`;      
    }
}