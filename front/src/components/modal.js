import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  buttonStyle: {
    border: 'none',
    borderRadius: '20px',
    width: '200px',
    height : '80px'
  }
};


const CustomModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} style={customStyles.buttonStyle}>
        Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button style={customStyles.buttonStyle} onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default CustomModal; 