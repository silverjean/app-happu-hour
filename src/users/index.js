const users = [
  { email: "jean@gmail.com", password: 123456 },
  { email: "jsilveira@gmail.com", password: 123456 },
  { email: "jeanjean@gmail.com", password: 123456 },
  { email: "jeansilveira@gmail.com", password: 123456 },
];

class Users {
  constructor(email, password) {
    this.user = [{ email: email, password: password }];
  }
}

export default Users;
