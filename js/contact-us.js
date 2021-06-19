const navbar = $("#nav-bar");
const form = document.querySelector("form");
const email = document.querySelector("#email");


navbar.load("navbar.html");


form.onsubmit = e => {

    const allValid = [
        isEmpty(),
        validasiEmail()
    ].every(e => e === true);

    if (!allValid) {
        e.preventDefault();
    }else {
        alert('Register success!!');
    }
    
}

function isEmpty() {
    if (form.value === "") {
        alert('empty');
        return false;
    }
    return true;
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

