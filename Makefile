sentry-release:
  # usage: make sentry-release VERSION=v1
	yarn sentry-cli releases new ${VERSION}
	yarn sentry-cli releases files ${VERSION} upload-sourcemaps --ext map --ext js ./dist/angular-sentry
	yarn sentry-cli releases finalize ${VERSION}
