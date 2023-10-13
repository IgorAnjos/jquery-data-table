//Primeira forma de inicializar o nosso Jquery DataTable
$("#primeiro").DataTable({
    info: false,
    //ordering: false,
    paging: false,
    //searching:false
});

if ($.fn.dataTable.isDataTable('#primeiro'))
$('#primeiro').DataTable().destroy();

$("#primeiro").DataTable({
    dom: 'Bfrti' //Bfrtip
});

async function carregarNomes(){
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v2/censos/nomes/");
    const nomes = await resposta.json();
    console.log(nomes);  

      $("#segundo").DataTable({
        "data": nomes,
        "pageLength": 5,
        'columns':[{
            'data': 'nome',
            'title': 'Nome Teste'
        },{
            'data': 'freq',
            'title': 'frequência',
        }]
      })  

}