
test:
	@./support/expresso/bin/expresso \
		-I support/ejs \
		-I support/express \
		-I lib

.PHONY: test