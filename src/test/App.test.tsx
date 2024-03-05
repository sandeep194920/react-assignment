import App from '../App'
import { render, screen } from './utils/test-utils'

describe('Home page test', () => {
  it('checking reset button exists', () => {
    render(<App />)
    const btnText = screen.getByText('Reset App State')
    expect(btnText).toBeInTheDocument()
  })
})
