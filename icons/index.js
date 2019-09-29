const fs = require('fs');
const path = require('path');
const svgo = require('svgo');
const mkdirp = require('mkdirp');
const globule = require('globule');
const depot = require('./depot');
const filepaths = globule.find('./icons/svgs/*.svg');
let iconsMetadata = {};

const svgoInstance = new svgo({
    plugins: [{
        removeViewBox: false
    }]
});

function createFile(content) {
    try {
        const currentPath = path.normalize('./src/components/icon/icons.js');
        mkdirp.sync(path.dirname(currentPath));
        fs.writeFileSync(currentPath, content);
    } catch (err) {
        console.log('error createFile', err);
    }
}

let generate = (filepath, index) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) throw err;
        svgoInstance.optimize(data, { path: filepath }).then((result) => {
            let name = path.basename(filepath, '.svg');
            let metadata = depot({
                svg: result.data,
                name: name
            });
            iconsMetadata[name] = metadata;
            createFile(` // @ts-ignore \n module.exports = ${JSON.stringify(iconsMetadata)}`);
            console.log('agregando icono>>', name);
        });
    });
}

filepaths.forEach((item, index) => {
    generate(item, index);
});