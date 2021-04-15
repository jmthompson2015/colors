#! /bin/bash

export BASE=/Volumes/StorageDrive/jmthompson/git/colors

open ${BASE}/model/TestSuite.html

open ${BASE}/color-scheme/state/TestSuite.html
${BASE}/color-scheme/view/viewtest-suite.sh
${BASE}/color-scheme/container/viewtest-suite.sh

${BASE}/color-wheel/viewtest-suite.sh

open ${BASE}/css-named-colors/model/TestSuite.html
${BASE}/css-named-colors/view/viewtest-suite.sh

${BASE}/grays/viewtest-suite.sh
