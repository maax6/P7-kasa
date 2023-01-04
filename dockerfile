#Create a Jekyll container from a Ruby Alpine image

# At a minimum, use ruby 2.5 or later
FROM ruby:2.7-alpine3.15

# Add Jekyll dependencies to Alpine
RUN apk update
RUN apk add --no-cache build gcc cmake git

# Update the Ruby bundler and install Jekkyll
RUN gem update bundler && gem insall bundler jekyll
