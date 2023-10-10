import { headers } from 'next/headers';

const FALLBACK_IP_ADDRESS = '0.0.0.0';

/**
 * Oddly enough, this is the only way to get the client's IP address.
 * @see https://github.com/vercel/next.js/issues/47793
 */
export const getClientIpAddress = () => {
  const forwardedFor = headers().get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
};
