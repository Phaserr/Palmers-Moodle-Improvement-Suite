if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById("page-header").style.display = "none";
}

var version = "1.2.2";
var buildNum = 11;

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
    selectedUspFlash: true,
    selectedCustomFooter: true
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
    customFooter = items.selectedCustomFooter;

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
    if (theme == "Transparent") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "rgba(0, 0, 0, 0)");
        root.style.setProperty('--secondaryColor', "rgba(0, 0, 0, 0.2)");
        root.style.setProperty('--textColor', "white");
    }
    if (theme == "uspTrue") {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', "#0C3455");
        root.style.setProperty('--secondaryColor', "#0A2947");
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
        try {
            document.getElementById('myVideo').src = customURL;
        } catch (error) {

        }
    }

    if (muteAudio == false) {
        document.getElementById('myVideo').muted = false;
    }

    if (sideMenu == false) {
        navBar = document.querySelectorAll(".pull-xs-left");
        try {
            document.getElementById("nav-drawer").parentNode.removeChild(document.getElementById("nav-drawer"));
        } catch (error) {

        }
        try {
            document.getElementById("page-my-index").style.margin = "0px";
        } catch (error) {

        }
        for (let i = 0; i < navBar.length; i++) {
            navBar[i].parentNode.removeChild(navBar[i]);
        }
    }
    //Changes video URL

    if (customFooter == true) {
        d = new Date();
        currentDay = d.getDay();
        currentDate = d.getDate();
        currentMonth = d.getMonth;
        customMessage = 'Have an awesome day x';
        if (currentDay == 0 || currentDay == 6) {
            customMessage = "It's the weekend! You should make sure to have a rest once in a while!"
        }
        if (currentDay == 3) {
            customMessage = "It's Wednesday my dudes"
        }
        if (currentDate == 1) {
            customMessage = "Pinch punch first day of the month!"
        }
        if (currentDate == 8 && currentMonth == 0) {
            customMessage = "Today is a cool day!"
        }
        if (currentDate == 31 && currentMonth == 9) {
            customMessage = "<a href='https://www.youtube.com/watch?v=-1dSY6ZuXEY'>Happy Halloween! Have a spooky day!</a>"
        }
        if (currentDate == 25 && currentMonth == 11) {
            customMessage = "Merry Christmas. I hope you have loads of fun today!"
        }
        if (currentDate == 26 && currentMonth == 11) {
            customMessage = "Make sure to relax and chill on boxing day!"
        }
        if (currentDate == 31 && currentMonth == 11) {
            customMessage = "Happy new years eve! Are you counting down the minutes till new year already?"
        }
        if (currentDate == 1 && currentMonth == 0) {
            customMessage = "Happy new years day! I cannot believe a year has passed already"
        }
        if (currentDate == 14 && currentMonth == 1) {
            customMessage = "Have a good valentines day. Did you get a card from anyone?"
        }
        if (currentDate == 31 && currentMonth == 9) {
            customMessage = "<a href='https://en.wikipedia.org/wiki/World_Savings_Day'>It's world savings day. Are you saving the fruits of your labour?</a>"
        }
        if (currentDate == 6 && currentMonth == 0) {
            customMessage = "<a href='https://en.wikipedia.org/wiki/Epiphany_(holiday)'>Today is Epiphany, have you taken down your decorations yet?</a>"
        }
        if (currentDate == 1 && currentMonth == 4) {
            customMessage = "<a href='https://en.wikipedia.org/wiki/International_Workers%27_Day'>It's international Workers day, did you get the day off?</a>"
        }
        if (currentDate == 12 && currentMonth == 0) {
            customMessage = "It's Rubber Duck day. Have you got one to explain your thoughts to yet?"
        }
        if (currentDate == 19 && currentMonth == 0) {
            customMessage = "It's Popcorn day in the US. Are you jealous?"
        }
        if (currentDate == 14 && currentMonth == 3) {
            customMessage = "It's Pi day! But only if you read your dates awkwardly"
        }
        if (currentDate == 25 && currentMonth == 4) {
            customMessage = "Happy Towl Day ;)"
        }
        if (currentDate == 19 && currentMonth == 8) {
            customMessage = "ARRRRRRR IT'S TALK LIKE A PIRATE DAY!!!!"
        }
        if (currentDate == 4 && currentMonth == 4) {
            customMessage = "May the 4th be with you"
        }
        if (currentDate == 6 && currentMonth == 4) {
            customMessage = "Revenge of the sixth"
        }
        if (currentDate == 13 && currentMonth == 2) {
            customMessage = "Get your red noses on!"
        }
        if (currentDate == 20 && currentMonth == 3) {
            customMessage = "It's getting pretty dank in here for some reason"
        }
        if (currentDate == 4 && currentMonth == 5) {
            customMessage = "Give you cat a hug and cuddle for me today"
        }
        if (currentDate == 5 && currentMonth == 5) {
            customMessage = "Idk if I can make it to work today"
        }
        if (currentDate == 23 && currentMonth == 9) {
            customMessage = "Get ready fellow chemists, it's mole day!"
        }
        try {
            document.getElementById("page-footer").innerHTML = "<div class=PMISFooter><h1>Useful Links</h1><ul><li><a href='https://portal.uspcollege.ac.uk/moodle/my/'>DashBoard</a></li><li><a href='https://portal.uspcollege.ac.uk/moodle/course/index.php'>All Courses</a></li><li><a href='https://proparent.seevic-college.ac.uk/timetable/?Grid=Show'>Time Table</a></li><li><a href='<li><a href='https://proparent.seevic-college.ac.uk/timetable/?Grid=Show'>Student Email</a></li></ul><p>" + customMessage + "</p></div>"
            document.getElementById("page-footer").style = 'display:block !important';
        } catch (error) {

        }

    }


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
            USPFlash = (USPFlash.toString());
            USPFlash = USPFlash.split("~~");
            window.USPnews = USPFlash[0];
            window.USPmemes = USPFlash[1];
            window.USPupdates = USPFlash[2];
            window.PMISver = USPFlash[3];

            var versionTitle = "";
            if (parseFloat(PMISver) > parseFloat(buildNum)) {
                versionTitle = "        NEW UPDATE AVAILABLE"
            }


            document.getElementById("region-main").innerHTML = `<h1 class=title id=title><br>USP Flash</h1>
        <p>Version : Look Ma, Dynamic Content  [` + version + "]" + versionTitle + `</p>
        <div>
        <h2 class=flashTitle>Current News:</h2>
        <div class=contentBar>` + USPnews + `

        </div>
        <h2 class=flashTitle>Internet Memes:</h2>
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