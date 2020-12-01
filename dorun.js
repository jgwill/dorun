#!/usr/bin/env node
"use strict";

var mountPath = "/work/input";
var dockerPreArgs = "-it --rm";

// @STCGoal Whatever the platform, the docker runs with the current dir mounted as /work/input
//
var os = require("os");
var myArgs = process.argv.slice(2);

//@STCGoal Platform
var p = process.platform;

if (myArgs[0] == "--testos") {
  console.log(p);

  console.log(os.type()); // "Windows_NT"
  console.log(os.release()); // "10.0.14393"
  console.log(os.platform()); // "win32"
}
var cdirString = "";

if (p == "linux") {
  cdirString = "$(pwd)/";
} else if (p == "win32" || p== "win64") {
  //win
  cdirString = "${pwd}/";
} else if (p == "cygwin") {
  //win
  cdirString = "%cd%";
} else cdirString = "$(pwd)/";

if (myArgs[0] == "--help") {
  console.log("LINUX>docker run -it --rm $(pwd)/:/work/input $1");
  console.log("PowerShell>docker run -it --rm ${pwd}/:/work/input $1");
  console.log("WIN>docker run -it --rm %cd%/:/work/input $1");
}

var cmdAndArgs = " "
myArgs.forEach(a => {
  cmdAndArgs += a + " ";
});

//@STCGoal Support X11Forwarding ?
//@action $(/sbin/ip route|awk '/default/ { print $3 }'):0

const dockerCmd = ` run ${dockerPreArgs} -v ${cdirString}:${mountPath} ${cmdAndArgs}`;

console.log("docker " +dockerCmd);


//@STCGoal ...
