import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Password Visibility</h1>

	<p>Enter your username and password to login.</p>

	<form>
		<div>
			<label for="username">Username</label>
			<input type="text" name="username" id="username">
		</div>

		<div>
			<label for="password">Password</label>
			<input type="password" name="password" id="password">
		</div>

		<div>
			<label for="show-password">
				<input type="checkbox" name="show-passwords" id="show-password">
				Show password
			</label>
		</div>

		<p>
			<button type="submit">Log In</button>
		</p>
	</form>
`;

var password = document.querySelector("#password");
var toggle = document.querySelector("#show-password");
toggle.addEventListener(
  "click",
  function (event) {
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  },
  false
);
