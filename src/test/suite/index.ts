import * as path from 'path';
import Mocha from 'mocha';
import glob from 'glob';

export function run(): Promise<void> {
  // Create the Mocha test instance
  const mocha = new Mocha({
    ui: 'tdd', // Test-Driven Development style
    color: true, // Use colors in output
  });

  // Resolve the path to the test root
  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((resolve, reject) => {
    // Use glob to find all test files
    glob('**/*.test.js', { cwd: testsRoot }, (err, files) => {
      if (err) {
        // Handle any error encountered while finding test files
        return reject(err);
      }

      // Add each found file to Mocha's test suite
      files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

      try {
        // Run the Mocha tests
        mocha.run((failures) => {
          if (failures > 0) {
            // Reject the promise if there are test failures
            reject(new Error(`${failures} test(s) failed.`));
          } else {
            // Resolve the promise when all tests pass
            resolve();
          }
        });
      } catch (error) {
        // Log any errors and reject the promise
        console.error(error);
        reject(error);
      }
    });
  });
}
