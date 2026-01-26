import { useMemo } from 'react';

export const useUTMParams = (): string => {
  return useMemo(() => {
    if (typeof window === 'undefined') return '';

    const params = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();

    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    utmKeys.forEach(key => {
      const value = params.get(key);
      if (value) {
        utmParams.append(key, value);
      }
    });

    const queryString = utmParams.toString();
    return queryString ? `&${queryString}` : '';
  }, []);
};

export const buildCheckoutUrl = (baseUrl: string, utmParams: string): string => {
  if (!baseUrl) return '';

  if (baseUrl.includes('?')) {
    return `${baseUrl}${utmParams}`;
  }

  return `${baseUrl}${utmParams.replace('&', '?')}`;
};
