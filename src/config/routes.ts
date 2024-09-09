import Dashboard from '../pages/Dashboard';
import Courses from '../pages/Courses';
import IntroductionAdaIfThenElse from '../pages/IntroductionAda/IfThenElse';
import IntroductionAdaCase from '../pages/IntroductionAda/Case';
import IntroductionAdaConditional from '../pages/IntroductionAda/Conditional';
import IntroductionAdaDeclarative from '../pages/IntroductionAda/Declarative';
import IntroductionSparkAdaOverview from '../pages/IntroductionSparkAda/Overview';
import IntroductionSparkAdaFlowAnalysis from '../pages/IntroductionSparkAda/FlowAnalysis';
import IntroductionSparkAdaProofOfProgramIntegrity from '../pages/IntroductionSparkAda/ProofOfProgramIntegrity';
import RunAdaCode from '../pages/RunAdaCode';
import SparkAdaBasics from '../pages/SparkAdaBasics';
import GnatStudioGuide from '../pages/installation/gnatInstallation';

interface RouteConfig {
    path: string;
    component: React.ComponentType;
}

export const routes: RouteConfig[] = [
    { path: '/', component: Dashboard },
    { path: '/courses', component: Courses },
    { path: '/introduction-ada/if-then-else', component: IntroductionAdaIfThenElse },
    { path: '/introduction-ada/case', component: IntroductionAdaCase },
    { path: '/introduction-ada/conditional', component: IntroductionAdaConditional },
    { path: '/introduction-ada/declarative', component: IntroductionAdaDeclarative },
    { path: '/introduction-spark-ada/overview', component: IntroductionSparkAdaOverview },
    { path: '/introduction-spark-ada/flow-analysis', component: IntroductionSparkAdaFlowAnalysis },
    { path: '/introduction-spark-ada/proof-of-program-integrity', component: IntroductionSparkAdaProofOfProgramIntegrity },
    { path: '/run-ada-code', component: RunAdaCode },
    { path: '/spark-ada-basics', component: SparkAdaBasics },
    { path: '/gnat-studio-guide', component: GnatStudioGuide }
];
