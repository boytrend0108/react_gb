import { useEffect, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/gists/selectors";
import { getAllGists } from "../store/gists/actions";

const Gists = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  console.log(gists)
  const error = useSelector(selectGistsError);
  const isLoading = useSelector(selectGistsLoading);

  const requestGists = useCallback(() => {
    dispatch(getAllGists());
  }, []);

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
      <li>555</li>
    </ul>
  );
};

export default Gists;
