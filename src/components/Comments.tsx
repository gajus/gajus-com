'use client';

import { useEffect, useRef } from 'react';

export const Comments = () => {
  const effectRan = useRef(false);

  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (effectRan.current) {
      return;
    }

    effectRan.current = true;

    const parent = parentRef?.current;

    const script = document.createElement('script');

    script.setAttribute('src', 'https://giscus.app/client.js');
    script.setAttribute('data-repo', 'gajus/gajus-com');
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzNTY0MjM5MDg=');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOFT6Y5M4CZ_0u');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '0');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');

    parent?.appendChild(script);
  }, [parentRef]);

  return <div ref={parentRef} />;
};
