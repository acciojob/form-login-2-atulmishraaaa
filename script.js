//your JS code here. If required.
    function displayDetails() {
	const firstName =
		document.querySelector("#firstName").value;
	const lastName =
		document.querySelector("#lastName").value;
	const number =
		document.querySelector("#number").value;
	const email =
		document.querySelector("#email").value;

	const message = `First Name:${firstName}\nLast Name:${lastName}\nPhone Number:${number}\nEmail ID:${email}`;
		
     alert(message);
	}
	
