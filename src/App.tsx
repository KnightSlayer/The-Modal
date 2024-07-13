import { modalService } from "./ModalService";
import { ModalsRenderer } from "./ModalsRenderer";

export default function App() {
  return (
    <>
      <ModalsRenderer />
      <div>
        <button onClick={() => modalService.openModal("feedback")}>
          Feedback
        </button>

        <button
          onClick={() => modalService.openModal("edit-movie", { id: 1 })}
        >
          Edit Movie #1
        </button>
        <button
          onClick={() => modalService.openModal("edit-movie", { id: 2 })}
        >
          Edit Movie #2
        </button>
      </div>
    </>
  );
}
