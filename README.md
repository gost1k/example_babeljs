# Основы babeljs для настройки проектов.
```bash
## Берет файлы из папки /src, транспилирует под target и кладет в /output
npm run babel: "babel src --out-dir output",
## Тоже самое но для 1 файла
npm run babel:test: "babel test-input.js --out-file test-output.js"
```

## Подробный конфиг с настройками и комментариями
https://github.com/gost1k/example_babeljs/blob/main/babel.config.js

## Не забудьте выполнить
```bash
# Для установки npm зависимостей
npm i
```
