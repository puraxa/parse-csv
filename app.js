async function get(){
    let response = await fetch('http://localhost:3500');
    let data = await response.json();
    console.log(data);
    showData(data);
}

function showData(data){
    let html = `
        <table>
            <tr>
    `;
    console.log(data[128]);
    for(let i = 0; i < data[0].length; i++){
        html += `<th>${data[0][i]}</th>`;
    }
    html += `
        </tr>
    `;
    for(let i = 1; i < data.length;i++){
        html += `<tr>`;
        for(let k = 0; k < data[i].length; k++){
            html += `<td>${data[i][k]}</td>`;
        }
        html += `</tr>`;
    }
    html += `</table>`;
    document.getElementsByTagName('body')[0].innerHTML = html;
}