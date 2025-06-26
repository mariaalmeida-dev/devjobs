import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';

export default function JobDetails({ params }: { params: { id: string } }) {
    const job = jobs.find((j) => j.id === params.id)

    if (!job) return notFound()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company} – {job.location}</p>
            <p className="mt-4">{job.description}</p>
        </div>
    )
}
