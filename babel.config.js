/**
 * Babel Configuration
 * @see https://babeljs.io/docs/options
 * @see https://babeljs.io/docs/babel-preset-env
 *
 * Targets: последние версии браузеров для Windows XP
 * - Chrome 49, Firefox 52 ESR, Opera 36, IE 8
 */

module.exports = function (api) {
  api.cache(true);

  return {
    // =============================================================================
    // CONFIG LOADING
    // =============================================================================

    /**
     * rootMode — как Babel определяет корень проекта
     * Варианты: "root" | "upward" | "upward-optional"
     * - "root": root без изменений (по умолчанию)
     * - "upward": идёт вверх до babel.config.json, ошибка если не найден
     * - "upward-optional": идёт вверх, fallback на root если не найден
     * Используется в monorepo для поиска конфига в корне
     */
    // rootMode: "root",

    /**
     * configFile — путь к конфигу или false
     * Варианты: string | boolean
     * По умолчанию: ищет babel.config.json в root
     */
    // configFile: true,

    /**
     * babelrc — загружать ли .babelrc.json относительно компилируемого файла
     * Варианты: true | false
     */
    babelrc: true,

    /**
     * babelrcRoots — пакеты, в которых искать .babelrc.json
     * Варианты: boolean | string | string[]
     * По умолчанию: opts.root. Для monorepo: [".", "./packages/*"]
     */
    // babelrcRoots: ".",

    /**
     * extends — наследовать настройки из другого конфига
     * Варианты: string (путь к файлу)
     */
    // extends: "./base-babel.config.js",

    // =============================================================================
    // TARGETS (Babel 7.13+)
    // =============================================================================

    /**
     * targets — целевые среды выполнения
     * Варианты:
     * - string: browserslist-запрос ("defaults", "> 0.25%, not dead")
     * - object: { chrome: "58", ie: "11", node: "14", ... }
     * Поддерживаемые: android, chrome, deno, edge, electron, firefox, ie, ios, node, opera, rhino, safari, samsung
     * Без targets — Babel предполагает самые старые браузеры (ES5)
     */
    targets: {
      // Последние версии для Windows XP (поддержка XP закончилась в 2014)
      chrome: "49",   // последний Chrome для XP (апрель 2016)
      firefox: "52",  // Firefox 52 ESR — последний для XP (сентябрь 2018)
      opera: "36",    // последний Opera для XP
      ie: "8",        // IE 8 — последний для XP (IE 9 требует Vista+)
      // Дополнительно при необходимости:
      // edge: "14",
      // safari: "10",
      // node: "14",
      // esmodules: true | "intersect",  // браузеры с поддержкой ES modules
      // browsers: "> 0.25%, not dead", // browserslist-запрос
    },

    /**
     * browserslistConfigFile — использовать ли browserslist-конфиг
     * Варианты: true | false | string (путь)
     */
    browserslistConfigFile: true,

    /**
     * browserslistEnv — окружение для browserslist (production, development и т.д.)
     */
    // browserslistEnv: undefined,

    // =============================================================================
    // PLUGINS & PRESETS
    // =============================================================================

    presets: [
      [
        "@babel/preset-env",
        {
          /**
           * targets — переопределяет глобальный targets для preset-env
           * По умолчанию берётся из корня или browserslist
           */
          targets: {
            chrome: "49",
            firefox: "52",
            opera: "36",
            ie: "8",
          },

          /**
           * bugfixes — компилировать к ближайшему поддерживаемому синтаксису
           * Варианты: true | false
           * true — меньше кода, современнее. Будет включено по умолчанию в Babel 8
           */
          bugfixes: false,

          /**
           * spec — более строгое соответствие спецификации (медленнее)
           * Deprecated в Babel 8, используйте assumptions
           */
          // spec: false,

          /**
           * loose — менее строгие трансформации (меньше кода, возможны edge cases)
           * Deprecated в Babel 8, используйте assumptions
           */
          // loose: false,

          /**
           * modules — формат модулей на выходе
           * Варианты: "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false
           * - "auto": определяется caller (webpack, rollup и т.д.)
           * - false: оставить ES modules (для современных бандлеров)
           */
          modules: "auto",

          /**
           * useBuiltIns — как подключать polyfills из core-js
           * Варианты: "usage" | "entry" | false
           * - "usage": добавляет только используемые polyfills в каждый файл
           * - "entry": заменяет import "core-js" на нужные модули (один раз в entry)
           * - false: не добавлять polyfills
           */
          useBuiltIns: "usage",

          /**
           * corejs — версия core-js для polyfills
           * Варианты: "2" | "3" | "3.35" | { version: "3", proposals: true }
           * Нужен при useBuiltIns: "usage" или "entry". Укажите минорную версию (напр. "3.35")
           */
          corejs: { version: "3", proposals: false },

          /**
           * shippedProposals — включить proposals, уже реализованные в браузерах
           * Варианты: true | false
           * Включает: class properties, private methods, numeric separator, static block и др.
           */
          shippedProposals: false,

          /**
           * forceAllTransforms — принудительно включить все трансформации
           * Варианты: true | false
           * Полезно для UglifyJS или если выход только ES5
           */
          forceAllTransforms: false,

          /**
           * include — плагины/polyfills, которые всегда включить
           * Варианты: string[] | RegExp[]
           * Примеры: ["transform-spread"], ["es.promise"], RegExp для es.math.*
           */
          include: [],

          /**
           * exclude — плагины/polyfills, которые исключить
           * Пример: ["transform-regenerator"] при использовании fast-async
           */
          exclude: [],

          /**
           * debug — выводить в консоль включённые плагины и polyfills
           */
          debug: false,

          /**
           * ignoreBrowserslistConfig — игнорировать .browserslistrc и browserslist в package.json
           */
          ignoreBrowserslistConfig: false,

          /**
           * configPath — стартовая директория для поиска browserslist
           */
          // configPath: process.cwd(),
        },
      ],
    ],

    plugins: [],

    // =============================================================================
    // ENV-SPECIFIC CONFIG
    // =============================================================================

    /**
     * env — конфиг по окружению (BABEL_ENV или NODE_ENV)
     * envName по умолчанию: process.env.BABEL_ENV || process.env.NODE_ENV || "development"
     */
    env: {
      development: {
        // sourceMaps: "inline",
      },
      production: {
        // compact: true,
      },
      test: {
        // presets: [...],
      },
    },

    // =============================================================================
    // OVERRIDES (условный конфиг по файлам)
    // =============================================================================

    /**
     * overrides — массив конфигов с условиями test/include/exclude
     * test/include: конфиг применяется только если паттерн совпал
     * exclude: конфиг не применяется если паттерн совпал
     * Паттерны: glob-строка, RegExp, функция (filename, context) => boolean
     */
    // overrides: [
    //   {
    //     test: "./vendor/large.min.js",
    //     compact: true,
    //   },
    //   {
    //     exclude: "./node_modules",
    //     // ...
    //   },
    // ],

    /**
     * ignore — файлы, которые Babel полностью пропускает
     * Варианты: string[] | RegExp[] | (filename, context) => boolean
     */
    // ignore: ["./lib"],

    /**
     * only — компилировать только эти файлы (остальные пропускаются)
     */
    // only: ["./src"],

    // =============================================================================
    // SOURCE MAPS
    // =============================================================================

    /**
     * inputSourceMap — использовать входящий source map
     * Варианты: true | false | SourceMap object
     * true — загружает из sourceMappingURL в файле
     */
    inputSourceMap: true,

    /**
     * sourceMaps — генерировать source maps
     * Варианты: true | false | "inline" | "both"
     * - true: генерировать, включить в результат
     * - "inline": data URL в конце кода
     * - "both": inline + в объекте результата
     */
    sourceMaps: false,

    /**
     * sourceFileName — имя файла в source map
     */
    // sourceFileName: undefined,

    /**
     * sourceRoot — sourceRoot в source map
     */
    // sourceRoot: undefined,

    // =============================================================================
    // PARSER & OUTPUT
    // =============================================================================

    /**
     * sourceType — как парсить файл
     * Варианты: "script" | "module" | "commonjs" | "unambiguous"
     * - "script": без import/export, не strict
     * - "module": ES modules, strict
     * - "commonjs": для .cjs
     * - "unambiguous": module если есть import/export, иначе script
     */
    sourceType: "unambiguous",

    /**
     * assumptions — допущения для оптимизации (меньше кода, не всегда spec-compliant)
     * @see https://babeljs.io/docs/assumptions
     * Варианты: { assumptionName: boolean }
     * Примеры: iterableIsArray, noDocumentAll, noClassCalls, objectRestNoSymbols,
     *          privateFieldsAsProperties, setPublicClassFields, pureGetters и др.
     */
    assumptions: {
      // iterableIsArray: true,
      // noDocumentAll: true,
      // noClassCalls: true,
      // objectRestNoSymbols: true,
    },

    /**
     * highlightCode — подсветка в сообщениях об ошибках
     */
    highlightCode: true,

    /**
     * parserOpts — опции для @babel/parser
     * Примеры: allowReturnOutsideFunction, allowSuperOutsideMethod
     */
    // parserOpts: {},

    /**
     * generatorOpts — опции для генератора кода
     */
    // generatorOpts: {},

    // =============================================================================
    // CODE GENERATOR
    // =============================================================================

    /**
     * retainLines — сохранять номера строк (для отладки без source maps)
     * Варианты: true | false
     */
    retainLines: false,

    /**
     * compact — убрать лишние переносы и пробелы
     * Варианты: true | false | "auto"
     * "auto" — compact если код > 500KB
     */
    compact: "auto",

    /**
     * minified — минификация (compact + убрать ; и т.д.)
     */
    minified: false,

    /**
     * comments — включать комментарии в вывод
     */
    comments: true,

    /**
     * auxiliaryCommentBefore/After — комментарии перед/после сгенерированного кода
     * Не рекомендуется, лучше использовать плагины
     */
    // auxiliaryCommentBefore: undefined,
    // auxiliaryCommentAfter: undefined,

    /**
     * shouldPrintComment — функция (value) => boolean для фильтрации комментариев
     */
    // shouldPrintComment: undefined,

    // =============================================================================
    // AMD / UMD / SystemJS (при modules: "amd" и т.д.)
    // =============================================================================

    /**
     * moduleId — фиксированный ID модуля
     */
    // moduleId: undefined,

    /**
     * getModuleId — функция (name) => string для генерации ID
     */
    // getModuleId: undefined,

    /**
     * moduleRoot — префикс для имён модулей
     */
    // moduleRoot: undefined,
  };
};
