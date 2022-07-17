import React from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const mockData = [
    {
        id: 1,
        name: "gmccrum0",
        email: "nocullen0@zdnet.com",
        createdAt: "4/16/2022",
        img: "http://dummyimage.com/233x100.png/ff4444/ffffff",
    },
    {
        id: 2,
        name: "epetruskevich1",
        email: "jpetken1@angelfire.com",
        createdAt: "3/18/2022",
        img: "http://dummyimage.com/217x100.png/dddddd/000000",
    },
    {
        id: 3,
        name: "tgosnell2",
        email: "clinsey2@mysql.com",
        createdAt: "5/31/2022",
        img: "http://dummyimage.com/246x100.png/ff4444/ffffff",
    },
    {
        id: 4,
        name: "gmcgilleghole3",
        email: "acaneo3@discovery.com",
        createdAt: "5/24/2022",
        img: "http://dummyimage.com/210x100.png/dddddd/000000",
    },
    {
        id: 5,
        name: "cabdon4",
        email: "etufts4@mysql.com",
        createdAt: "12/6/2021",
        img: "http://dummyimage.com/234x100.png/dddddd/000000",
    },
];

const data = [
    {
        name: "1",
        uv: 4000,
    },
    {
        name: "2",
        uv: 3000,
    },
    {
        name: "3",
        uv: 2000,
    },
    {
        name: "4",
        uv: 2780,
    },
    {
        name: "5",
        uv: 1890,
    },
    {
        name: "6",
        uv: 2390,
    },
    {
        name: "7",
        uv: 3490,
    },
];
export const Table = ({ type }) => {
    return (
        <div>
            <p className="text-2xl font-bold ml-80 -mb-5 mt-3">
                {type === "user" ? "User" : "Statistic"}
            </p>
            <br />
            <div className="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400 mx-80"></div>
            </div>
            <div className="max-w-2xl mx-auto">
                {type === "user" ? (
                    <ul
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                        {mockData.map((obj, i) => (
                            <li className="py-3 sm:py-4 bg-gray-100 px-3 rounded-md shadow-lg mb-5">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src={obj.img}
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {obj.name}
                                        </p>
                                        <p className="text-sm text-blue-600 truncate dark:text-gray-200">
                                            {obj.email}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Joined on {obj.createdAt}
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button>
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png"
                                                alt="remove"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        <p className="text-2xl">User</p>
                        <div>
                            <BarChart width={730} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </div>
                        <p className="text-2xl">Post</p>
                        <div>
                            <BarChart width={730} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
