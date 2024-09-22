//function shout, returns string in  all caps
function shout(string){
    return string.toUpperCase()
}


//functn whisper, returns string in all lower case
function whisper(string){
    return string.toLowerCase()
}



//functn logShout, logs string in all caps to console
function logShout(string) {
    console.log(string.toUpperCase());
}





//functn logWhisper, logs string to console in lower 
function logWhisper(string){
   return console.log(string.toLowerCase())
}



//functn sayHiToHeadphonedRoommate, returns appropriate string
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}


whisper("HEY! THERE'S THIS NEW APP CALLED WHISPERS!")

logShout("LABRADOR!");

logWhisper("KANGONSHNOVKANGENMEN!")