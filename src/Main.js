import Logo from "./assets/images/icons/wedesk.svg";
import Bell from "./assets/images/icons/bell.png";
import Tickets from "./assets/images/icons/Tickets.svg";
import Agents from "./assets/images/icons/Agent2.svg";
import TeamView from "./assets/images/icons/TeamView.svg";
import Customer from "./assets/images/icons/Customer.svg";
import Social from "./assets/images/icons/Social.svg";
import Chat from "./assets/images/icons/Chat.svg";
import Setting from "./assets/images/icons/Setting.svg";
import Dashboard from "./Pages/Dashboard";
import TicketsPage from "./Pages/Tickets";
import Agent from "./Pages/Agents";
import SearchIcon from '@mui/icons-material/Search';
import TeamViewPage from "./Pages/TeamView";
import AddAgents from "./Pages/AddAgents";
import AddCustomer from "./Pages/AddCustomer";
import CustomerPage from "./Pages/Customer";
import SocialPage from "./Pages/Social";
import EditAgent from "./Pages/EditAgent";
import { Route, Routes, NavLink } from "react-router-dom";
import CustomerDetails from "./Pages/CustomerDetails";
import ChatPage from "./Pages/Chat";
const Main = () =>{
    return(
        <>
            <div className="box">
            <div className="main-header">
                <div>
                    <img src={Logo} alt="Logo" className="logoicon" />
                    <div className="logo"> We Desk</div>
                </div>
                <div className="search">
                <input type="text"  placeholder="Search anything" name="search"  className="search-anything"/>
                <SearchIcon className="serch-icon" font-size="small"/>
                </div>
                <div> 
                    <img src={Bell} alt="Bell" className="bell"/>
                </div>
            </div>
          <div className="main-body">
          <div className="sidebar">
                <div>
                <NavLink to= "/">
                    <div className="dashboard-icon">
                    <img src={Logo} alt="We Desk" className="dash-icon" />
                    </div>
                    <p className="dashboard">Dashboard</p></NavLink>
                </div>
                <div>
                <NavLink to="/tickets">
                <div className="ticket-icon">
                    <img src={Tickets} alt="Tickets" className="ticket"/>
                </div>
                    <p className="ticket-text">Tickets</p>
                </NavLink>
                </div>
                
                <div>
                <NavLink to="/agents">    
                    <div  className="agent-icon">
                        <img src={Agents} alt="Agents" className="agent"/>
                    </div>
                    <p className="agent-text">Agents</p>
                </NavLink>    
                </div>
                <div>
                  <NavLink to="/teamview"> 
                    <div className="teamview-icon">
                        <img src={TeamView} alt="Team View" className="teamview"/>
                    </div>
                    <p className="teamview-text">Team View</p>
                  </NavLink>   
                </div>
                <div>
                    <NavLink to="/customer">
                        <div className="customer-icon">
                            <img src={Customer} alt="Customer" className="customer"/>
                        </div>
                        <p className="customer-text">Customer</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/social">
                        <div className="social-icon">
                            <img src={Social} alt="Social" className="social"/>
                        </div>
                        <p className="social-text">Social</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/chat">
                    <div chat-icon>
                        <img src={Chat} alt="Chat" className="chat"/>
                    </div>
                    <p className="chat-text">Chat</p>
                    </NavLink>
                </div>
                <div>
                    <div className="setting-icon">
                        <img src={Setting} alt="Setting" className="setting"/>
                    </div>
                    <p className="setting-text">Setting</p>
                </div>
            </div>

            <div className="main-leftbody">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/tickets" element={<TicketsPage/>}/>
                    <Route path="/agents" element={<Agent/>}/>
                    <Route path="/teamview" element={<TeamViewPage/>}/>
                    <Route path="/agents/addagents" element={<AddAgents/>}/>
                    <Route path="/customer/addcustomer" element={<AddCustomer/>}/>
                    <Route path="/customer" element={<CustomerPage/>}/>
                    <Route path="/social" element={<SocialPage/>}/>
                    <Route path="/agents/editagent" element={<EditAgent/>}/>
                    <Route path="/tickets/customerdetails" element={<CustomerDetails/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                </Routes>
            </div>
          </div>
            </div>
        </>
    )
};
export default Main;