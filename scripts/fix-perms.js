// scripts/fix-perms.js
if (process.platform !== 'win32') {
    const { execSync } = require('child_process');
    try {
      execSync('chmod +x ./node_modules/.bin/*');
      console.log('✔ executables fixed');
    } catch (e) {
      console.log('(skip chmod) ' + e.message);
    }
  }
  