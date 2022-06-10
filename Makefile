#!make
include init/.env
export

PROJECT_PATH=`pwd`
PROJECT_NAME=backend
MAIN_FILE_PATH=main/main.go

## run: Запускает приложение в дебаг режиме (с флагом -race)
run:
	@bash -c "go run -race $(MAIN_FILE_PATH)"

## install: Устанавливает зависимости из go.mod файла
install:
	@bash -c "go mod download"

## reinstall: Перекачиват и обновляет все зависимости до последней версии
reinstall:
	@rm -f go.sum
	@bash -c "make install"

## container-build: Запускает docker build
container-build:
	@docker build -t extension-backend:latest .

## container-run: Запускает контейнер (без docker build). Для docker build используйте container-build
container-run:
	@(docker stop extension-backend || true)
	@(docker rm extension-backend || true)
	@docker run --name extension-backend -p 8001:8001 --env-file init/.env extension-backend

## postgres-run: Поднимает локальный постгрес в docker контейнере
postgres-run:
	@(docker stop postgres || true)
	@(docker rm postgres || true)
	@(docker run -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=jaIiw21aSA --name postgres -p 5432:5432 -v "`pwd`/sql:/docker-entrypoint-initdb.d" -d postgres || true)

## compose-up: Поднимает зависимости и приложение
compose-up:
	@(docker-compose up -d)

## compose-down: Останавливает все поднятые ранее контейнеры
compose-down:
	@(docker-compose down)


help: Makefile
	@echo " > Список команд по "$(PROJECT_NAME)":"
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
