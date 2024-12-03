import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScf-RlGIdFABJCt0OHI4zW1fcL0CFkN6X6Nw&s" alt="error" />
        {/* <h1>Oops!!!</h1>
        <h2>Something went wrong!!</h2> */}
        <h3>
            {err.status}:{err.statusText}
        </h3>
    </div>
  )
}

export default Error