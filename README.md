# Usabl Duplicate Task Github Action

This GitHub Action is a utility that automatically duplicates a task or series of tasks in Usabl. This is useful for making sure you are consistently getting feedback from developers as you ship new code. 

# Configuration

1. Go to the Settings page in the [Usabl Web App](https://app.usabl.dev)

2. Create a new access code and give it a title

3. Once you've created a Usabl access token, store the newly created access token as a repository secret titled `USABL_ACCESS_TOKEN`. Under Settings > Secrets in your GitHub repo, you'll see a link to "Add a new secret". Click that and paste in your access token and click "Save secret".

(For help storing this see the [GitHub docs](https://help.github.com/en/articles/creating-a-github-action).)

4. Create a file under .github/workflows/usabl.yml

5. Paste the following:
```
on:
  push:
    branches:
      - BRANCH_NAME_GOES_HERE

jobs:
  usabl_job:
    runs-on: ubuntu-latest
    name: A job to duplicate a usabl task
    steps:
      - name: Duplicate Usabl task
        id: Duplication
        uses: Usabl-dev/usabl-github-action@dev
        with:
          companyID: "COMPANY_ID_GOES_HERE"
          tasksToCopy: '["TASK_ID_GOES_HERE"]'
          accessCode: "ACCESS_CODE_GOES_HERE"
```

6. Replace the placeholders with the relevant information (task IDs can be found in the url when viewing a task)

7. Commit and push your repo

## Now whenever you push to the specified branch, the specified task(s) will be duplicated and tests will be re-run automatically
