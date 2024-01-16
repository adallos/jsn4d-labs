// import child_process from 'child_process';
// import util from 'util';
const child_process = require("child_process")
const util = require("util")

const exec = util.promisify(child_process.exec);

async function ping(hostname) {
  try {
    const {stdout, stderr} = await exec(`ping -c 3 ${hostname}`);
    console.log('stderr: ', stderr);
    console.log('stdout: ', stdout);
  } catch (err) {
    console.log(err);
  }
}

ping('www.goo32434asjdnasd.com');

// Diagrama de flujo
// recibir .md
// función que saque los POSIBLES links del .md ["google.com", "wikipedia.com", "fakelink.net"]

// Tareas
// Recibir un archivo md y hacer console.log del mismo
