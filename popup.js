window.onload = function () {
    document.getElementById("save").onclick = function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        chrome.storage.sync.set({ "username": username })
        chrome.storage.sync.set({ "password": password })

    }
}