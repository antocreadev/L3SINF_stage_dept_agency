# Test Webflow to nextjs with devlink tool and headless cms (Contentful).

## Getting Started

First, run the development server:

1. Clone the repository
2. Copy the `.env.example` file to `.env.local` and fill in the necessary environment variables
3. Install dependencies with `npm install`
4. Run the development server with `npm run dev`



# Push image to docker hub 
1. `docker login`
2. `docker build -t nom:version .`
3. `docker run -p 3000:3000 nom:version`
4. `docker images`
5. `docker tag image_id docker_hub_username/nom:version`
6. `docker push docker_hub_username/nom:version`

# Push image to github container registry
1. `docker login docker.pkg.github.com -u USERNAME --password-stdin <<< TOKEN`
2. `docker build -t docker.pkg.github.com/username/repo/nom:version .`
3. `docker push docker.pkg.github.com/username/repo/nom:version`
verify the image in github container registry
`docker pull docker.pkg.github.com/username/repo/nom:version`