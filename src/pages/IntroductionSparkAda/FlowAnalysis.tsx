import React from 'react';
import SparkAda from "../../components/shared/sparkAda";
import flowAnalysisData from "../../data/flowAnalysis";
import CollapsibleHint from '../../components/shared/CollapsibleHint';
const FlowAnalysis: React.FC = () => {
    return (
        <div className="mx-auto p-4 bg-slate-50">
            <main className="flex-grow">
                <h1 className='text-3xl'>Flow Analysis?</h1>
                <p>
                    In this section we present the flow analysis capability provided by the GNATprove tool,
                    a critical tool for using SPARK.
                </p>
                <h1 className='text-3xl'>What does flow analysis do?</h1>
                <p>
                    Flow analysis concentrates primarily on variables. It models how information flows through them
                    during a subprogram's execution, connecting the final values of variables to their initial values.
                    It analyzes global variables declared at library level, local variables, and formal parameters of subprograms.
                </p>
                <p>
                    Flow analysis is usually fast, roughly as fast as compilation. It detects various types of errors and
                    finds violations of some SPARK legality rules, such as the absence of aliasing and freedom of expressions from side-effects.
                </p>
                <p>
                    Flow analysis is sound: if it doesn't detect any errors of a type it's supposed to detect,
                    we know for sure there are no such errors.
                </p>
                <h1 className="text-2xl mb-4">{flowAnalysisData?.title}</h1>
                {flowAnalysisData?.sections?.map((section, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl mb-2">{section?.subTitle}</h2>
                        <p className="mb-4">{section?.description}</p>
                        {section?.hint && <CollapsibleHint hint={section?.hint} />}
                        <div>
                            <SparkAda files={section?.files} body="" buttonName="Examine" />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};
export default FlowAnalysis;
