import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getImages = async () => {
  const res = await cloudinary.v2.api.resources(
    {
      // transformations: [{ quality: 90 }],
      type: "upload",
      prefix: "dc-in-review",
      max_results: 100,
    },
    (error, result) => {
      // console.log("Result", result);
      if (error) {
        console.log("Error", error);
        return error;
      }
      return result;
    }
  );
  return res;
};

export const imageUrlWithTransformation = (url: string) => {
  const splitUrl = url.split("/image/upload/");
  return `${splitUrl[0]}/image/upload/c_limit,h_480,q_auto:best/${splitUrl[1]}`;
};
