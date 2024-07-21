import CloseIcon from '@mui/icons-material/Close';
import { Button, Input, TextField } from '@mui/material';
const Ticket = (props)=>{
    const HandleClose = (e)=>{
        e.preventDefault();
        props.toggleModal(false);
    }

    return (
        <div>
            <form className='tckt-form' >
                <div>
                    <h5 className='nwtck-frm'>New Ticket</h5>
                    <button  className='cls-frm' onClick={HandleClose} ><CloseIcon fontSize="Large" /></button>
                    {/* <Button onClick={FormClose} className='cls-frm'>X</Button> */}
                </div>
                <div className='sub-div'>
                    <label>Subject</label><br/>
                    <Input className='sub-label' placeholder="Enter Subject" type='text' name='subject'/><br/>
                    <label>Admin</label>
                    <Input className='adminlabel' placeholder="Enter Admin" type='text' name='admin'/>
                    <label>Emain Id</label>
                    <Input className='adminlabel' placeholder="Enter Your Email Id" type='email' name='email'/><br/>
                    <label>Priority</label><br/>
                    <Input className='sub-label' placeholder="Enter Priority" type='text' name='priority'/><br/>
                    <label>Notes</label><br/>
                    <Input className='sub-label' placeholder="Message"  type='message' name='message'/><br/>
                </div>
                <Button className='frm-btn' variant="contained"  type="button">Submit</Button>
                
            </form>
        </div>
    )
};

export default Ticket;