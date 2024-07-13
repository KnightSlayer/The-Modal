import { memo, useEffect, useState } from "react";
import type { ProjectModalPropsMap, ProjectModalId } from "./ModalService";
import { modalService } from "./ModalService";
import Modal from "react-modal";

export const ModalsRenderer = memo(() => {
  const [modals, setModals] = useState(modalService.getOpenModals());

  useEffect(() => {
    setModals({ ...modalService.getOpenModals() });
    return modalService.subscribe((modals) => setModals({ ...modals }));
  }, []);

  const registeredModals = modalService.getRegisteredModals();

  return (
    <>
      {Object.entries(modals).map((entry) => {
        const [modalId, modalParams] = entry as [
          ProjectModalId,
          ProjectModalPropsMap[ProjectModalId]
        ];

        const config = registeredModals[modalId];
        if (!config) {
          console.warn("try to render unregistered modal", modalId);
          return null;
        }

        return (
          <Modal
            key={modalId}
            isOpen
            onRequestClose={() => modalService.closeModal(modalId)}
          >
            {/* @ts-expect-error idn */}
            <config.Content {...modalParams} />
          </Modal>
        );
      })}
    </>
  );
});
