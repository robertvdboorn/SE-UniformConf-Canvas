import { Asset } from '@uniformdev/assets';
import { UniformRichText } from '@uniformdev/canvas-next';
import { ComponentProps, registerUniformComponent, UniformSlot } from '@uniformdev/canvas-react';
import { getMediaUrl } from 'lib/media';
import { resolveRichTextRenderer } from 'lib/richTextRenderers';
import React from 'react';

export const WhyAttendLoading = () => {
  return <div className="container mx-auto flex flex-wrap pt-4 pb-12" style={{ minHeight: 515 }}></div>;
};

export type WhyAttendProps = ComponentProps<{
  title: string;
  text: string;
  image?: Asset;
}>;

const WhyAttend = ({ title, text, image, component }: WhyAttendProps) => {
  const variant = component.variant === 'whyattendleft' ? 'Left' : 'Right';
  const labelStyle = variant === 'Left' ? 'bg-green-100 text-green-800' : 'bg-red-800 text-white';

  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div
          className={`flex flex-wrap ${variant === 'Left' ? 'flex-row-reverse' : ''}`}
        >
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <ImageComponent image={getMediaUrl(image)} />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 flex flex-col justify-center">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <span
                className={`px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${labelStyle}`}
              >
                {variant} variant
              </span>
            </div>
            <UniformRichText parameterId="text" className='text-gray-800 mb-8 text-center sm:text-left' resolveRichTextRenderer={resolveRichTextRenderer}/>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageComponent = ({ image }: { image: string }) => {
  return image ? (
    <img
      src={image}
      alt="Why attend image"
      width={400}
      height={400}
      loading="lazy"
      className="object-cover rounded-lg shadow-md w-full sm:h-64 mx-auto"
    />
  ) : null;
};

registerUniformComponent({
  type: 'whyAttend',
  component: WhyAttend,
});

export default WhyAttend;