import type { ComponentType } from "react";
import { EditMovieModalContent } from "./modals/EditMovieModal";
import { FeedbackModalContent } from "./modals/FeedbackModal";

export type ProjectModalPropsMap = {
  feedback: undefined
  "edit-movie": { id: number }
};

export type ProjectModalId = keyof ProjectModalPropsMap;
export type ProjectModalConfig<M extends ProjectModalId> = {
  Content: ComponentType<ProjectModalPropsMap[M]>
};

class ModalService {
  private registeredModals: Partial<{
    [M in ProjectModalId]: ProjectModalConfig<M>;
  }> = {};
  private modals: Partial<ProjectModalPropsMap> = {};
  private listeners: Set<(modals: typeof this.modals) => void> = new Set();

  public registerModal<M extends ProjectModalId>(
    modalId: M,
    config: ProjectModalConfig<M>,
  ) {
    if (this.registeredModals[modalId]) {
      console.warn(`"${modalId}" modal is already registered`);
    }

    (this.registeredModals[modalId] as ProjectModalConfig<M>) = config;
  }

  public openModal<M extends ProjectModalId>(
    modalId: M,
    ...[modalParams]: (ProjectModalPropsMap[M] extends undefined ? [undefined?] : [ProjectModalPropsMap[M]])
  ) {
    const alreadyOpened = this.modals[modalId];
    const modalConfig = this.registeredModals[modalId];
    if (!modalConfig) {
      throw new Error(`Try to open unregistered modal "${modalId}"`);
    }
    if (alreadyOpened) {
      return console.warn(`${modalId} modal is already open`);
    }

    this.modals[modalId] = modalParams;
    this.triggerListeners();
  }

  public closeModal(modalId: ProjectModalId) {
    if (!(modalId in this.modals)) return;

    delete this.modals[modalId];
    this.triggerListeners();
  }

  public subscribe(listener: (modals: typeof this.modals) => void): () => void {
    this.listeners.add(listener);

    return () => this.listeners.delete(listener);
  }

  public getOpenModals() {
    return this.modals;
  }

  public getRegisteredModals() {
    return this.registeredModals;
  }

  private triggerListeners() {
    this.listeners.forEach((cb) => cb(this.modals));
  }
}

export const modalService = new ModalService();

modalService.registerModal("feedback", { Content: FeedbackModalContent });
modalService.registerModal("edit-movie", { Content: EditMovieModalContent });
