/*  Elements */
const name = document.getElementById("name");
const jobTitle = document.getElementById("title");
const otherTitle = document.getElementById("other-title");
const color = document.getElementById("color");
const colors = color.getElementsByTagName("option");
const design = document.getElementById("design");
const activities = document.querySelector('.activities');
const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const payPal = creditCard.nextElementSibling;
const bitCoin = payPal.nextElementSibling;
const email = document.getElementById("mail");
const ccNum = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form  = document.getElementsByTagName('form')[0];
const nameLabel = document.getElementsByTagName('label')[0];
const emailLabel = document.getElementsByTagName('label')[1];
const tshirtHeader = document.getElementsByTagName('legend')[1];
const activityHeader = document.getElementsByTagName('legend')[2];
const paymentHeader = document.getElementsByTagName('legend')[3];
const colorOptions = document.getElementById("colors-js-puns");
const ccDiv = creditCard.children[0];
const zipDiv = creditCard.children[1];
const cvvDiv = creditCard.children[2];


/* NAME, FOCUS STATE */
name.focus();

/* JOB - conditional statement for preselected job title or fill in box for other job title */
otherTitle.style.display = "none";

jobTitle.addEventListener("change", () => {
	if(jobTitle.value === "other") {
		otherTitle.style.display = "block";
	} else {
		otherTitle.style.display = "none";
	}
});


/* TSHIRT color field enabled for choice from drop down menu */


const colorChoice = document.createElement("option");
colorChoice.textContent = "<-- Please select a T-shirt theme";
color.insertBefore(colorChoice, color.childNodes[0]);
color.selectedIndex = 0;


function disableColors() {
	for(let index = 0; index < color.length; index++) {
		colors[index].style.display = "none";
	}
}


function selectOptions() {
	if(design.value === "js puns") {
		color.selectedIndex = 1;
		colors[1].style.display = "block";
		colors[2].style.display = "block";
		colors[3].style.display = "block";
	} else if(design.value === "heart js") {
		color.selectedIndex = 4;
		colors[4].style.display = "block";
		colors[5].style.display = "block";
		colors[6].style.display = "block";
	} else {
		color.selectedIndex = 0;
	}
}


function hideColorOptions() {
	colorOptions.style.display = design.value === "Select Theme" ? "none" : "block";
}


disableColors();
hideColorOptions();


design.addEventListener("change", () => {
	disableColors();  
	selectOptions();  
	hideColorOptions();  
});


/***REGISTER FOR ACTIVITIES SECTION ************************************************************/
const allActivities = document.querySelectorAll('.activities input');
const activitiesDiv = document.querySelector('.activities');
//create a div to store total cost of activities
let totalDiv = document.createElement('div');

// Keeps tract of activities costs
let totalCost = 0;

// loop thru all activities inputs and add event listeners to all
for (let i = 0; i < allActivities.length; i++) {
    allActivities[i].addEventListener('change', (event) => {
        //create a isChecked variable to check it against activity checkboxes
        const isChecked = event.target.checked;
        //if the first checkbox is clicked and isChecked add 200 to cost.
        if (event.target == allActivities[0] && isChecked) {
            totalCost += 200;
            //if the first one is unchecked remove 200 from cost
        } else if (event.target == allActivities[0] && !isChecked) {
            totalCost -= 200;
            //if the second checkbox is clicked and isChecked add 100 to cost
        } else if (event.target == allActivities[1] && isChecked) {
            totalCost += 100;
            //disable the 4th checkbox because of time conflict and turn it gray
            allActivities[3].disabled = true;
            allActivities[3].parentNode.style.color = "gray";
            //if the second checkbox is unchecked enable the 4th checkbox and remove 100 from cost.
        } else if (event.target == allActivities[1] && !isChecked) {
            totalCost -= 100;
            allActivities[3].disabled = false;
            allActivities[3].parentNode.style.color = "";
            //THE REST OF THE STATEMENTS FOLLOW THE SAME IDEA AS ABOVE.    
        } else if (event.target == allActivities[2] && isChecked) {
            totalCost += 100;
            allActivities[4].disabled = true;
            allActivities[4].parentNode.style.color = "gray";
        } else if (event.target == allActivities[2] && !isChecked) {
            totalCost -= 100;
            allActivities[4].disabled = false;
            allActivities[4].parentNode.style.color = "";
        } else if (event.target == allActivities[3] && isChecked) {
            totalCost += 100;
            allActivities[1].disabled = true;
            allActivities[1].parentNode.style.color = "gray";
        } else if (event.target == allActivities[3] && !isChecked) {
            totalCost -= 100;
            allActivities[1].disabled = false;
            allActivities[1].parentNode.style.color = "";
        } else if (event.target == allActivities[4] && isChecked) {
            totalCost += 100;
            allActivities[2].disabled = true;
            allActivities[2].parentNode.style.color = "gray";
        } else if (event.target == allActivities[4] && !isChecked) {
            totalCost -= 100;
            allActivities[2].disabled = false;
            allActivities[2].parentNode.style.color = "";
        } else if (event.target == allActivities[5] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[5] && !isChecked) {
            totalCost -= 100;
        } else if (event.target == allActivities[6] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[6] && !isChecked) {
            totalCost -= 100;
        }
        //update total cost based on selections above
        totalDiv.textContent = "Total: " + totalCost;
        //append the totalCost to the DIV created at the bottom of the activities list.
        activitiesDiv.appendChild(totalDiv);
    });
}

/* PAYMENT - deactivate non-selected color choice */

function showPaymentInfo(displayCreditCard, displayPayPal, displayBitCoin) {
	creditCard.style.display = displayCreditCard;
	payPal.style.display = displayPayPal;
	bitCoin.style.display = displayBitCoin;
}


