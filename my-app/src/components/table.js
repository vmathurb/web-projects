import React from "react";
import { makeData } from "../utils.js";
import _ from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
    {
        Header: "First Name",
        accessor: "firstName"
    },
    {
        Header: "Last Name",
        id: "lastName",
        accessor: d => d.lastName
    },
    {
        Header: "Age",
        accessor: "age",
        aggregate: vals => _.round(_.mean(vals)),
        Aggregated: row => {
            return (
                <span>
                    {row.value} (avg)
            </span>
            );
        },
        filterMethod: (filter, row) =>
            filter.value === `${row[filter.id]} (avg)`
    },
    {
        Header: "Visits",
        accessor: "visits",
        aggregate: vals => _.sum(vals),
        filterable: false
    }
];

export default class SimpleTable extends React.Component {

    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={100}
                    pivotBy={["firstName"]}
                    filterable
                    style={{
                        height: "500px" // This will force the table body to overflow and scroll, since there is not enough room
                    }} />
                <br />
            </div>
        );
    }
}