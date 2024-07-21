import { Button, Card, Grid } from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CustomerData from "../JSON/customerData.json";
import { NavLink } from "react-router-dom";
const Customer = () =>{
    return(
        <>
            <div>
                <div className='maindashboard'>
                    <h2 className='dashboard-Page'>Customer</h2>
                </div>
                <div className='addbtn'>
                <NavLink to="/customer/addcustomer" style={{textDecoration: "none"}}>  
                    <Button startIcon={<AddCircleOutlinedIcon fontSize="small" className='plussym' />} type="Submit" style={{color: "#FFFFFF", textTransform: 'none'}} className = "new"> 
                        Customer
                    </Button>
                </NavLink>    
                </div>
            </div>
            <div>
               
                {CustomerData.map((item, index)=>
                    <Grid className="customer-card" key={index}>
                        <Grid className="cname">{item.cname}</Grid>
                        <Grid className="website">{item.website}</Grid>
                        <Grid className="website">{item.mobnum}</Grid>
                        <Grid className="website">{item.email}</Grid>
                        <Grid className="customer-gridimg"><img src={ `${item.path}`} className="customer-img"/></Grid>
                    </Grid>
                    )}
                
            </div>
        </>
    )
};
export default Customer;