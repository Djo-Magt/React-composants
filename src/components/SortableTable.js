import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import Table from "./Table"
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const { config, data } = props;
    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config);
    
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
        else{
            return {
                // ...column retourne toutes les key:value de l'objet dans ce nouvelle objet
                ...column,
                header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex item-center ">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                    </div>
                </th>
                ),
            }
        }
    });

    return (
        // ...props envoie toutes les props dans table en provenance du props qui est passé dans la fonction SortableTable (props sans les {} veut dire qu'on prend l'objet entier)
        // le config dans props est écrasé par le nouveau config
        <Table {...props} data={sortedData} config={updatedConfig}/>
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy){
        return (<div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
        )
    }
    if (sortOrder === null) {
        return (<div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
        )
    }
    else if (sortOrder === 'asc'){
        return (<div>
            <GoChevronUp />
        </div>
        )
        
    }
    else if (sortOrder === 'desc'){
        return  (<div>
            <GoChevronDown />
        </div>
        )
    }
}

export default SortableTable;