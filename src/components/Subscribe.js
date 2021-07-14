import { useState } from 'react';
import Popup from './Popup';

const Subscribe = () => {
    const [showModal,setShowModal] = useState(false);
    const onClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            <button onClick={() => {setShowModal(true)}}>Subscribe to our channel</button>
            <Popup show={showModal} onClose={onClose}> MODAL </Popup>
        </div>
    )
}

export default Subscribe;