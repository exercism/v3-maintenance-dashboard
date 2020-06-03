const fs = require('fs')
const yargs = require('yargs')
const { exec } = require('child_process')

const argv = yargs
  .option('tag', {
    alias: 'a',
    demandOption: true,
    description: 'The release version',
    type: 'string',
  })
  .option('message', {
    alias: 'm',
    demandOption: true,
    description: 'The release message',
    type: 'string',
  })
  .help().argv

//   let rawdata = fs.readFileSync('student.json');
//   let student = JSON.parse(rawdata);

// exec('git tag')

console.log(argv)

// Add to scripts in package.json that:

// yarn release "This is the best release"
// mimics yarn publish
// asks for the next version (free to type in for example)
// changes package.json
// checks if CHANGELOG contains ## master and renames to ## version and prepends ## master, unless ## version exists
// runs git tag -a <version> "This is the best release"
// runs git push --tags
// opens github releases
// alt command:

// yarn release -a 1.0.2 -m "This is the best release"
