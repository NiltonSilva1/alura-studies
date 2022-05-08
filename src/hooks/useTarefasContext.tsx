import { useContext } from "react";
import TarefasContext from "../context/ContextoTarefas";

const useTarefasContext = () => {
	const context = useContext(TarefasContext);

	if (!context) {
		console.log("Context not found");
	}
	return context;
};

export default useTarefasContext;
