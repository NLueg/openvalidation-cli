#!/usr/bin/env node

const [, , ...args] = process.argv;

const exec = require("child_process").exec;
// const path = require("path");
const jre = require("node-jre");

var runOpenvalidation = function() {
  // const exePath = path.join(__dirname, `/openvalidation.exe`);
  // console.log(exePath);
  // const child = exec(exePath, args);

  var output = jre.spawn(
    // call synchronously
    ["java/openvalidation.jar"], // add the relative directory 'java' to the class-path
    "org.springframework.boot.loader.JarLauncher", // call main routine in class 'Hello'
    args, // pass 'World' as only parameter
    { encoding: "utf8" } // encode output as string
  ); // take output from stdout as trimmed String

  if (!!output.stderr) {
    output.stderr.on("data", stderr => {
      console.error(`${stderr}`);
    });
  }

  if (!!output.stdout) {
    output.stdout.on("data", stderr => {
      console.log(`${stderr}`);
    });
  }
};

runOpenvalidation();
