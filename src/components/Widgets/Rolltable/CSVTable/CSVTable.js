import React, { Component } from "react"
import {
  getRandomEntry,
  getRandomEntries,
  selectEntry,
} from "../SelectionLogic"

export default class Rolltable extends Component {
  getHeaderElements = (tableName, data) => {
    const header_elements = []
    const header_class = "px-5 py-2 hover:bg-tertiary-400"
    const headers = data[0]

    for (const [index, header] of headers.entries()) {
      if (index === 0) {
        header_elements.push(
          <th
            key={index}
            onClick={() => getRandomEntries(tableName)}
            onKeyPress={() => getRandomEntries(tableName)}
            className={header_class}
          >
            {header}
          </th>
        )
      } else {
        header_elements.push(
          <th
            key={index}
            onClick={() => getRandomEntry(tableName, index)}
            onKeyPress={() => getRandomEntry(tableName, index)}
            className={header_class}
          >
            {header}
          </th>
        )
      }
    }
    return header_elements
  }

  getEntryElements = (tableName, data) => {
    const entries = data.slice(2)
    const prefixes = data[1]
    const entry_elements = []

    for (const [row_index, row_data] of entries.entries()) {
      let elements = []

      for (const [index, entry] of row_data.entries()) {
        elements.push(
          <td
            key={index}
            className="px-3 py-1 hover:bg-tertiary-400 hover:text-white"
            data-prefix={prefixes[index]}
            onClick={() => selectEntry(tableName, row_index, index)}
            onKeyPress={() => selectEntry(tableName, row_index, index)}
          >
            {entry}
          </td>
        )
      }
      entry_elements.push(
        <tr key={row_index} className="even:bg-tertiary-100">
          {elements}
        </tr>
      )
    }
    return entry_elements
  }

  render() {
    const { name, data } = this.props

    return (
      <table id={`rolltable-${name}`} className="w-full">
        <thead className="bg-tertiary-500 text-white text-bold cursor-pointer">
          {this.getHeaderElements(name, data)}
        </thead>
        <tbody>{this.getEntryElements(name, data)}</tbody>

        {/* <tbody>{entry_elements}</tbody> */}
      </table>
    )
  }
}
