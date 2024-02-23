function kereses(params) {
    id = document.getElementById("id").value
    fetch('https://jsonplaceholder.org/users/?id='+id)
    .then(response => response.json())
    .then(user => {
      console.log(user);
      kiiras(user)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
}



function kiiras(user) {
    let ki = ""
    ki+=("id: " + user.id +"\n<br>")
    ki+=("Teljes név: " + user.firstname + " ")
    ki+=(user.lastname +"\n<br>")
    ki+=("tel. szám: " + user.phone +"\n<br>")
    ki+=("email: " + user.email +"\n<br>")
    ki+=("geolokációs adatok: " + user.address.geo.lat + " " + user.address.geo.lng +"\n<br>")
    ki+=("weboldal: " + user.website +"\n<br>")
    ki+=("cégnév: " + user.company.name +"\n<br>")

console.log(ki)
document.getElementById("adatok").innerHTML=ki


}