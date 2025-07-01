import { jobs } from '@/data/jobs'
import Link from 'next/link'

export default function JobDetails({ params }: { params: { id: string } }) {
    const job = jobs.find((j) => j.id === params.id)

    if (!job) return <p>Job not found.</p>

    return (
        <div className="p-8 space-y-4">
            <Link href="/" className="text-blue-600 underline hover:text-blue-800">
                ← Back to jobs
            </Link>

            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company} – {job.location}</p>
            <p className="mt-2">{job.description}</p>
        </div>
    )
}
