'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utmParams.forEach(param => {
      const value = searchParams.get(param);
      if (value) sessionStorage.setItem(param, value);
    });
  }, [searchParams]);

  return null;
}
