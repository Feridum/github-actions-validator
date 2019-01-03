export const validWorkflowStrings = [
    {
      workflow: `
      workflow "Build, Test, and Check Format in Single Run" {
        on = "push"
        resolves = [
          "Format Check"
        ]
      }
    `,
      result: {name: "Build, Test, and Check Format in Single Run", attributes: {on: "push", resolves: ["FormatCheck"]}}
      },
]