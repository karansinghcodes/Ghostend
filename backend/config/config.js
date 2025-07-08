import "dotenv/config";

export const configs = {
  portNumber: process.env.PORT_NUMBER,
  geminiApiKey: process.env.GEMINI_API_KEY,
};

for (const [key, value] of Object.entries(configs)) {
  if (!value) {
    console.error(`Missing config: ${key}`);
    throw new Error(`Missing environment variable: ${key}`);
  } else {
    console.log(`✅ ${key} is set`);
  }
}
