document.querySelector('#plan').onchange = function(){
    var destination = document.getElementById('destination').value;

    console.log(destination.value);

    document.getElementsByClassName("destination").innerHTML = destination
}