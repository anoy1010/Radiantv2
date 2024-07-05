const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BASE_URL: "http://192.168.1.12:3000",
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
