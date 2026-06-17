const fs = require('fs');

const groqKey = process.env.GROQ_API_KEY || 'GROQ_KEY_NOT_SET';
const weatherKey = process.env.WEATHER_API_KEY || 'WEATHER_KEY_NOT_SET';

const configContent = `const CONFIG = {
    GROQ_API_KEY: "${groqKey}",
    WEATHER_API_KEY: "${weatherKey}"
};`;

fs.writeFileSync('config.js', configContent);
console.log('✅ config.js generated');