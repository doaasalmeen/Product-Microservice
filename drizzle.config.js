import 'dotenv/config';

export default {
    schema : './src/db/schema.js',
    out : './drizzle',
    dialect : 'postgersql',
    dbCredentials : {
        url : process.env.DATABASE_URL
    }
};