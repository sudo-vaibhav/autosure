import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Onboarding from './Onboarding'
import Home from './Home'
import MyVehicles from './MyVehicles'
import NewVehicle from './NewVehicle'
import BottomNavigator from './BottomNavigator'
import Claim from './Claim'
import CustomerMeeting from './CustomerMeeting'
import Documents from './Documents'

const Customer = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}/onboarding`} exact>
          <Onboarding />
        </Route>

        <Route path={`${path}/new-vehicle/:vehicleType`}>
          <NewVehicle />
        </Route>
        <Route path={`${path}/vehicles/:vehicleType`}>
          <MyVehicles />
        </Route>
        <Route path={`${path}/new-claim`} exact>
          <MyVehicles getAll />
        </Route>
        <Route path={`${path}/new-claim/:vehicleId`}>
          <Claim />
        </Route>
        <Route path={`${path}/meeting/`} exact>
          <CustomerMeeting />
        </Route>
        <Route path={`${path}/documents/`} exact>
          <Documents />
        </Route>
        <Route path={`${path}/`} exact>
          <Home />
        </Route>
      </Switch>
      <BottomNavigator />
    </>
  )
}

export default Customer
