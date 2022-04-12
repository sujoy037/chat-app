import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({children,...routeProps}) => {
    const {profile,isLoading}=useProfile();
    //const profile=false;
    if(isLoading && !profile){
      return <Container>
        <Loader center vertical size="md" content="Loading" speed='slow' />
      </Container>
    }

    if(!profile && !isLoading){
        return <Redirect to='/signin'/>
    }
  return (
    <Route{...routeProps}>
        {children}
    </Route>
  )
}

export default PrivateRoute