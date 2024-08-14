import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Overview: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">OVerview</h1>
            </main>
            <Footer />
        </div>
    );
}
export default Overview;