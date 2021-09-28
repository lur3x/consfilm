import React, { Suspense, lazy, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../components/contexts/AuthContext';
import { Container } from 'react-bootstrap';
import { PrivateRoute } from '../../components/registration components/privateRoute';

const SignUp = lazy(() => import('../../components/registration components/SignUp'));
const Dashboard = lazy(() => import('../../components/registration components/dashboard'));
const Login = lazy(() => import('../../components/registration components/LogIn.js'));
const ErrorNotFound = lazy(() => import('../../components/registration components/notFound.js'));
const ForgotPassword = lazy(() => import('../../components/registration components/forgotPassword.js'));
const UpdateProfile = lazy(() => import('../../components/registration components/updateProfile'));
const Main = lazy(() => import('../../components/main components/main.js'));

function App() {
  return (
    <Fragment>
      {/* Landing */}
      <Suspense
        fallback={
          <div>
            <h6 className="mt-3">
              Please wait your page is on it's way.
              <small>
                At least I think it is <strong>;)</strong>
              </small>
            </h6>
          </div>
        }
      >
        <Container>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/updateprofile" component={UpdateProfile} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={Main} />
              <Route path="/singleshow/:id" component={Main} />
              <Route path="/search" component={Main} />
              <Route component={ErrorNotFound} />
            </Switch>
          </AuthProvider>
        </Container>
      </Suspense>
    </Fragment>
  );
}

export default App;
