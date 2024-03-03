import React from 'react'
import UpVoteIcon from '../assets/arrow-up.svg?react'
import '../App.css'

type IconProps = {
  variant?: 'default' | 'selected'
}

const Vote: React.FC<IconProps> = ({ variant = 'default' }) => {
  return <UpVoteIcon className={`icon icon-${variant}`} />
}

export default Vote
