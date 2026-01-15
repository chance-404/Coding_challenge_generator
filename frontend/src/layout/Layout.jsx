import "react"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import {Outlet, Link, Navigate} from "react-router-dom"

export function Layout() {
    
    return<div className="app-layout">
        <header className="app-header">
            <div className="header-content">
                <h1>Code Challenge Generator</h1>
                <nav>
                    <SignedIn>
                        <Link to="/">Generate Challenge</Link>
                        <Link to="/history">History</Link>
                        <UserButton/>
                    </SignedIn>
                </nav>
            </div>
        </header>

        <main className="app-main">
            <SignedOut>
                <Navigate to="/sign-in" replace/> // navigates to sign-in page in current tab 
            </SignedOut>
            
            <SignedIn>
            {/* 
            "<Outlet />" pulls routes from element "Layout" in App.jsx
            <Route element={<Layout />}>
                <Route path="/" element={<ChallengeGenerator />} />
                <Route path="/history" element={<HistoryPanel />} />
            </Route> 
            */}
                <Outlet />
            </SignedIn>
        </main>
    </div>
}