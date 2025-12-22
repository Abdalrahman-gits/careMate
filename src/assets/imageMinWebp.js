import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "path";

await imagemin([path.resolve("src/assets/*.{jpg,png}")], {
  destination: path.resolve("src/assets/optimized3"),
  plugins: [imageminWebp({ quality: 100 })],
});

console.log("Images optimized");
