import { RouterProvider } from "react-router"
import { ROUTER } from "./routing/Router"

function App() {
  return (
    <>
      <RouterProvider router={ROUTER} />
    </>
  )
}

export default App