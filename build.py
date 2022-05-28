import os

os.system("tsc --outdir ./dist/")

os.system("rollup ./dist/tests/test.js --file ./dist/bundle.js")    