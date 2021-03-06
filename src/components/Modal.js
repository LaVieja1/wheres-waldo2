import React from "react";
import { PrimaryBtn } from "../util/Buttons";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Modal({
  showModal,
  seconds,
  username,
  updateUsername,
  submitScore,
  closeDropdown,
}) {
  const gameoverLoading = (
    <div className="modal-form-loading-container">
      <ReactLoading type={"bars"} color={"#27f053"} />
    </div>
  );

  const gameoverForm = (
    <>
      <div className="modal-form-container">
        <p className="modal-form-prompt">
          Enviar tu puntuación a la table de clasificaciones
        </p>
        <label for="username" className="modal-form-username">
          Nombre
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={updateUsername}
          maxLength="30"
          className="modal-form-username-input"
        />
      </div>
      {/*footer*/}
      <div className="modal-form-button-container">
        <Link
          className="modal-form-cancel-button"
          onClick={closeDropdown}
          to="/"
        >
          Cancelar
        </Link>
        <PrimaryBtn onClick={submitScore} link={"leaderboard"}>
          Enviar puntuación
        </PrimaryBtn>
      </div>
    </>
  );

  const gameoverModal = (
    <>
      <div className="game-over-modal-container">
        <div className="game-over-modal-content-container">
          <div className="modal-contianer">
            <div className="modal-content-container">
              <h3 className="modal-text">
                Terminaste en {seconds ? `${seconds} seconds!` : "..."}
              </h3>
            </div>
            {seconds ? gameoverForm : gameoverLoading}
          </div>
        </div>
      </div>
      <div className="shade-container"></div>
    </>
  );

  return showModal ? gameoverModal : null;
}
