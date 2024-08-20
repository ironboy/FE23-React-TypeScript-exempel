import { killPortProcess } from "kill-port-process";

await killPortProcess(5001); // Node.js backend
await killPortProcess(5173); // Vite Dev Server