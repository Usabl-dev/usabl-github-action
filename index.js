const core = require("@actions/core")
const github = require("@actions/github")
const axios = require("axios");

try {
    const companyID = core.getInput("companyID")
    const tasksToCopy = JSON.parse(core.getInput('tasksToCopy'));
    const accessCode = core.getInput("accessCode");
    axios.post("https://us-central1-usabl-bb1fc.cloudfunctions.net/githubAction", {
        companyID,
        tasksToCopy,
        accessCode
    }).then((res) => {
        console.log(res);
    }).catch((e) => {
        core.setFailed(e.message);
    })
} catch (e) {
    core.setFailed(e.message);
}