#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New deployment'
git push -f git@github.com:slekstut/e-commerce-product-page.git master:gh-pages

cd -