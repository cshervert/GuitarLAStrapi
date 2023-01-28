module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf5iu5un6mpnvbis0q10-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_8eop'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'aTcaUOGj88H2T7HrOIQxcVVcfSwdHqi4'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
