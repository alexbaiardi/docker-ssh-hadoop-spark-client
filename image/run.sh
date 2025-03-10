#!/bin/bash
set -exo
cd src/
jupyter nbconvert --execute --to notebook --inplace notebook.ipynb