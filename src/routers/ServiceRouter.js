import {
  Switch,
  Route,
} from "react-router-dom";
import ServicePage from "../pages/ServicePage";

export default function ServiceRouter() {

  return (
    <div>
      <Switch>
      
        <Route exact path="/Service" component={ServicePage} />
        
      </Switch>
    </div>
  );
}
