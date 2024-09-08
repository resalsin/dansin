#!/usr/bin/env bash

EXTENSION_PATH=/var/www/html/extensions

# Clone extensions
BRANCH_TAG=REL1_39
git clone --depth=1 --branch "${BRANCH_TAG}" https://gerrit.wikimedia.org/r/mediawiki/extensions/DrawioEditor "${EXTENSION_PATH}"/DrawioEditor
git clone --depth=1 --branch "${BRANCH_TAG}" https://gerrit.wikimedia.org/r/mediawiki/extensions/CognitiveProcessDesigner "${EXTENSION_PATH}"/CognitiveProcessDesigner

# Clone Variables extension
git clone --depth=1 https://gerrit.wikimedia.org/r/mediawiki/extensions/Variables "${EXTENSION_PATH}"/Variables
