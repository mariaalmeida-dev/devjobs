import Link from 'next/link'
import { jobs } from './data/jobs'

export default function HomePage() {
    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Available Jobs</h1>
            <ul className="space-y-4">
                {jobs.map((job) => (
                    <li key={job.id} className="p-4 border rounded shadow bg-white">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <p className="text-gray-600">{job.company} – {job.location}</p>
                        <p className="mt-2">{job.description}</p>
                        <Link
                            href={`/jobs/${job.id}`}
                            className="text-blue-600 underline mt-2 inline-block"
                        >
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
