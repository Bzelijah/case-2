FROM golang:1.17 as builder
WORKDIR /go/src/app
ENV GO111MODULE=on

# Cache dependencies
ADD go.mod .
ADD go.sum .
RUN go mod download

ADD main ./main
ADD configs ./configs
ADD internal ./internal

RUN go version
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o case-2 main/*

ADD init ./init

FROM alpine:3.11 as app
RUN apk add ca-certificates curl bash alpine-sdk

WORKDIR /app

COPY --from=builder /go/src/app/case-2 .
COPY --from=builder /go/src/app/init /app/init

ENTRYPOINT ["./сase-2"]
