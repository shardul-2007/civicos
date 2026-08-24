export const generateTrackingCode = () => {
  const currentYear = new Date().getFullYear();
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit integer
  return `CIV-${currentYear}-${randomNum}`;
};