function setPaymentInfo() {
	if(payment.value === "credit card") {
		showPaymentInfo("block", "none", "none");
	} else if(payment.value === "paypal") {
		showPaymentInfo("none", "block", "none");
	} else if(payment.value === "bitcoin") {
		showPaymentInfo("none", "none", "block");
	} else {
		showPaymentInfo("none", "none", "none");
	}
}


payment.selectedIndex = 1;
showPaymentInfo("block", "none", "none");  


payment.addEventListener("change", () => {
	setPaymentInfo();
	
	if(payment.value !== "credit card") {
		disableCreditCardValidation();
	} else {
		enableCreditCardValidation();
	}
});




/* VALIDATIONS turn off non-selected option, ensure input meets criteria */

name.required = true;
email.required = true;
enableCreditCardValidation();

name.pattern = "[A-Za-z ]+";
email.pattern = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*";
ccNum.pattern = "[0-9]{13,16}";
zip.pattern = "[0-9]{5}";
cvv.pattern = "[0-9]{3}";


function enableCreditCardValidation() {
	ccNum.required = true;
	zip.required = true;
	cvv.required = true;
}


function disableCreditCardValidation() {
	ccNum.required = false;
	zip.required = false;
	cvv.required = false;
}

function activityChecked() {
	let checked = false;
	for(let index = 0; index < checkboxes.length; index++) {
		if(checkboxes[index].checked) {
			checked = true;
		}
	}
	return checked;
}


const creditCardLabel = document.createElement('label');
creditCardLabel.className = "validation-message";
ccDiv.appendChild(creditCardLabel);


const zipCodeLabel = document.createElement('label');
zipCodeLabel.className = "validation-message";
zipDiv.appendChild(zipCodeLabel);


const cvvNumLabel = document.createElement('label');
cvvNumLabel.className = "validation-message";
cvvDiv.appendChild(cvvNumLabel);

const hr = document.createElement('hr');
hr.style.width = "100%";
hr.style.border = "none";
creditCard.insertBefore(hr, creditCard.children[3]);


form.addEventListener("submit", (event) => {
	if(!name.validity.valid || !email.validity.valid || !activityChecked() ||
	   design.value === "Select Theme" || payment.value === "select_method" ||
	   !ccNum.validity.valid || !zip.validity.valid || !cvv.validity.valid ) {
	   	

		event.preventDefault();
		
			
		nameValidation();
		emailValidation();
		tshirtValidation();
		activityValidation();
		paymentValidation();
		ccNumValidation();
		zipValidation();
		cvvValidation();
	}
}, false);



form.noValidate = true;


const noError = "#000";
const error = "#C21E1E";


function nameValidation() {
	if(name.validity.valid) {
	   nameLabel.textContent = "Name:";
	   nameLabel.style.color = noError;
	} else {
	   nameLabel.textContent = "Name: (Please provide your name)";
	   nameLabel.style.color = error;
	}
}


function emailValidation() {
	if(email.validity.valid) {
	   emailLabel.textContent = "Email:";
	   emailLabel.style.color = noError;
	} else {
	   emailLabel.textContent = "Email: (Please provide a valid email address)";
	   emailLabel.style.color = error;
	}
}


function ccNumValidation() {
	creditCardLabel.style.display = ccNum.validity.valid ? "none" : "block";
	if(ccNum.value.length === 0) {
		creditCardLabel.textContent = "Please enter a credit card number";
	} else {
		creditCardLabel.textContent = "Please enter a number that is between 13 and 16 digits long";
	}
}


function zipValidation() {
	zipCodeLabel.style.display = zip.validity.valid ? "none" : "block";
	if(zip.value.length === 0) {
		zipCodeLabel.textContent = "Please enter a zip code number";
	} else {
		zipCodeLabel.textContent = "Please enter a number exactly 5 digits long";
	}
}


function cvvValidation() {
	cvvNumLabel.style.display = cvv.validity.valid ? "none" : "block";
	if(cvv.value.length === 0) {
		cvvNumLabel.textContent = "Please enter a cvv number";
	} else {
		cvvNumLabel.textContent = "Please enter a number exactly 3 digits long";
	}
}


const tshirtLabel = document.createElement('label');
tshirtLabel.className = "validation-error";
tshirtLabel.textContent = "Please select a T-shirt";
tshirtHeader.appendChild(tshirtLabel);


function tshirtValidation() {
	tshirtLabel.style.display = design.value !== "Select Theme" ? "none" : "block";
}


const activityLabel = document.createElement('label');
activityLabel.className = "validation-error";
activityLabel.textContent = "Please select an activity";
activityHeader.appendChild(activityLabel);


function activityValidation() {
	activityLabel.style.display = activityChecked() ? "none" : "block";
}


const paymentLabel = document.createElement('label');
paymentLabel.className = "validation-error";
paymentLabel.textContent = "Please select a payment option";
paymentHeader.appendChild(paymentLabel);


function paymentValidation() {
	paymentLabel.style.display = payment.value !== "select_method" ? "none" : "block";
}



name.addEventListener("keyup", () => {
	nameValidation();
});
email.addEventListener("keyup", () => {
	emailValidation();
});
design.addEventListener("change", () => {
	tshirtValidation();
});
activities.addEventListener("change", () => {
	activityValidation();
});
payment.addEventListener("change", () => {
	paymentValidation();
});
ccDiv.addEventListener("keyup", () => {
	ccNumValidation();
});
zipDiv.addEventListener("keyup", () => {
	zipValidation();
});
cvvDiv.addEventListener("keyup", () => {
	cvvValidation();
});
