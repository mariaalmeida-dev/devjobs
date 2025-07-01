import { render, screen } from '@testing-library/react'
import HomePage from '@/page'

jest.mock('@/data/jobs', () => ({
    jobs: [
        {
            id: '1',
            title: 'Mock Job',
            company: 'MockCompany',
            location: 'Remote',
            description: 'Mock job description',
        }
    ]
}))

describe('HomePage', () => {
    it('displays a list of jobs', () => {
        render(<HomePage />)
        expect(screen.getByText('Available Jobs')).toBeInTheDocument()
        expect(screen.getByText('Mock Job')).toBeInTheDocument()
        expect(screen.getByText('MockCompany – Remote')).toBeInTheDocument()
        expect(screen.getByText('Mock job description')).toBeInTheDocument()
    })
})
