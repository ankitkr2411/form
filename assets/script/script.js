const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  });


let price = 535.00;
let tPrice = 535.00;

let passLength = 1;

let passengerBox = document.getElementById("passengerBox");

const addPass = () => {
  if (passLength < 6) {
    passLength++;

    let passDetailBox = document.createElement("div");

    passDetailBox.setAttribute("class", "passDetailBox");
    passDetailBox.id = `passenger${passLength}`;

    passDetailBox.innerHTML = `<div class="passBorder">
      <h3>Passenger Details</h3>
      <h5 class="delete" onclick="delPass('passenger${passLength}')" >Delete</h5>
    </div>

    <div class="passDetail">
      <input
        type="text"
        class="name"
        id="name1"
        placeholder="Passenger Name"
      />
      <input type="text" class="age" id="age1" placeholder="Age" />
      <select name="gender" id="gender">
        <option value="select">Select Gender</option>
        <option value="male">Male</option>
        <option value=female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="passBorder"></div>`;

    passengerBox.appendChild(passDetailBox);

    tPrice = tPrice + price;
    let tax = (7/100)*tPrice;

    document.getElementById('fare').innerHTML = formatter.format(tPrice.toFixed(2));
    document.getElementById('tax').innerHTML = formatter.format(tax.toFixed(2));

    document.getElementById('total').innerHTML = formatter.format((tPrice+tax).toFixed(2));


  } else {
    alert("Max Number of Passenger is 6 only");
  }
};

const delPass = (id) => {
  if (passLength > 1) {
    passLength--;
    let passenger = document.getElementById(id);

    passengerBox.removeChild(passenger);

    tPrice = tPrice - price;
    let tax = (7/100)*tPrice;

    document.getElementById('fare').innerHTML = formatter.format(tPrice.toFixed(2));
    document.getElementById('tax').innerHTML = formatter.format(tax.toFixed(2));

    document.getElementById('total').innerHTML = formatter.format((tPrice+tax).toFixed(2));


  }

  else{
    alert("There should be minimum one passenger")
  }


};
