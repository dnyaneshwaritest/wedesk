import React, {useState} from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import { Button, Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Table from '../Table/Table';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import TicketData from "../JSON/ticketdata.json";
import { CheckBox } from '@mui/icons-material';
import Popup from "../component/Popup";
import Status from "./Status";
import { NavLink } from "react-router-dom";

const Tickets = (props)=>{
    const [openPopup, setOpenPopup] = useState(false);
    
    const [currentPage, setCurrentPage] =useState(1);
    const [itemsPerPage, setItemPerPage]=useState(5);

    const [pageNumberLimit, setPageNumberLimit] = useState(4);
    const [maxPageNumberLimit, setmaxPageNumberLimit] =useState(4);
    const [minPageNumberLimit, setminPageNumberLimit]=useState(0);

        const handleClick =(event) =>{
        setCurrentPage(Number(event.target.id));
    }
    const pages = [];
    for (let i=1; i<=Math.ceil(TicketData.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = TicketData.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number =>{
       if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
        return(
            <li key={number} id={number} onClick={handleClick}
            className = {currentPage == number ? "active" : null}
            >
                {number}
            </li>
        );
       }else{
        return null;
       }
    })

    const handleNextbtn = ()=>{
        setCurrentPage(currentPage + 1);

        if(currentPage + 1> maxPageNumberLimit){
            setmaxPageNumberLimit(maxPageNumberLimit+ pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevtbtn = ()=>{
        setCurrentPage(currentPage - 1);

        if((currentPage - 1)%pageNumberLimit==0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const renderData = (TicketData)=>{
        return(
           <tbody>
             {TicketData.map((ticketinfo, index)=>
                <tr className='tck-data' key={index} scope="row" >
                    {/* <td><CheckBox type=""/></td> */}
                    <td >{ticketinfo.ticketNumber}</td>
                    <td>{ticketinfo.product}</td>
                    <td>{ticketinfo.subject}</td>
                    <td>{ticketinfo.agent}</td>
                    <td>{ticketinfo.status}</td>
                    <td>{ticketinfo.resolutionTime}</td>
                    <td>{ticketinfo.action}</td>
                   
                        <td >
                        <NavLink to="/tickets/customerdetails" className="action-btn"><Button style={{background: "transparent", textTransform:"none"}}>View Details</Button>
                        </NavLink></td>
                  
                </tr>
                )}
           </tbody>
        )
    }

   return(
        <>
            <div>
            
                    <div className='maindashboard'>
                        <h2 className='dashboard-Page'>Tickets</h2>
                    </div>
                    <div>
                    <input type="text"  placeholder="Search Tickets" name="search"  className="tck-srch"/>
                <SearchIcon className="tck-srch-icon" font-size="small"/>
                    </div>
                <div className='mgrid'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}  className='gtotal-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Chats</h3>
                                <h4 className='total-tck-num'>224</h4>
                            </Grid>
                            <Grid className='g-star'><ChatIcon className='star' /></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtodays-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Social</h3>
                                <h4 className='total-tck-num'>58</h4>
                            </Grid>
                            <Grid className='g-star'><DescriptionIcon className='star'/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gpending-tck'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Email</h3>
                                <h4 className='total-tck-num'>149</h4>
                            </Grid>
                            <Grid className='g-star'><MailIcon className='star'/></Grid>
                        </Grid>
                        <Grid item xs={3}  className='gtoatal-agnt'>
                            <Grid item xs={2} className="g-tck">
                                <h3 className='total-tck'>Priority Tickets</h3>
                                <h4 className='total-tck-num'>121</h4>
                            </Grid>
                            <Grid className='g-star'><DescriptionIcon className='star'/></Grid>
                        </Grid>
                     </Grid>
                    </div>

                    <div className='filter-btn'>
                        <Button variant="outlined" style={{color: "#5051F9", fontSize: "22px", fontFamily: 'DM Sans',
                            fontStyle: "normal", fontWeight: 700, borderColor: "#5051F9", lineHeight: "29px", textTransform: "none"}} className='fltr-btn-txt'  startIcon={<FilterAltIcon />}
                            onClick = {()=> setOpenPopup(true)}>Filter</Button>
                    </div>
                   <div>
                    {/* <Table/> */}
                   
                        <div className='tck-list'>
                            <table  className='tble-clm' >
                                <tr className='tck-hding'>
                                    <td scope="col">Ticket Number</td>
                                    <td scope="col">Product</td>
                                    <td scope="col">Subject</td>
                                    <td scope="col">Agent</td>
                                    <td scope="col">Status</td>
                                    <td scope="col">Resolution Time</td>
                                    <td scope="col">Action</td>
                                </tr>
                                {/* {TicketData.map((ticketinfo, index)=>
                                    <tr className='tck-data' key={index} scope="row">
                                        <td><CheckBox type=""/></td>
                                        <td >{ticketinfo.ticketNumber}</td>
                                        <td>{ticketinfo.product}</td>
                                        <td>{ticketinfo.subject}</td>
                                        <td>{ticketinfo.agent}</td>
                                        <td>{ticketinfo.status}</td>
                                        <td>{ticketinfo.resolutionTime}</td>
                                        <td>{ticketinfo.action}</td>
                                        <td><Button >View Details</Button></td>
                                        
                                    </tr>
                                    )} */}
                                    {renderData(currentItems) }
                                    <ul className="pageNumbers">
                                        <li><button onClick={handlePrevtbtn}
                                        disabled = {currentPage == pages[0] ? true : false}
                                        >Prev</button></li>
                                        {renderPageNumbers}
                                        <li><button onClick={handleNextbtn}
                                        disabled = {currentPage == pages[pages.length - 1] ? true : false}
                                        >Next</button></li>
                                    </ul>
                                                
                            </table>
                            {/* <div> {peginationOfTable()}</div> */}
                        </div>
                    
                        <div className='actn-frm'>
                            <div>
                                <label className="actn-lbl">Actions</label>
                            </div>
                            <div className="actn-group">
                                <label className="grp">Group</label>
                                <select  className="actin-dilog">
                                    <option>Select -</option>
                                </select>
                            </div>
                            <div className="actn-group1">
                                <label className="grp">Agent</label>
                                <select  className="actin-dilog">
                                    <option>Select -</option>
                                </select>
                            </div>
                            <div className="actn-group2">
                                <label className="grp">Status</label>
                                <select  className="actin-dilog">
                                    <option>Select -</option>
                                </select>
                            </div>
                            <div className="actn-group3">
                                <label className="grp">Priority</label>
                                <select  className="actin-dilog">
                                    <option>Select -</option>
                                </select>
                            </div>
                            <div className="actn-group4">
                                <label className="grp">Resolution</label>
                                <select  className="actin-dilog">
                                    <option>Select -</option>
                                </select>
                            </div>
                            <div className="actn-group5">
                                <label className="grp">Notes</label>
                                <p className="lbl-p">Max 200 Words</p>
                                <input  className="actin-dilog" type="message" placeholder="" name="notes"/>
                            </div>
                            <div className="assign-btn">
                                <Button style={{color:"#FFFFFF",textTransform: "none"}} >Assign</Button><br/>
                            </div>
                            <div className="assign-btn1">
                            <Button style={{color:"#FFFFFF",textTransform: "none"}}  >Assign later</Button>
                            </div>
                        </div>
                   </div>
            </div>
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}>
                    
                <Status/>
            </Popup>
        </>
    )

};
export default Tickets;