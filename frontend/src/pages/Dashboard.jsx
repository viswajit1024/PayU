import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Dashboard = () => {
    const [balance, setBalance] = useState("10,000"); // Default fallback balance

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/account/balance`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token") // assuming JWT
                    }
                });

                const fetchedBalance = response.data.balance;

                // Format the number like 10000 → "10,000"
                const formattedBalance = Number(fetchedBalance).toLocaleString();
                setBalance(formattedBalance);
            } catch (err) {
                console.error("Failed to fetch balance. Showing default value.", err);
                // Keep default "10,000"
            }
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};
