import { Box } from "@mantine/core";
import { Outlet } from "react-router";

import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Box mih="80vh">
          <Outlet />
        </Box>
      </main>
      <Footer />
    </>
  );
}
