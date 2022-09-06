function createTable() {
    const tableWrapper = document.getElementById("table-wrapper");

    const languages = [
        { language: "Python", year: 1991, rating: 9.1 },
        { language: "JavaScript", year: 1994, rating: 8.3 },
        { language: "C++", year: 1984, rating: 7.5 },
        { language: "Java", year: 1994, rating: (7.0).toFixed(1) },
        { language: "PHP", year: 1995, rating: (6.0).toFixed(1) },
    ];
    const tableHeaders = Object.keys(languages[0]);

    const table = document.createElement("table");
    const headerRow = table.insertRow();

    for(let header of tableHeaders) {
        const headerCell = document.createElement("th");
        const headerTextNode = document.createTextNode(header);
        
        headerCell.appendChild(headerTextNode);
        headerRow.appendChild(headerCell);
    }

    for(let language of languages) {
        const row = table.insertRow();

        Object.values(language).forEach(value => {
            const cell = row.insertCell();
            const textNode = document.createTextNode(value);

            cell.appendChild(textNode);
        });
    }

    tableWrapper.appendChild(table);
}

createTable();
