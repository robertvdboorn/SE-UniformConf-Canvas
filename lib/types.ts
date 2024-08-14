export type ProjectMapLink = {
	path: string;
	type?: string;
	isRoot?: boolean;
	name?: string;
	dynamicInputTitle?: string;
	dynamicInputValues?: Record<string, string>;
};
