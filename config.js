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
    "github:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.7/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.7/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.7/dist/aurelia-bundle"
  },
  bundles: {
    "aurelia-bundle": [
      "src/zzzz.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "npm:aurelia-history@1.0.0-rc.1.0.0",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0",
      "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "npm:aurelia-path@1.0.0-rc.1.0.0",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0",
      "npm:aurelia-router@1.0.0-rc.1.0.0",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master",
      "github:systemjs/plugin-css@0.1.23",
      "github:systemjs/plugin-text@0.0.8",
      "github:github/fetch@1.0.0",
      "npm:aurelia-binding@1.0.0-rc.1.0.0/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0/aurelia-fetch-client",
      "npm:aurelia-framework@1.0.0-rc.1.0.0/aurelia-framework",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0/aurelia-http-client",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default",
      "npm:aurelia-logging@1.0.0-rc.1.0.0/aurelia-logging",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0/aurelia-metadata",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0/aurelia-route-recognizer",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills",
      "npm:aurelia-router@1.0.0-rc.1.0.0/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-templating-resources",
      "npm:aurelia-templating@1.0.0-rc.1.0.0/aurelia-templating",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/aurelia-templating-router",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master/index",
      "github:systemjs/plugin-text@0.0.8/text",
      "github:github/fetch@1.0.0/fetch",
      "github:systemjs/plugin-css@0.1.23/css",
      "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/compose",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/if",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/with",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/show",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/hide",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/replaceable",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/focus",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/css-resource",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/abstract-repeater",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-resource-plugin",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-utilities",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-loader",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-hide-style",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/analyze-view-factory",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/router-view",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-href",
      "github:aurelia-ui-toolkits/aurelia-v-grid@master/config-builder",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/dynamic-element"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.1.1.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
    "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-rc.1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
    "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0",
    "aurelia-v-grid": "github:aurelia-ui-toolkits/aurelia-v-grid@master",
    "aurelia-validation": "npm:aurelia-validation@0.9.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.23",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "json": "github:systemjs/plugin-json@0.1.0",
    "moment": "npm:moment@2.13.0",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:aurelia-ui-toolkits/aurelia-v-grid@master": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0"
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
      "jquery": "npm:jquery@3.0.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
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
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-validation@0.9.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
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
    "npm:core-js@1.2.6": {
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
    "npm:jquery@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
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
