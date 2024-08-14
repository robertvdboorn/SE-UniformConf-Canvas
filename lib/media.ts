import { Asset } from "@uniformdev/assets";

type MediaType = string | Asset | Asset[];


export const isMediaAsset = (media?: MediaType): media is Asset =>
	Boolean(media && typeof media !== 'string' && 'fields' in media);

const isMediaAssets = (media?: MediaType): media is Asset[] =>
	Boolean(media && typeof media !== 'string' && Array.isArray(media) && media.length && 'fields' in media[0]);

export const getMediaUrl = (media?: MediaType) => {
	const mediaUrl: string | undefined = (() => {
		// If it is string image url
		if (typeof media === 'string') return media;
		// If it is asset library image
		if (isMediaAsset(media)) return media?.fields?.url?.value;
		// If it is asset library images
		if (isMediaAssets(media)) return media?.[0]?.fields?.url?.value;
        
		return undefined;
	})();

	if (!mediaUrl || mediaUrl === 'unresolved') return '';

	if (mediaUrl.startsWith('//')) return mediaUrl.replace('//', 'https://');

	return mediaUrl;
};