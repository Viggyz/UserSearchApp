# UserSearchApp

## Requirements

Redis cache server running in the background

## Installation

- cd client && npm install
- cd ../expressserv && npm install
- npm run prod

## Express Server

- In an effort to maintain consistency of error responses, a custom error class was defined which was inherited by multiple specific error classes.
- For GitHub API user searching, only 4 properties are retained by server, which can reasonably be display to user without requiring more API calls.
- Search results are kept minimal due to rate limits(10 for unauthenticated requests)
- Retains only 15 of 30 results returned for uncluttered front-end
- make-client.ts file for initializing a redis client which can be exported to different files at different heirarchies.

## React Client

- Material UI used for all Components as allows javascript to be focused on utility.
- Material UI used for modular import as well as being implemented completely in React, doesn't utilize any external libraries.
- Javascript utilized instead of TypeScript for maintaining simplicity of front-end and fast development
