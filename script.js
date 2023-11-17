console.log("connected");
var input = document.getElementById("test-input");
var output = document.getElementById("test-output");

input.addEventListener("change", (event) => {
    string_sentence = event.target.value;
    string(string_sentence);
});

function string(s) {
    let newString = "";
    for (let letter = 0; letter < s.length; letter++) {
        if (letter % 2 === 0) {
            newString += s[letter].toUpperCase();
        } else {
            newString += s[letter].toLowerCase();
        }
    }

    output.innerText = newString;
    return newString;
}
