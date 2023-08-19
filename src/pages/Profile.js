import { useCallback, useState} from "react"
import { changeVisible, changeCheckBox, updateName} from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Profile = () => {
  const dispatch = useDispatch()

  const {name, showName} = useSelector((state) => state.profile); // забираем данные из стора
  const [value, setValue] = useState(name) // объявляем переменную

 // function
  const setShowName = useCallback(()=> {
    dispatch(changeVisible);
  }, [dispatch]);

  const changeValue = useCallback(()=> {
    dispatch(changeCheckBox);
  }, [dispatch]);

  const setNameValue = (event) => {
    setValue(event.target.value) // meняем значение переменной value
  }

  // работа со стором
  const saveName = () => {
    dispatch(updateName(value)); 
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="showNameBox">
        <button onClick={setShowName}>showName</button>
        {showName && <h2>Текущее имя: {name}</h2>}
      </div>
    
      <TextField 
        type="text" 
        placeholder="input name here" 
        value={value} // связываем value c переменной value
        onChange={setNameValue}
        id="standard-basic" 
        variant="standard"
      />
      <Button variant="outlined" onClick={saveName}>Update Name</Button>

      <br />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox defaultChecked onChange={changeValue} />
          }
          label="Label"
        />
      </FormGroup>
    </div>
  );
}

export default Profile