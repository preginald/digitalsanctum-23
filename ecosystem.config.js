module.exports = {
    apps: [
        {
            name: 'digitalsanctum-23',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            port: 5000
        }
    ]
}