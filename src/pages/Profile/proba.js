// //starting no style

// render() {
//     console.log(this.state.parties)
//     return (
//       //RENDERITZAR EL COMPONENT PARTY CARD I PASARLI DE PROPS ELS NOMS AQUESTS SI S?HA DE RENDERITZAR VARIES VEGADES AQUEST COMPONENT EN FUNCIO DE QUANTES PARTIES TINGUI HAUREM DE FER UN MAP I A MES HAURA DE SER CADA UNA UN LINK
//       <div>
//         <h1>{this.state.username}</h1>
//         <p></p>
//         <img style={{ width: "200px" }} src={this.state.photo}></img>
//         <p></p>
//         <Link to="edit-user">
//           <button>Edit User</button>
//         </Link>
//         <h2 style={{ color: "red" }}>Parties Created by this User</h2>
//         <div class="cards-party">
//         {this.state.parties.map((parties) => {
//            return (
            
//             <Link id="cards-party2" to={`/party-details/${parties.id}`}>
//              <PartyCard2 title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
//             </Link>
         
//           );
//         })}
//            </div>
//         {/* <h2 style={{ color: "red" }}>Parties this User is going to</h2> */}

//         {/* {this.state.anteendances.map((parties) => {
         
//         })} */}
//       </div>
//     );
// }

// //junito structure  with some styles

// render(){
//     return(

// // // <div class="container bootstrap snippets bootdey">
// // // <div class="col-md-10">
// // //     <div class="profile-display">
// // //         <div class="profile-cover" ></div> 
        
// // //         <div class="author-info">
// // //             <div class="author-info-img" >
// // //             </div>
// // //             <div class="author-meta">
// // //                 <h2 class="author-username">
// // //                 {this.state.username}
// // //                 </h2>
// // //                 <Link to="edit-user">
// // //       <button>Edit User</button>
// // //     </Link>
// // //             </div>
// // //         </div>
// // //     </div>
// // // </div>
// // // <div class="cards-party">
// // //     {this.state.parties.map((parties) => {
// // //        return (
        
// // //         <Link id="cards-party2" to={`/party-details/${parties.id}`}>
// // //          <PartyCard2 title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
// // //         </Link>
     
// // //       );
// // //     })}
// // //        </div>
// // // </div> 
// // //     )
// // // }




// //linia


// <div id="profile" class="row py-5 px-4">
//         <div  id="profile2" class="col-xl-4 col-md-6 col-sm-10 mx-auto">
    
            
//             <div class="bg-white shadow rounded overflow-hidden">
//                 <div class="px-4 pt-0 pb-4 bg-dark">
//                     <div class="media align-items-end profile-header">
//                         <div class="profile mr-3"><img src={this.state.photo} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href="#" id="edituser" class="btn btn-dark btn-sm btn-block"> <Link to="edit-user">
//       Edit User
//     </Link></a></div>
//                         <div class="media-body mb-5 text-white">
//                             <h4 class="mt-0 mb-0">{this.state.username}</h4>
//                             <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Barcelona</p>
//                         </div>
//                     </div>
//                 </div>
    
//                 <div class="bg-light p-4 d-flex justify-content-end text-center">
//                     <ul class="list-inline mb-0">
//                         <li class="list-inline-item">
//        <h5 class="font-weight-bold mb-0 d-block">{this.state.partiesNumber.length}</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Parties hosted</small>
//                         </li>
//                         <li class="list-inline-item">
//                             <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Followers</small>
//                         </li>
//                     </ul>
//                 </div>
    
//                 <div class="py-4 px-4">
//                     <div class="d-flex align-items-center justify-content-between mb-3">
//                         <h5 class="mb-0">Recent parties</h5><a href="#" class="btn btn-link text-muted">Show all</a>
//                     </div>
//                     <div class="row">
//                     <div class="cards-party">
//         {this.state.parties.map((parties) => {
//            return (
            
