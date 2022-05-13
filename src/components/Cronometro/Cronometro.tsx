import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import ITarefa from "../../types/ITarefa";
import { Button } from "../Button/Button";
import { Relogio } from "./Relogio/Relogio";

interface CronometroProps {
	selecionado: ITarefa;
	finalizarTarefa: () => void;
}

export const Cronometro = ({
	selecionado,
	finalizarTarefa,
}: CronometroProps) => {
	const [tempo, setTempo] = useState<number | any>();

	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado]);

	const regressiva = (contador: number = 0) => {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				return regressiva(contador - 1);
			}
			finalizarTarefa();
		}, 1000);
	};

	return (
		<div className="flex flex-col items-center">
			<p className="text-2xl ">Escolha um card e inicie o cronômetro</p>
			<div
				className="flex items-center bg-[#7687A1] rounded-lg shadow-md
			 box-border text-7xl justify-center mb-6 py-4 px-3 w-full"
			>
				<Relogio tempo={tempo} />
			</div>
			<Button texto="Começar!" onClick={() => regressiva(tempo)} />
		</div>
	);
};
