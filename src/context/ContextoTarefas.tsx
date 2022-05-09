import React, { createContext, useState } from "react";
import ITarefa, { ContextType } from "../types/ITarefa";

const TarefasContext = createContext<ContextType | any>([""]);

export const TarefasContextProvider: React.FC<React.ReactNode | any> = ({
	children,
}) => {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);

	return (
		<TarefasContext.Provider value={{ tarefas, setTarefas }}>
			{children}
		</TarefasContext.Provider>
	);
};

export default TarefasContext;
