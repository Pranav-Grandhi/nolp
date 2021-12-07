star rating: https://javascript.plainenglish.io/how-to-build-a-star-rating-component-in-react-dad06b05679b

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```
//-----------------------------------\\
            ______             ______
  |\    |  |      |  |        |      |
  | \   |  |      |  |        |______|
  |  \  |  |      |  |        |
  |   \ |  |      |  |        |
  |    \|  |______|  |______  |
//-----------------------------------\\
```

# Nolp

## About the Project

_This is a PARODY WEBSITE not intended for commercial use. The purpose of the website to be a design project. All materials provideed are merely for educational use._

Traditionally, users look to review websites to get recommendations for which establishments to visit, be it through good reviews or high ratings. Nolp offers something completely different. It redefines what it means to be a review website. The purpose of Nolp is to provide users with a platform that, along with recommending highly rated establishments, also provides information on which establishments were generally disliked. The service provides valuable information for users who generally prefer to think outside the box - those who don't always go to the best-reviewed establishments and strive to experience something new. Nolp provides an opportunity for everyone to break away from the longstanding pattern of going to the best-reviewed establishments - all while ensuring that the experience is still enjoyable for everyone.

Let's say you wanted to try out a new restaurant in town. Instead of searching for each restaurant you come across on a generic review website, Nolp would offer you the capability of seeing all generally disliked restaurants in your area, eliminating the need to search up every place you come across. You will know what to avoid and what to enjoy at a moment's notice. Not only does Nolp work for restaurants, but it offers the same groundbreaking experience for almost any establishment you can dream of. This isn't an ordinary review website. This is Nolp. The future.

Built with:

- TypeScript
- JavaScript
- CSS

## Classes

```
User {
    ...nextauth
    reviews        Review[]
}

Business {
    id          @id @default(uuid())
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
    name        String
    image       String[]
    location    String
    about       String
    rating      Int
    owner       user
    reviews     Review[]
}

Review {
    user        User
    rating      Int
    business    Business
}
```

## Tickets

1. Scaffold out initial pages with dummy data (using TypeScript) [x]
   - Create nav to navigate to relevant pages
   - Create pages:
     - / [x]
     - /about [x]
     - /create [x]
     - /profile [x]
     - /user/:slug [x]
     - /biz/:slug [x]
     - /biz/:slug/edit
2. Add support for a user to login with NextAuth [x]
   - Create local Google OAuth app [x]
   - If user isn't logged in and they go to /create redirect to / [x]
   - If user isn't logged in and they go to /profile redirect to / [x]
   - If user is logged in show users info on /profile page [x]
3. Add Planetscale support and replace dummy data with database [x]
   - Use Prisma w/ TypeScript [x]
   - [Update NextAuth to store users in Planetscale](https://next-auth.js.org/configuration/options#database)
   - Create schemas [x]
   - (Maybe) Inject dummy data for:
     - 1-3 random
     - [Use fallback: blocking](https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking)
4. Add basic support for creating a new business
   - Add react-hook-form[x]
   - Create form to create incident[x]
     - input: name
     - input: image
     - input: location
     - input: about
   - Create graphql api
   - ~Add apollo~
   - use [slugify](https://www.npmjs.com/package/slugify) to save slug of title
   - On success go to business page
5. Add support for listing businesses on their profile page
   - Link to buziness page
   - Add button to delete buziness
   - Make delete button functional
6. Add support for listing reviews on their profile page
   - Link to review
   - Add button to delete review
   - Make delete button functional
7. Add support for editing an incident from the incident page
   - At URL /biz/:slug/edit
   - Create UI to edit fields
   - Create API endpoint to submit changes /api/edit
8. Get planetscale working in production
9. Style business page
   - make it big and responsive
10. Style profile page
    - Simple list of business and comments
11. Deploy to verce
    - official planetscale connection in vercel [link](https://davidparks.dev/blog/planetscale-deployment-with-prisma/#deploying)
12. Switch from planetscale

- keep in mind storage + data

13. abstract things to middeware??? (not signed in redirects?)
14. Jamstack or headless event queu for sensoring
15. Aws moderation or azure?

## Tech stack

- Next.js
- [TailwindCSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)
- [HeadlessUI](https://headlessui.dev/)
- [HeroIcons](https://heroicons.com/)
- Apollo Graphql
- PlanetScale/MySQL
- NextAuth.js
- Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
