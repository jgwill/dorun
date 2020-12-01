#!/usr/bin/env node
'use strict'

// @STCGoal Whatever the platform, the docker runs with the current dir mounted as /work/input
//


console.log("LINUX>docker run -it --rm $(pwd)/:/work/input $1");
console.log("PowerShell>docker run -it --rm ${pwd}/:/work/input $1");
console.log("WIN>docker run -it --rm %cd%/:/work/input $1");


console.log("Nodejs How to detect platform context ? ")