import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Welcome = () => {
    const history = useHistory();
    const selectedList = useSelector(state => state.selectedList);

    const handleClick = (e) => {
        history.push('/subscribe');
    }
    
    return (
        <Fragment>{console.log(selectedList)}
            { !selectedList | !selectedList.length ? 
                <h1>Welcome to my page</h1> : 
                <h1>user subscribed</h1>
            }
            <button onClick={handleClick}>next page</button>
        </Fragment>
    )
}

export default Welcome;