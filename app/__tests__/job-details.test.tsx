import { render, screen } from '@testing-library/react'
import JobDetails from '@/jobs/[id]/page'

jest.mock('@/data/jobs', () => ({
    jobs: [
        {
            id: '1',
            title: 'Test Job',
            company: 'TestCo',
            location: 'Remote',
            description: 'A job for testing',
        }
    ]
}))

describe('JobDetails', () => {
    it('shows job details for a valid id', () => {
        render(<JobDetails params={{ id: '1' }} />)
        expect(screen.getByText('Test Job')).toBeInTheDocument()
        expect(screen.getByText('TestCo – Remote')).toBeInTheDocument()
        expect(screen.getByText('A job for testing')).toBeInTheDocument()
    })
})
