#!/bin/bash

echo "intalling new packages"
npm install

echo "building new pack"
npm run clean && npm run build

echo "uploading build"
scp -r dist/. deploy@api1.getgrover.com:/home/deploy/frontshop-new

echo "switching builds"
ssh deploy@api1.getgrover.com "rm -rf /home/deploy/frontshop-rollback"
ssh deploy@api1.getgrover.com "mv /home/deploy/frontshop /home/deploy/frontshop-rollback"
ssh deploy@api1.getgrover.com "mv /home/deploy/frontshop-new /home/deploy/frontshop"
