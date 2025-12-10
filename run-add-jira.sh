pnpm allure run --config=./allurerc.mjs -- pnpm test

# if [ $? -ne 0 ]; then
#     echo "Tests failed. Exiting..."
#     exit 1
# fi


pnpm allure open --config=./allurerc.mjs