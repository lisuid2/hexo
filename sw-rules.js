module.exports.config = {
    /** @type {?ServiceWorkerConfig|boolean} */
    serviceWorker: {
        /** @type {number} */
        escape: 0,
        /** @type {string} */
        cacheName: 'SolitudeCache',
        /** @type {Boolean} */
        debug: false
    },
    /** @type {?RegisterConfig|boolean} */
    register: {
        /** @type {?VoidFunction} */
        onsuccess: undefined,
        /** @type {?VoidFunction} */
        onerror: () => console.error('Service Worker 注册失败！可能是由于您的浏览器不支持该功能！'),
        /**
         * @param root {string} 网页根目录的 URL
         * @param framework {Object} 框架对象
         * @param pluginConfig {SwppConfig} swpp 配置项
         * @return {string} 一个 HTML 标签的字符串形式
         */
        builder: (root, framework, pluginConfig) => {
            const {onerror, onsuccess} = pluginConfig.register;
            return `
            <script>
                (() => {
                    const sw = navigator.serviceWorker;
                    const error = ${onerror && onerror.toString()};
                    if (!sw?.register('${new URL(root).pathname}sw.js')
                        ${onsuccess ? `?.then(${onsuccess.toString()})` : ''}
                        ?.catch(error)
                    ) error()
                })()
            </script>`;
        }
    },
    /** @type {?DomConfig|boolean} */
    dom: {
        /** @type {?VoidFunction} */
        onsuccess: () => {
            caches.match(location.href).then(res => {
                if (res)
                    res.json().then(json => {
                        utils && utils.snackbarShow(`已刷新缓存，更新为${json.global + '.' + json.local}版本最新内容`, false, 2000)
                    })
                else
                    console.info('未找到缓存')
            }).catch((error) => console.error("缓存匹配出错", error))
        }
    },
    /** @type {?VersionJsonConfig|boolean} */
    json: {
        /** @type {number} */
        maxHtml: 15,
        /** @type {number} */
        charLimit: 1024,
        /** @type {string[]} */
        merge: [],
        exclude: {
            /** @type {RegExp[]} */
            localhost: [],
            /** @type {RegExp[]} */
            other: []
        }
    },
    /** @type {?ExternalMonitorConfig|boolean} */
    external: {
        /** @type {number} */
        timeout: 5000,
        /** 拉取文件时地并发限制 */
        concurrencyLimit: 100,
        /** @type {({head: string, tail: string}|function(string):string[])[]} */
        js: [],
        /** @type {RegExp[]} */
        stable: [
            /^https:\/\/npm\.elemecdn\.com\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.cbd\.int\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.jsdelivr\.net\/npm\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
        ],
        /**
         * @param srcUrl {string} 原始 URL
         * @return {string[]|string}
         */
        replacer: srcUrl => {
            if (srcUrl.startsWith('https://cdn.jsdelivr.net/npm/')) {
                const pathname = new URL(srcUrl).pathname;
                return [
                    srcUrl,
                    `https://cdn.cbd.int/${pathname}`,
                    `https://npm.elemecdn.com/${pathname}`,
                    `https://fastly.jsdelivr.net/npm/${pathname}`,
                    `https://cdn1.tianli0.top/npm/${pathname}`
                ];
            } else {
                return srcUrl;
            }
        }
    }
};

/**
 * 缓存列表
 * @param {Boolean} clean 是否清空缓存
 * @param {function(URL)} match 匹配缓存的函数
 */
module.exports.cacheRules = {
    simple: {
        clean: false,
        search: false,
        match: (url,$eject) => url.host === $eject.domain && ["/404.html", "/css/index.css"].includes(url.pathname)
    },
    cdn: {
        clean: true,
        match: url => [
            "cdn.cbd.int",
            "lf26-cdn-tos.bytecdntp.com",
            "lf6-cdn-tos.bytecdntp.com",
            "lf3-cdn-tos.bytecdntp.com",
            "lf9-cdn-tos.bytecdntp.com",
            "cdn.staticfile.org",
            "npm.elemecdn.com",
        ].includes(url.host) && url.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/),

    }
};

/**
 * 获取一个 URL 对应的备用 URL 列表，访问顺序按列表顺序，所有 URL 访问时参数一致
 * @param srcUrl {string} 原始 URL
 * @return {list: string[], timeout: number} 返回 null 或不返回表示对该 URL 不启用该功能。timeout 为超时时间（ms），list 为 URL 列表，列表不包含原始 URL 表示去除原始访问
 */
module.exports.getSpareUrls = srcUrl => {
    if (srcUrl.startsWith("https://npm.elemecdn.com")) {
        return {
            timeout: 3000,
            list: [srcUrl, `https://cdn.cbd.int/${new URL(srcUrl).pathname}`],
        };
    }
}

/**
 * 获取要插入到 sw 中的变量或常量
 * @param hexo hexo 对象
 * @param rules 合并后的 sw-rules 对象
 * @return {Object} 要插入的键值对
 */
module.exports.ejectValues = (hexo, rules) => {
    return {
        domain: {
            prefix: "const",
            value: new URL(hexo.config.url).host,
        },
    };
};