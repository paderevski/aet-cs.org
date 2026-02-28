
  # Technology School Landing Page

  This is a code bundle for Technology School Landing Page. The original project is available at https://www.figma.com/design/wbdqt9H84RDMttz4xPJ2v9/Technology-School-Landing-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Install node

```sh
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
```

## Deploy (AWS)

This project builds to static files (Vite), so you can deploy it either as a **serverless static site** or on an **EC2 instance with Nginx**.

### Serverless (S3 + CloudFront)

1) Build the site:

```sh
npm i
npm run build
```

2) Create an S3 bucket (example: `aet-cs-org-site`) and upload `dist/`:

```sh
aws s3 sync dist/ s3://aet-cs-org-site --delete
```

3) Create a CloudFront distribution with the S3 bucket as origin:

- Set **Default root object** to `index.html`.
- For SPA routes, configure custom error responses so `403` and `404` return `/index.html` with HTTP 200.

4) (Optional) Add custom domain + TLS:

- Request ACM certificate in `us-east-1`.
- Attach it to CloudFront.
- Point DNS (Route 53 or other provider) to CloudFront.

5) Future deploys:

```sh
npm run build
aws s3 sync dist/ s3://aet-cs-org-site --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### EC2 + Nginx (current setup)

This repo already includes an Nginx config example in `nginx-site.txt` with `root /home/bitnami/aet-cs.org/dist;` and SPA fallback `try_files $uri $uri/ index.html;`.

1) On EC2, build the app in your project folder:

```sh
npm i
npm run build
```

2) Copy/update your Nginx site config (from `nginx-site.txt`) in your Nginx sites config path.

3) Test and reload Nginx:

```sh
sudo nginx -t
sudo systemctl reload nginx
```

4) If using Certbot (as in `nginx-site.txt`), renewals are usually automatic; verify with:

```sh
sudo certbot renew --dry-run
```

5) Future deploys on EC2:

```sh
npm run build
sudo systemctl reload nginx
```