import React, {useState} from 'react'

export const TableHeader = React.memo(({HandlerSort}) => {
  const [down, up] = ['arrow_drop_down', 'arrow_drop_up']
  const [select, setSelect] = useState('')
  const dbRowName = {
    'Tool name': 'name',
    'Used on': 'sites',
    'Type': 'type',
    'Status': 'status'
  }
  const initialHeaders = Object.keys(dbRowName)
    .reduce((a, h) => (
      {...a,
        [h]: {
          [up]: false,
          [down]: false
      }}), {})
  const [headers, setHeaders] = useState(initialHeaders)

  const HandlerArrows = (e) => {
    const name = e.target.dataset.name
    if (name) {
      const active = headers[name][up]
      ? {[up]: false, [down]: true}
      : {[up]: true, [down]: false}

      setSelect(name)
      setHeaders({
        ...initialHeaders,
        [name]: active
      })
      HandlerSort({key: dbRowName[name], flag: headers[name][up]})
    }
  }


  return (
    <div className="table-header">
      <div className="table-header__container" onClick={HandlerArrows}>
        {
          Object.keys(headers).map((name, i) =>
            <div
              key={i}
              className='table-header__item'
              data-name={name}>
              <span data-name={name}>{name}</span>
              <div
                data-name={name}
                className={`table-header__arrows ${name !== select ? 'opacity' : ''}`}>
                <span
                  data-name={name}
                  className={`material-icons ${headers[name][up] ? 'active' : ''} `}
                >{up}</span>
                <span
                  data-name={name}
                  className={`material-icons arrow ${headers[name][down] ? 'active' : ''} `}
                >{down}</span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
})
