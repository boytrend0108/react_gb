
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../middleware/middleware";

 
const ChatItem = (props) => {

  const dispatch = useDispatch();

  const id = props.id
  const name = props.name

  const deleteChat = (id) => {
    dispatch(deleteChatWithFB(id));
  }


  return (
    <Link to={`/chats/${id}`}>
      <ListItem
        sx={{ cursor: "pointer" }}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteChat(id)}>
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