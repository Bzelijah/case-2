# case-2
### В корневой папке
1. make container-network
2. make postgres-run
3. make container-build
4. make container-run

### В frontend папке
5. docker build -t front .
6. docker run --name front -p 8081:8081 -d front 

Шестой пункт запустит контейнер в бэкграунде, чтобы увидеть логи, нужно убрать флаг -d

Остановить и удалить контейнер:
    docker rm -f [CONTAINER ID]
    docker container prune