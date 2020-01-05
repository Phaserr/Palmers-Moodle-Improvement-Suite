// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var ads = document.getElementById('ads').checked;
    var splashVideo = document.getElementById('splashVideo').checked;
    var customURL = document.getElementById('customURL').value;
    var muteAudio = document.getElementById('muteAudio').checked;
    var sideMenu = document.getElementById("sideMenu").checked;
    var uspFlash = document.getElementById("uspFlash").checked;
    var videoBackground = document.getElementById("videoBackground").checked;
    var customFooter = document.getElementById("customFooter").checked;
    chrome.storage.sync.set({
        selectedTheme: theme,
        selectedAds: ads,
        selectedDisclaimer: disclaimer,
        selectedSpash: splashVideo,
        selectedURL: customURL,
        selectedMute: muteAudio,
        selectedMenu: sideMenu,
        selectedBackground: videoBackground,
        selectedUspFlash: uspFlash,
        selectedCustomFooter: customFooter
    }, function() {
        // Update status to let user know options were saved.
    });
    chrome.tabs.executeScript(null, { file: "videoRemove.js" });
    changeTheme();
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
        selectedMute: true,
        selectedMenu: false,
        selectedBackground: false,
        selectedUspFlash: true,
        selectedCustomFooter: true
    }, function(items) {
        document.getElementById('theme').value = items.selectedTheme;
        document.getElementById('ads').checked = items.selectedAds;
        document.getElementById('splashVideo').checked = items.selectedSpash;
        document.getElementById('customURL').value = items.selectedURL;
        document.getElementById('muteAudio').checked = items.selectedMute;
        document.getElementById("sideMenu").checked = items.selectedMenu;
        document.getElementById("uspFlash").checked = items.selectedUspFlash;
        document.getElementById("videoBackground").checked = items.selectedBackground;
        document.getElementById("customFooter").checked = items.selectedCustomFooter;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
window.onload = function() {
    changeTheme()
    document.getElementById('saveBtn').addEventListener('click', save_options);
}

function changeTheme() {
    chrome.storage.sync.get({
        selectedTheme: "Dark", //Default Values
        selectedAds: true,
        selectedDisclaimer: true,
        selectedSpash: false,
        selectedURL: "",
        selectedMute: true,
        selectedMenu: false,
        selectedBackground: false
    }, function(items) {
        theme = items.selectedTheme;
        adsOn = items.selectedAds;
        disclaimer = items.selectedDisclaimer;
        splashVideo = items.selectedSpash;
        customURL = items.selectedURL;
        muteAudio = items.selectedMute;
        sideMenu = items.selectedMenu;
        videoBackground = items.selectedBackground;

        if (theme == "Dark") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#0B0B0A");
            root.style.setProperty('--secondaryColor', "#1D1C1A");
            root.style.setProperty('--textColor', "white");
        }
        if (theme == "Tree") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#609e60");
            root.style.setProperty('--secondaryColor', "#556B2F");
            root.style.setProperty('--textColor', "white");
        }
        if (theme == "Paper") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#F8E0C8");
            root.style.setProperty('--secondaryColor', "#B99566");
            root.style.setProperty('--textColor', "#78233F");
        }
        if (theme == "Vomit") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "red");
            root.style.setProperty('--secondaryColor', "#39FF14");
            root.style.setProperty('--textColor', "#FAED27");
        }
        if (theme == "Candy") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#c9fdff");
            root.style.setProperty('--secondaryColor', "#ffcbcb");
            root.style.setProperty('--textColor', "black");
        }
        if (theme == "Rhubarb&Custard") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#9aceff");
            root.style.setProperty('--secondaryColor', "#4a69bb");
            root.style.setProperty('--textColor', "black");
        }
        if (theme == "HellSpawn") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "#0B0B0A");
            root.style.setProperty('--secondaryColor', "#cc3333");
            root.style.setProperty('--textColor', "white");
        }
        if (theme == "Transparent") {
            let root = document.documentElement;

            root.style.setProperty('--primaryColor', "rgba(0, 0, 0, 0)");
            root.style.setProperty('--secondaryColor', "rgba(0, 0, 0, 0.2)");
            root.style.setProperty('--textColor', "white");
        }
    })
}