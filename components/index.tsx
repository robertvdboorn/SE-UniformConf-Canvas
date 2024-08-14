import "./atoms/Button";
import "./Footer";
import "./Hero";
import "./Navbar";
import "./Page";
import "./RegisterForm";
import "./Session";
import "./SessionDetail";
import "./SessionList";
import "./WhyAttend";

// You can also create  your own component mapping table, see [[...path]].tsx for usage
/*
import { ComponentInstance } from "@uniformdev/canvas";
import {
	ComponentProps,
	DefaultNotImplementedComponent,
} from "@uniformdev/canvas-react";
import { ComponentType } from "react";

import Button from "./atoms/Button";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Page from "./Page";
import RegisterForm from "./RegisterForm";
import Session from "./Session";
import SessionDetail from "./SessionDetail";
import SessionList from "./SessionList";
import WhyAttend from "./WhyAttend";

const mappings: ComponentMapping = {
	hero: Hero,
	sessionlist: SessionList,
	session: Session,
	whyAttend: WhyAttend,
	registrationForm: RegisterForm,
	header: Navbar,
	footer: Footer,
	page: Page,
	button: Button,
};

type ComponentMapping = Record<string, ComponentType<any>>;

export function resolveRenderer(
	component: ComponentInstance
): ComponentType<ComponentProps<any>> | null {
	const componentImpl = mappings[component.type];
	return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}
export default mappings;
*/