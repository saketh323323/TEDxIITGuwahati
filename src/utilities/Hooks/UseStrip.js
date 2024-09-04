import React, { useState, useEffect } from 'react';
import styles from '../partners.module.css';

const useStripContent = (content) => {
  const [contentLines, setContentLines] = useState([]);

  useEffect(() => {
    const lines = content.split('<br/>');
    setContentLines(lines);
  }, [content]);

  return contentLines;
};

const UseStrip = ({ image, title, content }) => {
  const contentLines = useStripContent(content);

  const linesWithMargin = contentLines.map((line, index) => (
    <React.Fragment key={index}>
      <div dangerouslySetInnerHTML={{ __html: line }} />
      {index < contentLines.length - 1 && <div style={{ marginBottom: '10px' }} />}
    </React.Fragment>
  ));

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '45%', margin: 'auto' }}
        />
        <div
          style={{
            fontSize: '24px',
            fontWeight: '350',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
        <p className={styles.content} style={{ width: '55vw', textAlign: 'center', fontWeight: '250' }}>
          {linesWithMargin}
        </p>
      </div>
    </div>
  );
};

export default UseStrip;
