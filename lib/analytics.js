import { app } from "./firebase";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

export const analytics = async () => {
  if (typeof window !== "undefined") {
    return isSupported().then((yes) => (yes ? getAnalytics(app) : null));
  } else {
    return null;
  }
};

export const initAnalytics = async () => {
  await console.log(analytics());
  const logNewEvent = () => {
    logEvent(analytics(), "screen_view");
  };
};
