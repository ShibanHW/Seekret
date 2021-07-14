import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";
import Welcome from './Welcome';
import Subscribe from './Subscribe';

const NavigationBar = () => {
    return (
        <Router>
        <div>
        <img src="../logo.svg"/>
        <h1>my company</h1>
            <ul style={{listStyleType:"none"}}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <il>
                    <Link to='/subscribe'>Subscribe</Link>
                </il>
            </ul>

            <Switch>
                <Route exact path='/home' >
                    <Welcome/>
                </Route>
                <Route exact path='/subscribe'>
                    <Subscribe />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default NavigationBar;