//             <Link id="cards-party2" to={`/party-details/${parties.id}`}>
//              <PartyCard2  date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
//             </Link>
         
//           );
//         })}
//            </div>
//                     </div>
//                     <div class="py-4">
//                         <h5 class="mb-3">Recent posts</h5>
//                         <div class="p-4 bg-light rounded shadow-sm">
//                             <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
//                             <ul class="list-inline small text-muted mt-3 mb-0">
//                                 <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
//                                 <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
    
//         </div>
//     </div>

// //basic strucure
// <header>
//             <div class="grey">

//             </div>
//             <div class="white">
//             </div>
//             <div class="picturebutton">
//             <img src={this.state.photo}>
//             </img>
//             <button>
//                 edit user
//             </button>
//             </div>
           
//         </header>
     













<div id="profile" class="row py-5 px-4">
        <div   class="col-xl-4 col-md-6 col-sm-10 mx-auto">
    
            
            <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 bg-dark">
                    <div class="media align-items-end profile-header">
                        <div class="profile mr-3"><img src={this.state.photo} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href="#" class="btn btn-dark btn-sm btn-block"> <Link to="edit-user">
      Edit User
    </Link></a></div>
                        <div class="media-body mb-5 text-white">
                            <h4 class="mt-0 mb-0">{this.state.username}</h4>
                            <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i></p>
                        </div>
                    </div>
                </div>
    
                <div class="bg-light p-4 d-flex justify-content-end text-center">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
       <h5 class="font-weight-bold mb-0 d-block">{this.state.parties.length}</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Parties hosted</small>
                        </li>
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Followers</small>
                        </li>
                    </ul>
                </div>
    
                <div class="py-4 px-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Recent parties</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                    </div>
                    <div class="row">
                    <div class="cards-party">
        {this.state.parties.slice(this.state.parties.length-3).map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })}
         {/* {this.state.anteendances.slice(this.state.anteendances.length-5).map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })} */}
           </div>
                    </div>
                    <div class="py-4">
                        <h5 class="mb-3">Recent posts</h5>
                        <div class="p-4 bg-light rounded shadow-sm">
                            <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <ul class="list-inline small text-muted mt-3 mb-0">
                                <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
                                <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>





<div id="profile" className="row py-5 px-4">
        <div   className="col-xl-4 col-md-6 col-sm-10 mx-auto">
    
            
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 bg-dark">
                    <div className="media align-items-end profile-header">
                        <div className="profile mr-3"><img src={this.state.photo} alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href="#" className="btn btn-dark btn-sm btn-block"> <Link to="edit-user">
      Edit User
    </Link></a></div>
                        <div className="media-body mb-5 text-white">
                            <h4 className="mt-0 mb-0">{this.state.username}</h4>
                            <p className="small mb-4"> <i className="fa fa-map-marker mr-2"></i></p>
                        </div>
                    </div>
                </div>
    
                <div className="bg-light p-4 d-flex justify-content-end text-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
       <h5 className="font-weight-bold mb-0 d-block">{this.state.parties.length}</h5><small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Parties hosted</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Followers</small>
                        </li>
                    </ul>
                </div>
    
                <div className="py-4 px-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">Recent parties</h5><a href="#" className="btn btn-link text-muted">Show all</a>
                    </div>
                    <div className="row">
                    <div className="cards-party">

    
        {this.state.parties.slice(this.state.parties.length-3).map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 userphoto={this.state.photo} date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })}
         {/* {this.state.anteendances.slice(this.state.anteendances.length-5).map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })} */}
           </div>
                    </div>
                    <div className="py-4">
                        <h5 className="mb-3">Recent posts</h5>
                        <div className="p-4 bg-light rounded shadow-sm">
                            <p className="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <ul className="list-inline small text-muted mt-3 mb-0">
                                <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>12 Comments</li>
                                <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>200 Likes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>