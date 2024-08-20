// TODO: Rewrite in TypeScript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ___dirname = absolute path to the folder this file exists in
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// path to the dist folder (the production build by Vite)
const distFolder = path.join(__dirname, '..', 'dist');

// port for backend to listen on
const BACKEND_PORT = 5001;

// create an express app
const app = express();
app.listen(BACKEND_PORT, () =>
  console.log(`Backend listening on http://localhost:${BACKEND_PORT}`)
);


// an /api test route
app.get('/api/test', (req, res) => {
  res.json({ success: 'We can reach the api' });
});

// serve the production version
app.use(express.static(distFolder));

// for frontend routing in a SPA/React to work serve the index.html
// file if nothing else is found (must be the LAST route defined)
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});