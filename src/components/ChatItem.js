
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

 
const ChatItem = (props) => {
 
  const id = props.id
  const name = props.name

  const deleteChat = (e) => {
    e.stopPropagation();
    console.log("Delete chat");
  }


  return (
    <Link to={`/chats/${id}`}>
      <ListItem
        sx={{ cursor: "pointer" }}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={deleteChat}>
            <DeleteIcon />
          </IconButton>
        } 
      >
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItem>


    </Link>
  );
}

export default ChatItem