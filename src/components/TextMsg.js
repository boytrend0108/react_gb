import '../styles/TextMsg.scss'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess'

const TextMsg = (props) => {
  const {author, text} = props.msg;
 
  
  return (
    <div style={{ alignSelf: author === "robot" ? "flex-end" : "flex-start" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {author === "robot" ? <BeachAccessIcon /> : <WorkIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={author} secondary={text} />
      </ListItem>
    </div>
  );
}

export default TextMsg