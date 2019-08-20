
import React ,{Component} from  'react';
import './AboutUs.css';
import {CardDeck, Card, CardGroup, Col} from 'react-bootstrap';

class AboutUs extends Component{
render(){

    return(
     

<div>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
   <div class='AboutUs'>AboutUs</div>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>





<CardDeck>
<Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Azzam Alkhaldi</Card.Title>
      <Card.Text>
    ...
  {/* <p><div class="black">Contact</div></p> */}

      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="https://github.com/AlkhaldiAzzam/aaa"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {' '}  
  <a href="#"><i class="fa fa-envelope"style={{ backgroundColor: 'white', color: '#A4C0E4' }}></i></a>  {' '}
  <a href="#"><i class="fa fa-phone"style={{ backgroundColor: 'white', color: 'green' }}></i></a> {' '}
  <a href="#"><i class="fa fa-linkedin"></i></a>  {' '}
  <p><div class="black">Contact</div></p> 

     </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Ashwag Alrougui</Card.Title>
      <Card.Text>
   ...
      </Card.Text>
    </Card.Body>
    <Card.Footer> 
    <a href="https://github.com/ASSROUGUI/aaa"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {' '}  
  <a href="#"><i class="fa fa-envelope"style={{ backgroundColor: 'white', color: '#A4C0E4' }}></i></a>  {' '}
  <a href="#"><i class="fa fa-phone"style={{ backgroundColor: 'white', color: 'green' }}></i></a> {' '}
  <a href="#"><i class="fa fa-linkedin"></i></a>  {' '}
    <p><div class="black">Contact</div></p> 
  
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Abdullah Aaltwaim</Card.Title>
      <Card.Text>
    ....
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="https://github.com/aaltwaim/aaa/tree/abdullah"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {' '}  
  <a href="#"><i class="fa fa-envelope"style={{ backgroundColor: 'white', color: '#A4C0E4' }}></i></a>  {' '}
  <a href="#"><i class="fa fa-phone"style={{ backgroundColor: 'white', color: 'green' }}></i></a> {' '}
  <a href="#"><i class="fa fa-linkedin"></i></a>  {' '}
    <p><div class="black">Contact</div></p> 
    </Card.Footer>
  </Card>
</CardDeck>
      


</div>


       
)
}

}


export default AboutUs