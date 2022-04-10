import React from 'react';

function Article({ title, date="January 1, 1970", preview, minutes}) {
    const emojiCount = (minutes) => {
      if (minutes < 30) {
          let x = Math.ceil(minutes / 5);
            return '☕️'.repeat(x)
      }  
      else {
          let x = Math.ceil(minutes / 10);
            return "🍱".repeat(x)
      }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {emojiCount(minutes)} {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article