document.getElementsByName("username")[0].value = ""
document.getElementsByName("password")[0].value = ""

var text = document.body.textContent;

var add = text.search("Please add ");
var sub = text.search("Please subtract ");
var first = text.search("Please enter first value ");
var second = text.search("Please enter second value ");

var value = 20;

if (first != -1) {
    var comma = text.indexOf(" , ", first);
    value = parseInt(text.substr(first + 25, comma));
}

if (second != -1) {
    var comma = text.indexOf(" , ", second);
    var space = text.indexOf("=", comma)
    value = parseInt(text.substr(comma + 3, space));
}

if (add != -1) {
    var plus = text.indexOf(" + ", add);
    var space = text.indexOf("=", plus);
    value = parseInt(text.substring(add + 11, plus)) + parseInt(text.substring(plus + 3, space))
}

if (sub != -1) {
    var minus = text.indexOf(" - ", minus);
    var space = text.indexOf("=", minus);
    value = parseInt(text.substring(sub + 16, minus)) - parseInt(text.substring(minus + 3, space))
}

document.getElementsByName("valuepkg3")[0].value = value;

// document.getElementById("loginbtn").click();


