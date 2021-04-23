console.log("heloo")

const defaultFilters = [
    "https://webmail.iitd.ac.in/roundcube/plugins/captcha/temp/*.jpg"
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true } },
    { urls: defaultFilters },
    ["blocking"]
)