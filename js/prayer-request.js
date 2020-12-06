let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
    let name = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let prayer = document.getElementById('message').value;
    let today = new Date();

    event.preventDefault();

    fetch("https://api.apispreadsheets.com/data/4319/", {
	method: "POST",
	body: JSON.stringify({"data": {"name":name,"email":email,"phone":phone,"prayer-request":prayer,"date":today}}),
}).then(res =>{
	if (res.status === 201){
        alert("Your prayer request has been received");
        window.location.reload();
	}
	else{
		alert("Sorry, your message hasn't been received.");
	}
})
})
