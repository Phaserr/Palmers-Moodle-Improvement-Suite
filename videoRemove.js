var video = document.getElementById('myVideo');
video.parentElement.removeChild(video);

if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById('page-content').innerHTML = '<h1 id=PMIS class=PMISintro>You are using moodle with the Palmers Moodle Improvement Suite enabled. <br>This suite was created to help streamline the moodle experience. By using this extension, you accept that the developers of this software hold no responsibility for any problems caused by it and are not related to Palmers or Moodle in any way.<br>Thanks for using this software<br><a href="https://github.com/Adam-Shea/Palmers-Moodle-Improvement-Suite">Help contribute here</><br><br>CHANGELOG:<br></h1>';
}
//Removes Video

var adsOn = true
var theme = "Dark"
    //Defines vars for user settings

chrome.storage.sync.get({
    selectedTheme: "Dark", //Default Values
    selectedAds: true
}, function(items) {
    theme = items.selectedTheme;
    adsOn = items.selectedAds;

    if (adsOn == false && window.location == "https://portal.uspcollege.ac.uk/moodle/my/") {
        var adSpace = document.getElementById("inst471")
        adSpace.parentElement.removeChild(adSpace);
    }

    if (theme == "Dark") {

    }

});