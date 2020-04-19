{
  "targets": [
    {
      "target_name": "csplib",
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions", "-DUNIX", "-DHAVE_LIMITS_H", "-DHAVE_STDINT_H" ],
      "sources": [ "csplib.cc" ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "/opt/cprocsp/include",
        "/opt/cprocsp/include/cpcsp",
        "/opt/cprocsp/include/asn1c/rtsrc",
        "/opt/cprocsp/include/asn1data"
      ],
      "libraries": [
        "-L/opt/cprocsp/lib/amd64",
        "-lssp",
        "-lcapi10",
        "-lcapi20",
        "-lrdrsup",
        "-lpthread"
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    }
  ]
}
# gcc -DUNIX -DHAVE_LIMITS_H   -DHAVE_STDINT_H  -I/opt/cprocsp/include -I/opt/cprocsp/include/cpcsp -I/opt/cprocsp/include/asn1c/rtsrc -I/opt/cprocsp/include/asn1data -DSIZEOF_VOID_P=8 -fpic   -c -o test.o test.c
# g++  test.o  -L/opt/cprocsp/lib/amd64 -lssp -lcapi10 -lcapi20 -lrdrsup -lpthread  -o ../test