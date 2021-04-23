chrome.storage.sync.get(["username"], function (data) {
    document.getElementsByName("username")[0].value = data.username;
})
chrome.storage.sync.get(["password"], function (data) {
    document.getElementsByName("password")[0].value = data.password;
})