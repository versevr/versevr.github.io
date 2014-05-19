(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("app", function(exports, require, module) {
var init, setContentHeight;

setContentHeight = function() {
  return $('section#intro').css('height', $(window).height() + 'px');
};

init = function() {
  return setContentHeight();
};

window.addEventListener('resize', setContentHeight);

document.addEventListener('DOMContentLoaded', init);
});

;require.register("index_static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1\" media=\"(device-height: 568px)\"><link href=\"css/app.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"http://fonts.googleapis.com/css?family=Arvo:400,700,400italic\" rel=\"stylesheet\" type=\"text/css\"><title>Verse VR</title></head><body><header><div class=\"logo\"><img src=\"images/versevr-logo.svg\"></div><ul id=\"links\"><li><a href=\"mailto:coffee@versevr.com\">get coffee with us</a></li></ul></header><section id=\"intro\"><div class=\"bg-image\"></div><div class=\"text\"><div class=\"big-logo\"><img src=\"images/versevr-logo.svg\"></div><div class=\"line\">Not quite a game, not quite a film, not quite a play</div><div class=\"line sub\">Definitely story telling ... </div></div></section><script src=\"js/vendor.js\"></script><script src=\"js/app.js\"></script><script>require(\'app\');</script></body></html>");;return buf.join("");
};

if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("layout", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1\" media=\"(device-height: 568px)\"><link href=\"css/app.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/images/favicon.png\" rel=\"icon\" type=\"image/png\"><link href=\"http://fonts.googleapis.com/css?family=Arvo:400,700,400italic\" rel=\"stylesheet\" type=\"text/css\"><title>Verse VR</title></head><body><script src=\"js/vendor.js\"></script><script src=\"js/app.js\"></script><script>require('app');</script></body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=app.js.map