document.addEventListener("keydown", keydown); //add listener for escape key to close tabs
    
var opentab; //currently open tab tracker variable
    
function openNav(tab) { //handle when tab link is clicked on

    if(tab == 'myNav3'){ //activate cross out feature when schedule tab is opened
        strikethroughschedule();
    }

    setspeed('0.3s'); //set transition speed to normal 
    
    if(opentab == tab) {closeNav(opentab); return;} //close tab if you click the link for it again 
    
    if(opentab) {//if there's an open tab, close it before opening next one
        setspeed('0s'); //set transition speed to zero for instant switching
        closeNav(opentab); //close open tab
    }

    document.getElementById(tab).style.width = "85%"; //open tab by setting width to 90%
    document.getElementById("tablinkcontainer").style.width = "15%"; //shrink tab links so text is not cut off
    
    opentab = tab; //set opentab tracker variable
}

function setspeed(speed){ //find all elements with tabcontent class and set speed accordingly
    var all = document.getElementsByClassName('tabcontent');
        for (var i = 0; i < all.length; i++) {
            all[i].style.transitionDuration = speed;
        }

}

function closeNav(tab){ //close button on tab handler 
    document.getElementById("tablinkcontainer").style.width = "100%"; //reset tab links to full size 
    document.getElementById(tab).style.width = "0%"; //close tab by setting width to zero 

    opentab = null; //clear open tab tracker 
}

function keydown (e) { //keydown handler for entire window
    if(e.key === "Escape") { //listen to escape key 
        if(opentab) { //check if there's an open tab 
            closeNav(opentab); //close the open tab 
        } 
    }
}
