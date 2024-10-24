import { useEffect, useState } from "react"
import styles from './appStyle.module.css';
import { TodoItem } from "./components/todo";
import { Grid } from "@mui/material";
import { TodoDetails } from "./components/tododetails";

function App() {
  const [todolist,setTodolist]=useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [tododetails,setTododetails] = useState(null);
  const [opendialog,setOpendialog] = useState(false);

  async function fetchData(){
    try{
      setLoading(true);
      const responseapi = await fetch('https://dummyjson.com/todos')
      const data = await responseapi.json();

      if(data?.todos && data?.todos?.length > 0){
        setTodolist(data?.todos);
        setLoading(false);
        setError('');
      }else{
        setTodolist([]); 
        setLoading(false);
        setError('');
      }
    }catch(error){
      setError(error);
    }
  }

  async function fetchTodoDetails(id){
    try{
      const responseapi = await fetch(`https://dummyjson.com/todos/${id}`);
      const data = await responseapi.json();
      if(data){
        setTododetails(data);
        setOpendialog(true);
      }else{
        setTododetails(null);
        setOpendialog(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Todo List</h1>
      <Grid container alignItems="stretch" spacing={3}>
      {todolist && todolist.length > 0 ? 
        todolist.map(item=><TodoItem 
          key={item.id} 
          item={item}
          fetchTodoDetails={fetchTodoDetails}
          />)
        : null}
      </Grid>
      <TodoDetails
        tododetails={tododetails}
        setTododetails={setTododetails}
        opendialog={opendialog}
        setOpendialog={setOpendialog}
      />
    </div>
  );
}

export default App
