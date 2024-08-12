import React from "react";
import Table from "../../Components/Table/Table";

type Props = {};

const data = [
    { id: 1, destination: "ოპერაციები", amount: "$5,000", date: "2024-01-10" },
    { id: 2, destination: "ბათუმის ბავშვთა თავშესაფარი", amount: "$3,500", date: "2024-02-14" },
    { id: 3, destination: "ქობულეთის ეტლების საწარმო", amount: "$7,200", date: "2024-03-22" },
    { id: 4, destination: "ქუთაისის რეაბილიტაციის ცენტრი", amount: "$2,800", date: "2024-04-18" },
    { id: 5, destination: "დახმარება ოჯახებისთვის საცხოვრებელით", amount: "$40,000", date: "2024-05-30" },
];

const tableConfig = [
    {
        label: "დანიშნულება",
        render: (item: any) => item.destination,
    },
    {
        label: "გადახდილი თანხა",
        render: (item: any) => item.amount,
    },
    {
        label: "თარიღი",
        render: (item: any) => item.date,
    },
];

const CharityPage = (props: Props) => {
    return (
        <div className="bg-gray-50 min-h-screen p-3">
            <div className="max-w-7xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">ქველმოქმედების ფონდის განაწილება</h1>
                    <p className="text-base text-gray-600">
                        დეტალური ანგარიში, თუ როგორ იქნა განაწილებული ქველმოქმედების ფონდი სხვადასხვა სექტორებში.
                    </p>
                </header>

                <div className="bg-white shadow-sm rounded-sm p-4">
                    <Table config={tableConfig} data={data} tableStyles={
                        {
                            containerPadding: "p-4 sm:p-6 xl:p-8",
                            tableMargin: "m-1",
                            headerPadding: "p-1",
                            rowPadding: "p-1",
                        }
                    } />
                </div>

                <footer className="mt-6 text-center text-gray-500">
                    <p>გმადლობთ თქვენი წვლილისთვის!</p>
                </footer>
            </div>
        </div>
    );
};

export default CharityPage;
