import { Switch, Route, useRouteMatch } from 'react-router-dom'
import LiveAudit from './LiveAudit'
import Report from './Report'
const Audit = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/report`}>
        <Report />
      </Route>
      <Route exact>
        <LiveAudit />
      </Route>
    </Switch>
  )
}

export default Audit
