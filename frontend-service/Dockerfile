FROM oven/bun:1

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "run", "dev"] 
