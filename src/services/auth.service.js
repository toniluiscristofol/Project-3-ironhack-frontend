import axios from 'axios';

export default class AuthService{
  constructor(){
    this.instance = axios.create({
      baseURL: `http://localhost:5000/api/auth`,
       withCredentials: true
    })
  }

  signup = (data) => this.instance.post('/signup', data);
  login = (data) => this.instance.post('/login', data);
  logout = () => this.instance.post('/logout');
  isLoggedIn = () => this.instance.get('/loggedin');
}