import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WebCertificate from "../pages/certificates/part-certificates/WebCertificates";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/webcertificates" component={WebCertificate} />
        </Switch>
    )
}
export default MainRoute;