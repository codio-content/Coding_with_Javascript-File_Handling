#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'variable-length.js'

function onetest () {
  P=${1}
  F=${2}
  L=${3}
  B=${4}
  cp ${P} /tmp/i1
  cat /tmp/i1 | sed -E "s/(${F}\s*)[\|](${L}\s*)[\|][0-9]{8}/\1|\2|${B}/" > /tmp/e1
  run_js_test "/tmp/i1 ${F} ${L} ${B}" ''
  DIFFOUT=$(diff -Z /tmp/i1 /tmp/e1)
  if [ "$?" -ne "0" ] ; then
    echo "Your output did not match the expected output."
    echo -n "<small><b>Your Output:</b></small><hr/>"
    cat /tmp/i1
    echo -n "<hr/><small><b>Expected Output:</b></small><hr/>"
    cat /tmp/e1
    exit 1
  fi  
}

onetest /home/codio/workspace/content/textfiles/pipe.txt Adam Smithers 00000000
onetest /home/codio/workspace/content/textfiles/poem.txt Adam Smith 11111111
onetest /home/codio/workspace/content/textfiles/pipe.txt Adam Smith 12121912


end_js_test
