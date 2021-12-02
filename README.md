# Usabl Duplicate Task Github Action

1. Go to the Settings page in the Usabl Web App

2. Create a new access code and give it a title

3. Create a file under .github/workflows/usabl.yml

4. Paste the following:
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

5. Replace the placeholders with the relevant information
5a. Task IDs can be found in the url when viewing a task

6. Commit and push your repo

## Now whenever you push to the specified branch, the specified task(s) will be duplicated and tests will be re-run automatically