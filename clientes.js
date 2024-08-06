export class Clientes {
  constructor(nome,email,senha){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
  
  loginData(email, senha){
    if(this.email === email && this.senha === senha){
      return "Login efetuado com sucesso";
    }else{
      return "Verifique se as informações estão corretas e tente novamente";
  
    }
   }
  }
