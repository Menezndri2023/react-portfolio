import React, { useState } from "react";
import { MessageOutlined } from "@ant-design/icons";

const CallButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+2250748124635"; // Remplace par ton numéro
  };

  return (
    <>
      <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
        <MessageOutlined style={{ marginRight: 8 }} />
        Contactez-moi
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Appel téléphonique</h3>
            <p><strong>Souhaitez-vous appeler le +225 07 48 12 46 35 ?</strong></p>
            <div className="modal-actions">
              <button onClick={handleCall}>Appeler</button>
              <button onClick={() => setIsModalOpen(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallButton;
