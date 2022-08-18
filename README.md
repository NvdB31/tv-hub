# TV Hub

This is a demo site to demonstrate my software development capabilities.

TV Hub is a Nuxt SSR-generated website that shows the most popular tv shows.
It also shows the details about a particular TV shows, and allows you to search for shows.

This app was built with Vue 3 and Nuxt. It uses the [TV Maze API](https://www.tvmaze.com/api) to fetch data about TV shows.

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Process & Technical reasoning

This site was built in about 9-hours, in two afternoons. I used a
Below I've explained the reasoning behind several choices that were made.

### Framework

I've chosen to use Nuxt as a framework. Nuxt supports server-side-rendering (SSR), which I felt is a requirement for a consumer-oriented website for two reasons: 1) It improves SEO performance because Google's bots perform better when the server responds with the full page HTML. 2) It generally improves overall site user experience, because the server takes the responsibility for rendering the initial page, instead of leaving all that work for the client.

### Styling

I've chosen to use Tailwind because it makes it easier for me to ensure consistent styling across the site. It forces me a developer to stay inside the safe bounds of theme-based style rules (such as spacing, colors etc.) Also, the fact that styling is co-located with the HTML makes it easier to update it, because I spend less time moving from markup to styling blocks. Finally, Tailwind also prevents me from having to spend time naming CSS classes. This is also very valuable when working with other colleagues because when everyone is forced to speak the common language this prevents the typical horror of blown-up, 300kb+ stylesheets that become un-maintainable over time.

**_Bonus_** I took the freedom to experiment a little bit with adaptive-colors based on a blurred poster, in order to create an appealing effect that works well with different colors. (`FeaturedShow.vue`)

### API

API calls have been setup using composables. I've used the shows and schedules endpoints. Nuxt comes with a built-in library to perform API calls, which I've used to move quickly for the purposes of this demo. I did not rely on Axios or any other common HTTP library since I didn't have any complex requirements and only rely on simple GET calls for a public API.

## State

I've used Nuxt's built-in `useState` composables. Since for this app, shared state is limited to a simple list for keeping track of favourites and some UI state for the mobile navbars, there was no need for a central state management solution like VueX or Pinia.

### Limitations of this demo

There's several things I did not do, for reasons of time and things I felt were out of scope for an assesment/demo:

- Tests have been created for just 1 component and 1 unit (composable). Just to show ability to work with testing libs. For a real use-case, I'd of course aim for larger test coverage.
- Since the TV Maze API does not have any filtering options, I used rudimentary Array modifications to sort and categorise the TV shows, so that I was able to display them in interesting ways.
- Responsiveness needs some optimisation, esp. for medium-sized screens.
- I've rolled my own sidebar and modals for the nav and search. However, for real use-cases I'd either use a library like Tailwind UI, or spend more time on it to make sure they conform to a11y standards.
- The adaptive-colors based component `FeaturedShow.vue` uses `mix-blend-mode` for coloring, however this can lead to text contrasts that do not conform to WCAG-guidelines, so this needs some additional tinkering before production use.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
