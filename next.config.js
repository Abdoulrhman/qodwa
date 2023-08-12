/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Update here your access credential
  env: {
    JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
    AWS_SES_USER: "<Update here AWS USER>",
    AWS_SES_PASSWORD: "<Update here AWS SES PASSWORD>",
    CLOUD_NAME: "abdoul95",
    UPLOAD_PRESETS: "my-uploads-persist",
    CLOUDINARY_URL:
      "https://api.cloudinary.com/v1_1/abdoul95/my-uploads-images/upload",
    CLOUDINARY_VIDEO_URL:
      "https://api.cloudinary.com/v1_1/abdoul95/my-uploads-videos/upload",
    CLOUDINARY_ZIP_URL:
      "https://api.cloudinary.com/v1_1/abdoul95/my-uploads-images/zip>",
    STRIPE_SECRET_KEY:
      "sk_test_51M5pzPA9nNChy0mSTpvJD4ruexTxQPh4DIt6IDkd8h7fsAUN6vfjMGPLQClAqK0BsbQaWwBHr2ykdTsVvWupCxiH008329UnUj",
    STRIPE_PUBLISHABLE_KEY:
      "pk_test_51M5pzPA9nNChy0mS13rgSxPxHWh1irFZGpvE7Ub9oivtMPt65tHug8FUC1kWfy0rMHHyiTlL1BuomKTJiOtoA4Cb00oSY4EMlo",
  },
};

module.exports = nextConfig;
