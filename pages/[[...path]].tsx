import "../components";

import type { UniformCompositionNextPage } from "@uniformdev/canvas-next";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { useSetViewportQuirk } from "lib/useSetViewportQuirk";

export const getServerSideProps = withUniformGetServerSideProps({});

const page: UniformCompositionNextPage = (props) => {
	useSetViewportQuirk();

	return (
		<UniformComposition data={props.data}
		// resolveRenderer={resolveRenderer} // Uncomment this line to use the custom component mapping
		>
			<UniformSlot name="header" />
			<UniformSlot name="content" />
			<UniformSlot name="footer" />
		</UniformComposition>
	);
};

export { page as default };
