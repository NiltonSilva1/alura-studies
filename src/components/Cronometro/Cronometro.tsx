import { Button } from "../Button/Button";
import { Relogio } from "./Relogio/Relogio";

export const Cronometro = () => {
	return (
		<div className="flex flex-col items-center">
			<p className="text-2xl ">Escolha um card e inicie o cronômetro</p>
			<div className="flex items-center bg-[#7687A1] rounded-lg shadow-md box-border text-7xl justify-center mb-6 py-4 px-3 w-full">
				<Relogio />
			</div>
			<Button texto="Começar!" />
		</div>
	);
};
