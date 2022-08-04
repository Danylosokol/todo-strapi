module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '906d008360e4e7ab38fa479b32068bab'),
  },
});
