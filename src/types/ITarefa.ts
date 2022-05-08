export default interface ITarefa {
	tarefa: string;
	tempo: string;
	selecionado: false;
	completado: false;
	id: string;
}

export type ContextType = {
	tarefas: ITarefa[];
};
