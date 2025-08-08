This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



1. Introduction
    This document explains the step-by-step flow of a translation system that uses the
    Google Cloud Translation API combined with in-memory and localStorage caching to improve
    performance and reduce API usage.

2. API Used
    API: Google Cloud Translation API v2
    Endpoint:
    POST https://translation.googleapis.com/language/translate/v2
    Request Body:
    - q: array of strings (texts to translate)
    - target: target language (e.g., &quot;fr&quot;)
    - format: usually &quot;text&quot;
    URL Parameter:
    - key: your API key (e.g., ?key=YOUR_API_KEY)
    Example Request:
    {
    &quot;q&quot;: [&quot;Hello&quot;, &quot;How are you?&quot;],
    &quot;target&quot;: &quot;fr&quot;,
    &quot;format&quot;: &quot;text&quot;
    }
    Example Response:
    {
    &quot;data&quot;: {
    &quot;translations&quot;: [
    { &quot;translatedText&quot;: &quot;Bonjour&quot; },
    { &quot;translatedText&quot;: &quot;Comment allez-vous ?&quot; }
    ]
    }
    }

3. Step-by-Step Translation Process
    Step 1: Input Received - Function receives input text(s) and target language.
    Step 2: Check Target Language - If target is &#39;en&#39;, return original text.
    Step 3: Normalize Input - Convert string input to array if necessary.
    Step 4: Initialize Helpers - Create results[], textsToTranslate[], indexMap[].
    Step 5: Try Fetching from Cache - Check memory cache and localStorage.
    Step 6: Make API Call - Translate uncached texts via Google API.
    Step 7: Process and Store API Response - Save results to cache and results[].
    Step 8: Error Handling - Use original text if API call fails.
    Step 9: Return Final Output - Return translated result(s).
4. Caching Overview
    Cache Types:
    - Memory Cache (Map)
    - LocalStorage (Browser only)
    Key Format: &lt;target_language&gt;:&lt;original_text&gt;
    Value: &lt;translated_text&gt;
5. Summary
    This translation system combines real-time translation via the Google Cloud Translate
    API with efficient caching using both memory and localStorage to ensure performance, cost-
    effectiveness, and responsiveness.