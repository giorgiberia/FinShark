import React from "react";

type Config = {
  label: string;
  render: (item: any) => React.ReactNode;
};

type Props = {
  config: Config[];
  data: any[];
  tableStyles?: {
    containerPadding?: string;
    tableMargin?: string;
    headerPadding?: string;
    rowPadding?: string;
  };
};

const Table = ({ config, data, tableStyles }: Props) => {
  const {
    containerPadding = "p-4 sm:p-6 xl:p-8", // default padding for the container
    tableMargin = "m-5", // default margin for the table
    headerPadding = "p-4", // default padding for the header cells
    rowPadding = "p-3", // default padding for the row cells
  } = tableStyles || {};

  const renderedRows = data.map((company: any) => {
    return (
        <tr key={company.cik}>
          {config.map((val: any) => {
            return <td className={rowPadding}>{val.render(company)}</td>;
          })}
        </tr>
    );
  });

  const renderedHeaders = config.map((config: any) => {
    return (
        <th
            className={`${headerPadding} text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
            key={config.label}
        >
          {config.label}
        </th>
    );
  });

  return (
      <div className={`bg-white shadow rounded-lg ${containerPadding}`}>
        <table className={`min-w-full divide-y divide-gray-200 ${tableMargin}`}>
          <thead className="bg-gray-50">{renderedHeaders}</thead>
          <tbody>{renderedRows}</tbody>
        </table>
      </div>
  );
};

export default Table;
