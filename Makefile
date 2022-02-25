.PHONY: image ctn-run

PORT ?= 2931

image:
	docker build . -t sha256le

ctn-run:
	docker run -p=$(PORT):80 sha256le
