function strikethroughschedule() { //cross out schedule events as day progresses 
    var today = new Date();
    // TESTING ONLY:
    // var today = new Date(2020, 3, 21, 18, 1);
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    if(date < "2020-4-17"){return;} //check for hackathon date, exit if not hackathon
    
    var currenttime = today.getHours() + ":" + today.getMinutes()
    console.log('Date & time: ' + date + ' ' + currenttime);
    var tables = document.getElementsByClassName("schedule"); 

    for(var i = 0; i < tables.length; i++){ //loop through tables
        console.log('Table name: ' + tables[i].getAttribute("name"));
        if (tables[i].getAttribute("name") > date) { continue; }
        for (var j = 0; j < tables[i].rows.length; j++) {
            //compare current time with hidden column time 
            if (tables[i].getAttribute("name") < date || ( tables[i].getAttribute("name") == date && tables[i].rows[j].cells[0].innerText < currenttime)) { 
                //cross out rows before hidden column time
                tables[i].rows[j].cells[0].innerHTML = "<s>" + tables[i].rows[j].cells[0].innerHTML + "</s>";
                tables[i].rows[j].cells[1].innerHTML = "<s>" + tables[i].rows[j].cells[1].innerHTML + "</s>";
            }
        }
    }

}
