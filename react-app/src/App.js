import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Customer from './views/customer'
import Audit from './views/audit'

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Router>
        <Switch>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/audit">
            <Audit />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
