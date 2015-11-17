#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'write-text-file.js'

# Provided a file path for input (I), a file path for output (O), 
# a string (S), and a string (T), read the contents of I, replacing 
# each occurrence of S with T and write the resulting information 
# to file O. You should replace O if it already exists.

function onetest () {
  I=${1}
  S=${2}
  T=${3}
  rm /tmp/o1
  cp ${I} /tmp/i1
  cat /tmp/i1 | sed -E s/${S}/${T}/g > /tmp/e1
  run_js_test "/tmp/i1 /tmp/o1 ${S} ${T}" ''
  DIFFOUT=$(diff -Z /tmp/o1 /tmp/e1)
  if [ "$?" -ne "0" ] ; then
    echo "Your output did not match the expected output."
    echo -n "<small><b>Your Output:</b></small><hr/>"
    cat /tmp/o1
    echo -n "<hr/><small><b>Expected Output:</b></small><hr/>"
    cat /tmp/e1
    exit 1
  fi
}

onetest /home/codio/workspace/content/textfiles/parrot.txt fungi Potang
onetest /home/codio/workspace/content/textfiles/empty.txt parrot chicken
onetest /home/codio/workspace/content/textfiles/parrot.txt parrot chicken

end_js_test
