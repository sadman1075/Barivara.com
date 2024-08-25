import React from 'react';

const DeleteModal = ({title,message,closemodal,success,modaldata}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label  onClick={()=>success(modaldata)} htmlFor="my_modal_6"  className="btn bg-red-600">Yes</label>
                        <label onClick={closemodal} htmlFor="my_modal_6" className="btn bg-green-600">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;