# Lab Site

## Development

1. Navigate to the `lab-site` directory:

```bash
cd lab-site
```

2. Install the project dependencies:

```bash
npm i
```

3. Start the development server:

```bash
npm run dev
```

4. Open the site at:

```text
http://localhost:5173
```

## Build

To create a production build, run:

```bash
npm run build
```

The compiled website will be generated in:

```text
lab-site/docs
```

Copy the contents of `lab-site/docs` into the `/docs` directory used for deployment.

### GitHub Pages

If deploying with GitHub Pages, create a copy of:

```text
index.html
```

and name the copy:

```text
404.html
```

The final `/docs` directory should contain the compiled site files, including both `index.html` and `404.html`.