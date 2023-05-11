export type TableData = string | number | JSX.Element;

export interface TableRowProps {
    data: TableData[][]
};

function TableRows({ data }: TableRowProps): JSX.Element {

    const renderRow = (rowData: TableData[]) => {
        const Row = rowData.map((row, index) => {
            return(
                <div className="table-cell py-3 px-4 border-b-2 border-neutral-600" key={`table-row-${index}`}>
                    {
                        typeof row === "object" ?
                        row :
                        <p>{row}</p>
                    }
                </div>
            );
        });

        return Row;
    };
    
    const renderTableRows = () => {
        const Rows = data.map((row, index) => (
            <div className={`table-row text-sm ${index % 2 === 0 ? `bg-neutral-800` : ""}`} key={`table-rows-${index}`}>
                {renderRow(row)}
            </div>
        ));

        return Rows;
    };

    return(
        <div className="table-row-group">
            {renderTableRows()}
        </div>
    );
};

export default TableRows;