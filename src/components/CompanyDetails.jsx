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
        <CompanyDetail name="General Inquiries" invert={invert}>
          1 Carlsberg Gate
          <br />
          1260, København, Denmark
        </CompanyDetail>
      </li>
      <li>
        <CompanyDetail name="Copyright & Licensing" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Denmark
        </CompanyDetail>
      </li>
    </ul>
  )
}
