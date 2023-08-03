import { Fragment } from 'react'

function Table({ config, data, keyFn }) {
  const renderedHeaders = config.map(({ label, header }) => {
    if (header) return <Fragment key={label}>{header()}</Fragment>

    return (
      <th className="p-3" key={label}>
        <div className="flex items-center">{label}</div>
      </th>
    )
  })

  const renderedRows = data.map(rowData => (
    <tr className="border-b" key={keyFn(rowData)}>
      {config.map(column => (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}

export default Table
