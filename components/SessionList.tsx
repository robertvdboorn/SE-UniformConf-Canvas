import {
  ComponentProps,
  registerUniformComponent,
  UniformSlot,
  UniformText,
} from "@uniformdev/canvas-react";
import React from "react";

export type SessionListProps = ComponentProps<{
  title: string;
}>;

function SessionsWrapper({ items }: { items: React.ReactNode[] }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
        >
          {item}
        </div>
      ))}
    </>
  );
}

function SessionList({ }: SessionListProps) {
  return (
    <fieldset>
      <section className="bg-white border-b py-24">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <UniformText as="h1" className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" parameterId="title" placeholder="Title goes here" />
          <UniformSlot name="sessions" wrapperComponent={SessionsWrapper} />
        </div>
      </section>
    </fieldset>
  );
}

registerUniformComponent({
  type: "sessionList",
  component: SessionList,
});

export default SessionList;
