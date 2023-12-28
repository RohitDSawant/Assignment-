import React from "react";
import { Box } from "@mui/material";
import UsersTable from "../Components/UsersTable";
import styles from "./../CSS/Home.module.css";

const LandingPage = () => {
  return (
    <>
      <section id={styles.home_sec}>
        <Box
          sx={{
            width: "100%",
            m: "20px 0",
          }}
        >
          <h3 style={{ textAlign: "center", fontSize: "x-large" }}>
            Users data:
          </h3>
        </Box>
        <Box sx={{ width: "95%", margin: "auto" }}>
          <UsersTable />
        </Box>
      </section>
    </>
  );
};

export default LandingPage;
