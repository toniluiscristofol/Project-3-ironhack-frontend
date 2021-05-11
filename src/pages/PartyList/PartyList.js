import React, { Component } from 'react'
import Text from '../../components/Text';
import Todo from '../../components/Todo/Todo';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import SCTodoList from './TodoList.styled';

class PartyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
    }
    this.partyService = new PartyService();
    // this.refreshState = this.refreshState.bind(this);
  }

  refreshState() {
    this.partyService.get()
      .then(response => {
        console.log(response.data);
        this.setState({ parties: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  displayTodos(){
    const { parties } = this.state;
    return parties.map(party => {
      // <Todo key={todo.id} todo={todo}/>
      // <Todo key={todo.id} name={todo.name} description={todo.description} done={todo.done} .../>
      return (
        <Todo refreshState={() => this.refreshState()} key={party.id} {...party}/>
      )
    })
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { parties } = this.state;
    return (
      <SCTodoList>
        <Text className="close-session" onClick={() => this.handleLogout()} as="p" color="black">Cerrar sesión</Text>
        <div className="card">
          <Text size="l" weight="superDisplay" color="black">
            {parties.length === 0 ? "Ups, no tienes ningún todo" : parties.length === 1 ? "Estás más cerca de no dejarte nada, todo" : "Perfecto, sigue añadiento todos"}
          </Text>
          {
            this.displayTodos()
          }
          
        </div>
      </SCTodoList>
    )
  }
}

export default withAuth(PartyList);