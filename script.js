// Pesan profil
function pesanProfil() {
    alert("Halo! Terima kasih sudah mengunjungi portofolio saya. Salam kenal!");
}

// Tahun otomatis
document.getElementById("tahun").innerHTML =
    "&copy; " + new Date().getFullYear() +
    " Jaenal Parel Lesmana. All Rights Reserved.";

// Tombol kembali ke atas
function keAtas() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}