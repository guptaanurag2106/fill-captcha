chrome.storage.sync.get(["username"], function (data) {
    document.getElementsByName("_user")[0].value = data.username;
})
chrome.storage.sync.get(["password"], function (data) {
    document.getElementsByName("_pass")[0].value = data.password;
})


// var body = document.body;
// var textContent = body.textContent;

// var nameValue = "";

// document.getElementsByName("captcha_input")[0].value = nameValue;
