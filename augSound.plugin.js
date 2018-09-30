//META{"name":"augSound","website":"https://augitesoul.fr","source":"https://github.com/AugiteSoul/AugBD/"}*//
class augSound {
	getName() {return "AugSound";} 
	getDescription() {return "Very small plugin that plays a custom sound when Discord starts";} 
	getVersion() {return "1";}
	getAuthor() {return "augitesoul";}
start() {
	var myAudio = document.createElement("audio");
	myAudio.src = "https://archive.org/download/MicrosoftWindowsXPStartupSound/Microsoft%20Windows%20XP%20Startup%20Sound.ogg"; // Feel free to change the sound
	myAudio.play();
}
stop() {
	;
}}
