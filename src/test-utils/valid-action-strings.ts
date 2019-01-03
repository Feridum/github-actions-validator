export const validActionStrings = [
  {
    action: `
    action "Build" {
        uses = "actions/npm@master"
        args = ["container:release", "--app", "web"]
        runs = "yarn"
    }
  `,
    result: {name: "Build", attributes: {uses: "actions/npm@master", args: ["container:release", "--app", "web"], runs: "yarn"}}
    },
  {
    action: `
  action "Test" {
    uses = "actions/npm@6309cd9"
    needs = ["Build"]
    runs = "yarn"
    args = "test"
    env = {
      CI = "true"
    }
  }
  `,
    result: {name: "Test", attributes: {uses: "actions/npm@6309cd9", args: "test", runs: "yarn", needs:["Build"], env: {CI: "true"}}}
  },
  {
    action: `
  action "Build React" {
    uses = "actions/npm@6309cd9"
    needs = ["Test"]
    runs = "yarn"
    args = "build"
  }
  `,
    result: {name: "Build React", attributes: {uses: "actions/npm@6309cd9", args: "build", runs: "yarn", needs:["Test"]}}
  },
  {
    action: `
  action "Format Check" {
    uses = "actions/npm@6309cd9"
    needs = ["Build React"]
    runs = "yarn"
    args = "check-format"
  }
 `,
    result: {name: "Format Check", attributes: {uses: "actions/npm@6309cd9", args: "check-format", runs: "yarn", needs:["BuildReact"]}}
  }
];
