lint:	
	npx eslint .

install:
	npm ci
	
build:
	npm run build
	
start-dev: 
	make build 
	npm run dev

start-production:
	make build 
	npm run preview