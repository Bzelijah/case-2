# case-2
### Выполняем из корневой папки
1. make container-network
2. make postgres-run
3. make container-build
4. make container-run

### Выполняем из frontend папки
1. docker build -t front .
2. docker run --name front -p 8081:8081 -d front

## Реализованный функционал
- Кнопка `Хочу помочь`
- Фильтры на `/search`
- Кнопка `Нужна помощь`
- Создание объявления

### Swagger api documentation
https://app.swaggerhub.com/apis/ARI46/case2/0.0.1

### РАЗНОРАБОТЧИКИ

- Илья Андреев backend-developer [@bzlio](https://t.me/bzlio)
- Арман Гаспарян frontend-developer [@buscus](https://t.me/buscus)
- Александр Кечко frontend-developer [@kechkan](https://t.me/kechkan)
- Фёдор Шеремета UI/UX дизайнер [@Fineunicorntearz](https://t.me/Fineunicorntearz)