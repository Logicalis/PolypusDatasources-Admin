.PHONY: deps clean build grunt

all: deps clean build grunt

deps:
	@npm install

clean:
	@rm -f *.rpm
	@rm -rf build

build:
	@npm run build

grunt:
	@npm run grunt