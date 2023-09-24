document.getElementById("submit").addEventListener("click", function(event) {
    console.log('hello')
event.preventDefault();  // Prevent the default form submission behavior
    document.getElementById("needoutput").innerText = "stuff"
}