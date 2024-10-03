import {  emitirAutenticarUsuario } from "./socket-front-login.js";

const formCadastro = document.querySelectorAll(".textfield");

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = formCadastro["input-usuario"].value;
    const senha = formCadastro["input-senha"].value;

    emitirAutenticarUsuario({ usuario, senha } );
});