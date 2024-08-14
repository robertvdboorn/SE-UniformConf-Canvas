import "../styles/style.css";

import { UniformAppProps } from "@uniformdev/context-next";
import { UniformContext } from "@uniformdev/context-react";

import { createUniformContext } from "../lib/context/uniformContext";

const clientContext = createUniformContext();

export default function UniformConfApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  
  // See https://docs.uniform.app/docs/integrations/cdn for edge side personalization configuration
  const outputType = "standard";

  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={outputType}
    >
      <Component {...pageProps} />
    </UniformContext>
  );
}
