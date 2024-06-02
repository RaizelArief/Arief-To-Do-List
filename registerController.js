document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const registerButton = document.querySelector("#register-button");

  registerButton.onclick = () => {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value);

    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    let storedValid = false;
    if (storedPassword == "" || storedUsername == "") {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    } else {
        storedValid = true;
    }

    
    if (
      username.value === storedUsername &&
      password.value === storedPassword && storedValid
    ) {
      alert(`regis succes`);
      window.location.href = "login.html";
    } else {
      alert("kamu gagal, silahkan coba lagi");
    }
    console.log("user registered")
    console.log(eacUsers)
  }
});
// document.addEventListener("DOMContentLoaded", function() {
//   // Mendapatkan referensi ke form registrasi
//   var registerForm = document.getElementById("registerForm");

//   // Menangani event saat form registrasi disubmit
//   registerForm.addEventListener("submit", function(event) {
//       event.preventDefault(); // Mencegah pengiriman form secara default

//       // Mendapatkan nilai dari input username dan password
//       var username = document.getElementById("username").value;
//       var password = document.getElementById("password").value;

      
//       alert("Registrasi berhasil! Username");
//       window.location.href = "login.html";
//   });

  // Mengubah jenis input password menjadi "password"
  var passwordInput = document.getElementById("password");
  passwordInput.type = "password";


