import { killPortProcess } from "kill-port-process";
await killPortProcess(5173); // Vite Dev Server

// Delay used to start the Vite Dev Server a bit later
const sleep = ms => new Promise(res => setTimeout(res, ms));
await sleep(2000);