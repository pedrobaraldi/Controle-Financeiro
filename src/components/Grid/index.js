import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    };

    const exportCSV = () => {
        const headers = "Descrição,Valor,Data,Tipo\n";
        const rows = itens
            .map(item => `${item.desc},${item.amount},${item.date},${item.expense ? "Saída" : "Entrada"}`)
            .join("\n");

        const csvContent = headers + rows;
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "transacoes.csv");
    };

    const exportPDF = () => {
        const doc = new jsPDF();

        // Cabeçalho do PDF
        doc.setFontSize(18);
        doc.text("Relatório de Transações", 20, 20);

        // Dados da tabela
        const tableData = itens.map((item, index) => [
            index + 1,
            item.desc,
            formatCurrency(item.amount),
            formatDate(item.date),
            item.expense ? "Saída" : "Entrada",
        ]);

        // Criação da tabela no PDF
        autoTable(doc, {
            startY: 30,
            head: [["#", "Descrição", "Valor", "Data", "Tipo"]],
            body: tableData,
            theme: "striped",
            headStyles: { fillColor: [0, 122, 204] },
        });


        // Rodapé do PDF
        doc.setFontSize(10);
        doc.text("Gerado em: " + new Date().toLocaleDateString("pt-BR"), 20, doc.lastAutoTable.finalY + 10);

        doc.save("transacoes.pdf");
    };

    return (
        <div>
            <C.Table>
                <C.Thead>
                    <C.Tr>
                        <C.Th width={25}>Descrição</C.Th>
                        <C.Th width={25}>Valor</C.Th>
                        <C.Th width={20}>Data</C.Th>
                        <C.Th width={10} alignCenter>Tipo</C.Th>
                        <C.Th width={10}></C.Th>
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                    {itens?.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))}
                </C.Tbody>
            </C.Table>

            {/* Div para alinhar os botões à direita */}
            <C.ButtonContainer>
                <C.Button onClick={exportCSV}>Exportar CSV</C.Button>
                <C.Button onClick={exportPDF}>Exportar PDF</C.Button>
            </C.ButtonContainer>
        </div>
    );
};

export default Grid;