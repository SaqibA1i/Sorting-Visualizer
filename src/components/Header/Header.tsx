import { FilterSquareFill, PlayCircle, StopCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { Sort, useAlg } from "../../Context/SortingContext";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { option, options } from "./options";

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
            searchBy: "algorithm",
            clearable: false,
            searchable: false,
            create: false,
            separator: false,
            forceOpen: false,
            handle: true,
            addPlaceholder: "+ click to add",
            labelField: "algorithm",
            valueField: "algorithm",
            color: "rgba(255,138,0,1) 70.2%",
            keepSelectedInList: true,
            closeOnSelect: false,
            dropdownPosition: "bottom",
            direction: "ltr",
            dropdownHeight: "300px"
        }
    );
    const { algorithm, setAlgo, setBars, bars } = useAlg();

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
                    onChange={(value: option[]) => { setAlgo(value[0]["algorithm"]); console.log(algorithm) }}
                />
            </nav>
            <nav className="header-footer">
                <div className="options">
                    <PlayCircle size="30" color="green" />
                    <StopCircle size="30" color="red" />
                    <Slider
                        min={20}
                        max={100}
                        onChange={(value: number) => { setBars(value) }}
                    />
                </div>
            </nav>
        </>
    )
}

export default Header;