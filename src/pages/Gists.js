import { useState, useEffect, useCallback } from "react";
import { API_URL_PUBLIC } from "../constants/gists";
import { CircularProgress } from "@mui/material";
import axios from "axios"

const Gists = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const requestGists = async () => {
    setIsLoading(true);

    try{
      const respons = await axios(API_URL_PUBLIC);
      setGists(respons.data)
    }catch(err) {
      setError(true)
      console.log(err)
    }finally{
      setIsLoading(false)
    }

  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGists = useCallback(
    (gist) => <li key={gist.id}>{gist.description || "no description"}</li>,
    []
  );

// render===========
  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <p>Error</p>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }

  return (
    <ul>
      {/* {gists.map(gist => <li key={gist.id}>{gist.description || 'no description'}</li>)} */}
      {gists.map(renderGists)}
    </ul>
  );
};

export default Gists;
