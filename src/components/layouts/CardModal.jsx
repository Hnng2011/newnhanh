import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';



const CardModal = (props) => {

    return (

        <Modal
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận mua</Modal.Title>
            </Modal.Header>


            <div className="modal-body space-y-20 pd-40">
                <p className="label-1">Enter quantity. <span className="color-popup">5 available</span>
                </p>
                <input type="text" className="form-control quantity form-bottom" />
                <div className="d-flex justify-content-between detail-2">
                    <p> Service free:</p>
                    <p className="text-right price color-popup"> 0,89 ETH </p>
                </div>
                <div className="d-flex justify-content-between detail-3">
                    <p> Total amount:</p>
                    <p className="text-right price color-popup"> 4 ETH </p>
                </div>
                <Link to="/wallet" className="button-popup" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Purchase</Link>
            </div>
        </Modal >

    );
};

export default CardModal;
