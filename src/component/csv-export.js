import React from 'react';
import * as Papa from 'papaparse';
import { saveAs } from 'file-saver';

const handleCSVExport = (data, transform) => () => {
    const blob = new Blob([Papa.unparse(transform(data))],
        {type: 'text/plain;charset=utf-8'});

    saveAs(blob, 'data.csv');
};

const CsvExport = ({data, transform}) =>
    <div className={'tool-bar-item export-csv'}>
        <button
            className={'button'} onClick={handleCSVExport(data, transform)}
        >
            Export CSV
        </button>
    </div>;

export default CsvExport;