 import {useState, useEffect, useCallback} from "react";
 import { API_URL_PUBLIC } from "../constants/gists";
 import { CircularProgress } from '@mui/material';
 
 const Gists = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const requestGists = async () => {
    setIsLoading(true)
    
    try{
      const response = await fetch(API_URL_PUBLIC);
      if (!response.ok) throw new Error(`Request failed with status ${response.status}!`);
      const result = await response.json();
      setGists(result);
    }
    catch(err) {
      setError(true);
      console.log(err);
    }
    finally {setIsLoading(false)} 
  }

  useEffect(() => {
    requestGists();
  }, []);

  const renderGists = useCallback(
    gist => <li key={gist.id}>{gist.description || 'no description'}</li>,
    []
  )

if (isLoading) {
  return (
    <CircularProgress />
  )
}

if (error) {
  return (
    <>
      <p>Error</p>
      <button onClick={requestGists}>Retry</button>
    </>
  )
}

  return (
    <ul>
      {/* {gists.map(gist => <li key={gist.id}>{gist.description || 'no description'}</li>)} */} 
      {gists.map(renderGists)}
    </ul>
  )
};

export default Gists;