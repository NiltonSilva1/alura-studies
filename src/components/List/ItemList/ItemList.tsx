import ITarefa from "../../../types/ITarefa";

interface ItemListProps extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const ItemList = ({
	tarefa,
	tempo,
	selecionado,
	completado,
	id,
	selecionaTarefa,
}: ItemListProps) => {
	return (
		<div>
			<li
				className={
					selecionado
						? "bg-[#292929] shadow-md rounded-lg p-3 mb-2 relative cursor-pointer"
						: "bg-[#4D4D4D] rounded-lg shadow-md p-3 mb-2 relative cursor-pointer"
				}
				onClick={() =>
					!completado &&
					selecionaTarefa({
						tarefa,
						tempo,
						selecionado,
						completado,
						id,
					})
				}
			>
				<h3 className="mb-2 break-all">{tarefa}</h3>
				<span className="text-[#D0D0D0]">{tempo}</span>
				{completado && (
					<span
						className="block bg-[url('../../../assets/check-mark.svg')] bg-no-repeat bg-[length:38px_38px]
						absolute top-2/4 right-3 -translate-y-1/2 w-10 h-11"
						aria-label="tarefa completada"
					></span>
				)}
			</li>
		</div>
	);
};
