#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'read-text-file.js'
run_js_test '../content/textfiles/parrot.txt parrot' '3'
run_js_test '../content/textfiles/empty.txt parrot' '0'
end_js_test