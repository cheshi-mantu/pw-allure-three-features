./clean-results.sh

pnpm allure run --config=./allurerc.mjs --rerun 3 -- pnpm test

pnpm allure generate --config=./allurerc.mjs

pnpm allure open --config=./allurerc.mjs