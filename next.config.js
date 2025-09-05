/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // Enable the new JSX Transform
    reactRemoveProperties: false,
  },
  webpack: (config) => {
    // Ensure React is available globally for older components
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
    };
    return config;
  },
}

module.exports = nextConfig
