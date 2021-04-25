window.onload = function () {
    document.getElementById("save").onclick = function () {

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username != "" && password != "") {
            document.getElementById("saved").innerHTML = "Saved!!";
            setTimeout(() => { document.getElementById("saved").innerHTML = "" }, 1500);


            chrome.storage.sync.set({ "username": username });
            chrome.storage.sync.set({ "password": password });
        }
        else if (username == "" && password != "") {
            document.getElementById("saved").innerHTML = "Enter Username!!";
            setTimeout(() => { document.getElementById("saved").innerHTML = "" }, 1500);
        }
        else if (password == "" && username != "") {
            document.getElementById("saved").innerHTML = "Enter Password!!";
            setTimeout(() => { document.getElementById("saved").innerHTML = "" }, 1500);
        } else {
            document.getElementById("saved").innerHTML = "Enter Username and Password!!";
            setTimeout(() => { document.getElementById("saved").innerHTML = "" }, 1500);
        }

    }
}

