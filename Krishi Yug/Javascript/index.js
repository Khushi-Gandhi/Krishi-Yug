
function sendMail(params) {
	alert("Form has been submitted sucessfully!");
	var tempParams = {
		name: document.getElementById("name").value,
		country: document.getElementById("countryId").value,
		state: document.getElementById("stateId").value,
		city: document.getElementById("cityId").value,
		phone: document.getElementById("phone").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	emailjs.send('service_5lpnk2w', 'template_4ky1a8v', tempParams)
		.then(function (res) {
			console.log("sucess", res.status);
		})
}
//api code ends here also added some code in header related to this api

//Part of profile--on every page
//api code ends here also added some code in header related to this api
	function menuToggle(){
            const toggleMenu = document.querySelector('.menu');
	toggleMenu.classList.toggle('active')
}


