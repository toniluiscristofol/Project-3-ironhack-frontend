import React from "react";
import PartyService from "../../services/parties.service";
import HomeNavBar from '../NavBar/HomeNavBar';
import "./CreateParty.css";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Redirect } from "react-router";

// const validators = {
//   name: (value) => {
//     let message;
//     if(!value){
//       message = "Name is required";
//     }
//     return message;
//   }
// }
export default function CreateParty(props) {
  const [fields, setFields] = React.useState({
    name: "",
    description: "",
    images: null,
    date: new Date(Date.now()),

    city: "",
    street: "",

    price: 0,
    maxAttendees: 0,
  });

  // Creamos una instancia del servicio de Todos
  const partyService = new PartyService();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("These are the fields", fields);

    const uploadData = new FormData();
    //uploadData.append('nombre de la clave', 'valor');
    Object.keys(fields).forEach((key) => {
      if (key === "images") {
       [... fields[key]].forEach(image => uploadData.append("images", image))
      }
      uploadData.append(key, fields[key]);
    });
    // uploadData.append(fields.images, images[0])
    partyService
      .editparty(props.match.params.id, uploadData)
      .then(() => {
        console.log("PARTY EDITED");

        setFields({
          name: "",
          description: "",
          images: null,
          date: new Date(Date.now()),

          city: "",
          street: "",

          price: 0,
          maxAttendees: 0,
        });
      })
      .catch((err) => console.error(err));
  };
  const handleDateChange = (date) => {
    const newDate = new Date(date);
    setFields({
      ...fields,
      date: newDate,
    });
  };
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    
    setFields({
      ...fields,

      [name]: type === "file" ? files : value,

      // errors:{
      //   ...errors,
      //   [name]: validators[name](value)
      // }
    });
  };

  

  return (
    <div>
    <HomeNavBar></HomeNavBar>
    <div className="formpage">
       
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
      <input type="file" multiple="multiple" name="images" onChange={(e) => handleChange(e)} />
      

      <button id="createpartybutton"type="submit">Create party</button>
    </form>
    </div>
    </div>
  );
}
