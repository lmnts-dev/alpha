#!/bin/sh
branch=$1

if [ "$branch" != "" ]; then
  git add . && git commit && git checkout staging && git merge staging master && git checkout master && git push origin $branch && git push origin staging && cd studio && sanity deploy && cd ../
  echo "✅ Deployment to branch successful: $branch, staging"
else
  git add . && git commit && git checkout staging && git merge staging master && git checkout master && git push origin master && git push origin staging && cd studio && sanity deploy && cd ../
  echo "✅ Deployment to branch successful: master, staging"
fi