const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'users.json');

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            dbPath,
            (err, usersDB) => {
                if (err) {
                    console.log(err);
                    return;
                }

                resolve({...JSON.parse(usersDB.toString())});
            }
        );
    });
};

const writeData = (userNextId, usersData) => {
    fs.writeFile(
        dbPath,
        JSON.stringify({userNextId, usersData}),

        (err) => {
            if (err) throw err;
        }
    );
};

module.exports = {
    readData,
    writeData
};