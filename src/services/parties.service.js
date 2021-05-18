import axios from 'axios';


export default class PartyService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/parties`,
      withCredentials: true
    })
  }

  create = data => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getByCity = data => this.instance.get(`/search?city=${data}`)
  getOne = id => this.instance.get(`/${id}`);
  deleteOne = id => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
  updateAttendees = (id, data) => this.instance.post(`/updateAttendees/${id}`, data)
  getUserParties = (id) => this.instance.get(`/host/${id}`)
  getUserAttendancees = (id) => this.instance.get(`/attendees/${id}`)
  getgoingTo = (id) => this.instance.get(`/goingTo/${id}`)
  editparty = (id, data) => this.instance.put(`/editParty/${id}`, data)
}