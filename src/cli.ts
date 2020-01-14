import { executeJar } from "node-java-connector";
import * as path  from "path";

// TODO: Load JAR dynamically from maven/package
var runOpenvalidation = async function() {
  var relativePath = path.join(
    path.join(path.dirname(require!.main!.filename)),
    "../java/openvalidation.jar"
  );

  var output = await executeJar(relativePath);
  if (!!output.stderr) {
    output.stderr.on("data", (stderr: any) => {
      console.error(`${stderr}`);
    });
  }
  if (!!output.stdout) {
    output.stdout.on("data", (stderr: any) => {
      console.log(`${stderr}`);
    });
  }
};

runOpenvalidation();
