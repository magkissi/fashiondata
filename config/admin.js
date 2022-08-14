module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e819af2ab10c75eabdea7eb4f6e4af35'),
  },
});
