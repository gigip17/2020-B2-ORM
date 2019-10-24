const process = require('process')
const reset = '\x1b[0m'
const red = '\x1b[31m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'
const bright = '\x1b[1m'

const exos = []
const exoPaths = ['./1/src', './2/src', './3/src']

const log = (messages) => {
  if (!Array.isArray(messages)) {
    console.log(messages)
    return
  }
  for (const message of messages) {
    console.log(message)
  }
}

const verboseRequire = (path) => {
  try {
    return require(path)
  } catch (err) {
    log([`${red}Error when requiring ${path}/index.js${bright}\n${err}${reset}`])
    process.exit(1)
  }
}

for (const exoPath of exoPaths) {
  exos.push(verboseRequire(exoPath))
}

for (const exo of exos) {
  log(`Starting test for ${yellow}${exo.name}${reset}...\n`)
  for (let i = 0; i < exo.datasets.length;  i++) {
    const dataset = exo.datasets[i]
    let result = undefined
    try {
      result = exo.algo([...dataset.input])
      exo.verify({ ...dataset }, result)
    } catch (err) {
      log([
        `Test n°${i} -> ${red}KO${reset}`,
        `${bright}`,
        err,
        `${reset}`
      ])
      process.exit(1)
    }
    log(`Test n°${i} -> ${green}OK${reset}`)
  }
  log(`\n${exo.name} -> ${green}OK${reset}\n`)
}
log(`\n${green}GG !${reset}`)