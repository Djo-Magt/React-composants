import { Fragment } from 'react';


// fragment sert a envelloper un element(style th) par un element jsx pour pouvoir mettre une key 
// dans ce cas le header est deja un th donc on doit l'envelloper par fragment pour mettre une key

function Table({ data, config, keyFn }) {
    const renderedRow = data.map((rowData) => {
        const renderedColumn = config.map((column) => {
            return <td className="p-4" key={column.label}>{column.render(rowData)}</td>
        })

        return(
            <tr key={keyFn(rowData)} className="border-b">
                {renderedColumn}
            </tr>
        )
    });

    const renderedHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.label}>
                {column.header()}
            </Fragment>
        }else {
            return <th key={column.label}>{column.label}</th>
        }
    });

   return (
   <table className="table-auto border-spacing-2">
    <thead>
        <tr className="border-b-2">
            {renderedHeaders}
        </tr>
    </thead>
    <tbody>
        {renderedRow}
    </tbody>
   </table>
   );
};

export default Table