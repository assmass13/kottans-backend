const fs = require('fs');

const filePath = 'counter.txt';

const changeFilePermissions = (filePath, permissions) => {
  fs.chmod(filePath, permissions, (err) => {
    if (err) throw err;
  });
};

const writeToFile = (filePath, content) => {
  fs.writeFile(filePath, content, (err) => {
    if (err) process.exit(1)
  })
};

const processFileContent = (filePath, data) => {
  const fileContent =  Number.parseInt(data);
  if (Number.isFinite(fileContent))
    writeToFile(filePath, fileContent + 1);
  else process.exit(1)
};

fs.access(filePath, error => {
  if (!error) {
    fs.readFile(filePath, (err, data) => {
      if (err) process.exit(1);
      else processFileContent(filePath, data)
    })
  }
  else {
    writeToFile(filePath, 1);
    changeFilePermissions(filePath, 0o777);
  }
});