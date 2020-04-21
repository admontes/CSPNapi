const binding = require('./build/Release/csplib.node');

exports.Signature = function( input, subjectName ) {
    return binding.Signature( input, subjectName );
}

exports.VerifySig = function( input ) {
    return binding.VerifySig( input );
}

