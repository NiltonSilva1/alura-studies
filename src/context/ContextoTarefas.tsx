import React, { createContext, useState } from "react";
import ITarefa, { ContextType } from "../types/ITarefa";

const TarefasContext = createContext<ContextType | any>([""]);

export const TarefasContextProvider: React.FC<React.ReactNode | any> = ({
	children,
}) => {
	const [tarefas, setTarefas] = useState<ITarefa[]>([
		{
			tarefa: "Ts",
			tempo: "01:00:00",
			id: "1",
			selecionado: false,
			completado: false,
		},
		{
			tarefa: "React",
			tempo: "02:00:00",
			id: "2",
			selecionado: false,
			completado: false,
		},
	]);

	return (
		<TarefasContext.Provider value={{ tarefas, setTarefas }}>
			{children}
		</TarefasContext.Provider>
	);
};

export default TarefasContext;
