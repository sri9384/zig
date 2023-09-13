import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import './components/Client.css';

function HomePage() {
  const tableStyle = {
    backgroundColor: '#b3b3ff', // Set the background-color property
    // Add other style properties as needed
  };


  return (
    <div style={{ position: 'relative'}}>
      <h1>Client Data from API</h1>
      
      <div className="home-container">
        

         <div className="center" style={{paddingLeft:450}}>
        <table style={tableStyle}>
                <tr> 
                <th>CLIENT ID</th> 
                <th>CLIENT NAME</th>
                <th>VIEW</th>
                </tr> 
                <tr>
                <td>68</td>
                <td>Houghton</td>
                <Link to="/Client">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
                </tr> 
                <tr>
                <td>67</td> 
                <td>Southfield</td>
                <Link to="/Page2">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link> 
                </tr>
                <tr> 
                <td>59</td> 
                <td>Sankara Polytechnic Colleges</td>
                <Link to="/Page3">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
                </tr>
                <tr> 
                <td>54</td> 
                <td>Isabella County Transportation</td>
                <Link to="/Page4">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link> 
                </tr>
                <tr> 
                <td>52</td> 
                <td>Gogebic County Transit Authority</td>
                <Link to="/Page5">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
                </tr>
                <tr> 
                <td>51</td> 
                <td>Marquette</td>
                <Link to="/Page6">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link> 
                </tr>
                <tr> 
               <td>50</td> 
               <td>Schoolcraft</td>
               <Link to="/Page7">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
               </tr>
               <tr> 
               <td>49</td> 
                 <td>Clinton Area Transit</td>
                 <Link to="/Page8">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
                </tr>
                <tr> 
                <td>34</td> 
                <td>LETS Public Transit</td>
                <Link to="/Page9">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link> 
                </tr>
                 <tr> 
                <td>28</td> 
                <td>Great Lakes Science Center</td>
                <Link to="/Page10">
                <td> <button type="button" className="btn btn-outline-view">
                view
              </button> </td> 
              </Link>
                </tr>
                </table>
                </div>
            
        </div>

      </div>
   
  );
}

export default HomePage;
