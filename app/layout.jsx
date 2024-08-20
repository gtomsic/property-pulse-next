import "@/assets/styles/globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import AuthPvovider from "@/components/AuthPvovider"

export const metadata = {
    title: "Property Pulse",
    keywords: "rental, property, realstate",
    description: "Find the perfect rental property.",
}

const MainLayout = ({ children }) => {
    return (
        <AuthPvovider>
            <html>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthPvovider>
    )
}

export default MainLayout
