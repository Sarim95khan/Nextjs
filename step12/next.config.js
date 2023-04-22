/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // PGHOST: "ep-black-water-575258.us-east-2.aws.neon.tech",
    // PGDATABASE: "table",
    // PGUSER: "sarim95khan",
    // PGPASSWORD: "gY94DfXoqnZb",
    NEON_DATABASE_URL:
      "postgres://sarim95khan:gY94DfXoqnZb@ep-black-water-575258.us-east-2.aws.neon.tech/table",
  },
};

module.exports = nextConfig;
