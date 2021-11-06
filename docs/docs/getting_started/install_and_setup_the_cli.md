# Install and setup the CLI

Fonoster's command-line tool will help you manage your Fonoster instances. From creating `Agents` to deploying `Functions` and more.

## Installing

The command-line tool is available via NPM:

```bash
npm -g install @fonoster/ctl
```

## Commands and subcommands

The command-line tool comes with built-in commands covering all main use-cases and additional commands via plugins. Most commands are "collapsed" under a section. For example, the `agents` sections contain the following commands:

- `agents:create`  creates a new agent resource
- `agents:delete`  removes agent from a project
- `agents:get`     get information about an existing agent
- `agents:list`    list registered agents
- `agents:update`  updates a agent at the SIP Proxy subsystem

## Authenticating the CLI

To authenticate the CLI, you need to issue the `fonoster auth:login` command. You can point the CLI to your own Fonoster instance, or use our [as a service](https://console.fonoster.io) option.

## Command view

This is how the command line looks like:

```
  _____                     _            
 |  ___|__  _ __   ___  ___| |_ ___ _ __ 
 | |_ / _ \| '_ \ / _ \/ __| __/ _ \ '__|
 |  _| (_) | | | | (_) \__ \ ||  __/ |   
 |_|  \___/|_| |_|\___/|___/\__\___|_|   
                                         

Command-Line for Fonoster

VERSION
  @fonoster/ctl/0.2.13 darwin-x64 node-v14.16.0

USAGE
  $ fonoster [COMMAND]

TOPICS
  agents     manage sip agents
  auth       manage fonoster credentials
  domains    manage sip domains
  numbers    manage sip numbers
  plugins    list installed plugins
  providers  manage sip providers

COMMANDS
  bug       start a bug report 🐞
  feedback  let us know how we're doing
  help      display help for fonoster
  plugins   list installed plugins
```

For detailed information about Fonoster's command-line interface, please visit the [NPM](https://www.npmjs.com/package/@fonoster/ctl) page.
