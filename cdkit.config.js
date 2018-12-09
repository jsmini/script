// 批量修改名称配置文件
// cdkit find -c script/cdkit.config.js
// cdkit replace -c script/cdkit.config.js

const fromName = /aaa/;
const toName = 'bbb';

const libList = [
'base',
'type',
'is',
'inherits',

'extend',
'clone',
'event',
'guid',

'pubsub',
'querystring',
'url',
'md5',
'base64',
'load',
'console',
];

const config = [
    {
        root: '../',
        excludePath: ['node_modules'],
        rules: [
            {
                test: function (pathname) {
                    if (pathname.indexOf('package.json') > -1) {
                        return true;
                    }
                    return false;
                    if (pathname.indexOf('dist') > -1) {
                        return false
                    }

                    if (pathname.indexOf('package-lock') > -1) {
                        return false
                    }

                    if (pathname.indexOf('docs') > -1) {
                        return false
                    }

                    if (pathname.indexOf('site') > -1) {
                        return false
                    }

                    if (pathname.indexOf('.git') > -1) {
                        return false
                    }

                    if (pathname.indexOf('cdkit.config.js') > -1) {
                        return false
                    }

                    return true;
                },
                replace: [
                    {
                        from: fromName,
                        to: toName,
                    }
                ]
            }
        ]
    }
];

module.exports = config;
