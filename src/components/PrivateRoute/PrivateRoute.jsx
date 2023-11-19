import { Navigate } from 'react-router-dom';
import { useUser } from "../../contexts/useUser";
import PropTypes from 'prop-types';

export default function PrivateRoute({children}) {
  const {user, isLoading} = useUser();

  if (isLoading){
    return <h1>LOADING USER....</h1>
  }

  if (!isLoading && !user) {
    return <Navigate to='/'/>;
  }

  return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired,
};