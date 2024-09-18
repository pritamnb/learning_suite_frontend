import React, { Suspense } from 'react';

// Lazy loading components using React.lazy()
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const IntroductionAdaIfThenElse = React.lazy(() => import('../pages/IntroductionAda/IfThenElse'));
const IntroductionAdaCase = React.lazy(() => import('../pages/IntroductionAda/Case'));
const IntroductionAdaConditional = React.lazy(() => import('../pages/IntroductionAda/Conditional'));
const IntroductionAdaDeclarative = React.lazy(() => import('../pages/IntroductionAda/Declarative'));
const IntroductionSparkAdaOverview = React.lazy(() => import('../pages/IntroductionSparkAda/Overview'));
const IntroductionSparkAdaFlowAnalysis = React.lazy(() => import('../pages/IntroductionSparkAda/FlowAnalysis'));
const IntroductionSparkAdaProofOfProgramIntegrity = React.lazy(() => import('../pages/IntroductionSparkAda/ProofOfProgramIntegrity'));
const RunAdaCode = React.lazy(() => import('../pages/RunAdaCode'));
const SparkAdaBasics = React.lazy(() => import('../pages/SparkAdaBasics'));
const GnatStudioGuide = React.lazy(() => import('../pages/installation/gnatInstallation'));
const GnatSparkAdaExe = React.lazy(() => import('../pages/gnatExe'));

interface RouteConfig {
    path: string;
    component: React.ComponentType;
}

export const routes: RouteConfig[] = [
    { path: '/', component: Dashboard },
    { path: '/introduction-ada/if-then-else', component: IntroductionAdaIfThenElse },
    { path: '/introduction-ada/case', component: IntroductionAdaCase },
    { path: '/introduction-ada/conditional', component: IntroductionAdaConditional },
    { path: '/introduction-ada/declarative', component: IntroductionAdaDeclarative },
    { path: '/introduction-spark-ada/overview', component: IntroductionSparkAdaOverview },
    { path: '/introduction-spark-ada/flow-analysis', component: IntroductionSparkAdaFlowAnalysis },
    { path: '/introduction-spark-ada/proof-of-program-integrity', component: IntroductionSparkAdaProofOfProgramIntegrity },
    { path: '/run-ada-code', component: RunAdaCode },
    { path: '/spark-ada-basics', component: SparkAdaBasics },
    { path: '/gnat-studio-guide', component: GnatStudioGuide },
    { path: '/gnat-studio-exe-guide', component: GnatSparkAdaExe }

];
