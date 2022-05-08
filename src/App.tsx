import { useState } from "react";
import { Cronometro } from "./components/Cronometro/Cronometro";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import ITarefa from "./types/ITarefa";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa | any>([]);
	const [selecionado, setSelecionado] = useState<HTMLFormElement | any>(false);

	const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
		setSelecionado(tarefaSelecionada);
		setTarefas(
			tarefas.map((tarefa: any) => ({
				...tarefa,
				selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
			}))
		);
	};

	function finalizarTarefa() {
		if (selecionado) {
			setSelecionado(undefined);
			setTarefas((tarefasAnteriores: any[]) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return {
							...tarefa,
							selecionado: false,
							completado: true,
						};
					}
					return tarefa;
				})
			);
		}
	}

	return (
		<div
			className="absolute inset-x-1/3 top-8 z-10 w-[600px] flex flex-col justify-center min-h-[100vh - 32px] p-8 box-border rounded-xl 
      bg-zinc-900 text-white"
		>
			<Form setTarefas={setTarefas} />
			<Cronometro />
			<List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
		</div>
	);
}

export default App;
