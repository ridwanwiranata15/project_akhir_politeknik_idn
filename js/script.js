const Inputs = document.querySelectorAll('input[type="text"], input[type="date"], textarea');
const radioGender = document.querySelectorAll('input[name="jenis_kelamin"]');
const messages = document.querySelectorAll('.message');
const BtnSave = document.querySelector('button.btn-post');

BtnSave.addEventListener('click', function () {
    let allFilled = true;

    // Reset semua pesan kesalahan
    messages.forEach(message => message.style.display = "none");

    // Cek setiap input teks, tanggal, dan textarea
    Inputs.forEach((input, index) => {
        if (input.value.trim() === "" ) {
            messages[index].style.display = "block"; // Tampilkan pesan kesalahan
            allFilled = false;
        }
    });
    if(document.getElementById('keluhan').value.trim() === ""){
        document.getElementById('input_keluhan').style.display = "block";
        allFilled = false
    }

    // Cek radio jenis kelamin
    const genderMessage = messages[3]; // Posisi message untuk jenis kelamin
    const genderSelected = Array.from(radioGender).some(radio => radio.checked);

    if (!genderSelected) {
        genderMessage.style.display = "block"; // Tampilkan pesan kesalahan untuk jenis kelamin
        allFilled = false;
    }

    if (allFilled) {
        alert('Semua kolom terisi');
    }

   
});
