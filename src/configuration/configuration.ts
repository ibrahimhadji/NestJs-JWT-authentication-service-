export const configuration = {
  port: process.env.PORT,
  AT_SECRET: process.env.AT_SECRET,
  RT_SECRET: process.env.RT_SECRET,

  database: {
    url: process.env.URL,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
};
