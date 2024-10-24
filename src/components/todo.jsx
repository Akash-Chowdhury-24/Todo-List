import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

export function TodoItem({item,fetchTodoDetails}){
  return <>
  <Grid item md={3} >
    <Card sx={{
      height:'100%',
      display:'flex',
      flexDirection:'column',
      opacity:'0.65',
      "&:hover":{
        opacity:1
      }
      }}>
      <CardContent  sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="p" gutterBottom >{item.todo}</Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button 
        onClick={()=>{fetchTodoDetails(item.id)}}
        size="medium" 
        color="primary" 
        variant="contained" 
        > Details </Button>
      </CardActions>
    </Card>
  </Grid>
  </>
}