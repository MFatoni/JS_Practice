function buat_login(){
	var elem = document.getElementById("X");
	elem.parentElement.removeChild(elem);
	var p = document.createElement("P");
	p.className = "tulisan_login";
	p.innerHTML = "SILAHKAN MENDAFTAR";
	var element = document.getElementsByTagName("div")[0];
	element.appendChild(p);
	var form = document.createElement("FORM");
	element.appendChild(form);

	var label = document.createElement("label");
	label.innerHTML="Nama User";
	form.appendChild(label);
	var input_name = document.createElement("input");
	input_name.type = "text";
	input_name.name = "name";
	input_name.className = "form_login";
	input_name.placeholder="Nama User..";
	form.appendChild(input_name);

	var label1 = document.createElement("label");
	label1.innerHTML = "No Handphone";
	form.appendChild(label1);
	var input_nohp = document.createElement("input");
	input_nohp.type = "text";
	input_nohp.name = "nohp";
	input_nohp.className = "form_login";
	input_nohp.placeholder = "No Handphone.";
	form.appendChild(input_nohp);

	var label2 = document.createElement("label");
	label2.innerHTML="Username";
	form.appendChild(label2);
	var input_username = document.createElement("input");
	input_username.type = "text";
	input_username.name = "username";
	input_username.className = "form_login";
	input_username.placeholder="Username atau email..";
	form.appendChild(input_username);

	var label3 = document.createElement("label");
	label3.innerHTML = "Password";
	form.appendChild(label3);
	var input_password = document.createElement("input");
	input_password.type = "password";
	input_password.name = "password";
	input_password.className = "form_login";
	input_password.placeholder = "Password ..";
	form.appendChild(input_password);

	var tombol = document.createElement("input");
	tombol .type = "submit";
	tombol.className = "tombol_login";
	form.appendChild(tombol);
}