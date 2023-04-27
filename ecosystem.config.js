module.exports = {
    apps: [
        {
            name: 'digitalsanctum-23',
            port: '3102',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
