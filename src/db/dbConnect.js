import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://felypegoleiro:SENHA@blog.3sxkn.mongodb.net/?retryWrites=true&w=majority&appName=blog");

let documentosColecao, usuariosColecao;

try {
    await cliente.connect();
    const db = cliente.db("Project 0");
    documentosColecao = db.collection("blog");
    usuariosColecao = db.collection("usuarios");

    console.log("Conectado ao banco de dados com sucesso!");

} catch(erro){
    console.log(erro);
}

export { documentosColecao, usuariosColecao };