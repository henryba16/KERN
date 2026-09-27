import Navbar from "@/components/Navbar";
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <h2>Xin chào!</h2>
                <p>This is my first website.</p>

                <a href="/auth" className="btn">
                    Trải Nghiệm Ngay
                </a>
            </main>
        </>
    );
}