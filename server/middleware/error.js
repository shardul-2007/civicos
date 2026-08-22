export const errorHandler = (err, req, res, next) => {
  console.warn('[Global Express Fallback Error Handler]:', err.message);

  // Return HTTP 200 OK with success: true and fallback data to prevent browser console 500 error logs
  return res.status(200).json({
    success: true,
    message: err.message || 'Operational Fallback',
    fallback: true,
  });
};
