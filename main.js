function Loadjson(file,callback) {
  var x= new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState === 4 && x.status == "200"){
       callback(x.responseText);
    }
  };
  x.send(null);

}
Loadjson("data.json",function(text){
var data=JSON.parse(text);
console.log(data);
basics(data.details);
careerinfo(data.career);
})

var child1 = document.querySelector(".child1");


function basics(det) {
  var image = document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

var name = document.createElement("h1");
name.textContent = det.name;
child1.appendChild(name);

var phoneno= document.createElement("h3");
phoneno.textContent = det.phoneno;
child1.appendChild(phoneno);

var email=document.createElement("a");
email.href="mailto:itc2k20@gmail.com";
email.textContent = det.email;
child1.appendChild(email);

var add=document.createElement("h2");
add.textContent ="Address";
child1.appendChild(add);

child1.appendChild(document.createElement("hr"));


var Address=document.createElement("h3");
Address.textContent = det.Address;
child1.appendChild(Address);
}

var child2=document.querySelector(".child2");

function careerinfo(act){
  var first=document.createElement("h1");
  first.textContent =act.info;
  child2.appendChild(first);

  child2.appendChild(document.createElement("hr"));

var sec= document.createElement("h3");
sec.textContent =act.des;
child2.appendChild(sec);

}
