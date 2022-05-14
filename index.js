let fname = document.getElementById("first-name")
let lname = document.getElementById("last-name")
let address = document.getElementById("address")
let pin = document.getElementById("pincode")
let gender = document.getElementById("gender")
let food = document.getElementById("choice")
let state = document.getElementById("state")
let country = document.getElementById("country")
let submit=document.getElementById("submit")
submit.addEventListener("click",function(press){
   
    let gender = document.getElementsByName("gender")
    let genderValue;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderValue = gender[i].value
        }
    }
    
    let food = document.getElementsByName("choice")
    let foodList = []
    
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ")
    }else{
        result = alert("Choose atleat 2 foods")
    }

    createTable(fname.value,lname.value,address.value,pin.value,genderValue,result,state.value,country.value)
    fname.value = ""
    lname.value = ""
    address.value=""
    pin.value = ""
    gendervalue = ""
    foodList = [];
    state.value = ""
    country.value = ""

    press.preventDefault();
})




function createTable(fname,lname,address,pincode,gender,food,state,country){
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
   
}