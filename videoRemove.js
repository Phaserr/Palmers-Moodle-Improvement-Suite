if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById("page-header").style.display = "none";
}

var adsOn = true
var theme = "Dark"
var disclaimer = true
var splashVideo = false
customURL = ""

//Defines vars for user settings

chrome.storage.sync.get({
    selectedTheme: "Dark", //Default Values
    selectedAds: true,
    selectedDisclaimer: true,
    selectedSpash: false,
    selectedURL: ""
}, function(items) {
    theme = items.selectedTheme;
    adsOn = items.selectedAds;
    disclaimer = items.selectedDisclaimer;
    splashVideo = items.selectedSpash;
    customURL = items.selectedURL;

    if (theme == "Dark") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "#0B0B0A");
        root.style.setProperty('--secondaryColor', "#1D1C1A");
        root.style.setProperty('--textColor', "white");
    }
    if (theme == "Tree") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "#98FB98");
        root.style.setProperty('--secondaryColor', "#556B2F");
        root.style.setProperty('--textColor', "black");
    }
    if (theme == "Paper") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "#E1D9C2");
        root.style.setProperty('--secondaryColor', "#E0E0E0");
        root.style.setProperty('--textColor', "#78233F");
    }
    if (theme == "Vomit") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "red");
        root.style.setProperty('--secondaryColor', "green");
        root.style.setProperty('--textColor', "#FFC0CB");
    }
    //Adds themeing

    if (adsOn == false && window.location == "https://portal.uspcollege.ac.uk/moodle/my/") {
        var adSpace = document.getElementById("inst471")
        adSpace.parentElement.removeChild(adSpace);
    }
    //Removes Ads

    if (disclaimer == true && window.location == "https://portal.uspcollege.ac.uk/moodle/") {
        document.getElementById('page-content').innerHTML = '<h1 id=PMIS class=PMISintro>You are using moodle with the Palmers Moodle Improvement Suite enabled. <br>This suite was created to help streamline the moodle experience. By using this extension, you accept that the developers of this software hold no responsibility for any problems caused by it and are not related to Palmers or Moodle in any way.<br>Thanks for using this software<br><a href="https://github.com/Adam-Shea/Palmers-Moodle-Improvement-Suite">Help contribute here</><br><br>CHANGELOG:<br></h1>';
    }
    //Removes disclaimer

    if (splashVideo == false) {
        var video = document.getElementById('myVideo');
        video.parentElement.removeChild(video);
    }
    //Removes splash video

    if (customURL != "") {
        document.getElementById('myVideo').src = customURL;
    }
    //Changes video URL
});