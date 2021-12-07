
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon } from '@mui/material';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Typography } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const TaskList=(props)=>{
  return (
      <>
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <div className="individual-task">
      <ListItem >
        <ListItemText
          primary={props.task}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              />
            </React.Fragment>
          }
        />
        <ListItemIcon>
          <ModeEditOutlineIcon className="edit-btn" onClick={()=>{
            console.log("edit index",props.id);
            props.edit(props.id,props.task);
        }}/>
          <DeleteIcon className="del-btn" onClick={()=>{
            props.onSelect(props.id)
        }} />
          </ListItemIcon>
      </ListItem>
      </div>
    </List>

      </>
  )
}
export default TaskList;
/*
  return (
      <>
      <List>
          <div className="individual-task">
    <ListItem>
        <ListItemText>{ "do the dishes"}</ListItemText>
        <ListItemIcon><DeleteIcon /></ListItemIcon>
    </ListItem>
             </div>
       </List>

      </>
  )

*/