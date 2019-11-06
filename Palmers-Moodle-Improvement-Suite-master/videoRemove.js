var video = document.getElementById('myVideo');
video.parentElement.removeChild(video);

if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById('page-content').innerHTML = '<h1 id=PMIS class=PMISintro>You are using moodle with the Palmers Moodle Improvement Suite enabled. <br>This suite was created to help streamline the moodle experience. By using this extension, you accept that I [Adam Shea] hold no responsibility for any problems caused by it.<br>Thanks for using this software<br><a href="adam-shea.github.io">~Adam Shea</><br><br>CHANGELOG:<br></h1>';
}