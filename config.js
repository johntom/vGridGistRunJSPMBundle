System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": [
      "github:*",
      "npm:*"
    ],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/dist/aurelia-bundle"
  },
  bundles: {
    "aurelia-bundle": [
      "src/zzzz.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
      "npm:aurelia-framework@1.0.0-rc.1.0.6",
      "npm:aurelia-history@1.0.0-rc.1.0.0",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0",
      "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "npm:aurelia-path@1.0.0-rc.1.0.0",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1",
      "npm:aurelia-router@1.0.0-rc.1.0.1",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "npm:aurelia-templating@1.0.0-rc.1.0.1",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.1",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1",
      "github:systemjs/plugin-css@0.1.23",
      "github:github/fetch@1.0.0",
      "github:systemjs/plugin-text@0.0.8",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator",
      "npm:aurelia-binding@1.0.0-rc.1.0.3/aurelia-binding",
      "npm:aurelia-framework@1.0.0-rc.1.0.6/aurelia-framework",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1/aurelia-fetch-client",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0/aurelia-http-client",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-rc.1.0.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-rc.1.0.1/aurelia-metadata",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-rc.1.0.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.1/aurelia-templating-binding",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/aurelia-templating-router",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/aurelia-templating-resources",
      "npm:aurelia-templating@1.0.0-rc.1.0.1/aurelia-templating",
      "github:github/fetch@1.0.0/fetch",
      "github:systemjs/plugin-css@0.1.23/css",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master/index",
      "github:systemjs/plugin-text@0.0.8/text",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.1",
      "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/route-loader",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/router-view",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/route-href",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/compose",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/if",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/with",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/show",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/hide",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/replaceable",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/css-resource",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/focus",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/abstract-repeater",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/html-resource-plugin",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/aurelia-hide-style",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master/config-builder",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.1/aurelia-pal-browser",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/dynamic-element",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.2.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.6",
    "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-rc.1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.1",
    "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.1",
    "aurelia-v-grid": "github:aurelia-ui-toolkits/aurelia-v-grid@master",
    "aurelia-validation": "npm:aurelia-validation@0.9.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.23",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "json": "github:systemjs/plugin-json@0.1.0",
    "moment": "npm:moment@2.14.1",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:aurelia-ui-toolkits/aurelia-v-grid@master": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.2.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-http-client@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-validation@0.9.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
