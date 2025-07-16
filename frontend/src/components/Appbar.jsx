export const Appbar = () => {
    const firstName = localStorage.getItem("firstName");

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                Payment App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    {firstName ? `Hello, ${firstName}` : "Hello"}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {firstName ? firstName[0] : "U"}
                    </div>
                </div>
            </div>
        </div>
    );
};
