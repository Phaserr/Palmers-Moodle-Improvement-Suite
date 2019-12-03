if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById("page-header").style.display = "none";
}

var adsOn = true
var theme = "Dark"
var disclaimer = true
var splashVideo = false
var customURL = ""
var muteAudio = true
var sideMenu = false
var videoBackground = false
    //Defines vars for user settings

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

        root.style.setProperty('--primaryColor', "#E1D9C2");
        root.style.setProperty('--secondaryColor', "#E0E0E0");
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

        root.style.setProperty('--primaryColor', "#81D4EC");
        root.style.setProperty('--secondaryColor', "#F0B2DF");
        root.style.setProperty('--textColor', "white");
    }
    if (theme == "Rhubarb&Custard") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "#800080");
        root.style.setProperty('--secondaryColor', "#9b870c");
        root.style.setProperty('--textColor', "white");
    }
    //Adds themeing

    if (adsOn == false && window.location == "https://portal.uspcollege.ac.uk/moodle/my/") {
        var adSpace = document.getElementById("inst471")
        adSpace.parentElement.removeChild(adSpace);
    }
    //Removes Ads

    if (disclaimer == true && window.location == "https://portal.uspcollege.ac.uk/moodle/") {
        document.getElementById('page-content').innerHTML = 'Version: Accepting Angel Fish [1.1.6]<h1 id=PMIS class=PMISintro>You are using moodle with the Palmers Moodle Improvement Suite enabled. <br>This suite was created to help streamline the moodle experience. By using this extension, you accept that the developers of this software hold no responsibility for any problems caused by it and are not related to Palmers or Moodle in any way.<br>Thanks for using this software<br><a href="https://github.com/Adam-Shea/Palmers-Moodle-Improvement-Suite">Help contribute here</></h1>';
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

    if (muteAudio == false) {
        document.getElementById('myVideo').muted = false;
    }

    if (sideMenu == false) {
        navBar = document.querySelectorAll(".pull-xs-left");
        for (let i = 0; i < navBar.length; i++) {
            navBar[i].style.display = "none";
        }

        console.log("test")
    }
    //Changes video URL

	if (window.location == "https://portal.uspcollege.ac.uk/moodle/course/view.php?id=70"){
		document.getElementById("page-header").innerHTML = document.getElementById("page-header").innerHTML+"<p>Hey, If you've noticed that some of the tasks are gone, as someone removed them, Rourke has kept a backup here : <p><a href='https://drive.google.com/open?id=1K7M5X7MEUSJSSjz88cVmegX3PBcABT9i'>LINK</a>"
	}
    if (videoBackground == true || (videoBackground == false && window.location == "https://portal.uspcollege.ac.uk/moodle/"))
        if (customURL != "") {
            insertDiv = document.createElement('div');
            insertDiv.id = 'insertVideo';
            insertDiv.innerHTML = '<iframe id="iframe" frameborder="0" height="1080" width="100%"> </iframe>';
            container = document.getElementById('page-wrapper');
            container.appendChild(insertDiv);
            videoId = customURL.replace("https://www.youtube.com/watch?v=", "");
            customURL = customURL.replace("watch?v=", "embed/");
            if (muteAudio == false) {
                customURL += '?controls=1&autoplay=1&playlist=' + videoId + '&loop=1';
            } else {
                customURL += '?controls=0&mute=1&autoplay=1&playlist=' + videoId + '&loop=1';
            }
            iframeVid = document.getElementById('iframe').src = customURL;
        }
        //Changes video URL
	
});