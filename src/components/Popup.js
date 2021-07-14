import { Dialog, withStyles } from '@material-ui/core';
import Dropdown from './utils/Dropdown';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectList } from "../redux";

const styles = {
    dialogPaper: {
        minHeight: '50%',
        maxHeight: '50%',
        minWidth: '50%',
        maxWidth: '50%',
        textAlign: 'center'
    },
};

const options = [{title:'a'},{title:'b'},{title:'ab'},{title:'bc'}]

const Popup = ({show, onClose, classes}) => {
    const selectedOptions = [];
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
        dispatch(selectList(selectedOptions));
        history.push("/home");
    }

    const addOption = (selectedOption) => {
        selectedOptions.push(selectedOption);
    }

    return (
        <div>
            <Dialog open={show} classes={{paper: classes.dialogPaper}}>
                <form onSubmit={handleSubmit}>
                    <Dropdown options={options} onSelectedOption={addOption}/>
                    <button type='submit'>submit</button>
                </form>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(Popup);