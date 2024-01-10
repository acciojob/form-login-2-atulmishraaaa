//your JS code here. If required.
document.querySelector("#myForm").addEventListner("submit",function(event){
	event.preventDefault();

	const firstName =
		document.querySelector("#firstName").value;
	const lastName =
		document.querySelector("#lastName").value;
	const number =
		document.querySelector("#number").value;
	const email =
		document.querySelector("#email").value;

	const message = `First Name:${firstName}\nLast Name:${lastName}
	\nPhone Number:${number}\nEmail ID:${email}`;

	alert(message);
	
})