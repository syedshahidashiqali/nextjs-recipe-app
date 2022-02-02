import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity"

const config = {
  projectId: "8bsjbiwx",
  dataset: "production",
  apiVersion: "02-02-2022",
  useCdn: false,
}

export const sanityClient = createClient(config)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})