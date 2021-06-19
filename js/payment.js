const navbar = $("#nav-bar"); 
const form = document.querySelector("form");
const email = document.querySelector("#email");
const kartuVisa = $("#no-kartu-visa");
const tanggalVisa = $("#visa-tanggal");
const cvvVisa = $("#input-cvv");
const form_visa = $("#payment-visa");
const syaratKetentuan = document.getElementById("term-and-condition");

navbar.load("navbar.html");

form.onsubmit = e => {
    e.preventDefault();
    const allValid = [
        validasiEmail(),
        validasiNoKartu(),
        validasiTanggal(),
        validasiCVV(),
        validasiSyarat()
    ].every(e => e === true);

    if (allValid) {
        alert("Registrasi Berhasil");
        window.location.href = window.location.href
    }
    
}

function validasiEmail() {
    if (email.value != "") {
        if (!email.value.includes('@')) {
            alert('Email tidak mengandung @');
            return false;
        }
    
        if (email.value.includes('@.')) {
            alert('Email tidak mengandung @.');
            return false;
        }
    
        if (!email.value.includes('.')) {
            alert('Email tidak mengandung dengan .');
            return false;
        }
        return true;
    }else {
        alert('Silakan Isi Semua Bidang yang Diperlukan');
    }
}

function onclickpayment() {
    form_visa.load("../html/payment-visa.html");
}

function validasiNoKartu() {
    // console.log(kartuVisa.val().length);
    if(kartuVisa.val().length >= 13 && kartuVisa.val().length <= 16){
        return true;
    }else{
        alert("Nomor kartu tidak valid");
        return false;
    }
}

function validasiTanggal() {
    // console.log(tanggalVisa.val().length);
    if (tanggalVisa.val().length === 4) {
        return true;
    }else {
        alert('Format tanggal salah');
        return false;
    }
}

function validasiCVV() {
    console.log(cvvVisa.val().length);
    if (cvvVisa.val().length === 3) {
        return true;
    } else {
        alert('Format CVV salah');
        return false;
    }
}

function validasiSyarat() {
    console.log(syaratKetentuan.checked);
    if(syaratKetentuan.checked == false){
        alert("Registrasi harus disertai dengan syarat dan ketentuan yang berlaku!!");
        return false;
    }
    return true;
}

