# Copy binary stage
FROM --platform=$BUILDPLATFORM alpine:3.18.0 as binary

ARG TARGETPLATFORM

COPY target/x86_64-unknown-linux-musl/release/chirpstack /usr/bin/chirpstack-x86_64

RUN case "$TARGETPLATFORM" in \
	"linux/amd64") \
		cp /usr/bin/chirpstack-x86_64 /usr/bin/chirpstack; \
		;; \
	esac;

# Final stage
FROM alpine:3.18.0

RUN apk --no-cache add \
    ca-certificates

COPY --from=binary /usr/bin/chirpstack /usr/bin/chirpstack
USER nobody:nogroup
ENTRYPOINT ["/usr/bin/chirpstack"]
