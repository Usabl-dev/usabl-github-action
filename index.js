const core = require("@actions/core")
const github = require("@actions/github")
const axios = require("axios");

try {
    const companyID = core.getInput("companyID")
    const tasksToCopy = core.getInput('tasksToCopy');
    const accessCode = core.getInput("accessCode");
    axios.post("http://localhost:5001/usabl-bb1fc/us-central1/githubAction", {
        companyID,
        tasksToCopy,
        accessCode
    }).then((res) => {
        console.log(res);
    })
} catch (e) {
    core.setFailed(e.message);
}