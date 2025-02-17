import { useState } from "react";

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

export default function PasswordInput({ password, setPassword }: PasswordInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <label className="font-bold">Heslo:</label>
            <div className="relative">
                <input
                    type={visible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                    placeholder="Zadejte heslo"
                />
                <button
                    type="button"
                    className="absolute right-2 top-2 text-sm"
                    onClick={() => setVisible(!visible)}
                >
                    {visible ? "🙂" : "🫣"}
                </button>
            </div>
        </div>
    );
}