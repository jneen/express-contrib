
test:
	@./support/expresso/bin/expresso \
		-I support/express \
		-I lib

.PHONY: test