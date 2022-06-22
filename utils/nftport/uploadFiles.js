const FormData = require('form-data');
const fetch = require('node-fetch');
const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");
const { token } = require('./secret');

fs.readFileSync(`${basePath}/build/images`).forEach((file) => {
    const formData = new FormData();
    const fileStream = fs.createReadStream(`${basePath}/build/images/${file}`);
    formData.append('file', fileStream);
    let url = 'https://api.nftport.xyz/v0/files';

    let options = {
        method: 'POST',
        headers: {
            Authorization: token
        }
    };

    options.body = formData;

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})



