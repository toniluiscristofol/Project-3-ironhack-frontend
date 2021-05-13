import { id } from 'date-fns/locale';
import React from 'react'
import PartyService from '../../services/parties.service'



export default class PartyDetails extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          party: {
              name: ""
          }
        }
        this.partyService = new PartyService();
        
      }


    refreshState(id) {
        this.partyService.getOne(id)
          .then(response => {
            console.log(response.data);
            this.setState({ party: response.data });
          })
          .catch(err => console.error(err))
      }

    componentDidMount() {
        this.refreshState(this.props.match.params.id);
        console.log(this.props.match.params.id);
      }
    
   
      render() {
            return(
            <div>
             
                {/* <h1>{this.state.party.name}</h1> */}
                HOLA
                
               
            </div>

            )}
  
}
