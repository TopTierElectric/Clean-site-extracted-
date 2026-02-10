import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AttributionContext = createContext({ attributionData: {} });

export function AttributionProvider({ children }) {
  const [attributionData, setAttributionData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const params = new URLSearchParams(window.location.search);
      const data = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'].forEach((key) => {
        if (params.has(key)) data[key] = params.get(key);
      });
      setAttributionData(data);
    }
  }, [router]);

  return <AttributionContext.Provider value={{ attributionData }}>{children}</AttributionContext.Provider>;
}

export function useAttribution() {
  return useContext(AttributionContext);
}
