import React from "react";

import successImageUrl from "../../../assets/success.svg";
import { CloseButton } from "../../CloseButton";

type Props = {
	onFeedbackRestartRequested: () => void;
};

const FeedbackSuccessStep: React.FC<Props> = ({ onFeedbackRestartRequested }) => {
	return (
		<>
			<header>
				<CloseButton />
			</header>

			<div className="flex flex-col items-center py-10 w-[304px]">
				<img src={successImageUrl} alt="Imagem de um verificado." />

				<span className="text-xl mt-2">Agradecemos o feedback!</span>

				<button
					type="button"
					onClick={onFeedbackRestartRequested}
					className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'''"
				>
					Quero enviar outro feedback
				</button>
			</div>
		</>
	);
};

export { FeedbackSuccessStep };