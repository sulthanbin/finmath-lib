var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":99,"id":34665,"methods":[{"el":32,"sc":2,"sl":30},{"el":37,"sc":2,"sl":34},{"el":42,"sc":2,"sl":39},{"el":47,"sc":2,"sl":44},{"el":52,"sc":2,"sl":49},{"el":57,"sc":2,"sl":54},{"el":62,"sc":2,"sl":59},{"el":67,"sc":2,"sl":64},{"el":72,"sc":2,"sl":69},{"el":77,"sc":2,"sl":74},{"el":82,"sc":2,"sl":79},{"el":87,"sc":2,"sl":84},{"el":92,"sc":2,"sl":89},{"el":98,"sc":2,"sl":94}],"name":"RegularSchedule","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_113":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_116":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_122":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_124":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_132":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_146":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_158":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_165":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testZeroCMSSwap","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_180":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_185":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_216":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_219":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_227":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_240":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_243":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_256":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_262":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_27":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_272":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_273":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_274":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_279":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_28":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_282":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_285":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_287":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_295":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_313":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_32":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_320":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_325":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_341":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_346":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_351":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_354":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_367":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_372":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_383":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_385":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_394":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[CUBIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_396":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_415":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_430":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_439":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCMSOption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_445":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSingleCurveModel","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_447":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_452":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_456":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_460":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_462":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_475":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_477":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_501":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_522":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_525":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_528":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testFRA[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_541":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_557":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCap","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_564":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_581":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_586":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[TERMINAL]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_587":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testDigitalCaplet[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_61":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testMultiCurveModel","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_618":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwap[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_619":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[SPOT]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_620":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_71":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_72":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_74":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":69},{"sl":74},{"sl":79}],"name":"testCurvesAndCalibration[AKIMA]","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81}]},"test_86":{"methods":[{"sl":30},{"sl":34},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":31},{"sl":36},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]},"test_99":{"methods":[{"sl":30},{"sl":49},{"sl":59},{"sl":64},{"sl":79}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":31},{"sl":51},{"sl":61},{"sl":66},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [], [86, 430, 354, 74, 372, 180, 394], [], [86, 430, 354, 74, 372, 180, 394], [], [], [], [], [], [], [], [], [], [], [], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [], [], [], [], [], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [], [262, 28, 430, 216, 354, 74, 372, 180, 394], [], [262, 28, 430, 216, 354, 74, 372, 180, 394], [], [], [262, 28, 430, 216, 354, 74, 372, 180, 394], [], [262, 28, 430, 216, 354, 74, 372, 180, 394], [], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [320, 586, 295, 557, 113, 262, 282, 287, 564, 28, 274, 273, 86, 61, 165, 618, 620, 219, 116, 351, 462, 71, 452, 341, 541, 109, 430, 216, 285, 445, 367, 32, 346, 272, 313, 158, 122, 385, 240, 581, 475, 528, 415, 72, 619, 325, 354, 132, 439, 525, 383, 185, 146, 27, 460, 74, 124, 99, 372, 522, 447, 227, 456, 243, 501, 477, 180, 394, 279, 396, 256, 587], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]