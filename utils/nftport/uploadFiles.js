const FormData = require('form-data');
const fetch = require('node-fetch');
const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");
const path = require("path");
var secrets = require('./secret.json');

fs.readdirSync(`${basePath}/build/images`).forEach((file) => {
    const formData = new FormData();
    const fileStream = fs.createReadStream(`${basePath}/build/images/${file}`);
    formData.append('file', fileStream);
    let url = 'https://api.nftport.xyz/v0/files';

    let options = {
        method: 'POST',
        headers: {
            Authorization: secrets.token
        },
        body: formData
    };

    options.body = formData;

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            const fileName = path.parse(json.file_name).name;
            let rawdata = fs.readFileSync(`${basePath}/build/json/${fileName}.json`);
            let metaData = JSON.parse(rawdata);
            metaData.file_url = json.ipfs_url;
            fs.writeFileSync(`${basePath}/build/json/${fileName}.json`, JSON.stringify(metaData, null, 2));
            console.log(`Uploaded ${json.file_name} | Updated ${fileName}.json`)
        })
        .catch(err => console.error('error:' + err));
})



