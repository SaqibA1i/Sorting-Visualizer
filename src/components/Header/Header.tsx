import { FilterSquareFill } from 'react-bootstrap-icons';
import { useEffect, useState } from "react";

import { options } from "./options";

import Select from "react-dropdown-select";

type Props = {

}

const Header: React.FC<Props> = () => {
    const [selectProps, setProps] = useState(
        {
            multi: false,
            disabled: false,
            loading: false,
            contentRenderer: false,
            dropdownRenderer: false,
            inputRenderer: false,
            itemRenderer: false,
            optionRenderer: false,
            noDataRenderer: false,
            selectValues: [],
            searchBy: "username",
            clearable: false,
            searchable: false,
            create: false,
            separator: false,
            forceOpen: false,
            handle: true,
            addPlaceholder: "+ click to add",
            labelField: "username",
            valueField: "email",
            color: "#0074D9",
            keepSelectedInList: true,
            closeOnSelect: false,
            dropdownPosition: "bottom",
            direction: "ltr",
            dropdownHeight: "300px"
        }
    );
    const [values, setDropVals] = useState({})

    return (
        <>
            <nav className="header-main">
                <div className="header-brand">
                    <FilterSquareFill size="30" color="#333" />
                    Sorting App
                </div>
                <Select
                    className="header-select"
                    name="ds"
                    placeholder="Select Algorithm"
                    addPlaceholder={selectProps.addPlaceholder}
                    color={selectProps.color}
                    disabled={selectProps.disabled}
                    loading={selectProps.loading}
                    searchBy={selectProps.searchBy}
                    separator={selectProps.separator}
                    clearable={selectProps.clearable}
                    searchable={selectProps.searchable}
                    create={selectProps.create}
                    keepOpen={selectProps.forceOpen}
                    dropdownHandle={selectProps.handle}
                    dropdownHeight={selectProps.dropdownHeight}
                    values={[]}
                    multi={selectProps.multi}
                    labelField={selectProps.labelField}
                    valueField={selectProps.valueField}
                    options={options}
                    dropdownGap={5}
                    onDropdownOpen={() => undefined}
                    onDropdownClose={() => undefined}
                    onClearAll={() => undefined}
                    onSelectAll={() => undefined}
                    onChange={(value) => { setDropVals(value) }}
                />
            </nav>
        </>
    )
}

export default Header;