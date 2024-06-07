const fs = require('fs');
const path = require('path');

// Function to recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
}

// Function to filter out only the React components
function filterReactComponents(files) {
  return files.filter(file => /\.(jsx|js)$/.test(file));
}

// Function to extract page URLs from React components
function extractPageUrls(reactComponents) {
  return reactComponents.map(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /<Route\s+path\s*=\s*["']([^"']+)["'][^>]*>/g;
    const matches = content.match(regex);
    return matches ? matches.map(match => match.match(/"([^"]+)"/)[1]) : [];
  }).flat();
}

// Your directory containing React components
const componentsDirectory = './src';

// Get all files in the components directory
const allFiles = getAllFiles(componentsDirectory);

// Filter out only the React components
const reactComponents = filterReactComponents(allFiles);

// Extract page URLs from the React components
const pageUrls = extractPageUrls(reactComponents);

// Modify package.json to include the generated routes
fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  const packageJson = JSON.parse(data);
  if (!packageJson.reactSnap) {
    packageJson.reactSnap = {};
  }
  packageJson.reactSnap.include = pageUrls;

  fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), 'utf8', err => {
    if (err) {
      console.error('Error writing package.json:', err);
      return;
    }
    console.log('Package.json updated with generated routes:', pageUrls);
  });
});
