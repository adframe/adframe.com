import clsx from 'clsx'

function CompanyDetail({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function CompanyDetails({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <CompanyDetail name="Invoicing" invert={invert}>
          AdFrame BV
          <br />
          BE 0754 418 290
        </CompanyDetail>
      </li>
      <li>
        <CompanyDetail name="Contact" invert={invert}>
          Luchthavenstraat 8
          <br />
          8400, Oostende, Belgium
        </CompanyDetail>
      </li>
    </ul>
  )
}
