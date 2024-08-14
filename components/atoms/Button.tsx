import {
	registerUniformComponent,
	UniformText,
} from "@uniformdev/canvas-react";
import { ProjectMapLink } from "lib/types";
import Link from "next/link";

function Button({ text, link }: { text: string; link?: ProjectMapLink }) {
	return text && link ? (
		<Link
			prefetch={false}
			href={link ? link.path : "#"}
			className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
		>
			<UniformText parameterId="text" />
		</Link>
	) : (
		<UniformText
			parameterId="text"
			className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
		/>
	);
}

registerUniformComponent({ type: "button", component: Button });

export default Button;
