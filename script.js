// alert("loading");
function addNewWEField() {
  // console.log("Adding new field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv
function generateCV() {
  // console.log("generating CV")

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //  adderess
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;

  // objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //workexperience

  let wes = document.getElementsByClassName('weField');

  let str = "";



  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;


  //acadmaic experience
  let aqs = document.getElementsByClassName('eqField');

  let a_str = "";

  for (let e of aqs) {
    a_str = a_str + `<li>${e.value}</li>`;
  }

  document.getElementById("adT").innerHTML = a_str;

  // code for setting Image
  let file=document.getElementById('imgField').files[0];

  console.log(file);

  let reader= new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  // set the image to template

 reader.onloadend= function()
 {
  document.getElementById("imgTemplate").src = reader.result;
 }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";


}

//printing CV

function printCV()
{
    window.print();
}