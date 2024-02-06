npm run build
cp -r ./build/* ./../admin_ts_build
cd ./../admin_ts_build
git add .
git commit -m "$1 $(date)"
git push
cd ./../admin_ts