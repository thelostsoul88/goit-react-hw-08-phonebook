import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div className="border shadow-lg">
      <div className="flex justify-center pt-4 mt-28">
        <h1 className=" text-center font-semibold font-serif text-4xl text-zinc-500 max-w-3xl">
          Welcome to our Contacts Maker web app here you can create your
          phonebook to record and interact with it
        </h1>
      </div>
      <div className="flex justify-center mt-5 pb-40">
        <Link to={"/contacts"}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingRight: "80px",
                paddingLeft: "80px",
                fontSize: "20px",
              }}
            >
              Just Start
            </Button>
          </Stack>
        </Link>
      </div>
    </div>
  );
};
export default Home;
