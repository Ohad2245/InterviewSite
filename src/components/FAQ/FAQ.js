import React from 'react';

function FAQ({faq,index,toggleFAQ}) {
  return (
    <div 
        className = {"faq " + (faq.open ? 'open' : '')}
        key = {index}
        onClick={()=>toggleFAQ(index)}
    >
        <div className = "faq-question">
            {faq.question}
        </div>
        <div className = "faq-answer">
            {faq.answer}
            <br/>
            {faq.image}
        </div>
    </div>
  )
}

export default FAQ;