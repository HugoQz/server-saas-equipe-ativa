// src/env.ts

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z
      .string()
      .url()
      .default(
        'postgresql://docker:docker@localhost:5432/next-saas?schema=public',
      ),
    JWT_SECRET: z.string().default('my-jwt-secret'),
    GOOGLE_OAUTH_CLIENT_ID: z.string().default(''),
    GOOGLE_OAUTH_CLIENT_SECRET: z.string().default(''),
    GOOGLE_OAUTH_CLIENT_REDIRECT_URI: z.string().url().default(''),
  },
  shared: {
    NEXT_PUBLIC_API_URL: z
      .string()
      .url()
      .default('https://api.equipeativa.com'),
  },
  client: {}, // se você não usa em frontend, deixe vazio
  runtimeEnv: {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_CLIENT_REDIRECT_URI:
      process.env.GOOGLE_OAUTH_CLIENT_REDIRECT_URI,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  emptyStringAsUndefined: true,
})
