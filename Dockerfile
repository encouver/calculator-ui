# Specify the node base image with your desired version node:<version>
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy only the necessary files to the working directory
COPY . .

# Build the app
RUN yarn build

# Expose the port the app runs on
EXPOSE 3003

# Start the application
CMD ["yarn", "start"]