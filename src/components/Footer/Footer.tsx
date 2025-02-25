import { FC } from 'react'
import './Footer.css'

export const Footer: FC = () => {

  const socials =
    [{ name: 'Instagram', username: '@holapix' }, {
      name: 'Telegram',
      username: '@holapix'
    }, { name: 'Mail', username: 'holapix@gmail.com' }]

  return <div className={'footer'}>
    <div className={'container'}>
      <div className={'socials'}>
        {socials.map((social) => (
          <div className={'network'}>
            <p className={'title'}>{social.name}</p>
            <p className={'username'}>{social.username}</p>
          </div>
        ))}
      </div>
      <h2 className={'logoFooter'}>holapix</h2>
    </div>
  </div>
}