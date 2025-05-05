export default ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  url: 'https://creditx.corestackpro.com',
  app: {
    keys: env.array('APP_KEYS'),
  },
});