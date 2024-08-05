import { Clientes } from "./clientes.js";

export class Cadastro{
  constructor(){
    this.usuarios = [];
  }
  cadastrarData(nome, email, senha){
    const usuarioData = new Clientes(nome, email, senha);
    this.usuarios.push(usuarioData);
  }
  apresentarUsuarios(){
    return this.usuarios;
  }
  acharUsuario(email){
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}