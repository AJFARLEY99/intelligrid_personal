import React from "react";
import './Home_css.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialIcon from 'material-icons-react';
import pic1 from './Images/bac_pic8.jpg';
import stock_pic1 from './Images/ev2.jpg';
import pic2 from './Images/arms2.jpg';
import usmart_pic from './Images/usmart.png';
import packsize from './Images/packsize.png';
import pacificorp from './Images/pacificorp.png';
import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ic_pic1 from './Images/ic_pic1.jpg';


function App() {
  
  const styles = {
    fadeIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
      fontSize:'100px',
      textAlign:'left'
    },
    fadeSub: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
      textAlign:'left'
    },
  }
  return (
    <>
    <div className="home" style={{backgroundColor: 'black', opacity:'0.8', position:'fixed', top:'0', left:'0', right:'0'}}>
      <div class='row'>
        <div class='col-sm-1'></div>
        <div class='col-sm-6'>
          <h6 style={{color:'white', textAlign:'left'}}>Grid Elevated</h6>
        </div>
        <div class='col-sm-4' style={{color:'white', textAlign:'right', textDecoration:'inherit'}}>
          <div class='row'>
            
            <div class='col-sm-3'>
              <a href='#projects' style={{textDecoration:'none', color:'white'}}>Solutions</a>
            </div>
            <div class='col-sm-3'>
              <a href='#partners' style={{textDecoration:'none', color:'white'}}>Partners</a>
            </div>
            <div class='col-sm-3'>
              <a href='#about' style={{textDecoration:'none', color:'white'}}>Team</a>
            </div>
            <div class='col-sm-3'>
              <a href='#contact' style={{textDecoration:'none', color:'white'}}>Contact</a>
            </div>
          </div>
        </div>
        <div class='col-sm-1'></div>
      </div>
    </div>
    <div className="home" style={{backgroundColor: 'white', backgroundImage: `url(${pic1})`}}>
        <div class='col-lg-1' style={{textAlign:'right'}}></div>
        <div class='col-lg-10' style={{textAlign:'left'}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class='row'>
              <StyleRoot>
                <h1 style={styles.fadeIn}>Grid Elevated</h1>
              </StyleRoot>
            </div>
            <div class='row'>
              <StyleRoot>
                <p className='subtitle' style={styles.fadeSub}>Intelligent Solutions for a Sustainable, Resilient, and Equitable Power Grid</p>
              </StyleRoot>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </div>

    <div id='projects' className="home" style={{backgroundColor: 'white'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row' style={{borderBottom: '3px solid grey'}}>
          <h1  style={{fontSize:'60px', textAlign:'left'}}>Grid Elevated develops cloud-based AI solutions for power grid applications.</h1>
          <br></br>
          <br></br>
          <p style={{color:'white'}}>.</p>
          <h3 style={{fontSize:'20px', textAlign:'left', color:'#6082B6'}}>
              We specialize in the creation state-of-the-art softwares and platforms to be deployed for use in a 
              modern power system. These platforms are designed to address many of the novel issues a sustainable
              and resilient power system faces. We rely on our established research prowess and combine it with our 
              vigor to commercialize our cutting-edge technologies to produce innovative and game-changing products.
          </h3>
          <p style={{color:'white'}}>.</p>
          <br></br>
        </div>

        {/* <div class='row'>
          <h1  style={{fontSize:'40px', textAlign:'left'}}>Grid Elevated is the future.</h1>
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
          <div class='col-lg-1'></div>
          <div class='col-lg-11'>
            <div class='row'>
              <div class='col-sm-1' style={{textAlign:'left'}}>
                <a href='#intellicharge'>
                  <MaterialIcon icon="electric_car" size='70' color='#96DED1' />
                </a>
              </div>
              <div class='col-sm-11 my-auto' style={{textAlign:'left'}}>
                <h3><b>IntelliCharge</b> capitalizes on the significant increase of EVs on the grid</h3>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class='row'>
              <div class='col-sm-1' style={{textAlign:'left'}}>
                <a href='#flext'> 
                  <MaterialIcon icon="light_mode" size='70' color='#96DED1' />
                </a>
              </div>
              <div class='col-sm-11 my-auto' style={{textAlign:'left'}}>
                <h3><b>FlexT</b> utilizes blockchain technology to optimize flexibility of electric loads</h3>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class='row'>
              <div class='col-sm-1' style={{textAlign:'left'}}>
                <a href='#intelliarms'>
                  <MaterialIcon icon="thunderstorm" size='70' color='#96DED1' />
                </a>
              </div>
              <div class='col-sm-11 my-auto' style={{textAlign:'left'}}>
                <h3><b>IntelliARMS</b> uses artificial intelligence to ensure a more resilient grid</h3>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* <div class='row'>
          <div class='col-lg-6'>
            <div class='row'>
              <div class='col-sm-3' style={{textAlign:'right'}}>
                <MaterialIcon icon="light_mode" size='70' color='#96DED1' />
              </div>
              <div class='col-sm-9 my-auto'>
                <h3>Rapid increase of renewable generation</h3>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class='row'>
              <div class='col-sm-3' style={{textAlign:'right'}}>
                <MaterialIcon icon="electric_car" size='70' color='#96DED1' />
              </div>
              <div class='col-sm-9 my-auto'>
                <h3>More electric vehicles charging</h3>
              </div>
            </div>
          </div>
          <div class='col-lg-6'>
            <div class='row'>
              <div class='col-sm-3' style={{textAlign:'right'}}>
                <MaterialIcon icon="thunderstorm" size='70' color='#96DED1' />
              </div>
              <div class='col-sm-9 my-auto'>
                <h3>Aging power grid susceptibility to storms and cyber attacks</h3>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class='row'>
              <div class='col-sm-3' style={{textAlign:'right'}}>
                <MaterialIcon icon="tungsten" size='70' color='#96DED1' />
              </div>
              <div class='col-sm-9 my-auto'>
                <h3>Higher demand from increase in electrification</h3>
              </div>
            </div>
          </div>
        </div> */}
        <br></br>
        <br></br>
        <br></br>
      </div>


      {/* <div className="home" style={{backgroundColor: '#6082B6'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
            <div class='col-sm-1'></div>
            <div class='col-sm-5' style={{textAlign:'right', borderRight: '2px solid yellow'}}>
                <h2 style={{color:'white', fontSize:'60px'}}>Intelligent</h2>
                <h2 style={{color:'white', fontSize:'60px'}}>Automated</h2>
                <h2 style={{color:'white', fontSize:'60px'}}>Accessible</h2>
                <h2 style={{color:'white', fontSize:'60px'}}>Resilient</h2>
            </div>
            <div class='col-sm-5 my-auto' style={{textAlign:'left'}}>
                <p style={{color:'white', fontSize:'20px'}}>
                    Grid Elevated develops intelligent solutions to meet the modern challenges of the energy transition.
                    We specialize in the creation state-of-the-art softwares and platforms to be deployed for use in a 
                    modern power system. These platforms are designed to address many of the novel issues a sustainable
                    and resilient power system faces. We rely on our established research prowess and combine it with our 
                    vigor to commercialize our cutting-edge technologies to produce innovative and game-changing products.
                </p>
            </div>
            <div class='col-sm-1'></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div> */}
   

      <div id='intellicharge' className="home" style={{backgroundColor: '#F5F5F5'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
            <div class='col-sm-1'></div>
            <div class='col-sm-5 my-auto'>
                <img src={ic_pic1} alt="pic1" style={{width: '450px', float:'left', textAlign:'left'}} />
            </div>
            <div class='col-sm-5 my-auto' style={{textAlign:'', borderRight: '3px solid grey'}}>
              <div class='row' style={{borderBottom: '3px solid grey'}}>
                <h2 style={{fontSize:'60px', textAlign:'right'}}>IntelliCharge</h2>
              </div>
              <br></br>
              <br></br>
              <p>
                IntelliCharge (iC) is an EV flexibility aggregation platform that collects individual user EV charge requests and optimizes their charging trajectory. 
                The platform takes advantage of the fact that, on average, an EV is plugged into an EVC more than twice as long as needed to provide the energy needed. 
                Thus, iC can intelligently control an EVC to provide charging power intermittently to minimize costs. Fundamentally, iC takes individual user EV charge requests, 
                aggregates them at the facility level, and optimally executes those service requests to capitalize on the flexibility they offer to the grid. 
                 iC is a platform capable of harnessing aggregated EV flexibility to realize global benefits with minimized costs, improved grid congestion relief, and more sustainable power system operation.
              </p>
              {/* <div className = 'learn_button' style={{textAlign:'left'}}>
                <a className="btn btn-primary float-right">Learn More</a>
              </div> */}
            </div>
            <div class='col-sm-1'></div>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div id='flext' className="home" style={{backgroundColor: 'white'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
            <div class='col-sm-1'></div>
            <div class='col-sm-5' style={{textAlign:'left', borderLeft: '3px solid grey'}}>
                <div class='row' style={{borderBottom: '3px solid grey'}}>
                    <h2 style={{fontSize:'60px'}}>FlexT</h2>
                </div>
                <br></br>
                <p>
                FlexT is a first-of-its-kind software platform for Tokenization of Energy Flexibility that utilizes blockchain-based 
                  transactions along with AI-algorithms to coordinate smart energy devices such as smart appliances, EV chargers, HVAC 
                  (Heating, ventilation, and air conditioning) in order to harness their flexibility and create profit for electricity 
                  consumers and the utility operators. The FlexT platform collects and analyze real-time monitoring and control data, 
                  electricity price, and EV users charging requests to compute optimal electricity usage profiles in order to reduce electricity 
                  costs, improve grid congestion relief, and increase the reliability and resilience of the power grid. 
                </p>
                <br></br>
                <br></br>
                {/* <div className = 'learn_button' style={{textAlign:'left'}}>
                  <a className="btn btn-primary float-right">Learn More</a>
                </div> */}
            </div>
            <div class='col-sm-5 my-auto' style={{textAlign:'center'}}>
                <img src={stock_pic1} alt="pic1" style={{width: '500px'}} />
            </div>
            <div class='col-sm-1'></div>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div id='intelliarms' className="home" style={{backgroundColor: '#F5F5F5'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
            <div class='col-sm-1'></div>
            <div class='col-sm-5 my-auto'>
                <img src={pic2} alt="pic1" style={{width: '450px', float:'left', textAlign:'left'}} />
            </div>
            <div class='col-sm-5' style={{borderRight: '3px solid grey'}}>
                <div class='row' style={{borderBottom: '3px solid grey'}}>
                    <h2 style={{fontSize:'60px', textAlign:'right'}}>IntelliARMS</h2>
                </div>
                <br></br>
                <p>
                Intelligent Automated Resilience Management System (IntelliARMS) is a cloud-based solution that utilizes artificial intelligent (AI) 
                to enhance the physical resilience and cyber security of the power grid against high-impact physical incidents (e.g., hurricanes) 
                and cyber threats (e.g., cyber-attacks). IntelliARMS comprises a suite of AI-based algorithms designed to detect, locate, 
                and classify anomalies by collecting and analyzing data from multiple monitoring and control devices, as well as weather forecast. 
                After an incident is located and classified, IntelliARMS computes the set of actions to control distributed energy resources such as 
                solar energy systems and energy storage systems in order to restore the grid to normal operation.
                </p>
                {/* <div className = 'learn_button' style={{textAlign:'left'}}>
                    <a className="btn btn-primary float-right">Learn More</a>
                </div> */}
            </div>
            <div class='col-sm-1'></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div id='partners' className="home" style={{backgroundColor: 'white'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
          <div class='col-lg-1'></div>
          <div class='col-lg-10'>
              <div class='row'>
                <h4>Our Partners</h4>
              </div>
              <br></br>
              <div class='row'>
                <div class='col-lg-4 my-auto' style={{textAlign:'left'}}>
                  <img src={usmart_pic} alt="pic3" style={{width: '250px'}} />
                </div>
                <div class='col-lg-4 my-auto' style={{textAlign:'center'}}>
                  <img src={packsize} alt="pic3" style={{width: '300px'}} />
                </div>
                <div class='col-lg-4 my-auto' style={{textAlign:'right'}}>
                  <img src={pacificorp} alt="pic3" style={{width: '300px'}} />
                </div>
              </div>
          </div>  
          <div class='col-lg-1'></div>      
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div id='about' className='home' style={{backgroundColor: '#6082B6'}}>
        <br></br>
        <br></br>
        <br></br>
        <div class='row'>
          <div class='col-sm-1'></div>
          <div class='col-sm-11'>
            <h2 style={{color:'white',fontSize:'70px'}}>Meet the team</h2>
          </div>
        </div>
        
    </div>
    <div id='contact' className="home" style={{backgroundColor: '#6082B6'}}>
        <br></br>
        <br></br>
        <br></br>
        {/* <div class='row'>
            <div class='col-sm-1'></div>
            <div class='col-sm-5 my-auto' style={{textAlign:'center', borderRight: '2px solid yellow'}}>
                <img src={parvania_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'white', fontSize:'30px'}}>Masood Parvania, Ph.D.</h2>
                <p style={{color:'white'}}>Position</p>
            </div>
            <div class='col-sm-5 my-auto' style={{textAlign:'center'}}>
                <img src={jairo_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'white', fontSize:'30px'}}>Jairo Giraldo, Ph.D.</h2>
                <p style={{color:'white'}}>Position</p>
            </div>
            <div class='col-sm-1'></div>
        </div> */}
        <div class='row'>
          <div class='col-sm-1'></div>
          <div class='col-sm-7'>
            <h2 style={{color:'white',fontSize:'70px'}}>Contact us</h2>
            <label for='chat_email' style={{color:'white',fontSize:'20px'}}>Email
            <br></br>
              <input type='text' id='chat_email'></input>
            </label>
            <br></br>
            <label for='message' style={{color:'white',fontSize:'20px'}}>Message
            <br></br>
              <textarea id='message' rows='5' cols='50'></textarea>
            </label>
            <br></br>
            <div className = 'chat_button' style={{textAlign:'left'}}>
              <a className="btn btn-secondary float-left">Submit</a>
            </div>
          </div>
          <div class='col-sm-4'></div>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
    </div>
    </>
  );
}

export default App;
       