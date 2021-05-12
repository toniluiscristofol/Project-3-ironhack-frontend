import React from 'react'
import PartyService from '../../services/parties.service';
import RoundButton from '../RoundButton/RoundButton';
import "./CreateParty.css"
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

// const validators = {
//   name: (value) => {
//     let message;
//     if(!value){
//       message = "Name is required";
//     }
//     return message;
//   }
// }
export default function CreateParty()  {
  
    const [fields, setFields] = React.useState({
      name: "",
        description: "",
        images: [],
      date: new Date(Date.now()),
      location: {
        city: "",
        street: ""
      },
      price: 0
      
        
    });
    
    // Creamos una instancia del servicio de Todos
    const partyService = new PartyService();
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields)

   
    partyService.create(fields)
      .then(() => {
        console.log('Created');
      
        setFields({
          name: "",
          description: "",
          images: [],
          date: new Date(Date.now()),
          location: {
            city: "",
            street: "",
          },
          price: 0
        });
    
      })
      .catch(err => console.error(err));
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({
      
        ...fields, 
        [name]: value
      
      // errors:{
      //   ...errors,
      //   [name]: validators[name](value)
      // }
    })
  }

  
    return (
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={fields.name}
          onChange={(e) => handleChange(e)}
          name="name"
        />
        <label htmlFor="city">city:</label>
        <input
          type="text"
          value={fields.city}
          onChange={(e) => handleChange(e)}
          name="city"
        />
        <label htmlFor="street">street:</label>
        <input
          type="text"
          value={fields.street}
          onChange={(e) => handleChange(e)}
          name="street"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={fields.date}
            onChange={(e)=>handleChange(e)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <label htmlFor="musicType">musicType:</label>
        <input
          type="text"
          value={fields.musicType}
          onChange={(e) => handleChange(e)}
          name="musicType"
        />

        <label htmlFor="age">age:</label>
        <input
          type="number"
          value={fields.age}
          onChange={(e) => handleChange(e)}
          name="age"
        />
        <label htmlFor="price">price:</label>
        <input
          type="number"
          value={fields.price}
          onChange={(e) => handleChange(e)}
          name="price"
        />

        <button type="submit">Create party</button>
      </form>
    );
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
