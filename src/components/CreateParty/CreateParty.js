import React from 'react'
import PartyService from '../../services/parties.service';

import "./CreateParty.css"
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Redirect } from 'react-router';

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
     
        city: "",
        street: "",
      
      price: 0,
      maxAttendees: 0
      
        
    });
    
    // Creamos una instancia del servicio de Todos
    const partyService = new PartyService();
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields)
    
    const uploadData = new FormData();
    //uploadData.append('nombre de la clave', 'valor');
    Object.keys(fields).forEach((key) => {
      uploadData.append(key, fields[key]);
    });
   
    partyService.create(uploadData)
      .then(() => {
        
        console.log('Created');
      
        setFields({
          name: "",
          description: "",
          images: [],
          date: new Date(Date.now()),
        
            city: "",
            street: "",
          
          price: 0,
          maxAttendees: 0
        });
        
      })
      .catch(err => console.error(err));
    
  }
  const handleDateChange = (date) => {
    
    setFields({
      ...fields,
      date: date
    })
  }
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    console.log(name)
    setFields({
      
      ...fields,
        
        [name]: type === "file" ? files : value
      
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
        <label htmlFor="name">Description:</label>
        <input
          type="text"
          value={fields.description}
          onChange={(e) => handleChange(e)}
          name="description"
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
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={fields.date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>

        <label htmlFor="price">price:</label>
        <input
          type="number"
          value={fields.price}
          onChange={(e) => handleChange(e)}
          name="price"
        />
        <label htmlFor="maxAtendees">Maximum number of atendees:</label>
        <input
          type="number"
          value={fields.maxAttendees}
          onChange={(e) => handleChange(e)}
          name="maxAttendees"
        />
        <label htmlFor="images">Upload images </label>
        <input type="file" name="images" onChange={(e) => handleChange(e)} />

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
