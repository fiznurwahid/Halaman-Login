function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" && password === "") {
        alert("Login berhasil!");
        window.location.href = ""; // Ganti URL tujuan sesuai kebutuhan
        return false; // Untuk mencegah pengiriman formulir
    } else {
        alert("Login gagal. Cek kembali username dan password.");
        return false; // Untuk mencegah pengiriman formulir
    }
}
