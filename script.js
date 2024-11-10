let bill = 0;
let tip = 0;
let people = 0;

let tips = document.querySelectorAll("button[type=button]");

let bil_value = document.getElementById("bill");
let tip_value = document.getElementById("tip");
let people_num = document.getElementById("people");

let tip_amount = document.getElementById("tip_amount");
let total_amount = document.getElementById("total_amount");
let reset = document.getElementById("reset");

function get_tip(btn) {
  remove_active();
  btn.classList.add("active");

  if (tip_value.value) {
    tip = parseFloat(tip_value.value);
  } else {
    tip = parseFloat(btn.children[0].innerHTML);
  }
  calc();
}

function get_bill_people() {
  bill = parseFloat(bil_value.value);
  people = parseInt(people_num.value) ;
}

bil_value.addEventListener("input", calc);
tip_value.addEventListener("input", () => {
  if (tip_value.value) {
    tip = parseFloat(tip_value.value);
    remove_active();
  }
  calc();
});
people_num.addEventListener("input", calc);

reset.addEventListener("click",reseter);

function remove_active(){
  tips.forEach(tip => tip.classList.remove("active"));
}
function calc() {
  get_bill_people();

  if (people_num.value == 0 || "") {
    people_num.style.borderColor = "red";
  } else {
    people_num.style.borderColor = "";
  }

  if (bill > 0 && tip > 0 && people > 0) {
    const tipPerPerson = (bill * (tip / 100)) / people;
    const totalPerPerson = (bill / people) + tipPerPerson;
    reset.style.cursor = "pointer";
    reset.style.opacity = "100%";
    tip_amount.innerHTML = `$${tipPerPerson}`;
    total_amount.innerHTML = `$${totalPerPerson}`;
  } else {
    reset.style.cursor = "not-allowed";
    reset.style.opacity = "30%";
    tip_amount.innerHTML = "$0.0";
    total_amount.innerHTML = "$0.0";
  }
}
function reseter() {
  bil_value.value = "";
  tip_value.value = "";
  people_num.value = "";
  tip = 0;

  reset.style.cursor = "not-allowed";
  reset.style.opacity = "30%";
  tip_amount.innerHTML = "$0.0";
  total_amount.innerHTML = "$0.0";
  remove_active();
}