import React, { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");

    const checkForm = () => {
        if (name === "") {
            document.getElementById("name").classList.add("error");
            document.getElementById("name").placeholder="Ad Girmediniz.";
        } else {
            document.getElementById("name").classList.remove("error");
            document.getElementById("name").placeholder="Ad";
        }

        if (surname === "") {
            document.getElementById("surname").classList.add("error");
            document.getElementById("surname").placeholder="Soyad Girmediniz.";
        } else {
            document.getElementById("surname").classList.remove("error");
            document.getElementById("surname").placeholder="Soyad";
        }

        if (mail === "") {
            document.getElementById("mail").classList.add("error");
            document.getElementById("mail").placeholder="E-Posta Girmediniz.";
        } else {
            document.getElementById("mail").classList.remove("error");
            document.getElementById("mail").placeholder="E-Posta";
        }

        checkSuccess();
    }

    const checkSuccess = () => {
        if (name !== "" && surname !== "" && mail !== "") {
            alert("Kayıt Başarılı");
        } else {
            alert("Kayıt Başarısız");
        }
    }

    return (
        <form>
            <h3>Kayıt Formu</h3>
            <input id="name" type="text" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)} />
            <input id="surname" type="text" placeholder="Soyad" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <input id="mail" type="email" placeholder="E-Posta" value={mail} onChange={(e) => setMail(e.target.value)} />
            <input id="button" type="button" value="Kayıt Ol" onClick={checkForm} />
        </form>
    );
}

export default Signup;
