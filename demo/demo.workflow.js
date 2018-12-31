const demoWorkflow = `
workflow "Build, Test, and Check Format in Single Run" {
  on = "push"
  resolves = [
    "Format Check"
  ]
}

action "Build" {
  uses = "actions/npm@master"
  args = ["container:release", "--app", "web"]
  runs = "yarn"
}

action "Test" {
  uses = "actions/npm@6309cd9"
  needs = ["Build"]
  runs = "yarn"
  args = "test"
  env = {
    CI = "true"
  }
}

action "Build React" {
  uses = "actions/npm@6309cd9"
  needs = ["Test"]
  runs = "yarn"
  args = "build"
}

action "Format Check" {
  uses = "actions/npm@6309cd9"
  needs = ["Build React"]
  runs = "yarn"
  args = "check-format"
}
`;

module.exports = {
  demoWorkflow
}