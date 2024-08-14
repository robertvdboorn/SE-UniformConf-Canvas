/*
import { enhance, EnhancerBuilder } from '@uniformdev/canvas';
*/
import { createPreviewHandler } from '@uniformdev/canvas-next';
import getConfig from 'next/config';

const handler = createPreviewHandler({
  secret: () => getConfig().serverRuntimeConfig.previewSecret || 'not-so-secret',
  resolveFullPath: ({ slug, path }) => (path ? `/pmap${path}` : slug),
  playgroundPath: '/playground',
  
  //This is simple enhancer, it converts "personalization" to "p13n"
  // See https://docs.uniform.app/docs/guides/composition/enhancers for more information

  /*
  enhance: (composition) =>
    enhance({
      composition,
      enhancers: new EnhancerBuilder().parameter((e) => {
        if (typeof e.parameter.value === 'string') {
          return e.parameter.value.replace(/personalization/gi, 'p13n');
        }
      }),
      context: {
        preview: true,
      },
    }),
    */

});

export default handler;
