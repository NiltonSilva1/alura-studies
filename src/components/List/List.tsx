import ITarefa from "../../types/ITarefa";
import { ItemList } from "./ItemList/ItemList";

interface ListProps {
	tarefas: ITarefa[];
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const List = ({ tarefas, selecionaTarefa }: ListProps) => {
	return (
		<aside className="h-full">
			<h2 className="text-xl my-3 text-center">Estudos do dia </h2>
			<ul className="max-h-[500px] overflow-y-auto">
				{tarefas.map((item) => (
					<ItemList selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
				))}
			</ul>
		</aside>
	);
};
