declare namespace cspnapi {
    function Signature( input: Buffer, subjectName: string ): Buffer;
    function VerifySig( input: Buffer ): Buffer;
}

export = cspnapi;