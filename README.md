# aurelia-plunker
https://github.com/jdanyow/aurelia-bundle

## update skelly...

```shell
jspm install aurelia-polyfills aurelia-animator-css aurelia-binding aurelia-bootstrapper aurelia-dependency-injection aurelia-dialog aurelia-event-aggregator aurelia-fetch-client aurelia-framework aurelia-history aurelia-history-browser aurelia-http-client aurelia-loader aurelia-loader-default aurelia-logging aurelia-logging-console aurelia-metadata aurelia-path aurelia-route-recognizer aurelia-router aurelia-task-queue aurelia-templating aurelia-templating-binding aurelia-templating-resources aurelia-templating-router aurelia-validation bootstrap css fetch font-awesome text
```

## cheat file
```js
import 'aurelia-binding';
import 'aurelia-bootstrapper';
import 'aurelia-dependency-injection';
import 'aurelia-event-aggregator';
import 'aurelia-fetch-client';
import 'aurelia-framework';
import 'aurelia-history';
import 'aurelia-history-browser';
import 'aurelia-http-client';
import 'aurelia-loader';
import 'aurelia-loader-default';
import 'aurelia-logging';
import 'aurelia-logging-console';
import 'aurelia-metadata';
import 'aurelia-path';
import 'aurelia-polyfills';
import 'aurelia-route-recognizer';
import 'aurelia-router';
import 'aurelia-task-queue';
import 'aurelia-templating';
import 'aurelia-templating-binding';
import 'aurelia-templating-resources';
import 'aurelia-templating-router';
import 'css';
import 'fetch';
import 'text';
```

## bundle
```shell
gulp build && jspm bundle src/zzzz dist/aurelia-bundle.js --inject
```

##updating:
```shell`
jspm update
gulp build && jspm bundle src/zzzz dist/aurelia-bundle.js --inject
```

Replace "paths" (switch version number to upcomming number) and first 2 rows of bundles with this in the config, then release new version on github after you have pushed it
```
paths: {
    "github:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/vegarringdal/vGridGistRunJSPMBundle/v.1.0.8/dist/aurelia-bundle"
  },
  bundles: {
    "aurelia-bundle": [
      "src/zzzz.js",
      
```
