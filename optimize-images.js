import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  const files = await imagemin(["dist/*.{jpg,png}"], {
    destination: "images",
    plugins: [
      imageminMozjpeg({ quality: 100 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  });

  console.log("Images optimized:", files);
})();
