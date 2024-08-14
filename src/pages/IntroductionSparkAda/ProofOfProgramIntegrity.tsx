import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ProofProgramIntegrity: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">Proof of Program integrity</h1>
            </main>
            <Footer />
        </div>
    );
}
export default ProofProgramIntegrity;