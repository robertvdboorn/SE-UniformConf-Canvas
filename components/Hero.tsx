import {
  ComponentProps,
  registerUniformComponent,
  UniformSlot,
  UniformText,
} from '@uniformdev/canvas-react';

import Splitter from './Splitter';
import { Asset } from '@uniformdev/assets';
import { getMediaUrl } from 'lib/media';

type HeroProps = ComponentProps<{
  name: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image?: Asset;
}>;

const highlightUniform = (value = '') =>
  !value ? null : (
    <span
      dangerouslySetInnerHTML={{
        __html: value.replace('Uniform', '<span class="highlighted">Uniform</span>'),
      }}
    />
  );

function Hero({ name, image }: HeroProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <UniformText
              as="h1"
              parameterId="title"
              className="my-4 text-5xl font-bold leading-tight"
              render={highlightUniform}
              placeholder="Title goes here"
            />
            <UniformText
              as="p"
              parameterId="text"
              isMultiline
              className="leading-normal text-2xl mb-8"
              placeholder="Text goes here"
            />
            <UniformSlot name="buttons" />            
          </div>
          {image && (
            <div className="w-full md:w-3/5 py-6 text-center">
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={getMediaUrl(image)}
                alt={name}
              />
            </div>
          )}
        </div>
      </div>
      <Splitter />
    </>
  );
}

registerUniformComponent({
  type: 'hero',
  component: Hero,
});

export default Hero;
