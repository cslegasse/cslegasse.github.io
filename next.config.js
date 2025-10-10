
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  reactStrictMode: true,
  basePath: "/cslegasse.github.io",
};

module.exports = {
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// module.exports = {
//   experimental: {
//     appDir: true
//   }
// }

// module.exports = nextConfig;