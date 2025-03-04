const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageFormats = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageFormats.includes(ext)) {
      const filePath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, `optimized-${file}`);
      
      await sharp(filePath)
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath.replace(ext, '.webp'));
    }
  }
}

optimizeImages(); 