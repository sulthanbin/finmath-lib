var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":159,"id":34694,"methods":[{"el":47,"sc":2,"sl":45},{"el":72,"sc":2,"sl":49},{"el":77,"sc":2,"sl":74},{"el":82,"sc":2,"sl":79},{"el":87,"sc":2,"sl":84},{"el":92,"sc":2,"sl":89},{"el":97,"sc":2,"sl":94},{"el":102,"sc":2,"sl":99},{"el":107,"sc":2,"sl":104},{"el":112,"sc":2,"sl":109},{"el":117,"sc":2,"sl":114},{"el":122,"sc":2,"sl":119},{"el":127,"sc":2,"sl":124},{"el":140,"sc":2,"sl":129},{"el":146,"sc":2,"sl":142},{"el":158,"sc":2,"sl":148}],"name":"ScheduleFromPeriods","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_114":{"methods":[{"sl":49},{"sl":89},{"sl":94},{"sl":119},{"sl":148}],"name":"testPeriodLength","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":96},{"sl":121},{"sl":150},{"sl":151},{"sl":152},{"sl":157}]},"test_117":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_119":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_143":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"c_testAccessPerformance","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_148":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_149":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":119}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":121}]},"test_168":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"a_cubeATM","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_186":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_199":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_218":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCalibration","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_220":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testMulti","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_237":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":119}],"name":"testSimplified","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":121}]},"test_243":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_25":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":119}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":121}]},"test_256":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_258":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_274":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_280":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_284":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_297":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testFixLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_299":{"methods":[{"sl":49},{"sl":79},{"sl":94},{"sl":148}],"name":"testScheduleGeneratorMetaData","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":81},{"sl":96},{"sl":150},{"sl":151},{"sl":152},{"sl":157}]},"test_3":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_31":{"methods":[{"sl":49},{"sl":84},{"sl":89},{"sl":94},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCDS","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":86},{"sl":91},{"sl":96},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_312":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testBasic","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_316":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"d_testAccessPerformanceOnNodes","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_318":{"methods":[{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":119}],"name":"testExpectation","pass":true,"statements":[{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":121}]},"test_323":{"methods":[{"sl":89},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testDepositValue","pass":true,"statements":[{"sl":91},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_364":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testFloatLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_370":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_371":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_395":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"testSingleSmile","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_398":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_455":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"a_cubeATM","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_461":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"testSwap","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_473":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_481":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104}],"name":"testTables","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106}]},"test_497":{"methods":[{"sl":49},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_525":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_54":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_541":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_554":{"methods":[{"sl":45},{"sl":49},{"sl":74},{"sl":84},{"sl":89},{"sl":94},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCalibration","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":86},{"sl":91},{"sl":96},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_555":{"methods":[{"sl":89},{"sl":104},{"sl":109},{"sl":119}],"name":"testEvaluationTime","pass":true,"statements":[{"sl":91},{"sl":106},{"sl":111},{"sl":121}]},"test_563":{"methods":[{"sl":49},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testFixLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_569":{"methods":[{"sl":49},{"sl":124}],"name":"testPeriodStartPeriodEnd","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":126}]},"test_58":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":119}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":121}]},"test_606":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_614":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_629":{"methods":[{"sl":89},{"sl":104},{"sl":109},{"sl":119}],"name":"testRateValueConsistency","pass":true,"statements":[{"sl":91},{"sl":106},{"sl":111},{"sl":121}]},"test_64":{"methods":[{"sl":49},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testFloatLeg","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_71":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]},"test_9":{"methods":[{"sl":49},{"sl":74},{"sl":89},{"sl":99},{"sl":104},{"sl":109},{"sl":114},{"sl":119}],"name":"testCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":55},{"sl":56},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":91},{"sl":101},{"sl":106},{"sl":111},{"sl":116},{"sl":121}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [312, 258, 370, 199, 220, 3, 218, 280, 554, 398], [312, 258, 370, 199, 220, 3, 218, 280, 554, 398], [], [], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [], [], [], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [], [], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [297, 497, 312, 569, 9, 258, 119, 143, 299, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 114, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 364, 455, 186, 256], [], [], [], [297, 312, 9, 258, 119, 274, 370, 199, 220, 58, 461, 614, 148, 117, 525, 64, 3, 71, 371, 541, 218, 280, 54, 554, 563, 284, 473, 606, 243, 398, 364, 256], [], [297, 312, 9, 258, 119, 274, 370, 199, 220, 58, 461, 614, 148, 117, 525, 64, 3, 71, 371, 541, 218, 280, 54, 554, 563, 284, 473, 606, 243, 398, 364, 256], [], [], [299, 64, 563], [], [299, 64, 563], [], [], [312, 258, 370, 199, 220, 64, 3, 218, 280, 554, 563, 31, 398], [], [312, 258, 370, 199, 220, 64, 3, 218, 280, 554, 563, 31, 398], [], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 114, 481, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 114, 481, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [], [312, 258, 299, 370, 199, 220, 114, 3, 218, 280, 554, 31, 398], [], [312, 258, 299, 370, 199, 220, 114, 3, 218, 280, 554, 31, 398], [], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 243, 398, 364, 318, 455, 186, 256], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 614, 148, 117, 525, 481, 64, 3, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 243, 398, 364, 318, 455, 186, 256], [], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 481, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 481, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [], [297, 312, 9, 258, 119, 274, 370, 149, 199, 220, 237, 323, 614, 117, 525, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 554, 563, 473, 606, 31, 243, 398, 555, 364, 318, 256], [], [297, 312, 9, 258, 119, 274, 370, 149, 199, 220, 237, 323, 614, 117, 525, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 554, 563, 473, 606, 31, 243, 398, 555, 364, 318, 256], [], [], [297, 312, 9, 258, 119, 274, 370, 199, 220, 323, 614, 117, 525, 64, 3, 71, 371, 541, 218, 280, 54, 554, 563, 473, 606, 31, 243, 398, 364, 256], [], [297, 312, 9, 258, 119, 274, 370, 199, 220, 323, 614, 117, 525, 64, 3, 71, 371, 541, 218, 280, 54, 554, 563, 473, 606, 31, 243, 398, 364, 256], [], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 114, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [297, 497, 312, 9, 258, 119, 143, 274, 168, 370, 149, 199, 395, 220, 58, 237, 461, 323, 614, 148, 117, 525, 114, 64, 3, 629, 25, 71, 371, 541, 218, 280, 54, 316, 554, 563, 284, 473, 606, 31, 243, 398, 555, 364, 318, 455, 186, 256], [], [], [569], [], [569], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [299, 114], [], [299, 114], [299, 114], [299, 114], [], [], [], [], [299, 114], [], []]