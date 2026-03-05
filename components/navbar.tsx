import { Briefcase } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
            </div>
        </nav>
    )
}