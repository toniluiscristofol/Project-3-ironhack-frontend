import React, { Component } from 'react'
import PartyService from '../../services/parties.service';
import RoundButton from '../RoundButton/RoundButton';

// const validators = {
//   name: (value) => {
//     let message;
//     if(!value){
//       message = "Name is required";
//     }
//     return message;
//   }
// }
export default class CreateParty extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: "",
        city:"",
        street:"",
        date:"",
        age: 0,
        price: 0,
        ageInterval:""
      }, 
      errors: {
        name: null
      }
    }
    // Creamos una instancia del servicio de Todos
    this.partyService = new PartyService();
  }

  handleSubmit(event){
    
    console.log(this.state.fields)

    // Usamos el servicio para llamar a la API y crear el Todo en la base de datos
    this.partyService.create(this.state.fields)
    .then(() => {
      console.log('Created');
      // Llamamos a la función que TodoList nos ha pasado como prop
      this.setState({
        fields: {
          name: "",
          city:"",
          street:"",
          date:"",
          age: 0,
          price: 0,
          ageInterval:""
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
      // errors:{
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    })
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={fields.name}
          onChange={(e) => this.handleChange(e)}
          name="name"
        />
        <label htmlFor="city">city:</label>
        <input
          type="text"
          value={fields.city}
          onChange={(e) => this.handleChange(e)}
          name="city"
        />
        <label htmlFor="street">street:</label>
        <input
          type="text"
          value={fields.street}
          onChange={(e) => this.handleChange(e)}
          name="street"
        />
        <label htmlFor="date">date:</label>
        <input
          type="text"
          value={fields.date}
          onChange={(e) => this.handleChange(e)}
          name="date"
        />
        <label htmlFor="musicType">musicType:</label>
        <input
          type="text"
          value={fields.musicType}
          onChange={(e) => this.handleChange(e)}
          name="musicType"
        />

        <label htmlFor="age">age:</label>
        <input
          type="number"
          value={fields.age}
          onChange={(e) => this.handleChange(e)}
          name="age"
        />
        <label htmlFor="price">price:</label>
        <input
          type="number"
          value={fields.price}
          onChange={(e) => this.handleChange(e)}
          name="price"
        />

          <button type = "submit">Create party</button>
      </form>
    );
  }
}





// name: {type: String, required: true},
// description: {type: String, required: true},
// images: {type: Array, required: true},
// date: {type: Date, required: true},
// city: {type: String},
// street: {type: String},
// ageInterval: {type: String},
// musicType: {type: String},
// price: {type: Number},
// attendants: [{type: Schema.Types.ObjectId,ref:'User'}],
// smoking: {type: Boolean}
