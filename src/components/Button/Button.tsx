interface ButtonProps {
	texto: string;
	type?: "button" | "submit" | "reset";
	onClick?: any;
}

export const Button = ({ texto, type = "button", onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className="justify-self-center w-40 p-4 text-xl shadow-md flex bg-[#88bcd1] font-semibold 
		h-12 justify-center items-center text-[#272626] rounded-md hover:bg-[#7CA6B7] transition-colors"
		>
			{texto}
		</button>
	);
};
