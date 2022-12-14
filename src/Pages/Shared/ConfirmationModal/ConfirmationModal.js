import React from 'react';

const ConfirmationModal = ({ title, message, handleCancel, modalData, successBtnName, handleSuccess }) => {
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleSuccess(modalData)} htmlFor="confirmation-modal" className="btn btn-primary">{successBtnName}</label>
                        <button onClick={handleCancel} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;