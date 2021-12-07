# Usabl Duplicate Task Github Action

Usabl helps developer-focused companies get feedback from developers. The Usabl GitHub action helps top-notch companies integrate usability directly into their workflow. Our mission is to help developers build more, faster, all while saving you time figuring out what to build for them. Learn more on our website: [Usabl](https://usabl.dev)

This GitHub Action is a utility that automatically duplicates a task or series of tasks in Usabl. This is useful for making sure you are consistently getting feedback from developers as you ship new code. 

# Configuration

1. Go to the Settings page in the [Usabl Web App](https://app.usabl.dev)

2. Create a new access code and give it a title

3. Once you've created a Usabl access code, store the newly created access code as a GitHub repository secret titled `USABL_ACCESS_CODE`. Under Settings > Secrets in your GitHub repo, you'll see a link to "Add a new secret". Click that and paste in your access code and click "Save secret".

(For help storing this see the [GitHub docs](https://help.github.com/en/articles/creating-a-github-action).)

4. Create a file under .github/workflows/usabl.yml

5. Paste the following code:

```yaml
on:
  push:
    branches:
      - BRANCH_NAME_GOES_HERE

jobs:
  usabl_job:
    runs-on: ubuntu-latest
    name: Usabl duplicate and re-run tasks with developers
    steps:
      - name: Duplicate Usabl task
        id: Duplication
        uses: Usabl-dev/usabl-github-action@dev
        with:
          companyID: "COMPANY_ID_GOES_HERE"
          tasksToCopy: '["TASK_ID_GOES_HERE"]'
          accessCode: ${{ secrets.USABL_ACCESS_CODE }}
```

6. Replace the placeholders with the relevant information (task IDs can be found in the url when viewing a task)

7. Commit and push your repo

## Now whenever you push to the specified branch, the specified task(s) will be duplicated and tests will be re-run automatically

## Troubleshooting

Once your workflow has been created, the best way to confirm that the workflow is executing correctly is to create a new pull request with the workflow file and verify that the newly created action succeeds and the selected task has been duplicated. If you have any issues, email us at contact@usabl.dev.

