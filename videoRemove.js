if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById("page-header").style.display = "none";
}

version = "Version: Look Ma, Dynamic Content! [1.2.0]";

var adsOn = true;
var theme = "Dark";
var disclaimer = true;
var splashVideo = false;
var customURL = "";
var muteAudio = true;
var sideMenu = false;
var videoBackground = false;
var USPFlash = true;
//Defines vars for user settings

chrome.storage.sync.get({
    selectedTheme: "Dark", //Default Values
    selectedAds: true,
    selectedDisclaimer: true,
    selectedSpash: false,
    selectedURL: "",
    selectedMute: true,
    selectedMenu: false,
    selectedBackground: false,
    selectedUspFlash: true
}, function(items) {
    theme = items.selectedTheme;
    adsOn = items.selectedAds;
    disclaimer = items.selectedDisclaimer;
    splashVideo = items.selectedSpash;
    customURL = items.selectedURL;
    muteAudio = items.selectedMute;
    sideMenu = items.selectedMenu;
    USPFlash = items.selectedUspFlash;
    videoBackground = items.selectedBackground;

    if (window.location == "https://portal.uspcollege.ac.uk/moodle/" || window.location == "https://portal.uspcollege.ac.uk/moodle/my/" && USPFlash == true) {
        loadFlashUSP();
    }


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

    //Adds themeing

    if (adsOn == false && window.location == "https://portal.uspcollege.ac.uk/moodle/my/") {
        var adSpace = document.getElementById("inst471")
        adSpace.parentElement.removeChild(adSpace);
    }
    //Removes Ads

    if (splashVideo == false) {
        var video = document.getElementById('myVideo');
        try {
            video.parentElement.removeChild(video)
        } catch (error) {

        }
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
        try {
            document.getElementById("nav-drawer").parentNode.removeChild(document.getElementById("nav-drawer"));
            document.getElementById("page-my-index").style.margin = "0px";
        } catch (error) {

        }
        for (let i = 0; i < navBar.length; i++) {
            navBar[i].parentNode.removeChild(navBar[i]);
        }
    }
    //Changes video URL

    if (window.location == "https://portal.uspcollege.ac.uk/moodle/course/view.php?id=70") {
        document.getElementById("page-header").innerHTML = document.getElementById("page-header").innerHTML + "<p>Hey, If you've noticed that some of the tasks are gone, as someone removed them, Rourke has kept a backup here : <p><a href='https://drive.google.com/open?id=1K7M5X7MEUSJSSjz88cVmegX3PBcABT9i'>LINK</a>"
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

function loadFlashUSP() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            USPFlash = (xhr.responseText);
            console.log(USPFlash);
            USPFlash = (USPFlash.toString());
            USPFlash = USPFlash.split("~~");
            window.USPnews = USPFlash[0];
            window.USPmemes = USPFlash[1];
            window.USPupdates = USPFlash[2];


            document.getElementById("region-main").innerHTML = `<h1 class=title id=title><br>USP Flash</h1>
        <p>` + version + `</p>
        <div>
        <h2 class=flashTitle>Current News:</h2>
        <div class=contentBar>` + USPnews + `

        </div>
        <h2 class=flashTitle>Internet Trends:</h2>
        <div class=contentBar>` + USPmemes + `

        </div>
        <h2 class=flashTitle>PMIS Updates:</h2>
        <div class=contentBar>` + USPupdates + `

        </div>
        `
        }
        if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
            try {
                document.getElementById("title").style.marginTop = "-90px";
            } catch (error) {

            }
        }
    }
    xhr.open('GET', 'https://adam-shea.github.io/Palmers-Moodle-Improvement-Suite/', true);
    xhr.send(null);
}