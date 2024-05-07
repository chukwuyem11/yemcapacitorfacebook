import { registerPlugin } from "@capacitor/core";

import { CapacitorFacebookAdsPlugin } from "./definitions";

const ScreenOrientation = registerPlugin("YemCapacitorFacebook");

export * from "./definitions";
export { CapacitorFacebookAdsPlugin };
