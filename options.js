// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var ads = document.getElementById('ads').checked;
    var disclaimer = document.getElementById('disclaimer').checked;
    var splashVideo = document.getElementById('splashVideo').checked;
    var customURL = document.getElementById('customURL').value;
    var muteAudio = document.getElementById('muteAudio').checked;
    chrome.storage.sync.set({
        selectedTheme: theme,
        selectedAds: ads,
        selectedDisclaimer: disclaimer,
        selectedSpash: splashVideo,
        selectedURL: customURL,
        selectedMute: muteAudio
    }, function() {
        // Update status to let user know options were saved.
    });
    window.close();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        selectedTheme: "Dark", //Default Values
        selectedAds: true,
        selectedDisclaimer: true,
        selectedSpash: false,
        selectedURL: "",
        selectedMute: true
    }, function(items) {
        document.getElementById('theme').value = items.selectedTheme;
        document.getElementById('ads').checked = items.selectedAds;
        document.getElementById('disclaimer').checked = items.selectedDisclaimer;
        document.getElementById('splashVideo').checked = items.selectedSpash;
        document.getElementById('customURL').value = items.selectedURL;
        document.getElementById('muteAudio').checked = items.selectedMute;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
window.onload = function() {
    document.getElementById('saveBtn').addEventListener('click', save_options);
}