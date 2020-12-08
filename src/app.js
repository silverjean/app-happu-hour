import Users from "./users";

class App {
  constructor() {
    // entrar
    this.users = [
      { email: "jean@gmail.com", password: 123456 },
      { email: "jsilveira@gmail.com", password: 123456 },
      { email: "jeanjean@gmail.com", password: 123456 },
      { email: "jeansilveira@gmail.com", password: 123456 },
    ];
    this.email = document.getElementById("in-email");
    this.password = document.getElementById("in-password");
    this.btnEntrar = document.getElementById("btnEntrar");

    // cadastrar
    this.newEmail = document.getElementById("newEmail");
    this.newPassword = document.getElementById("newPassword");
    this.btnCadastrar = document.getElementById("newCadastro");

    // sair
    this.bntSair = document.getElementById("logout");
    this.avatar = document.getElementById("avatar");

    // eventos e funções
    this.events();
    console.log(this.users);
    this.getAvatar();
    // this.getLike();
  }

  events() {
    this.btnEntrar.onclick = () => this.login();
    this.bntSair.onclick = () => this.logout();
    this.btnCadastrar.onclick = () => this.cadastro();
  }

  cadastro() {
    const newUser = this.newUser();
    this.users.push(newUser);
  }

  newUser() {
    const user = new Users(this.newEmail.value, this.newPassword.value);
    console.log(Users);
    return user;
  }

  login() {
    if (this.users.find((user) => user.email === this.email.value)) {
      localStorage.setItem("in", this.email.value);
    }
    this.newUser();
    this.loged();
  }

  loged() {
    const testIn = localStorage.getItem("in", this.email);
    console.log(testIn);
    if (testIn) {
      document.getElementById("login").style.display = "none";
      document.getElementById("loged").style.display = "flex";
    } else {
      document.getElementById("login").style.display = "flex";
      document.getElementById("loged").style.display = "none";
      document.getElementById("logout").style.display = "none";
    }
  }

  logout() {
    localStorage.removeItem("in", this.email);
    this.loged();
  }

  getAvatar() {
    document.getElementById("avatar").addEventListener("click", () => {
      let display = document.getElementById("logout").style.display;
      if (display == "flex") {
        document.getElementById("logout").style.display = "none";
      } else {
        document.getElementById("logout").style.display = "flex";
      }
    });
  }

  // getLike() {
  //   // curtir, descurtir e somar likes.
  //   document.getElementById("like").addEventListener("click", () => {
  //     let display = document.getElementById("liked").style.display;
  //     if (display == "flex") {
  //       document.getElementById("d-like").style.display = "none";
  //     } else {
  //       document.getElementById("liked").style.display = "flex";
  //     }
  //   });
  // }
}

new App();
