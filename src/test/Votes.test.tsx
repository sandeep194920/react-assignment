import Votes from '../components/Votes'
import { render, screen, userEvent, waitFor } from './utils/test-utils'

describe('Votes Component Test', () => {
  it('Check if the up-vote is in default state before clicking', () => {
    render(<Votes voteID={0} />)
    const icon = screen.getByTestId('icon-0-0')
    const variant = icon.getAttribute('variant')
    expect(variant).toBe('default')
  })

  it('Check if the up-vote is in selected state after clicking', async () => {
    render(<Votes voteID={0} />)
    const icon = screen.getByTestId('icon-0-0')
    userEvent.click(icon)
    // takes some time to change the state after the click, hence awaiting it
    await waitFor(() => {
      expect(icon).toHaveAttribute('data-testid', 'icon-0-0')
      const variant = icon.getAttribute('variant')
      expect(variant).toBe('selected')
    })
  })
})
