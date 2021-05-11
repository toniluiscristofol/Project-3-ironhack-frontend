import React, { Component } from 'react'
import PartyService from '../../services/parties.service';
import RoundButton from '../RoundButton/RoundButton';

const validators = {
  name: (value) => {
    let message;
    if(!value){
      message = "Name is required";
    }
    return message;
  }
}
export default class CreateParty extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: "",
        date: "",
        city:"",
        street:"",
        age: 0
      }, 
      errors: {
        name: null
      }
    }
    // Creamos una instancia del servicio de Todos
    this.partyService = new PartyService();
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields)

    // Usamos el servicio para llamar a la API y crear el Todo en la base de datos
    this.partyService.create(this.state.fields)
    .then(() => {
      console.log('Created');
      // Llamamos a la función que TodoList nos ha pasado como prop
      this.setState({
        fields: {
          name: "",
          date: "",
          city:"",
          street:"",
          age: 0
        }, 
        errors: {
          name: null
        }
      }, () => {
        this.props.refreshState();
      })
    })
    .catch(err => console.error(err))
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields, 
        [name]: value
      },
      errors:{
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={fields.name} onChange={(e) => this.handleChange(e)} name="name" />
        <input type="text" value={fields.city} onChange={(e) => this.handleChange(e)} name="city" />
        <input type="text" value={fields.street} onChange={(e) => this.handleChange(e)} name="street" />
        <input type="text" value={fields.date} onChange={(e) => this.handleChange(e)} name="date" />
        <input type="number" value={fields.age} onChange={(e) => this.handleChange(e)} name="age" />
        
        <RoundButton type="submit">
          Crear Party
        </RoundButton>
      </form>
    )
  }
}
