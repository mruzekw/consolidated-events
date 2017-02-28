var rollup = require('rollup').rollup;
var babel = require('rollup-plugin-babel');

rollup({
  entry: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    })
  ]
}).then( function ( bundle ) {
  bundle.write({
    format: 'umd',
    dest: 'build/bundle.js',
    moduleName: 'ConsolidatedEvents'
  });
});;
