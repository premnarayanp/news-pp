import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

 function Navbar(){

  return (
    <div className="nav">
      <Link to="/">
        <button className='menuButton'>Home</button>
      </Link>



      <div className='rounded-img-container'>
        <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
      </div>
       
    </div>
  );
}

export default Navbar;


//class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

  
//   render() {
//     return (
//       <div className="nav">
//        <Link to="/">
//           <button className='menuButton'>Home</button>
//        </Link>



//        <div className='rounded-img-container'>
//          <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
//        </div>
       
//       </div>
//     );
//   }
// }

// export default Navbar;