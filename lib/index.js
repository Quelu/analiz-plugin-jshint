/**
 * JSHint module for Analiz
 * @type {Object}
 */
module.exports = {

  /**
   * Configuration of the module
   * @type {Object}
   */
  config: {

    /**
     * Name of the plugin
     * @type {Object}
     */
    name: {
      'en': 'JSHint',
      'fr': 'JSHint'
    },


    /**
     * The plugin category
     * @type {String}
     */
    category: 'js',


    /**
     * List of the files the module will analize
     * @type {Array}
     */
    fileTypes: [
      '.js'
    ],


    /**
     * Render type
     * @type {String}
     */
    renderType: 'errors',


    /**
     * Options of the plugin
     * Array of option Object
     *
     * @type {Array}
     */
    options: [{
      name: 'JSHint documentation',
      type: 'documentation-link',
      data: 'http://jshint.com/docs/options/'
    },{
      name: 'enforcing',
      type: 'separator',
      data: 'Enforcing options'
    },{
      name: 'bitwise',
      type: 'boolean',
      data: true
    }, {
      name: 'curly',
      type: 'boolean',
      data: true
    }, {
      name: 'eqeqeq',
      type: 'boolean',
      data: true
    }, {
      name: 'es3',
      type: 'boolean',
      data: false
    }, {
      name: 'es5',
      type: 'boolean',
      data: true
    }, {
      name: 'forin',
      type: 'boolean',
      data: true
    }, {
      name: 'freeze',
      type: 'boolean',
      data: true
    }, {
      name: 'funcscope',
      type: 'boolean',
      data: true
    }, {
      name: 'futurehostile',
      type: 'boolean',
      data: false
    }, {
      name: 'latedef',
      type: 'boolean',
      data: false
    }, {
      name: 'noarg',
      type: 'boolean',
      data: true
    }, {
      name: 'nocomma',
      type: 'boolean',
      data: false
    }, {
      name: 'nonbsp',
      type: 'boolean',
      data: true
    }, {
      name: 'nonew',
      type: 'boolean',
      data: false
    }, {
      name: 'shadow',
      type: 'boolean',
      data: false
    }, {
      name: 'singleGroups',
      type: 'boolean',
      data: false
    }, {
      name: 'strict',
      type: 'boolean',
      data: true
    }, {
      name: 'undef',
      type: 'boolean',
      data: true
    }, {
      name: 'unused',
      type: 'boolean',
      data: true
    }, {
      name: 'varstmt',
      type: 'boolean',
      data: false
    }, {
      name: 'relaxing',
      type: 'separator',
      data: 'Relaxing options'
    }, {
      name: 'asi',
      type: 'boolean',
      data: false
    },{
      name: 'boss',
      type: 'boolean',
      data: false
    }, {
      name: 'elision',
      type: 'boolean',
      data: false
    }, {
      name: 'eqnull',
      type: 'boolean',
      data: false
    }, {
      name: 'esnext',
      type: 'boolean',
      data: false
    }, {
      name: 'evil',
      type: 'boolean',
      data: false
    }, {
      name: 'expr',
      type: 'boolean',
      data: false
    }, {
      name: 'globalstrict',
      type: 'boolean',
      data: false
    },{
      name: 'lastsemic',
      type: 'boolean',
      data: false
    }, {
      name: 'loopfunc',
      type: 'boolean',
      data: false
    }, {
      name: 'moz',
      type: 'boolean',
      data: false
    }, {
      name: 'noyield',
      type: 'boolean',
      data: false
    }, {
      name: 'plusplus',
      type: 'boolean',
      data: false
    }, {
      name: 'proto',
      type: 'boolean',
      data: false
    }, {
      name: 'scripturl',
      type: 'boolean',
      data: false
    }, {
      name: 'supernew',
      type: 'boolean',
      data: false
    }, {
      name: 'validthis',
      type: 'boolean',
      data: false
    }, {
      name: 'withstmt',
      type: 'boolean',
      data: false
    }, {
      name: 'environments',
      type: 'separator',
      data: 'Environments'
    }, {
      name: 'browser',
      type: 'boolean',
      data: true
    }, {
      name: 'browserify',
      type: 'boolean',
      data: false
    }, {
      name: 'couch',
      type: 'boolean',
      data: false
    }, {
      name: 'devel',
      type: 'boolean',
      data: true
    }, {
      name: 'dojo',
      type: 'boolean',
      data: false
    }, {
      name: 'jasmine',
      type: 'boolean',
      data: false
    }, {
      name: 'jquery',
      type: 'boolean',
      data: false
    }, {
      name: 'mocha',
      type: 'boolean',
      data: true
    }, {
      name: 'module',
      type: 'boolean',
      data: false
    }, {
      name: 'mootools',
      type: 'boolean',
      data: false
    }, {
      name: 'node',
      type: 'boolean',
      data: false
    }, {
      name: 'nonstandard',
      type: 'boolean',
      data: false
    }, {
      name: 'phantom',
      type: 'boolean',
      data: false
    }, {
      name: 'prototypejs',
      type: 'boolean',
      data: false
    }, {
      name: 'qunit',
      type: 'boolean',
      data: false
    }, {
      name: 'rhino',
      type: 'boolean',
      data: false
    }, {
      name: 'shelljs',
      type: 'boolean',
      data: false
    }, {
      name: 'typed',
      type: 'boolean',
      data: false
    }, {
      name: 'worker',
      type: 'boolean',
      data: false
    }, {
      name: 'wsh',
      type: 'boolean',
      data: false
    }, {
      name: 'yui',
      type: 'boolean',
      data: false
    }]
  },


  /**
   * Analize asynchronously the files send by Analiz and return the results to callback
   * @param  {Array} files          An array of the files send by Analiz
   * @param  {Object} options       Options chosen by the user
   * @param  {Function} callback    Callback to call after analyzing each file
   */
  run: function ( files, options, callback ) {
    var jshint = require( 'jshint' );
    var fs = require( 'fs' );

    files.forEach(function( file ) {
      fs.readFile( file, { encoding: 'utf-8' }, function ( err, data ) {
        if ( err ) {
          callback( err, null );
        }

        jshint.JSHINT( data, options );

        var report = jshint.JSHINT.data();

        var errors = [];
        // Get errors
        report.errors.forEach( function( error ) {
          if ( error && error.line ) {
            errors.push( {
              type: 'error',
              message: error.reason,
              line: error.line,
              character: error.character
            } );
          }
        });

        // Get unused warnings
        if ( report.unused ) {
          report.unused.forEach( function( unused ) {
            if ( unused && unused.line ) {
              errors.push( {
                type: 'warning',
                message: 'Unused : ' + unused.name,
                line: unused.line,
                character: unused.character
              } );
            }
          });
        }

        var results = {
          file: file,
          data: errors
        };

        callback( null, results );
      } );
    });
  }
};
