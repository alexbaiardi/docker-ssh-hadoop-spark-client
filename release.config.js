const publishCmd = `
chmod +x *.sh; ./publish.sh \${nextRelease.version} alexbaiardi2 ssh-hadoop-spark-client
`;
const config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    ["@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }],
    ["@semantic-release/github",
        {
            "assets": [ /* {"path": "welaser/testScripts/*.pdf", "label": "Charts"} */]
        }],
    "@semantic-release/git"
)
module.exports = config
