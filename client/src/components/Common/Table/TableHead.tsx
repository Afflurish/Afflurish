export type TableHeadHeadersProp = string[];

export interface TableHeadProps {
    headers: TableHeadHeadersProp
    className?: string,
};

function TableHead({ className="", headers }: TableHeadProps): JSX.Element {

    const renderHeaders = () => {
        const Headers = headers.map((header, index) => (
            <div className="table-cell px-4 py-3" key={`table-headers-${index}`}>
                <p>{header.toUpperCase()}</p>     
            </div>
        ));

        return Headers;
    };

    return(
        <div className={`table-header-group ${className}`}>
            <div className="table-row text-sm font-bold">
                {renderHeaders()}
            </div>
        </div>
    );
};

export default TableHead;