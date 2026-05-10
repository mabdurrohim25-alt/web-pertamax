// Script sederhana untuk memberikan efek saat gambar diklik
document.querySelectorAll('.photo-item img').forEach(image => {
    image.onclick = () => {
        alert("Kamu mengklik gambar: " + image.alt);
    };
});
