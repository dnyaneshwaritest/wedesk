import { useState } from 'react';
import NewTicket from "./NewTicket";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button, Grid } from '@mui/material';
import TicketData from "../JSON/data.json";
import TicketsReportData from "../JSON/reportsdata.json";
import ClosedTicketsFlow from "../JSON/closeticketflow.json";
import Customer from "../assets/images/icons/Customer.svg";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { NavLink } from 'react-router-dom';
import { LineChart, ResponsiveContainer, Line, XAxis,  YAxis, Legend, Tooltip, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 80, color: "#5051F9" },
  { name: "B", value: 45, color: "#d2d2fc" },
  { name: "C", value: 25, color: "#d2d2fc" }
];
const cx = 130;
const cy = 160;
const iR = 90;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 0.6 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />
  ];
};


const Dashboard = ()=>{

    const [isOpen, setIsOpen]= useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    
    const HandleClick = () =>{
        // isOpen ? setIsOpen(false) : setIsOpen(true);
        // console.log(isOpen);
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div>
                <div>
                    <div className='maindashboard'>
                        <h2 className='dashboard-Page'>Dashboard</h2>
                        <p className='welcome-desk'>Hello, Mike. Welcome to We Desk</p>
                    </div>
                    <div className='addbtn'>
                {
                !isOpen ?
                        <Button startIcon={<AddCircleOutlinedIcon fontSize="small" className='plussym' />} type="Submit" style={{color: "#FFFFFF"}} className = "new" onClick= {HandleClick}> 
                            Add New
                        </Button> :  <div>
                        <Button startIcon={<AddCircleOutlinedIcon fontSize="small" className='plussym' />} type="Submit" style={{color: "#FFFFFF"}} className = "new" onClick= {HandleClick}> 
                            Add New
                        </Button>
                            <Grid className="grid-btn-container">
                                <Grid className="grid-bttn-item">
                                <button  onClick={()=> setIsOpenPopup(true)} className="pop-btn" >
                                     <ManageAccountsIcon style={{color:'#793DDC', marginLeft:-30, paddingRight:8}}/>
                                       Ticket 
                                </button>
                                </Grid>
                                <Grid className="grid-bttn-item">
                                <button className="pop-btn">
                                     <PersonAddAlt1Icon style={{color:'#793DDC'}}/> 
                                     <NavLink to="/agents/addagents" style={{textDecoration: "none", padding: 18,color:"black"}}>
                                         Agent
                                     </NavLink> 
                                </button>
                                </Grid>
                               <Grid className="grid-bttn-item">
                               <button className="pop-btn">
                                     <PersonAddAlt1Icon style={{color:'#793DDC' }}/> 
                                     <NavLink to="/customer/addcustomer" style={{textDecoration: "none", paddingLeft:10, color:"black"}}>
                                         Customer
                                     </NavLink> 
                                </button>
                               </Grid>
                            </Grid>
                            </div>
                        }
                    </div>
                <div className='mgrid'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}  className='gtotal-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Total Tickets</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><StarBorderIcon className='star'/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtodays-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Today's Tickets</h3>
                                <h4 className='total-tck-num'>124</h4>
                            </Grid>
                            <Grid className='g-star'><DescriptionIcon className='star'/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gpending-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Pending Tickets</h3>
                                <h4 className='total-tck-num'>149</h4>
                            </Grid>
                            <Grid className='g-star'><StarBorderIcon className='star'/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtoatal-agnt'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Total Agentss</h3>
                                <h4 className='total-tck-num'>121</h4>
                            </Grid>
                            <Grid className='g-star'><DescriptionIcon className='star'/></Grid>
                        </Grid>
                     </Grid>
                    </div>
                    <div>
                        <Grid item xs={8} className="gtck-flow">
                            <div>
                                <h3 className='tck-flow'>Tickets Flow</h3>
                                <select className='drop-select'>
                                    <option className='opt-sect'>12 Hours</option>
                                    <option className='opt-sect'>24 Hours</option>
                                </select>
                            </div>
                            <div className="line-chart">
                            <ResponsiveContainer>
                                <LineChart data={TicketData}  >
                                    <XAxis dataKey="Time" interval={'preserveStartEnd'} axisLine={false} tickLine ={false} padding = {{left: 45, right: 15}} tick={{fill:"#797C8C", fontSize: 10}}/>
                                    <YAxis axisLine={false} tickLine ={false} tick={{fill:"#797C8C", fontSize: 16}}/>
                                    <Legend iconType="circle" iconSize="12" />
                                    <Tooltip contentStyle={{ borderRadius: "15px" }} cursor={false} />
                                    <Line type= "monotone" dataKey="New Tickets"  stroke='#5051F9'  />
                                    <Line type= "monotone" dataKey="Close Tickets" stroke='#1EA7FF' />
                                </LineChart>
                            </ResponsiveContainer>
                            <hr/>
                            </div>
                        </Grid>
                        <Grid className='gactive-agents'>
                            <div>
                                <div className='side-active-agent'>
                                    <h3 >Active Agents</h3>
                                </div>
                                <div>
                                    <img src={Customer} alt="agent"  className='mark-agnt'/>
                                    <div className='dmark'>
                                        <h5 className='mark' >Mr. Mark Is Active</h5>
                                        <p className='department'>Technical Department</p>
                                        <hr className='mehr'/>
                                    </div>
                                </div>
                                <div>
                                    <img src={Customer} alt="agent"  className='meena-agent'/>
                                    <div className='mmark'>
                                        <h5 className='mark' >Mr. Mark Is Active</h5>
                                        <p className='department'>Technical Department</p>
                                        <hr className='mehr'/>
                                    </div>
                                </div>
                                    <div>
                                        <NavLink to="/agents"  className='view'>
                                            <h4>
                                                View All
                                            </h4>
                                        </NavLink>
                                    </div>
                            </div>
                        </Grid>
                    </div>
                    <div className='gtck-report'>
                        <Grid className='tck-report'>
                        <div>
                                <h3 className='tck-flow'>Tickets Reports</h3>
                                <select className='month-report'>
                                    <option className= 'opt-sect'>Month</option>
                                    {/* <option className='opt-sect'>Year</option> */}
                                </select>
                            </div>
                            <ResponsiveContainer width="100%" aspect={4}>
                                <BarChart data={TicketsReportData} width={600} height={600} barCategoryGap={19}  >
                                <Bar dataKey="New" fill='#5051F9' radius= {[10, 10, 0, 0]} />
                                <Bar dataKey="Closed" fill='#FF694A' radius= {[10, 10, 0, 0]}/>
                                <Bar dataKey="Pending"  barSize="300px" fill='#EFBB55' radius= {[10, 10, 0, 0]}/>
                                    <XAxis dataKey="Month" axisLine={false} tickLine ={false} tick={{fill:"#797C8C", fontSize: 10}} />
                                    <YAxis axisLine={false} tickLine ={false} tick={{fill:"#797C8C", fontSize: 12}} />
                                    <Legend iconType="circle" iconSize="12" verticalAlign="top" />
                                    <Tooltip contentStyle={{ borderRadius: "15px" }} cursor= {{fill:"transparent"}}/>
                                    {/* <CartesianGrid /> */}
                                </BarChart>
                            </ResponsiveContainer>
                        </Grid>
                    </div>
                    <div className='gcust-rate'>
                        <Grid className='cls-tck-flow' item xs={1}>
                        <div>
                                <h3 className='cls-flow'> Closed Tickets Flow</h3>
                                <select className='drop-cls-tck'>
                                    <option>Day</option>
                                    {/* <option className='opt-sect'>24 Hours</option> */}
                                </select>
                            </div>
                        <div className="line-chart">
                            <ResponsiveContainer width="38%" aspect={1.5}>
                                <LineChart data={ClosedTicketsFlow} >
                                    <XAxis dataKey="Time" interval={'preserveStartEnd'} axisLine={false} tickLine ={false} padding = {{left: 5, right: 45}} tick={{fill:"#7C828A", fontSize: 12}}/>
                                    <YAxis axisLine={false} tickLine ={false} tickSize="10" tick={{fill:"#7C828A", fontSize: 12}} />
                                    {/* <Legend iconType="circle" iconSize="12" />
                                    <Tooltip contentStyle={{ borderRadius: "15px" }} /> */}
                                    <Line  dataKey="Close Tickets"  stroke='#EFBB55' dot={{fill:"#EFBB55" , stroke:"#EFBB55", strokeWidth: 2, r:1.5}} activeDot={{ r: 8 }} />
                                    <CartesianGrid  vertical="" stroke='#F5F5F5'  />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        </Grid>
                        <Grid className='cust-rateing' item xs={2}></Grid>
                        <Grid item xs={1} className="aht-tckt">
                        <div>
                                <h3 className='cls-flow'>AHT of Tickets</h3>
                                <select className='drop-tck'>
                                    <option>Hourly</option>
                                    {/* <option className='opt-sect'>24 Hours</option> */}
                                </select>
                            </div>
                            <PieChart width={260} height={500}>
                                <Pie
                                dataKey="value"
                                startAngle={230}
                                endAngle={-40}
                                data={data}
                                cx={cx}
                                cy={cy}
                                innerRadius={iR}
                                outerRadius={oR}
                                fill="#8884d8"
                                stroke="none"
                                
                                >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                                </Pie>
                                {needle(value, data, cx, cy, iR, oR, "#5051F9")}
                            </PieChart>
                        </Grid>
                    </div>
                </div>
            </div> 
            {
            isOpenPopup ?
            <div 
                openPopup = {isOpenPopup}
                setOpenPopup = {setIsOpenPopup}>
                    
                <NewTicket toggleModal={()=>setIsOpenPopup(false)}/>
            </div> : null
        }
        </>
    )

}
export default Dashboard;