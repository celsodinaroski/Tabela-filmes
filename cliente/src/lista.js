import React from "react";
import MaterialTable from "material-table";
import api from 'axios';

class EditableCurso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Filme 1", field: "filme1" },
        { title: "Filme 2", field: "filme2" },
        { title: "Filme 3", field: "filme3" },
        { title: "Filme 4", field: "filme4" },
        { title: "Filme 5", field: "filme5" },
        { title: "Filme 6", field: "filme6" },
        { title: "Filme 7", field: "filme7" },
        { title: "Filme 8", field: "filme8" },
        { title: "Filme 9", field: "filme9" },
        { title: "Filme 10", field: "filme10" }  
      ],
      data: [],
    };
  }

  async getCursos() {
    try {
        const response = await api.get('curso/listar');
        this.setState({ data: response.data })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    }
  }

  async componentWillMount() {
    this.getCursos()
  }

  async onRowAdd(newData) {
    console.log('erro')
    const response = await api.post('curso/inserir');
    this.setState({ data: response.data })
    const data = [...this.state.data];
    console.log(data)
    data.push(newData);
    this.setState({ data });
    console.log(data)

  }

  async onRowUpdate(newData, oldData) {
    const response = await api.post('curso/atualizar');
    this.setState({ data: response.data })
    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data[index] = newData;
    this.setState({ data });
  }

  async onRowDelete(oldData) {
    const response = await api.post('curso/remover');
    this.setState({ data: response.data })
    const data = [...this.state.data];
    const index = data.indexOf(oldData);
    data.splice(index, 1);
    this.setState({ data });
  }

  render() {
    return (
      <MaterialTable
        title="Lista de Filmes"
        columns={this.state.columns}
        data={this.state.data}
        localization={{
          body: {
            addTooltip: "Novo",
            deleteTooltip: "Remover",
            editTooltip: "Editar",
            emptyDataSourceMessage: "Nenhum registro na lista",
            editRow: {
              deleteText: "Confirma remoção ?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Salvar",
            },
          },
          header: {
            actions: "Ações",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "registros",
            labelRowsPerPage: "Registros por página:",
            firstAriaLabel: "Primeira",
            firstTooltip: "Primeira",
            previousAriaLabel: "Anterior",
            previousTooltip: "Anterior",
            nextAriaLabel: "Próxima",
            nextTooltip: "Próxima",
            lastAriaLabel: "Última",
            lastTooltip: "Última",
          },
          toolbar: {
            exportTitle: "Exportar",
            exportAriaLabel: "Exportar",
            exportName: "Exportar CSV",
            searchTooltip: "Pesquisar",
            searchPlaceholder: "Pesquisar",
          },
        }}
        options={{
          exportButton: true,
        }}
        editable={{
          onRowAdd: (newData) => this.onRowAdd(newData),
          onRowUpdate: (newData, oldData) => this.onRowUpdate(newData, oldData),
          onRowDelete: (oldData) => this.onRowDelete(oldData),
        }}
      />
    );
  }
}

function Lista() {
  return (
    <div className="Lista">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <header className="App-header">
        <EditableCurso></EditableCurso>
      </header>
    </div>
  );
}

export default Lista;