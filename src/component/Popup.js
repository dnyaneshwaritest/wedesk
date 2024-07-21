import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Button } from "@mui/material";

const Popup=(props)=>{
    const {title, children, openPopup, setOpenPopup} = props
    return(
        <Dialog  open={openPopup} className="status-dialog" onClick={()=>{setOpenPopup(false)}}>
            <DialogTitle className="status-card" >
                <div >
                    Status
                </div>
                {/* <Button text="X" color="secondary">X</Button> */}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};
export default Popup;