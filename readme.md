# [Covered 2020 Marketing site](https://covered.vercel.app)
By [Laxalt & McIver](www.laxaltandmciver.co)

Led by [Peter Laxalt](https://dribbble.com/peterlaxalt)

## Architecture

- Frontend
  - [Next.js](https://nextjs.org/)
  - [React.js](https://reactjs.org/)
  - [Styled Components](https://styled-components.com/)
  - [Typescript](https://www.typescriptlang.org/)
- Backend
  - [Sanity](https://www.sanity.io/)
- Hosting & serverless deployment
  - [Vercel](https://vercel.com/laxaltandmciver/covered)
- Automation of static builds
  - [Zapier](https://zapier.com/app/dashboard)

## Installation

1. `git clone git@github.com:lmnts-dev/covered-2020.git`
2. `cd covered-2020`
3. `cd web && yarn install && cd ../studio && yarn install`

## Development

To develop on the frontend of the site:

1. `cd web && npm run dev`
2. Make updates as needed.
3. Commit your changes back to Github.

To develop on the content model of the site:

1. `npm install -g @sanity/cli`
2. `cd studio && sanity start`
3. Make updates as needed.
4. Commit your changes back to Github.

## Deployment

### To deploy just the frontend
Simply commit to the master branch and our CI processes on Github will deploy the appropriate URLs to Vercel.

### To deploy Sanity Studio
`cd studio && sanity deploy`

### To deploy both in one swing
You have to make sure you haven't committed anything yet as this bash script runs `git add . && git commit` as well.

`bash deploy.sh <branch-name | defaults to 'master' if not specified>`

### Deploy your own

Deploy the example using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://github.com/lmnts-dev/covered-2020)

# Data Sources

- [Sanity](https://manage.sanity.io/projects/hpvpbfax/settings/api)
- [Airtable](https://airtable.com/tblYVYIn8Qvez885Q/viwWlwGYVN7C5kRGB)

## Sanity Content Model

### Dataset

- Name: `covered`
- Project ID: `hpvpbfax`
- URL: `www.`
