import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CareConnect</h1>
        <div>
          <Button
            variant="outlined"
            className="mr-2 text-white hover:bg-blue-700"
          >
            Login
          </Button>
          <Button
            variant="contained"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
