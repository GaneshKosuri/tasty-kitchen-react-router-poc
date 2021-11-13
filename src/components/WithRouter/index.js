import {useParams} from 'react-router-dom'

function WithRouter(WrappedComponent) {
  const params = useParams()
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      params={params}
      // etc...
    />
  )
}

// const WithRouter = WrappedComponent => {
//   const params = useParams()
//   // etc... other react-router-dom v6 hooks

//   return (
//     <WrappedComponent
//       params={params}
//       // etc...
//     />
//   )
// }

export default WithRouter
