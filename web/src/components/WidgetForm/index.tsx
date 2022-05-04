import React, { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

const feedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			source: bugImageUrl,
			alt: "Image de um inseto"
		}
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImageUrl,
			alt: "Image de uma lâmpada"
		}
	},
	OTHER: {
		title: "Outro",
		image: {
			source: thoughtImageUrl,
			alt: "Image de um balão de pensamento"
		}
	}
};

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm: React.FC = () => {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	const handleRestartFeedback = () => {
		setFeedbackSent(false);
		setFeedbackType(null);
	};

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito com ❤️ pelo <a className="underline underline-offset-2" href="https://github.com/TiaGoiNsaNy">Tiago Ryan</a>
			</footer>
		</div>
	);
};

export {
	feedbackTypes,
	WidgetForm
};