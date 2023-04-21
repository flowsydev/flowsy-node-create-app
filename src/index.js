#!/usr/bin/env node

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import menu from "./menu/index.js";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
(async function(){
  try {
    console.warn("==================================================================================");
    console.warn("This tool is currently in an early development phase, so it's not functional yet!!");
    console.warn("==================================================================================");

    const answers = await inquirer.prompt(menu({
      answers: {
        projectName: process.argv[2]
      }
    }));
    const spinner = createSpinner("Processing...").start();
    await sleep();
    spinner.stop();
    console.log("Your selection:", answers);
  } catch (error) {
    console.error(error);
  }
})();
