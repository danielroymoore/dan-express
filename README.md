# Projects server

A web server that provides a basic HTTP api for querying projects from a database.

## Getting Started

To install dependencies and start the server in development mode:

```sh
npm install
npm run start
```

The server will now be running on `http://localhost:3000`

Then we can try the `/projects` endpoint. Here is an example that uses `curl`

```sh
curl -H "Authorization: token $(uuidgen)" http://localhost:3000/projects
```

The endpoint supports pagination with query params:

```sh
curl -H "Authorization: token $(uuidgen)" http://localhost:3000/projects?page=1&size=3

Result:

{
  "currentPage": 1,
  "totalPages": 5,
  "projects": [
    {
      "id": "cfafa6a2-6bca-45d1-9ae3-8ed7bc01d99d",
      "url": "https://registry.verra.org/app/projectDetail/VCS/4699",
      "status": "Under development",
      "country": "South Africa"
    },
    {
      "id": "b22abb14-9976-4b28-a0fe-51265b104d33",
      "url": "https://registry.verra.org/app/projectDetail/VCS/4639",
      "status": "Under validation",
      "country": "China"
    },
    {
      "id": "04d89783-9304-4daf-9130-04aa9f17cd64",
      "url": "https://registry.verra.org/app/projectDetail/VCS/4580",
      "status": "Under validation",
      "country": "Myanmar"
    }
  ]
}
```

You can run the tests with:

```sh
npm run test
```
