import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Modal from "react-modal";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);
Modal.setAppElement(root);