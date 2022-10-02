import React from 'react';
import MaterialTable from 'material-table';
import api from './axios'

class EditableCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Nome', field: 'nome' },
                {
                    title: 'Tipo',
                    field: 'tipo',
                    lookup: {
                        'Interno': 'Interno',
                        'Externo': 'Externo',
                    },
                },
                { title: 'Ativo', field: 'ativo', type: 'boolean' },
            ],
            data: [
            ]
        }
    }

    async getCursos() {
        try {
            const response = await api.get('/curso/listar/');
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
        try {
            if (!newData.nome) {
                alert('Nome é obrigatório!!!')
                return;
            }
            const response = await api.post('/curso/inserir/', newData);
            const data = [...this.state.data]
            data.push(newData);
            this.setState({ data });
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

    async onRowUpdate(newData, oldData) {
        try {
            const response = await api.put('/curso/atualizar/' + oldData._id, newData);
            const data = [...this.state.data]
            const index = data.indexOf(oldData);
            data[index] = newData;
            this.setState({ data });
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

    async onRowDelete(oldData) {
        try {
            const response = await api.delete('/curso/delete/' + oldData._id);
            const data = [...this.state.data]
            const index = data.indexOf(oldData);
            data.splice(index, 1);
            this.setState({ data });
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

    render() {
        return (
            <MaterialTable
                title="Curso"
                columns={this.state.columns}
                data={this.state.data}
                localization={{
                    body: {
                        addTooltip: 'Novo',
                        deleteTooltip: 'Remover',
                        editTooltip: 'Editar',
                        emptyDataSourceMessage: 'Nenhum registro na lista',
                        editRow: {
                            deleteText: 'Confirma remoção ?',
                            cancelTooltip: 'Cancelar',
                            saveTooltip: 'Salvar'
                        }
                    },
                    header: {
                        actions: 'Ações'
                    },
                    pagination: {
                        labelDisplayedRows: '{from}-{to} de {count}',
                        labelRowsSelect: 'registros',
                        labelRowsPerPage: 'Registros por página:',
                        firstAriaLabel: 'Primeira',
                        firstTooltip: 'Primeira',
                        previousAriaLabel: 'Anterior',
                        previousTooltip: 'Anterior',
                        nextAriaLabel: 'Próxima',
                        nextTooltip: 'Próxima',
                        lastAriaLabel: 'Última',
                        lastTooltip: 'Última'
                    },
                    toolbar: {
                        exportTitle: 'Exportar',
                        exportAriaLabel: 'Exportar',
                        exportName: 'Exportar CSV',
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar'
                    }
                }}
                options={{
                    exportButton: true
                }}
                editable={{
                    onRowAdd: newData => this.onRowAdd(newData),
                    onRowUpdate: (newData, oldData) => this.onRowUpdate(newData, oldData),
                    onRowDelete: oldData => this.onRowDelete(oldData),
                }}
            />
        )
    }
}

function Teste() {
    return (
        <div className="Curso">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <header className="App-header">
                <EditableCurso></EditableCurso>
            </header>
        </div>
    );
}

export default Teste;
