cd /home/codio/workspace/challenge1
cp ../data-read-escaped-test.csv data.csv
node ../read-escaped-test.js
CODE=$?
cp ../data-read-escaped-backup.csv data.csv
exit $CODE