
 
 var tipAmountDiv= document.querySelector(".tipAmountField");
 var tipAmountInput = document.createElement("input")
 tipAmountInput.setAttribute("type" , "number")   
 tipAmountDiv.append(tipAmountInput);

 var totalBillDiv = document.querySelector(".totalBill");
 var totalBillInput = document.createElement("input");
 totalBillInput.setAttribute("type" , "number")
 totalBillInput.classList.add("totalbillInput")
 totalBillDiv.append(totalBillInput);

function myFunction(){
    var tipRange = document.querySelector("#tipRange").value;
    var amount = document.querySelector(".txtTip").value;   
    var tipAmount = (tipRange/100) * amount;
    var total = Number(amount) + Number(tipAmount); 
    tipAmountInput.value = tipAmount;
    totalBillInput.value = total;

    // console.log("Total Amount:" , total)
    // console.log("Tip Amount:" , tipAmount);
    // console.log("tip range:" , tipRange);
    // console.log("bill amount" , amount);
};
function updateTextInput(val) {
    document.getElementById('textInput').value=val + "%"; 
  }
