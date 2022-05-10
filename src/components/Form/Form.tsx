import React, { useState } from "react";
import { Button } from "../Button/Button";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setTarefas: any;
}

export const Form = ({ setTarefas }: Props) => {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setTarefas((tarefasAntigas: any) => [
			...tarefasAntigas,
			{
				tarefa,
				tempo,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		setTarefa("");
		setTempo("00:00");
	}

	return (
		<form
			className="flex flex-col bg-[#7687A1] rounded-lg shadow-md p-3 justify-center items-center"
			onSubmit={adicionarTarefa}
		>
			<div className="flex flex-col w-full mb-4">
				<label htmlFor="tarefa" className="mb-2 text-sm">
					Adicione um novo estudo
				</label>
				<input
					className="w-full pt-2 px-3 pb-1 box-border border-none rounded-md ]
					bg-[#5D677C] shadow-md placeholder:text-[#BFBFBF]"
					type="text"
					name="tarefa"
					id="tarefa"
					value={tarefa}
					onChange={(evento) => setTarefa(evento.target.value)}
					placeholder="O que você quer estudar"
					required
				/>
			</div>
			<div className="w-full mb-3">
				<label htmlFor="tempo" className="mb-2 text-sm">
					Tempo
				</label>
				<input
					className="w-full pt-2 px-3 pb-1 box-border border-none rounded-md 
					bg-[#5D677C] shadow-md placeholder:text-[#BFBFBF]"
					type="time"
					step="1"
					name="tempo"
					value={tempo}
					onChange={(evento) => setTempo(evento.target.value)}
					id="tempo"
					min="00:00:00"
					required
				/>
			</div>
			<Button texto="Adicionar" type="submit" />
		</form>
	);
};
