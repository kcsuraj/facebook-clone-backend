const constants = Object.freeze({
  ACCESS_TOKEN_DURATION: process.env.ACCESS_TOKEN_DURATION || '24h',
  REFRESH_TOKEN_DURATION: process.env.REFRESH_TOKEN_DURATION || '24h'
});

export default constants;
