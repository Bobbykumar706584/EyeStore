const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "instagram");
const outputDir = path.join(__dirname, "public", "instagram-optimized");

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
  const files = fs
    .readdirSync(inputDir)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  console.log(`Found ${files.length} images...\n`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    const before = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toFile(outputPath);

    const after = fs.statSync(outputPath).size;

    console.log(
      `${file}
      ${(before / 1024 / 1024).toFixed(2)} MB  →  ${(after / 1024 / 1024).toFixed(2)} MB`,
    );
  }

  console.log("\n✅ All images compressed successfully!");
}

compressImages().catch(console.error);
