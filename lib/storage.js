import { app } from "./firebase";
import { getStorage, ref, uploadString } from "firebase/storage";

const storage = getStorage(app);
const fileRef = ref(storage, "/mindmate");

export const sendFeedback = async (data) => {
  const response = await uploadString(fileRef, data)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Error uploading data: ", error);
      return false;
    });

  return response;
};
