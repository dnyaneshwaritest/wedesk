import { useState } from "react";
import { Button } from "@mui/material";
import SocialData from "../JSON/socialData.json";

const Status=()=>{
    const [data, setData]= useState(SocialData);

    const Handleclick = (e)=>{
        let word = e.target.value;

        if(word==="Total"){
           setData(SocialData);
            }

        else if(word==="Open"){
            const filteredData = SocialData.filter
            (item=>item.status==="Open");
            setData(filteredData);
        }
        else if(word==="Pending"){
            const filteredData = SocialData.filter
            (item=>item.status==="Pending");
            setData(filteredData);
        }
        else if(word==="Close"){
            const filteredData = SocialData.filter
            (item=>item.status==="Close");
            setData(filteredData);
        }
        else if(word==="DueDate"){
        const filteredData = SocialData.filter
        (item=>item.status==="DueDate");
        setData(filteredData);
        }
        
    
}

    return(
        <>
        <div className="status-title">
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px", textTransform: "none"}}
                     value="Open" onClick={Handleclick}>
                        Open
                    </Button>
                    <Button className="status-btn1" variant="outlined" style={{color:"black", margin:"10px", textTransform: "none" }}
                     value="Pending" onClick={Handleclick}>
                        Pending
                    </Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px", textTransform: "none"}}
                     value="Close" onClick={Handleclick}>
                        Close
                    </Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px",marginLeft: "20%", textTransform: "none"}}
                     value="DueDate" onClick={Handleclick}>
                        Due Date
                    </Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px", textTransform: "none"}}
                     value="Total" onClick={Handleclick}>
                        Total
                    </Button>
                </div>
        
            {/* <Card className="status-card">
                <h3 className="status-title">Status</h3>
                <div>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px"}} >Open</Button>
                    <Button className="status-btn1" variant="outlined" style={{color:"black", margin:"10px"}}>Pending</Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px"}}>Close</Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px",marginLeft: "20%"}}>Due Date</Button>
                    <Button className="status-btn" variant="outlined" style={{color:"black", margin:"10px"}}>Total</Button>
                </div>
                </Card> */}
        </>
    )
};
 export default Status;