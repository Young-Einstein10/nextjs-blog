import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import { CategoryFilter } from "../ProductFilter/_partials/CategoryFilter";
import { PriceFilter } from "../ProductFilter/_partials/PriceFilter";
import styles from "./mobileFilter.module.scss";

interface IMobileFilterProps {
  isOpen: boolean;
  toggleFilterModal: () => void;
}

export const MobileFilter: FC<IMobileFilterProps> = ({ isOpen, toggleFilterModal }) => {
  const { modal100w, modalContent, modalBody, modalFooter } = styles;

  const clearFilters = () => {};

  return (
    <Modal
      show={isOpen}
      onHide={() => toggleFilterModal()}
      dialogClassName={modal100w}
      contentClassName={modalContent}
      aria-labelledby="example-custom-modal-styling-title">
      <Modal.Body className={modalBody}>
        <div className="w-100">
          <CategoryFilter isMobile={isOpen} toggleFilterModal={toggleFilterModal} />
          <PriceFilter />
        </div>
      </Modal.Body>

      <footer className={`${modalFooter} d-flex align-items-center px-3 pt-4 pb-3`}>
        <button aria-label="clear-filter" className="mr-2" onClick={() => clearFilters()}>
          CLEAR
        </button>
        <button aria-label="save-filter" className="ml-2" onClick={() => toggleFilterModal()}>
          SAVE
        </button>
      </footer>
    </Modal>
  );
};
