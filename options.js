// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var ads = document.getElementById('ads').checked;
    chrome.storage.sync.set({
        selectedTheme: theme,
        selectedAds: ads
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
        selectedAds: true
    }, function(items) {
        document.getElementById('theme').value = items.selectedTheme;
        document.getElementById('ads').checked = items.selectedAds;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
window.onload = function() {
    document.getElementById('saveBtn').addEventListener('click', save_options);
}