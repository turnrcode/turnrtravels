function getFormValues(){

    // location of departure
    let location = document.getElementById("location").value;

    if(location == "" || location == null) {
        console.log("Location cannot be empty");
    }   else {
            document.getElementById('loc').innerHTML = 'Location: ' + location;
            console.log(location)  
    }
    

    // location of arrival
    let destination = document.getElementById("destination").value;

    if(destination == "" || destination == null) {
        console.log("Destination cannot be empty");
    }   else {
            document.getElementById('desVal').innerHTML = 'Destination: ' + destination;  
    }
    

    // date of arrival at destination
    let arrival = document.getElementById("arrival").value;

    if(arrival == "" || arrival == null) {
        console.log("Arrival cannot be empty");
    }   else {
            document.getElementById('arrDate').innerHTML = 'Date Of Arrival: ' + arrival;  
    }  
    

    // date of departure from destination
    let departure = document.getElementById("departure").value;

    if(departure == "" || departure == null) {
        console.log("Departure cannot be empty");
    }   else {
            document.getElementById('depDate').innerHTML = 'Date Of Departure: ' + departure;  
        }

        // calculate time difference between arrival and departure

        date1 = new Date(arrival);
        date2 = new Date(departure);

        let time_difference = date2.getTime() - date1.getTime();

        // calculate days difference by diviving the millliseconds
        let duration = time_difference / (1000*60*60*24);
        console.log(duration);

        document.getElementById('dos').innerHTML = 'Duration of stay: ' + duration + ' days'
    

    // number of people going on the trip
    let population = document.getElementById("population").value;

    if(population == "" || population == null) {
        console.log("Population cannot be empty");
    }
    document.getElementById('pop').innerHTML= 'Number of people travelling: ' + population;

    // class of flight traveller(s) intend to board
    let flClass = document.getElementById("flightClass").value;

    if(flClass == "" || flClass == null) {
        console.log("Flight class cannot be empty");
    } else if(flClass == "economyClass"){
        flprice = Number(460);
        console.log(flClass);
        console.log(flprice)
    }   else if(flClass == "firstClass"){
        flprice=Number(1400);
        console.log(flprice)
    }   else if(flClass == "businessClass"){
        flprice=Number(800);
        console.log(flprice)
    }
    else {
        document.getElementById("flClass").innerHTML = 'Flight class: ' + flClass;
    }   
    
    // would the taveller(s) need a vehicle upon arrival at destination
    let vehicle = document.getElementById('vehicle').value;
    
    if (vehicle == 'yes'){
        carPrice = Number(120);
        console.log(carPrice)
    }
    document.getElementById('car').innerHTML='Need a vehicle? ' + vehicle;
    console.log(vehicle);


    // -- TOTAL ESTIMATE ---
          let total = ((duration * 400) * population) + flprice + (carPrice * duration);
          console.log(total);

    // -- Display estimate
          document.getElementById('total').innerHTML = "Your total travel cost is $" + total;
}

 