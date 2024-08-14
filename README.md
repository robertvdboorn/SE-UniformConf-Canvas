# UniformConf Next.js Starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Configure environment variables

The project is already configured to use a sample Uniform project.
Check out the [.env.example file](./.env.example) for instructions on how to use your own project instead.

### Install packages

```shell
npm i
# or
yarn
```

### Run the development server

```shell
npm run dev
# or
yarn dev
```

Open <http://localhost:4455> with your browser to see the result.

## Testing

Project contains examples with multiple rendering modus.

 - `/examples/ssg/...` - SSG via slug resolution
 - `/examples/ssr/...` - SSR via slug resolution
 - `/pmap/ssg/...` - SSG via Project Map resolution
 - `/pmap/ssr/...` - SSR via slug resolution

## Learn More

To learn more about Uniform, take a look at the following resources:

- [Documentation](https://docs.uniform.app/docs) - learn about Uniform's features and the API.
- [Component Starter Kit (page router)](https://github.com/uniformdev/uniform-component-starter-kit) - a Uniform component starter kit using Next.js page router.
- [Component Starter Kit (app router)](https://github.com/uniformdev/component-starter-kit-next-approuter) - a Uniform component starter kit using Next.js app router.
- [Documentation about Edgehancers](https://docs.uniform.app/docs/guides/composition/connect-external-data#edgehancers-and-data-connections) - learn about Edgehancers and data connections 
- [Stored Endpoint (Swagger)](https://uniform.app/schemas/swagger.html) - Uniform's endpoint returning stored data (Fastly).
- [Edgehanced Endpoint (Swagger)](https://uniform.global) - Uniform's endpoint returning edgehanced data (Cloudflare).

You can check out [our website](https://www.uniform.dev/recipes) and [our docs](https://docs.uniform.app/docs/recipes) for a variety of Uniform usage recipes.