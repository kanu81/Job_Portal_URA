import dotenv from 'dotenv';
dotenv.config();


const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;

if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID || !AUTH0_CLIENT_SECRET || !AUTH0_AUDIENCE) {
    const missingVars = [
        !AUTH0_DOMAIN && 'AUTH0_DOMAIN',
        !AUTH0_CLIENT_ID && 'AUTH0_CLIENT_ID',
        !AUTH0_CLIENT_SECRET && 'AUTH0_CLIENT_SECRET',
        !AUTH0_AUDIENCE && 'AUTH0_AUDIENCE',
    ].filter(Boolean).join(', ');

    throw new Error(`Missing necessary Auth0 environment variables: ${missingVars}`);
}

const auth0Config = {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    audience: AUTH0_AUDIENCE,
};

export default auth0Config;
