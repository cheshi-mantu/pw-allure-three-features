./clean-results.sh

pnpm allure run --config=./allurerc.mjs --rerun 3 -- pnpm test


pnpm allure open --config=./allurerc.mjs