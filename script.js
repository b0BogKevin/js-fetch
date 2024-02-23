function kereses(params) {
    id = document.getElementById("id").value
    fetch('https://jsonplaceholder.org/users/?id='+id)
    .then(response => response.json())
    .then(user => {
      console.log(user);
      kiiras(user)
    })
    .catch(error => {
document.getElementById("adatok").innerHTML="1 és 30 között adja meg a számot!"
      
    });
  
}



function kiiras(user) {
    let ki = document.getElementById("adatok")
    ki.innerHTML = "";
    ki.innerHTML+=("<div>id: " + user.id +"\n</div>")
    setTimeout(() => {
      ki.innerHTML+=("<div>Teljes név: " + user.firstname + " " + user.lastname +"\n</div>")
    setTimeout(() => {
      ki.innerHTML+=("<div>tel. szám: " + user.phone +"\n</div>")
      setTimeout(() => {
    ki.innerHTML+=("<div>email: " + user.email +"\n</div>")
      setTimeout(() => {
    ki.innerHTML+=("<div>geolokációs adatok: " + user.address.geo.lat + " " + user.address.geo.lng +"\n</div>")
        setTimeout(() => {
    ki.innerHTML+=("<div>weboldal: " + user.website +"\n</div>")
          setTimeout(() => {
    ki.innerHTML+=("<div>cégnév: " + user.company.name +"\n</div>")
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    }, 50);
    }, 50);
    document.getElementById("lab").style.display="none";
console.log(ki)
ki.style.height = "182px"
ki.style.width = "319px"
}
