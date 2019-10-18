var myAd = document.getElementById("myadd");
myAd.addEventListener("click", eAdd);
var t = document.getElementById("tabl");

function eAdd(event) {
  var r1 = document.createElement("tr");
  var c1 = document.createElement("td");
  var c2 = document.createElement("td");
  var c3 = document.createElement("td");
  var c4 = document.createElement("td");
  var c5 = document.createElement("td");

  var addName = document.getElementById("name").value;
  var addEmail = document.getElementById("email").value;
  var addPhone = document.getElementById("phone").value;
  var addAddress = document.getElementById("address").value;

  var a = document.createTextNode(addName);
  var b = document.createTextNode(addEmail);
  var c = document.createTextNode(addPhone);
  var d = document.createTextNode(addAddress);
  var btn = document.createElement("button");

  btn.innerHTML = "X";
  btn.addEventListener("click", deletee);

  c1.appendChild(a);
  c2.appendChild(b);
  c3.appendChild(c);
  c4.appendChild(d);
  c5.appendChild(btn);

  r1.appendChild(c1);
  r1.appendChild(c2);
  r1.appendChild(c3);
  r1.appendChild(c4);
  r1.appendChild(c5);

  t.appendChild(r1);

  function deletee(event) {
    t.removeChild(r1);
  }
}
