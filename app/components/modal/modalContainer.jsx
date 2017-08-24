import React from 'react';
import { connect } from 'react-redux';
import { bindHandlers } from 'react-bind-handlers';
import PropTypes from 'prop-types';
import * as actions from '../../modules/tilesActions';
import Modal from './modal.jsx';

class ModalContainer extends React.PureComponent {
    handleModalClose() {
        this.props.dispatchCloseModal(!this.props.modalOpen);
    }
    handleFormCancel(event) {
        event.preventDefault();
        this.props.dispatchCloseModal(!this.props.modalOpen);
    }
    handleFormSubmit(data) {
        this.props.dispatchSaveForm(data.formData);
    }
    render() {
        return (
            <Modal modalOpen={this.props.modalOpen} modalContent={this.props.modalContent}
                onHandleModalClose={this.handleModalClose} onHandleFormSubmit={this.handleFormSubmit}
                onHandleFormCancel={this.handleFormCancel}
            />
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCloseModal(modalStatus) {
            dispatch(actions.changeModalStatus(modalStatus));
        },
        dispatchSaveForm(formData) {
            dispatch(actions.saveFormData(formData));
        },
    };
};

ModalContainer.propTypes = {
    dispatchCloseModal: PropTypes.func,
    dispatchSaveForm: PropTypes.func,
    modalOpen: PropTypes.bool,
    modalContent: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(bindHandlers(ModalContainer));
