interface RelogioProps {
	tempo?: number;
}

export const Relogio = ({ tempo = 0 }: RelogioProps) => {
	const minutos = Math.round((tempo % 3600) / 60);
	const segundos = (tempo % 3600) % 60;
	const horas = Math.floor(tempo / 3600);

	const [horasDezena, horasUnidade] = String(horas).padStart(2, "0");
	const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
	const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

	return (
		<>
			<span className="bg-[#5D677C] shadow-md h-18 w-12 p-1 rounded-lg">
				{horasDezena}
			</span>
			<span className="bg-[#5D677C] shadow-md  h-18 mx-1 p-1 w-12 rounded-lg">
				{horasUnidade}
			</span>
			<span className="h-20">:</span>
			<span className="bg-[#5D677C] shadow-md h-18 w-12 p-1 rounded-lg">
				{minutoDezena}
			</span>
			<span className="bg-[#5D677C] shadow-md  h-18 mx-1 p-1 w-12 rounded-lg">
				{minutoUnidade}
			</span>
			<span className="h-20">:</span>
			<span className="bg-[#5D677C] shadow-md h-18 mx-1 p-1 w-12 rounded-lg">
				{segundoDezena}
			</span>
			<span className="bg-[#5D677C] shadow-md h-18 w-12 p-1 rounded-lg">
				{segundoUnidade}
			</span>
		</>
	);
};
