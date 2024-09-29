import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const IntroductionSparkAdaOverview = React.lazy(() => import('../pages/IntroductionSparkAda/Overview'));
const IntroductionSparkAdaFlowAnalysis = React.lazy(() => import('../pages/IntroductionSparkAda/FlowAnalysis'));
const IntroductionSparkAdaProofOfProgramIntegrity = React.lazy(() => import('../pages/IntroductionSparkAda/ProofOfProgramIntegrity'));
const RunAdaCode = React.lazy(() => import('../pages/RunAdaCode'));
const SparkAdaBasics = React.lazy(() => import('../pages/SparkAdaBasics'));
const GnatStudioGuide = React.lazy(() => import('../pages/installation/gnatInstallation'));
const GnatSparkAdaExe = React.lazy(() => import('../pages/gnatExe'));
const Imperative = React.lazy(() => import('../pages/CodePlayground'));
const Courses = React.lazy(() => import('../pages/Courses'));

interface RouteConfig {
    path: string;
    component: React.ComponentType;
}

export const routes: RouteConfig[] = [
    { path: '/', component: Courses },
    { path: '/introduction-ada/imperative', component: Imperative },
    { path: '/introduction-spark-ada/overview', component: IntroductionSparkAdaOverview },
    { path: '/introduction-spark-ada/flow-analysis', component: IntroductionSparkAdaFlowAnalysis },
    { path: '/introduction-spark-ada/proof-of-program-integrity', component: IntroductionSparkAdaProofOfProgramIntegrity },
    { path: '/run-ada-code', component: RunAdaCode },
    { path: '/spark-ada-basics', component: SparkAdaBasics },
    { path: '/gnat-studio-guide', component: GnatStudioGuide },
    { path: '/gnat-studio-exe-guide', component: GnatSparkAdaExe },
    { path: '/courses', component: Courses }

];
