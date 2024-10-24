import { Button, Dialog, DialogActions, Typography,DialogTitle,DialogContent,DialogContentText } from "@mui/material";

export function TodoDetails({tododetails,opendialog,setOpendialog,setTododetails}){
  return <>
    <Dialog 
    open={opendialog} 
    onClose={()=>{setOpendialog(false)}} 
    >
      <DialogTitle>{tododetails?.todo}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>ID : {tododetails?.id}</Typography>
          <Typography>Completed : {tododetails?.completed?'Yes':'No'}</Typography>
          <Typography>UserID : {tododetails?.userId}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{
          setOpendialog(false);
          setTododetails(null);
        }}>Close</Button>
      </DialogActions>
    </Dialog>
  </>
}