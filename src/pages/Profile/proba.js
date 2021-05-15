//starting no style

render() {
    console.log(this.state.parties)
    return (
      //RENDERITZAR EL COMPONENT PARTY CARD I PASARLI DE PROPS ELS NOMS AQUESTS SI S?HA DE RENDERITZAR VARIES VEGADES AQUEST COMPONENT EN FUNCIO DE QUANTES PARTIES TINGUI HAUREM DE FER UN MAP I A MES HAURA DE SER CADA UNA UN LINK
      <div>
        <h1>{this.state.username}</h1>
        <p></p>
        <img style={{ width: "200px" }} src={this.state.photo}></img>
        <p></p>
        <Link to="edit-user">
          <button>Edit User</button>
        </Link>
        <h2 style={{ color: "red" }}>Parties Created by this User</h2>
        <div class="cards-party">
        {this.state.parties.map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })}
           </div>
        {/* <h2 style={{ color: "red" }}>Parties this User is going to</h2> */}

        {/* {this.state.anteendances.map((parties) => {
         
        })} */}
      </div>
    );
}

//junito structure  with some styles

render(){
    return(

<div class="container bootstrap snippets bootdey">
<div class="col-md-10">
    <div class="profile-display">
        <div class="profile-cover" ></div> 
        
        <div class="author-info">
            <div class="author-info-img" >
            </div>
            <div class="author-meta">
                <h2 class="author-username">
                {this.state.username}
                </h2>
                <Link to="edit-user">
      <button>Edit User</button>
    </Link>
            </div>
        </div>
    </div>
</div>
<div class="cards-party">
    {this.state.parties.map((parties) => {
       return (
        
        <Link id="cards-party2" to={`/party-details/${parties.id}`}>
         <PartyCard2 title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
        </Link>
     
      );
    })}
       </div>
</div> 
    )
}