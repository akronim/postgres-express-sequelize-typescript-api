import dotenv from 'dotenv';

dotenv.config();

export const { DBCS, TEST_DBCS, TOKEN_SECRET, BASE_URL } = process.env;
