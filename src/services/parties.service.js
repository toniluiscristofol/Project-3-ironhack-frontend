import axios from 'axios';

export default class PartyService{
  constructor(){
    this.instance = axios.create({
      baseURL: `http://localhost:5000/api/parties`,
       withCredentials: true
    })
  }

  create = data => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getOne = id => this.instance.get(`/${id}`);
  deleteOne = id => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
  edit = (data) => this.instance.put('/edit', data);
}