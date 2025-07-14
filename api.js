require('dotenv').config();
 
 async function getAnswer(text){
  // const rawPost = text;
   const fetchData = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer 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`,
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "deepseek/deepseek-r1:free",
    "messages": [
      {
        "role": "user",
        "content":  `${text}`
      }
    ]
  })
});
 const res = await fetchData.json();
 const answer = res.choices[0].message.content;
 console.log(answer);
 return answer;
}

module.exports = {getAnswer};