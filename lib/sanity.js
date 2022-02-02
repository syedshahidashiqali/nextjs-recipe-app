import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity"

const config = {
  projectId: "8bsjbiwx",
  dataset: "production",
  apiVersion: "2022-02-02", // Y / M / D must be in format
  useCdn: false,
}

export const sanityClient = createClient(config)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})