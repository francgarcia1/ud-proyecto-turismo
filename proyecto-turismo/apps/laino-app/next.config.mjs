// next.config.js

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Agregar la regla para manejar archivos de vídeo
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    // Retorna la configuración modificada
    return config;
  },
};

export default nextConfig;
