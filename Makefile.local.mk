.DEFAULT_GOAL := help
.PHONY : resources

image: ## Construir la imagen de node: make image
	docker build -t "qhapaq/node:10.15.3" docker/node

install: ## Instalar dependencias: make install
	COMMAND='npm install' docker-compose up

start: ## Levantar el prooyecto en el puerto 3000: make start
	COMMAND='npm start' docker-compose up

local: ## compilar
	COMMAND='npm local' docker-compose up

buildLocal: ## Construir el compilado en Local: make buildLocal
	COMMAND='npm build:development' docker-compose up

buildQa: ## Construir el compilado en QA: make buildQa
	COMMAND='npm build:qa' docker-compose up

buildProduction: ## Construir el compilado en produccion: make buildProduction
	COMMAND='npm build:production' docker-compose up

test: ## Test Unitarios Frontend: make test
	COMMAND='npm test' docker-compose up

## Target Help ##
help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
