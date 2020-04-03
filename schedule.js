function strikethroughschedule() { //cross out schedule events as day progresses 
    var today = new Date();
    // TESTING ONLY:
    // var today = new Date(2020, 3, 21, 18, 1);
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) { month = "0" + month.toString(); }
    if (day < 10) { day = "0" + day.toString(); }
    var date = today.getFullYear()+'-'+month+'-'+day;
    console.log(date);
    if(date < "2020-04-17"){return;} //check for hackathon date, exit if not hackathon
    
    var currenttime = today.getHours() + ":" + today.getMinutes()
    var tables = document.getElementsByClassName("schedule"); 

    for(var i = 0; i < tables.length; i++){ //loop through tables
        console.log(tables[i].getAttribute("name"));
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
