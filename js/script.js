document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    

    if (name && message) {
      const formOutput = document.getElementById('form-output');
      formOutput.innerHTML = `Nama: ${name}<br>Pesan: ${message}`;
    }
});

function tampilkanTerimaKasih() {
    var inputName = document.getElementById("name").value;
    var inputMessage = document.getElementById("message").value;

    if (inputName === "" || inputMessage === "") {
        alert("Anda belum memberikan masukan.");
    } else {
        document.getElementById("hasil").innerHTML = "Terima kasih telah menghubungi kami:)";
    }
}

  const userName = prompt('Masukkan Nama Anda:');

if (userName) {
    const welcomeMessage = document.getElementById('name');
    welcomeMessage.textContent = `Haloo, ${userName}!`;
} else {
    // Jika pengguna membatalkan input atau memasukkan nama kosong
    const welcomeMessage = document.getElementById('name');
    welcomeMessage.textContent = "Selamat Datang!";
}

  