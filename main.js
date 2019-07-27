function asciiIntStringToText() {
    var asciiString = document.getElementById("asciiIntString").value;
    var asciiCharCodes = asciiString.trim().split(" ");
    var outputText = "";

    for (x in asciiCharCodes) {
        var c = String.fromCharCode(parseInt(asciiCharCodes[x]));
        outputText += c;
    }

    document.getElementById("textOutputField").value = outputText;
}

function textToAsciiIntString() {
    var inputText = document.getElementById("textOutputField").value;
    var outputText = "";

    var n = inputText.length;

    for (i = 0; i < n - 1; i++) {   // Loop till second last char
        outputText += inputText.charCodeAt(i);
        outputText += " ";
    }
    outputText += inputText.charCodeAt(i);  // Add last char

    document.getElementById("asciiIntString").value = outputText;
}

function clearFields() {
    document.getElementById("asciiIntString").value = "";
    document.getElementById("textOutputField").value = "";
}