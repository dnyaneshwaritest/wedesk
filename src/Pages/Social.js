import React, {useEffect, useState} from "react";
import { Grid, Button } from "@material-ui/core";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Popup from "../component/Popup";
import Status from "./Status";
import SocialData from "../JSON/socialData.json";
import fbData from "../JSON/fbData.json";
import resolutionData from "../JSON/resolutionData.json";
import { LineChart, ResponsiveContainer, Line, XAxis,  YAxis, Legend, Tooltip, BarChart, Bar, CartesianGrid, PieChart, Pie, Sector, Cell } from 'recharts';


const COLORS = ['#CAEAFF', '#5051f9', '#39B29A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);


  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Social = () =>{
    const [openPopup, setOpenPopup] = useState(false);
    const [data, setData] =useState(SocialData);
    //      const handleclick = (e)=>{
//         let word = e.target.value;

//         if(word==="Total"){
//             setData(SocialData);
//             }

//         else if(word==="Open"){
//             const filteredData = SocialData.filter
//             (item=>item.status==="Open");
//             setData(filteredData);
//         }
//         else if(word==="Pending"){
//             const filteredData = SocialData.filter
//             (item=>item.status==="Pending");
//             setData(filteredData);
//         }
//         else if(word==="Close"){
//             const filteredData = SocialData.filter
//             (item=>item.status==="Close");
//             setData(filteredData);
//         }
//         else if(word==="DueDate"){
//         const filteredData = SocialData.filter
//         (item=>item.status==="DueDate");
//         setData(filteredData);
//         }
        
    
// }




    const handleBtns = (e)=>{
        let word = e.target.value;

        if(word==="All"){
            setData(SocialData)
        }
        else if(word=== "Linkedin"){
            const filteredValue = SocialData.filter
            (item=>item.receivedForm==="Linkedin");

            setData(filteredValue);
        }else if(word=== "Twitter"){
            const filteredValue = SocialData.filter
            (item=>item.receivedForm==="Twitter");

            setData(filteredValue);
        }
        else if(word=== "Facebook"){
            const filteredValue = SocialData.filter
            (item=>item.receivedForm==="Facebook");

            setData(filteredValue);
        }

    }

    return(
        <>
            <div className='maindashboard'>
                 <h2 className='dashboard-Page'>Social</h2>
            </div>
            <div>
                <div>
                    <div >
                        <Grid >
                        <Grid item xs={3} className="social-linkedin">
                            <Grid item xs={2} >
                                <h3 className='total-tck'>Linkedin</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><LinkedInIcon className='linkedin-icon' /></Grid>
                            <hr className="link-hr"/>
                        </Grid>
                        <Grid item xs={3} className="social-linkedin-grid">
                            <Grid>
                                <div className="social-line-chart">
                                    <ResponsiveContainer width="18%" aspect={1.5}>
                                        <LineChart data={fbData} >
                                        <Line type= "monotone" dataKey="Close Tickets"  stroke='#5051F9' dot={{fill:"#5051F9" , stroke:"#5051F9", strokeWidth: 2, r:1.5}}  />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </Grid>
                            <Grid>10+ more from Yesterday</Grid>
                        
                        </Grid>
                        
                        <Grid item xs={3} className="social-twitter" >
                            <Grid item xs={2} >
                                <h3 className='total-tck'>Twitter</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><TwitterIcon className='linkedin-icon' /></Grid>
                            <hr className="link-hr"/>
                        </Grid>
                        <Grid item xs={3} className="social-linkedin-grid">
                            <Grid>
                                <div className="twitter-line-chart">
                                    <ResponsiveContainer width="18%" aspect={1.5}>
                                        <LineChart data={fbData} >
                                        <Line type= "monotone" dataKey="Close Tickets"  stroke='#1EA7FF' dot={{fill:"#1EA7FF" , stroke:"#1EA7FF", strokeWidth: 2, r:1.5}}  />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </Grid>
                            <Grid className="twitter-details"> 8+ more from Yesterday</Grid>
                        
                        </Grid>
                        
                        <Grid item xs={3} className="social-facebook" >
                            <Grid item xs={2} >
                                <h3 className='total-tck'>Facebook</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><FacebookIcon className='linkedin-icon' /></Grid>
                            <hr className="link-hr"/>
                        </Grid>
                        <Grid item xs={3} className="social-linkedin-grid">
                            <Grid>
                                <div className="fb-line-chart">
                                    <ResponsiveContainer width="18%" aspect={1.5}>
                                        <LineChart data={fbData} >
                                        <Line type= "monotone" dataKey="Close Tickets"  stroke='#FF614C' dot={{fill:"#FF614C" , stroke:"#FF614C", strokeWidth: 2, r:1.5}}  />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </Grid>
                            <Grid className="fb-details"> 8+ more from Yesterday</Grid>
                        
                        </Grid>
                        </Grid>
                        <div >
                        <Button variant="outlined" style={{color: "#5051F9", fontSize: "22px", fontFamily: 'DM Sans',
                            fontStyle: "normal", fontWeight: 700, borderColor: "#5051F9", lineHeight: "29px", textTransform: "none"}} className='social-fltr-btn-txt'  startIcon={<FilterAltIcon />}
                            onClick = {()=> setOpenPopup(true)}>Filter</Button>
                    </div>
                    <div className="resolution-cat" >
                        <h3 className="resolution-title">Resolution Category</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width="400" height="400">
                        <Legend verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: '13px'}} height={36} iconType="circle" iconSize="9" />
                        <Pie
                            data={resolutionData}
                            cx="50%"
                            cy="58%"
                            labelLine={false}
                            //label={renderCustomizedLabel}
                            outerRadius="95"
                            //fill="#8884d8"
                            dataKey="value"
                            stroke="null"
                            //startOffset={0}
                                        
                        >
                            {resolutionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    </div>
                    </div>
                    </div>
                <div className="social-sites">
                    <button value="All" className="social-site-text" onClick={handleBtns} >All(431)</button>
                    <button value="Linkedin" className="social-site-text" onClick={handleBtns}>Linkedin(224)</button>
                    <button value="Twitter" className="social-site-text" onClick={handleBtns}>Twitter(58)</button>
                    <button value="Facebook" className="social-site-text" onClick={handleBtns}>Facebook(149)</button>
                </div>
            </div>
            <div>
                <table className="social-table-data">
                    <thead className="social-table-data-row">
                        <td><input type="checkbox"/> </td>
                        <td>TicketNumber</td>
                        <td>Subject</td>
                        <td>Received Form</td>
                        <td>Status</td>
                        <td>Resolution Time</td>
                    </thead>
                    <tbody className="social-table-data-text">
                        {data.map((item, index)=>
                            <tr key={index}>
                                <td >
                                    <input type="checkbox" value="" name="" className="social-table-data-chkbox"/>
                                </td>
                                <td>{item.ticketNumber}</td>
                                <td>{item.subject}</td>
                                <td>{item.receivedForm}</td>
                                <td>{item.status}</td>
                                <td>{item.resolutionTime}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}>
                    
                <Status/>
            </Popup>
        </>
    )
};

export default Social;