import React from "react";
import Table from "../../Components/Table/Table";

type Props = {};

const data = [
    { id: 1, destination: "Operations", amount: "$5,000", date: "2024-01-10" },
    { id: 2, destination: "Batumi Kids Place", amount: "$3,500", date: "2024-02-14" },
    { id: 3, destination: "Kobuleti wheelchair enterprise", amount: "$7,200", date: "2024-03-22" },
    { id: 4, destination: "Kutaisi rehabilitation center", amount: "$2,800", date: "2024-04-18" },
    { id: 5, destination: "Help some families with Housing", amount: "$40,000", date: "2024-05-30" },
];

const tableConfig = [
    {
        label: "Destination",
        render: (item: any) => item.destination,
    },
    {
        label: "Amount Spent",
        render: (item: any) => item.amount,
    },
    {
        label: "Date",
        render: (item: any) => item.date,
    },
];

const CharityPage = (props: Props) => {
    return (
        <div className="bg-gray-50 min-h-screen p-3">
            <div className="max-w-7xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Charity Fund Distribution</h1>
                    <p className="text-base text-gray-600">
                        Detailed report on how charity funds have been distributed across various sectors.
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
                    <p>Thank you for your contributions!</p>
                </footer>
            </div>
        </div>
    );
};

export default CharityPage;
