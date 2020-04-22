declare namespace cspnapi {
    function Signature( input: Buffer, subjectName: string ): Buffer;
    function VerifySig( input: Buffer ): Buffer;
    function VerifySigSubject( input: Buffer, subjectName: string ): Buffer;
}

export = cspnapi;