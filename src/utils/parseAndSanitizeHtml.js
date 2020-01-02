import React from 'react';
import dompurify from 'dompurify';

export const parseAndSanitizeHtml = markup => {
  const sanitizer = dompurify.sanitize;
  return <span dangerouslySetInnerHTML={{ __html: sanitizer(markup) }} />;
};
