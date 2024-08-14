import React, { useEffect } from "react";
import {
	ComponentProps,
	registerUniformComponent,
	UniformRichText,
} from "@uniformdev/canvas-react";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { resolveRichTextRenderer } from "lib/richTextRenderers";
import { useUniformContext } from "@uniformdev/context-react";

export type Speaker = {
	entry?: {
		fields?: {
			name?: {
				value: string;
			};
			title?: {
				value: string;
			};
		};
	};
};

export type SessionDetailProps = ComponentProps<{
	title: string;
	duration: string;
	audience: string | string[];
	description: string;
	longDescription: string;
	speakers: Speaker[];
}>;

const SessionDetail = ({
	title,
	duration,
	audience,
	description,
	speakers,
}: SessionDetailProps) => {
	const { context } = useUniformContext();
	const audienceArray = Array.isArray(audience) ? audience : [audience];

	const filteredSpeakers = speakers
		.map((speaker) => ({
			name: speaker?.entry?.fields?.name?.value || "Unknown Speaker",
			title: speaker?.entry?.fields?.title?.value || "Unknown Title",
		}))
		.filter((speaker) => speaker.name && speaker.title);

	// Example of scoring enrichment programmatically based on audience
	useEffect(() => {
		const enrichments = [];

		if (audienceArray.includes("developers")) {
			enrichments.push({ str: 1, cat: "1", key: "dev" });
		}
		if (audienceArray.includes("marketers")) {
			enrichments.push({ str: 1, cat: "1", key: "mkt" });
		}

		if (enrichments.length > 0) {
			const audienceLabel = audienceArray.length > 1 ? "audiences" : "audience";
			console.log(`Scoring enrichment for ${audienceLabel}:`, audienceArray);

			context.update({
				enrichments: enrichments,
			});
		}
	}, [audience, context]);

	return (
		<section className="bg-white border-b py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid gap-8 md:gap-12">
					<div>
						<h1 className="text-5xl font-bold leading-tight text-left text-gray-800">
							{title}
						</h1>
						<div className="flex items-center gap-8 mt-4 text-gray-800">
							<div className="flex items-center gap-2">
								<ClockIcon className="w-5 h-5" />
								<span>{duration} minutes</span>
							</div>
							<div className="flex items-center gap-2">
								<UsersIcon className="w-5 h-5" />
								<span>
									{audienceArray.length > 0
										? audienceArray
												.map((a) => a.charAt(0).toUpperCase() + a.slice(1))
												.join(", ")
										: ""}
								</span>
							</div>
						</div>
					</div>
					<div className="prose max-w-none text-gray-800 text-lg leading-relaxed">
						<p>{description}</p>
						<UniformRichText
							parameterId="longDescription"
							resolveRichTextRenderer={resolveRichTextRenderer}
						/>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-left text-gray-800">
							Speakers
						</h2>
						<div className="grid gap-4 mt-6 md:grid-cols-4">
							{filteredSpeakers.map((speaker, index) => (
								<div key={index} className="flex items-start gap-4">
									<Avatar className="w-14 h-14 border rounded-full">
										<AvatarImage
											src="/placeholder-user.jpg"
											alt={speaker.name}
										/>
									</Avatar>
									<div>
										<div className="font-medium text-xl text-gray-900">
											{speaker.name}
										</div>
										<div className="text-sm text-gray-800">{speaker.title}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);

registerUniformComponent({
	type: "sessionDetail",
	component: SessionDetail,
});

export default SessionDetail;
