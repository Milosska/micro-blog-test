/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  supabase: {
    client: {
      auth: {
        persistSession: false,
      },
    },
  },
};

module.exports = nextConfig;
