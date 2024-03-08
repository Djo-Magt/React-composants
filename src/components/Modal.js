import ReactDOM from 'react-dom';
import { useEffect } from 'react';


function Modal({ onClose, children, actionBar }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    return  ReactDOM.createPortal(
    <div>
        <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
        <div onClick={onClose} className="absolute inset-40 p-10 bg-white">
            {children}
            {actionBar}
        </div>
    </div>,
    document.querySelector('.modal-container')
    );
}

export default Modal