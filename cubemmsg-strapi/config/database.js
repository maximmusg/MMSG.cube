module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccq5qjen6mporol8gs30-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mmsgcube'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'bEKshVci9tN3IpRp2DUH0M44gLViL9Hs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
