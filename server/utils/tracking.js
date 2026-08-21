import crypto from 'crypto';

export const generateTrackingCode = () => {
  const numPart = Math.floor(100000 + Math.random() * 900000); // 6 digits
  const hexPart = crypto.randomBytes(2).toString('hex').toUpperCase(); // 4 chars hex
  return `CIV-${numPart}-${hexPart}`;
};
