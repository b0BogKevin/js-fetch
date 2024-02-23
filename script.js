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
    ki+=(user.login.uuid +"\n<br>")
    ki+=(user.firstname +"\n<br>")
    ki+=(user.lastname +"\n<br>")
    ki+=(user.phone +"\n<br>")
    ki+=(user.email +"\n<br>")
    ki+=(user.address.geo.lat + " " + user.address.geo.lng +"\n<br>")
    ki+=(user.website +"\n<br>")
    ki+=(user.company.name +"\n<br>")

console.log(ki)
document.getElementById("adatok").innerHTML=ki


}